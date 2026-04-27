import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <nav class="flex items-center gap-2 text-sm text-white/70">
      <a routerLink="/" class="hover:text-white transition-colors">Home</a>
      <span *ngFor="let crumb of crumbs; let last = last" class="flex items-center gap-2">
        <span>/</span>
        <span [class.text-white]="last" [class.font-semibold]="last">{{ crumb }}</span>
      </span>
    </nav>
  `,
})
export class BreadcrumbComponent {
  @Input() crumbs: string[] = [];
}
