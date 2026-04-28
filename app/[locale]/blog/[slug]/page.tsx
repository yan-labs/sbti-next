import {setRequestLocale} from 'next-intl/server';
import {buildAlternates, buildTwitter, getLocaleUrl, getBlogSeo, getOgLocale, getAlternateOgLocales, DEFAULT_OG_IMAGE, BASE_URL} from '@/lib/metadata';
import {BLOG_POSTS} from '@/lib/data/blog';
import {buildArticleSchema, buildBreadcrumbSchema} from '@/lib/json-ld';
import {JsonLd} from '@/components/json-ld';
import {BlogPostPage} from '@/components/blog-post-page';
import {notFound} from 'next/navigation';
import {getTranslations} from 'next-intl/server';

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({slug: post.slug}));
}

export async function generateMetadata({params}: {params: Promise<{locale: string; slug: string}>}) {
  const {locale, slug} = await params;
  const seo = getBlogSeo(locale, slug);
  if (!seo) return {};
  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    alternates: buildAlternates(locale, `/blog/${slug}`),
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: getLocaleUrl(locale, `/blog/${slug}`),
      siteName: 'SBTI',
      type: 'article',
      images: [DEFAULT_OG_IMAGE],
      locale: getOgLocale(locale),
      alternateLocale: getAlternateOgLocales(locale),
    },
    twitter: buildTwitter(seo.title, seo.description),
    robots: {index: true, follow: true},
  };
}

export default async function BlogPost({params}: {params: Promise<{locale: string; slug: string}>}) {
  const {locale, slug} = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();
  setRequestLocale(locale);

  const seo = getBlogSeo(locale, slug);
  const url = getLocaleUrl(locale, `/blog/${slug}`);
  const tBreadcrumb = await getTranslations({locale, namespace: 'breadcrumb'});

  return (
    <>
      {seo && (
        <JsonLd data={buildArticleSchema(locale, {
          headline: seo.title,
          description: seo.description,
          datePublished: post.date,
          dateModified: post.date,
          url,
          imageUrl: post.ogImage ? `${BASE_URL}${post.ogImage}` : undefined,
        })} />
      )}
      <JsonLd data={buildBreadcrumbSchema(locale, [
        {name: tBreadcrumb('home'), path: ''},
        {name: tBreadcrumb('blog'), path: '/blog'},
        {name: slug, path: `/blog/${slug}`},
      ])} />
      <BlogPostPage slug={slug} />
    </>
  );
}
