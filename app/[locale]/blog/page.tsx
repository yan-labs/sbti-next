import {setRequestLocale} from 'next-intl/server';
import {buildAlternates, buildTwitter, getLocaleUrl, getPageSeo, getOgLocale, getAlternateOgLocales, DEFAULT_OG_IMAGE} from '@/lib/metadata';
import {buildWebPageSchema} from '@/lib/json-ld';
import {JsonLd} from '@/components/json-ld';
import {BLOG_POSTS} from '@/lib/data/blog';
import {BlogListPage} from '@/components/blog-list-page';

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  const seo = getPageSeo(locale, 'blog');
  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    alternates: buildAlternates(locale, '/blog'),
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: getLocaleUrl(locale, '/blog'),
      siteName: 'SBTI',
      type: 'website',
      images: [DEFAULT_OG_IMAGE],
      locale: getOgLocale(locale),
      alternateLocale: getAlternateOgLocales(locale),
    },
    twitter: buildTwitter(seo.title, seo.description),
    robots: {index: true, follow: true},
  };
}

export default async function Blog({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  setRequestLocale(locale);
  const seo = getPageSeo(locale, 'blog');
  const url = getLocaleUrl(locale, '/blog');
  return (
    <>
      <JsonLd data={buildWebPageSchema(locale, seo.title, seo.description, url, {
        hasPart: BLOG_POSTS.map(post => ({
          '@type': 'Article',
          url: getLocaleUrl(locale, `/blog/${post.slug}`),
          name: post.slug,
        })),
      })} />
      <BlogListPage />
    </>
  );
}
