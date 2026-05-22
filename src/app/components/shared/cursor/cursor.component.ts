import {
  Component, OnDestroy, AfterViewInit,
  ElementRef, ViewChild, NgZone
} from '@angular/core';


@Component({
  selector: 'app-cursor',
  standalone: true,
  imports: [],
  templateUrl: './cursor.component.html',
})
export class CursorComponent implements AfterViewInit, OnDestroy {
  @ViewChild('canvas')   canvasRef!: ElementRef<HTMLCanvasElement>;
  @ViewChild('cursorEl') cursorRef!: ElementRef<HTMLDivElement>;

  constructor(private ngZone: NgZone) {}

  // ── Mouse state ──────────────────────────────────────────────────
  private mouseX = -400; private mouseY = -400;
  private lerpX  = -400; private lerpY  = -400;

  // ── Trail: ring-buffer of smoothed cursor positions ──────────────
  private readonly TRAIL_LEN = 80;
  private trail: Array<{ x: number; y: number }> =
    Array.from({ length: this.TRAIL_LEN }, () => ({ x: -400, y: -400 }));
  private trailHead = 0;           // index of newest point


  private hovering = false;
  private animId!: number;
  private ctx!: CanvasRenderingContext2D;

  private readonly TEAL   = '#7de8e4';
  private readonly TEAL2  = '#22c4c4';
  private readonly TEAL3  = '#b2f5f2';

  // ── Handlers ────────────────────────────────────────────────────
  private onMove = (e: MouseEvent) => {
    this.mouseX = e.clientX;
    this.mouseY = e.clientY;
  };
  private onEnter = () => { this.hovering = true;  };
  private onLeave = () => { this.hovering = false; };

  // ── Lifecycle ────────────────────────────────────────────────────
  ngAfterViewInit() {
    if ('ontouchstart' in window && navigator.maxTouchPoints > 0) return;

    this.ctx = this.canvasRef.nativeElement
      .getContext('2d', { alpha: true })!;
    this.resize();

    document.querySelectorAll('a,button,[role="button"],input,select,textarea')
      .forEach(el => {
        el.addEventListener('mouseenter', this.onEnter);
        el.addEventListener('mouseleave', this.onLeave);
      });

    window.addEventListener('mousemove', this.onMove);
    window.addEventListener('resize', () => this.resize());
    document.body.classList.add('no-cursor');

    this.ngZone.runOutsideAngular(() => {
      this.animId = requestAnimationFrame(() => this.loop());
    });
  }

  ngOnDestroy() {
    cancelAnimationFrame(this.animId);
    window.removeEventListener('mousemove', this.onMove);
    document.body.classList.remove('no-cursor');
  }

  private resize() {
    const c = this.canvasRef.nativeElement;
    c.width  = window.innerWidth;
    c.height = window.innerHeight;
  }

  // ── Main loop ────────────────────────────────────────────────────
  private loop() {
    const canvas = this.canvasRef.nativeElement;
    const ctx    = this.ctx;

    // ── 1. Smooth lerp (easing = 0.12 for premium feel) ────────────
    this.lerpX += (this.mouseX - this.lerpX) * 0.10;
    this.lerpY += (this.mouseY - this.lerpY) * 0.10;

    // ── 2. Push to trail ring-buffer ────────────────────────────────
    this.trailHead = (this.trailHead + 1) % this.TRAIL_LEN;
    this.trail[this.trailHead] = { x: this.lerpX, y: this.lerpY };

    // ── 3. Move cursor element via GPU transform ────────────────────
    const el = this.cursorRef.nativeElement;
    el.style.transform =
      `translate(${this.lerpX}px,${this.lerpY}px) translate(-50%,-50%)
       scale(${this.hovering ? 1.4 : 1})`;

    // ── 4. Clear canvas ─────────────────────────────────────────────
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // ── 5. Draw smooth contrail trail ──────────────────────────────
    this.drawTrail(ctx);

    this.animId = requestAnimationFrame(() => this.loop());
  }

  // ── Smooth contrail — airplane-style ─────────────────────────────
  private drawTrail(ctx: CanvasRenderingContext2D) {
    const n = this.TRAIL_LEN;

    // 1. Collect raw points newest → oldest
    const raw: Array<{ x: number; y: number }> = [];
    for (let i = 0; i < n; i++) {
      raw.push(this.trail[(this.trailHead - i + n) % n]);
    }
    if (raw.length < 4) return;
    if (!raw.some(p => p.x !== raw[0].x || p.y !== raw[0].y)) return;

    // 2. Apply 3× Gaussian-style smoothing pass over the trail points
    //    Each pass averages each point with its two neighbours.
    //    This removes all micro-jitter from fast mouse movement.
    let pts = raw;
    for (let pass = 0; pass < 3; pass++) {
      pts = pts.map((p, i) => {
        if (i === 0 || i === pts.length - 1) return p;
        return {
          x: pts[i - 1].x * 0.25 + p.x * 0.5 + pts[i + 1].x * 0.25,
          y: pts[i - 1].y * 0.25 + p.y * 0.5 + pts[i + 1].y * 0.25,
        };
      });
    }

    // 3. Build ONE perfectly smooth bezier path (midpoint technique).
    //    quadraticCurveTo through midpoints = zero kinks, airline-smooth.
    const buildPath = () => {
      ctx.beginPath();
      ctx.moveTo(pts[0].x, pts[0].y);
      for (let i = 1; i < pts.length - 1; i++) {
        const mx = (pts[i].x + pts[i + 1].x) * 0.5;
        const my = (pts[i].y + pts[i + 1].y) * 0.5;
        ctx.quadraticCurveTo(pts[i].x, pts[i].y, mx, my);
      }
      ctx.lineTo(pts[pts.length - 1].x, pts[pts.length - 1].y);
    };

    // 4. Gradient: tip → tail with very gradual fade
    const tail = pts[pts.length - 1];
    const makeGrad = (tipA: number, midA: number) => {
      const g = ctx.createLinearGradient(pts[0].x, pts[0].y, tail.x, tail.y);
      g.addColorStop(0.00, `rgba(210,250,248,${tipA})`);
      g.addColorStop(0.08, `rgba(178,245,242,${tipA * 0.9})`);
      g.addColorStop(0.25, `rgba(125,232,228,${midA})`);
      g.addColorStop(0.55, `rgba(34,196,196,${midA * 0.45})`);
      g.addColorStop(0.80, `rgba(15,158,158,${midA * 0.12})`);
      g.addColorStop(1.00, `rgba(10,94,94,0)`);
      return g;
    };

    // 5. Six layered passes — wide soft → narrow bright.
    //    Many thin layers = feathered natural edge like a real contrail.
    const layers = [
      { width: 28, tipA: 0.04, midA: 0.02, blur: 22 },   // outer atmosphere
      { width: 18, tipA: 0.07, midA: 0.03, blur: 16 },   // soft halo
      { width: 11, tipA: 0.13, midA: 0.06, blur: 10 },   // body
      { width:  6, tipA: 0.28, midA: 0.12, blur:  7 },   // inner body
      { width:  2.5, tipA: 0.70, midA: 0.28, blur: 4 },  // core
      { width:  1.0, tipA: 0.95, midA: 0.40, blur: 2 },  // bright spine
    ];

    for (const l of layers) {
      ctx.save();
      ctx.strokeStyle = makeGrad(l.tipA, l.midA);
      ctx.lineWidth   = l.width;
      ctx.lineCap     = 'round';
      ctx.lineJoin    = 'round';
      ctx.shadowColor = this.TEAL2;
      ctx.shadowBlur  = l.blur;
      buildPath();
      ctx.stroke();
      ctx.restore();
    }
  }
}
