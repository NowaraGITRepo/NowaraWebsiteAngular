import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { accordionData } from '../../../data/app.data';

interface FaqView {
  id: number;
  title: string;
  content: string;
}

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './faq.component.html',
  styles: [`
    :host {
      --ink: #14233d;
      --blue: #3D77BE; --violet: #8B5CF6; --pink: #F472B6; --orange: #FB923C;
      --ring: linear-gradient(115deg, #3D77BE, #8B5CF6 35%, #F472B6 68%, #FB923C 100%);
      font-family: 'Segoe UI Variable Display', 'Segoe UI', system-ui, -apple-system, 'Helvetica Neue', Arial, sans-serif;
      display: block;
    }

    /* ── Background ────────────────────────────────────────── */
    .fq-section {
      background:
        radial-gradient(900px 520px at 90% 0%,   rgba(61,119,190,.20),  transparent 62%),
        radial-gradient(800px 480px at 4% 30%,   rgba(139,92,246,.15),  transparent 62%),
        radial-gradient(800px 500px at 66% 106%, rgba(244,114,182,.16), transparent 62%),
        radial-gradient(600px 400px at 0% 100%,  rgba(251,146,60,.12),  transparent 62%),
        #f7f9fe;
    }
    .fq-aurora   { animation: fq-drift 22s ease-in-out infinite; }
    .fq-aurora-b { animation-duration: 30s; animation-direction: reverse; }
    .fq-grid {
      background-image: radial-gradient(rgba(20,35,61,.08) 1px, transparent 1px);
      background-size: 28px 28px;
      -webkit-mask-image: radial-gradient(ellipse 80% 70% at 50% 50%, #000 20%, transparent 78%);
              mask-image: radial-gradient(ellipse 80% 70% at 50% 50%, #000 20%, transparent 78%);
    }

    /* ── Pill ──────────────────────────────────────────────── */
    .fq-pill {
      display: inline-flex; align-items: center; gap: 10px; padding: 10px 26px; white-space: nowrap;
      font-size: 14px; font-weight: 600; letter-spacing: .02em; color: #475569;
      border: 1.5px solid transparent; border-radius: 9999px;
      background: linear-gradient(#fff, #fff) padding-box, var(--ring) border-box;
      box-shadow: 0 6px 28px rgba(139,92,246,.16);
    }
    .fq-twinkle { animation: fq-twinkle 3.2s ease-in-out infinite; }

    /* ── Left column ───────────────────────────────────────── */
    .fq-title { font-size: clamp(2.2rem, 4.2vw, 3.6rem); font-weight: 800; line-height: 1.06; letter-spacing: -.03em; color: var(--ink); }
    .fq-gradient-text {
      background: linear-gradient(100deg, #2F6FB8, #7C4DFF 35%, #E0489B 65%, #F97316 90%, #2F6FB8);
      background-size: 220% 100%; -webkit-background-clip: text; background-clip: text; color: transparent;
      animation: fq-slide 9s linear infinite;
    }

    .fq-contact {
      display: flex; align-items: center; gap: 18px; padding: 20px;
      border-radius: 24px; border: 1px solid rgba(20,35,61,.10);
      background: rgba(255,255,255,.75); backdrop-filter: blur(12px);
      box-shadow: 0 10px 28px rgba(20,35,61,.07);
      transition: transform .35s cubic-bezier(.2,.8,.2,1), box-shadow .35s ease, border-color .35s ease;
    }
    .fq-contact:hover { transform: translateY(-4px); border-color: rgba(139,92,246,.35); box-shadow: 0 20px 44px rgba(139,92,246,.18); }
    .fq-contact-icon {
      display: flex; width: 54px; height: 54px; flex-shrink: 0; align-items: center; justify-content: center;
      border-radius: 18px; background: linear-gradient(135deg, var(--blue), var(--violet) 60%, var(--pink));
      box-shadow: 0 10px 22px rgba(139,92,246,.35);
    }
    .fq-contact-arrow {
      display: flex; width: 30px; height: 30px; align-items: center; justify-content: center;
      border-radius: 9999px; color: var(--blue); background: #eef3fb;
      transition: background .3s ease, color .3s ease, transform .3s ease;
    }
    .fq-contact:hover .fq-contact-arrow { color: #fff; transform: translateX(3px); background: linear-gradient(135deg, var(--blue), var(--violet), var(--pink)); }

    .fq-stat-num   { font-size: 30px; font-weight: 800; letter-spacing: -.03em; color: var(--ink); font-variant-numeric: tabular-nums; margin: 0; }
    .fq-stat-label { font-size: 12.5px; font-weight: 600; color: #5a6577; margin-top: 2px; }
    .fq-stat-sep   { width: 1px; background: rgba(20,35,61,.15); }
    dl { margin: 0; }
    dd { margin: 0; }

    /* ── Search composer ───────────────────────────────────── */
    .fq-composer {
      position: relative; display: flex; align-items: center; gap: 12px; height: 58px; padding: 0 14px 0 20px;
      border-radius: 9999px; border: 1px solid rgba(20,35,61,.12);
      background: rgba(255,255,255,.8); backdrop-filter: blur(12px);
      box-shadow: 0 10px 28px rgba(20,35,61,.07);
      transition: box-shadow .3s ease;
    }
    .fq-composer-icon { color: #64748b; flex-shrink: 0; }
    .fq-input {
      flex: 1; min-width: 0; height: 100%; border: 0; outline: 0; background: transparent;
      font: inherit; font-size: 15px; color: var(--ink);
    }
    .fq-input::placeholder { color: #94a3b8; }
    .fq-input::-webkit-search-cancel-button { display: none; }
    .fq-clear {
      display: flex; width: 26px; height: 26px; align-items: center; justify-content: center; cursor: pointer;
      border: 0; border-radius: 9999px; color: #64748b; background: #eef3fb; transition: background .2s, color .2s;
    }
    .fq-clear:hover { background: var(--ink); color: #fff; }
    .fq-count {
      flex-shrink: 0; padding: 5px 12px; border-radius: 9999px;
      font-size: 12px; font-weight: 600; color: var(--blue); background: #eef3fb;
    }
    .fq-composer::before, .fq-item::before {
      content: ''; position: absolute; inset: 0; padding: 1.5px; border-radius: inherit; pointer-events: none;
      background: var(--ring); background-size: 300% 100%;
      -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
      -webkit-mask-composite: xor; mask-composite: exclude;
      opacity: 0; transition: opacity .35s ease;
    }
    .fq-composer:focus-within { box-shadow: 0 16px 40px rgba(139,92,246,.18); }
    .fq-composer:focus-within::before { opacity: 1; animation: fq-slide-pos 6s linear infinite; }

    /* ── Question card ─────────────────────────────────────── */
    .fq-item {
      position: relative; border-radius: 22px; border: 1px solid rgba(20,35,61,.10);
      background: rgba(255,255,255,.72); backdrop-filter: blur(10px);
      box-shadow: 0 6px 18px rgba(20,35,61,.05);
      transition: transform .3s cubic-bezier(.2,.8,.2,1), box-shadow .35s ease, border-color .3s ease, background .3s ease;
      animation: fq-rise .6s cubic-bezier(.2,.8,.2,1) both;
      animation-delay: calc(var(--i, 0) * 55ms);
    }
    .fq-item:hover { transform: translateY(-2px); border-color: rgba(139,92,246,.35); box-shadow: 0 14px 30px rgba(20,35,61,.09); }
    .fq-item.is-open {
      transform: none; border-color: transparent; background: #fff;
      box-shadow: 0 24px 50px rgba(139,92,246,.17), 0 8px 18px rgba(61,119,190,.12);
    }
    .fq-item.is-open::before { opacity: 1; animation: fq-slide-pos 8s linear infinite; }

    .fq-q {
      display: flex; width: 100%; align-items: center; gap: 16px; padding: 20px 22px; text-align: left; cursor: pointer;
      border: 0; background: transparent; font: inherit; color: var(--ink); border-radius: 22px;
    }
    .fq-q:focus-visible { outline: 3px solid rgba(139,92,246,.5); outline-offset: 2px; }
    .fq-q-text { flex: 1; font-size: 15.5px; font-weight: 600; line-height: 1.4; letter-spacing: -.005em; }

    /* "?" turns into a Copilot sparkle when open */
    .fq-mark {
      position: relative; display: flex; width: 36px; height: 36px; flex-shrink: 0; align-items: center; justify-content: center;
      border-radius: 12px; color: var(--blue); background: #eef3fb; font-weight: 800; font-size: 15px;
      transition: background .35s ease, color .35s ease, box-shadow .35s ease, transform .35s ease;
    }
    .fq-mark-q, .fq-mark-spark { position: absolute; transition: opacity .3s ease, transform .4s cubic-bezier(.2,.8,.2,1); }
    .fq-mark-spark { opacity: 0; transform: scale(.4) rotate(-40deg); }
    .is-open .fq-mark { color: #fff; background: linear-gradient(135deg, var(--blue), var(--violet) 55%, var(--pink)); box-shadow: 0 8px 18px rgba(139,92,246,.4); }
    .is-open .fq-mark-q { opacity: 0; transform: scale(.4); }
    .is-open .fq-mark-spark { opacity: 1; transform: none; }

    .fq-chev {
      display: flex; width: 30px; height: 30px; flex-shrink: 0; align-items: center; justify-content: center;
      border-radius: 9999px; color: #64748b; background: #f1f5f9;
      transition: transform .4s cubic-bezier(.2,.8,.2,1), background .3s ease, color .3s ease;
    }
    .fq-item:hover .fq-chev { background: #e6edf8; }
    .is-open .fq-chev { transform: rotate(135deg); color: #fff; background: var(--ink); }

    /* ── Answer (smooth height via grid rows) ──────────────── */
    .fq-a { display: grid; grid-template-rows: 0fr; transition: grid-template-rows .45s cubic-bezier(.2,.8,.2,1); }
    .is-open .fq-a { grid-template-rows: 1fr; }
    .fq-a-clip { min-height: 0; overflow: hidden; visibility: hidden; transition: visibility 0s linear .45s; }
    .is-open .fq-a-clip { visibility: visible; transition-delay: 0s; }
    .fq-a-body { display: flex; gap: 14px; padding: 2px 24px 24px 22px; }
    .fq-avatar {
      display: flex; width: 32px; height: 32px; flex-shrink: 0; align-items: center; justify-content: center;
      border-radius: 9999px; color: #fff; background: linear-gradient(135deg, var(--blue), var(--violet) 55%, var(--pink));
      margin-top: 2px;
    }
    .is-open .fq-avatar { animation: fq-pop .55s cubic-bezier(.2,.8,.2,1) .1s both; }
    .fq-a-text { margin: 0; max-width: 62ch; font-size: 14.5px; line-height: 1.75; color: #44506a; }
    .is-open .fq-a-text { animation: fq-wipe .9s ease-out .15s both; }
    .fq-more {
      display: inline-block; margin-top: 14px; padding-bottom: 2px; font-size: 13px; font-weight: 600; color: var(--blue);
      background: var(--ring) 0 100% / 0% 2px no-repeat; transition: background-size .35s ease, color .25s ease;
    }
    .fq-more:hover { background-size: 100% 2px; color: #5b3fd0; }

    /* ── Empty state ───────────────────────────────────────── */
    .fq-empty {
      padding: 40px 24px; text-align: center; border-radius: 22px;
      border: 1.5px dashed rgba(20,35,61,.2); background: rgba(255,255,255,.6);
    }
    .fq-btn-ghost, .fq-btn-solid {
      padding: 10px 20px; border-radius: 9999px; font: inherit; font-size: 13.5px; font-weight: 600; cursor: pointer;
      transition: transform .25s ease, box-shadow .25s ease, background .25s ease;
    }
    .fq-btn-ghost { color: var(--ink); background: #fff; border: 1px solid rgba(20,35,61,.2); }
    .fq-btn-ghost:hover { background: #f1f5f9; }
    .fq-btn-solid { color: #fff; border: 0; background: linear-gradient(135deg, var(--blue), var(--violet) 60%, var(--pink)); box-shadow: 0 8px 20px rgba(139,92,246,.3); }
    .fq-btn-solid:hover { transform: translateY(-2px); box-shadow: 0 14px 28px rgba(139,92,246,.4); }

    /* ── Keyframes ─────────────────────────────────────────── */
    @keyframes fq-drift    { 0%,100% { transform: translate(0,0); } 50% { transform: translate(30px,-24px); } }
    @keyframes fq-twinkle  { 0%,100% { transform: scale(1) rotate(0); } 50% { transform: scale(1.2) rotate(18deg); } }
    @keyframes fq-slide    { to { background-position: -220% 0; } }
    @keyframes fq-slide-pos{ to { background-position: -300% 0; } }
    @keyframes fq-rise     { from { opacity: 0; transform: translateY(18px); } to { opacity: 1; transform: none; } }
    @keyframes fq-pop      { from { opacity: 0; transform: scale(.3) rotate(-60deg); } to { opacity: 1; transform: none; } }
    @keyframes fq-wipe     { from { clip-path: inset(0 100% 0 0); opacity: .2; } to { clip-path: inset(0 0 0 0); opacity: 1; } }

    @media (prefers-reduced-motion: reduce) {
      .fq-aurora, .fq-twinkle, .fq-gradient-text, .fq-item, .fq-item::before, .fq-composer::before,
      .is-open .fq-avatar, .is-open .fq-a-text { animation: none !important; }
      .fq-a, .fq-item, .fq-chev, .fq-mark { transition: none; }
    }
  `],
})
export class FaqComponent {
  private all: FaqView[] = accordionData.map((it, id) => ({ id, title: it.title, content: it.content }));

  visible: FaqView[] = this.all;
  query = '';
  activeId: number | null = null;

  toggle(id: number) {
    this.activeId = this.activeId === id ? null : id;
  }

  onSearch(value: string) {
    this.query = value;
    const q = value.trim().toLowerCase();
    this.visible = q
      ? this.all.filter(i => i.title.toLowerCase().includes(q) || i.content.toLowerCase().includes(q))
      : this.all;
  }

  trackById = (_: number, item: FaqView) => item.id;
}