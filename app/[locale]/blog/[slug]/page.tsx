import {setRequestLocale} from 'next-intl/server';
import {buildAlternates, buildTwitter, getLocaleUrl, getBlogSeo, DEFAULT_OG_IMAGE} from '@/lib/metadata';
import {BLOG_POSTS} from '@/lib/data/blog';
import {BlogPostPage} from '@/components/blog-post-page';
import {notFound} from 'next/navigation';

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
  return <BlogPostPage slug={slug} />;
}
