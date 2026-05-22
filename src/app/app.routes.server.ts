import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  // Dynamic routes — rendered client-side (params unknown at build time)
  { path: 'blog/:slug', renderMode: RenderMode.Client },
  { path: 'blog-details/:id', renderMode: RenderMode.Client },
  { path: 'case-study-details/:id', renderMode: RenderMode.Client },
  // All other routes — prerendered as static HTML
  { path: '**', renderMode: RenderMode.Prerender },
];
