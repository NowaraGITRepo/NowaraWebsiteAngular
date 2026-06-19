import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

export interface SeoData {
  title:        string;
  description:  string;
  keywords?:    string;
  ogImage?:     string;   // path starting with /
  canonical?:   string;
  robots?:      string;   // full URL override
}

@Injectable({ providedIn: 'root' })
export class SeoService {
  private metaSv  = inject(Meta);
  private titleSv = inject(Title);
  private doc     = inject(DOCUMENT);

  static readonly BASE     = 'https://nowarainfotech.com';
  static readonly SITE     = 'Nowara Infotech';
  static readonly DEF_IMG  = '/images/logo/cropped-logofooter.webp';
  static readonly DEF_DESC = 'Nowara Infotech - Certified Microsoft Dynamics 365 ERP Partner delivering Business Central, F&O, CRM, LS Central, Power BI and Cloud across UAE & India.';

  update(data: SeoData, routePath = '') {
    const pageUrl = routePath
      ? `${SeoService.BASE}/${routePath.replace(/^\//, '')}`
      : SeoService.BASE;
    const img    = `${SeoService.BASE}${data.ogImage || SeoService.DEF_IMG}`;
    const canon  = data.canonical || pageUrl;

    // â”€â”€ Title â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    this.titleSv.setTitle(data.title);

    // â”€â”€ Standard â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    this.metaSv.updateTag({ name: 'description', content: data.description });
    this.metaSv.updateTag({ name: 'robots', content: data.robots ?? 'index, follow' });
    if (data.keywords) {
      this.metaSv.updateTag({ name: 'keywords',  content: data.keywords    });
    }

    // â”€â”€ Open Graph â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    this.metaSv.updateTag({ property: 'og:type',        content: 'website'           });
    this.metaSv.updateTag({ property: 'og:site_name',   content: SeoService.SITE     });
    this.metaSv.updateTag({ property: 'og:title',       content: data.title          });
    this.metaSv.updateTag({ property: 'og:description', content: data.description    });
    this.metaSv.updateTag({ property: 'og:image',       content: img                 });
    this.metaSv.updateTag({ property: 'og:url',         content: pageUrl             });

    // â”€â”€ Twitter Card â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    this.metaSv.updateTag({ name: 'twitter:card',        content: 'summary_large_image' });
    this.metaSv.updateTag({ name: 'twitter:title',       content: data.title            });
    this.metaSv.updateTag({ name: 'twitter:description', content: data.description      });
    this.metaSv.updateTag({ name: 'twitter:image',       content: img                   });

    // â”€â”€ Canonical â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    let link = this.doc.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = this.doc.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.doc.head.appendChild(link);
    }
    link.setAttribute('href', canon);

    
  }

  /** Legacy shim â€” used by existing page components */
  setPage(title: string, description: string, keywords = '', path = '') {
    this.update({ title, description,keywords  }, path);
  }
}
