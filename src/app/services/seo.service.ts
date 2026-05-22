import { Injectable, inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class SeoService {
  private title = inject(Title);
  private meta = inject(Meta);
  private router = inject(Router);

  /** Set title + description + OG tags for the current page */
  setPage(pageTitle: string, description: string) {
    this.title.setTitle(pageTitle);

    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ property: 'og:title', content: pageTitle });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:site_name', content: 'Nowara Infotech' });

    const canonical = 'https://nowarainfo.com/' + this.router.url.replace(/^\//, '');
    this.meta.updateTag({ property: 'og:url', content: canonical });
    this.setCanonical(canonical);
  }

  private setCanonical(url: string) {
    if (typeof document === 'undefined') return;
    let link: HTMLLinkElement = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', url);
  }
}
