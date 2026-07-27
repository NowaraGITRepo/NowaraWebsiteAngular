/**
 * Fetches all blog slugs from the live API and injects them into
 * public/sitemap.xml before the closing </urlset> tag.
 *
 * Usage:  node scripts/generate-sitemap.mjs
 * Or run automatically via:  npm run build:sitemap
 */

import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SITEMAP_PATH = join(__dirname, '../public/sitemap.xml');
const BASE_URL     = 'https://nowarainfotech.com';
const BLOG_API     = 'https://nowarainfotech.co/blog_api.php?action=get_all';

async function run() {
  console.log('Fetching blog list from API...');

  let blogs = [];
  try {
    const res = await fetch(BLOG_API);
    const data = await res.json();
    // API returns either an array directly or { data: [...] }
    blogs = Array.isArray(data) ? data : (data.data ?? data.blogs ?? []);
  } catch (err) {
    console.error('Failed to fetch blogs:', err.message);
    process.exit(1);
  }

  if (!blogs.length) {
    console.warn('No blogs returned from API — sitemap unchanged.');
    return;
  }

  console.log(`Found ${blogs.length} blogs. Building sitemap entries...`);

  const today = new Date().toISOString().split('T')[0];

  const blogEntries = blogs
    .filter(b => b.page_name)
    .map(b => {
      const lastmod = b.created_at
        ? new Date(b.created_at).toISOString().split('T')[0]
        : today;
      return `  <url><loc>${BASE_URL}/blog/${b.page_name}</loc><lastmod>${lastmod}</lastmod><changefreq>monthly</changefreq><priority>0.6</priority></url>`;
    })
    .join('\n');

  let sitemap = readFileSync(SITEMAP_PATH, 'utf-8');

  // Remove any previously injected blog block so re-runs are idempotent
  sitemap = sitemap.replace(/\n\n  <!-- Blog Pages \(auto-generated\) -->[\s\S]*?(?=\n<\/urlset>)/, '');

  const injection = `\n\n  <!-- Blog Pages (auto-generated) -->\n${blogEntries}`;
  sitemap = sitemap.replace('</urlset>', injection + '\n</urlset>');

  writeFileSync(SITEMAP_PATH, sitemap, 'utf-8');
  console.log(`Done — ${blogs.length} blog URLs written to sitemap.xml`);
}

run();
