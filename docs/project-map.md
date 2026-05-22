# Project Map

This file is the quick-reference map for `NowaraWebsiteAngular`.

Use it as the first stop before scanning the repo. It is not a replacement for code-level verification, but it should keep future work focused on the right files quickly.

## 1. Project shape

- Framework: Angular 21 standalone components
- Styling: SCSS + Tailwind
- Router style: lazy `loadComponent()` routes in `src/app/app.routes.ts`
- Public assets: `public/`
- Main source root: `src/`

## 2. Boot flow

Entry chain:

1. `src/main.ts`
2. `src/app/app.config.ts`
3. `src/app/app.ts`
4. `src/app/app.routes.ts`

App shell:

- `src/app/app.ts` renders global layout
- Header: `src/app/components/layout/header/`
- Footer: `src/app/components/layout/footer/`
- Global scroll button: `src/app/components/shared/scroll-to-top/`
- AOS animation is initialized in `App.ngOnInit()`

## 3. High-value files

These are the files most likely to matter for common work:

- Routing: `src/app/app.routes.ts`
- Global providers: `src/app/app.config.ts`
- Global shell/layout: `src/app/app.ts`
- Navigation data: `src/app/data/menu.data.ts`
- Home page shared data: `src/app/data/app.data.ts`
- Contact sending logic: `src/app/components/shared/contact-form/contact-form.component.ts`
- SEO helper: `src/app/services/seo.service.ts`
- Email helper: `src/app/services/email.service.ts`
- Global styles: `src/styles.scss`
- Angular build config: `angular.json`

## 4. Route map

### Core pages

- `/` -> `src/app/pages/home/home.component.ts`
- `/about-nowara-infotech` -> `src/app/pages/about/about.component.ts`
- `/contact-us` -> `src/app/pages/contact/contact.component.ts`
- `/career` -> `src/app/pages/career/career.component.ts`
- `/faqs` -> `src/app/pages/faq-page/faq-page.component.ts`
- `**` -> `src/app/pages/not-found/not-found.component.ts`

### Knowledge/content pages

- `/blogs` -> `src/app/pages/blogs/blog-list/blog-list.component.ts`
- `/blog/:slug` -> `src/app/pages/blogs/blog-detail/blog-detail.component.ts`
- `/case-study` -> `src/app/pages/case-study/case-study-list/case-study-list.component.ts`
- `/case-study-details/:id` -> `src/app/pages/case-study/case-study-detail/case-study-detail.component.ts`
- `/event-page` -> `src/app/pages/events/events.component.ts`
- `/gallery` -> `src/app/pages/gallery/gallery.component.ts`

### Industry pages

All under `src/app/pages/industry/`:

- `/manufacturing/discrete`
- `/manufacturing/process`
- `/manufacturing/hybrid`
- `/food-and-beverages`
- `/automotive-equipment`
- `/erp-software-for-pharmacy-industry`
- `/chemical-industry`
- `/steel-and-metal`
- `/corrugated-erp`
- `/fashion-erp`
- `/microsoft-dynamics-365-for-e-commerce`

### Solution/practice pages

All under `src/app/pages/solutions/`:

- `/msd-365-finance-and-operations`
- `/microsoft-dynamic-365-business-central`
- `/erp-crm-implementations`
- `/microsoft-azure-cloud-services-provider`
- `/aws-cloud-services-provider`
- `/ls-retail`
- `/sap-web-service`
- `/power-bi`
- `/google-looker`
- `/tableau`

### Service pages

All under `src/app/pages/services/`:

- `/services/erp-crm-support`
- `/services/custom-development-integration`
- `/services/upgrade-and-migration`
- `/services/ams`
- `/services/apps-development`
- `/services/resource-augmentation`

## 5. Page families

### Home page

Main file:

- `src/app/pages/home/home.component.ts`

Home sub-sections:

- `src/app/pages/home/hero/`
- `src/app/pages/home/build-amazing/`
- `src/app/pages/home/work-grow/`
- `src/app/pages/home/faq/`

Backed by:

- `src/app/data/app.data.ts`

### Reusable content pages

Shared page block:

- `src/app/components/shared/industry-page/industry-page.component.ts`

This appears intended for structured landing pages with:

- hero
- capabilities
- industries list
- stats
- workflow steps
- comparison rows
- embedded contact form

### Shared UI components

- Breadcrumb: `src/app/components/shared/breadcrumb/`
- Contact form: `src/app/components/shared/contact-form/`
- Hero slider: `src/app/components/shared/hero-slider/`
- Hero sub-header: `src/app/components/shared/hero-sub/`
- Scroll-to-top: `src/app/components/shared/scroll-to-top/`

## 6. Data and config ownership

### Navigation

- Header menu structure lives in `src/app/data/menu.data.ts`
- Header component consumes that data in `src/app/components/layout/header/header.component.ts`
- Footer also contains its own link arrays in `src/app/components/layout/footer/footer.component.ts`

If navigation changes, check both header and footer.

### Marketing/home content

- FAQ accordion data: `src/app/data/app.data.ts`
- Hero slides: `src/app/data/app.data.ts`
- Home cards: `src/app/data/app.data.ts`

### Form and lead capture

- Main form UI and submission logic: `src/app/components/shared/contact-form/contact-form.component.ts`
- API endpoint currently posts to `https://mail.nicpl.co/api/email/send`
- Brochure download is triggered after successful non-career submissions

### SEO

- Meta title/description helper: `src/app/services/seo.service.ts`

## 7. Assets map

Top-level public folders:

- Brochures: `public/brochures/`
- Images: `public/images/`

Important image groups:

- Home/hero slider: `public/images/Swiper/`, `public/images/hero/`
- About/company profile: `public/images/company-profile/`
- Contact: `public/images/contact/`
- Blog: `public/images/blog/`, `public/images/blogdetail-page/`
- Case study: `public/images/casestudy/`
- Gallery: `public/images/gallery/`
- Services: `public/images/service/`
- Solutions/products: `public/images/product/`, `public/images/power-bi/`, `public/images/google/`, `public/images/tableau/`, `public/images/sap/`, `public/images/microsoft/`, `public/images/lscentral/`
- Industries: `public/images/automative/`, `public/images/chemical/`, `public/images/corrugation/`, `public/images/fashion/`, `public/images/food/`, `public/images/manufacturing/`, `public/images/pharmacy/`, `public/images/retail/`, `public/images/steel/`
- Logos/icons: `public/images/logo/`, `public/images/icons/`, `public/images/svgs/`

## 8. Common task lookup

For common requests, start here:

- Add or change a route:
  `src/app/app.routes.ts`

- Change menu labels or dropdown structure:
  `src/app/data/menu.data.ts`

- Change sticky header or mobile nav behavior:
  `src/app/components/layout/header/`

- Change footer links, phones, office addresses, or social links:
  `src/app/components/layout/footer/`

- Update home hero slides, FAQ, or summary cards:
  `src/app/data/app.data.ts`

- Change contact form fields, validation, download behavior, or API submission:
  `src/app/components/shared/contact-form/`

- Update page-specific content:
  corresponding folder in `src/app/pages/`

- Update reusable industry landing layout:
  `src/app/components/shared/industry-page/`

- Update sitewide styling:
  `src/styles.scss`

- Update global build/assets/style registration:
  `angular.json`

## 9. Known implementation notes

- `contact-form.component.ts` uses `fetch()` directly instead of the existing `EmailService`.
- Header links come from shared data, but footer links are hardcoded in the footer component.
- Routing is lazy at the page level through standalone components.
- `angular.json` already has local modifications in the working tree; treat it carefully when editing.

## 10. How I will use this

For future tasks in this repo, I can start with this map first and then open only the relevant files instead of re-walking the entire tree.

When we add major new areas, this file should be updated so it stays useful.
