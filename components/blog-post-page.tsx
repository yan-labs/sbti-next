'use client';

import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/navigation';
import {Button} from '@/components/ui/button';
import {Separator} from '@/components/ui/separator';
import {ChevronRight, Clock, ArrowLeft} from 'lucide-react';
import {getBlogPost} from '@/lib/data/blog';
import {NORMAL_TYPES, TYPE_IMAGES} from '@/lib/data/personalities';
import {Card, CardContent} from '@/components/ui/card';
import Image from 'next/image';

function InlineCta() {
  const t = useTranslations('blog');
  return (
    <div className="not-prose my-8 rounded-xl border border-primary/20 bg-primary/5 p-5 text-center">
      <p className="text-sm font-medium text-foreground/80">{t('inlineCta')}</p>
      <Link href="/test">
        <Button size="sm" className="mt-3 rounded-full px-6">{t('inlineCtaButton')}</Button>
      </Link>
    </div>
  );
}

function BottomCta() {
  const t = useTranslations('blog');
  return (
    <div className="not-prose mt-10 rounded-2xl bg-primary/5 border border-primary/20 p-8 text-center">
      <h3 className="font-heading text-xl font-bold">{t('bottomCtaTitle')}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{t('bottomCtaDesc')}</p>
      <Link href="/test">
        <Button size="lg" className="mt-4 rounded-full px-10">{t('bottomCtaButton')}</Button>
      </Link>
    </div>
  );
}

function SbtiVsMbtiArticle() {
  const t = useTranslations('blog.articles.sbti-vs-mbti');

  return (
    <article className="prose-custom">
      <p className="text-lg leading-relaxed text-foreground/85">{t('p1')}</p>
      <p className="text-base leading-relaxed text-foreground/85">{t('p2')}</p>

      <h2>{t('h2_origin')}</h2>
      <p>{t('origin_p1')}</p>
      <p>{t('origin_p2')}</p>

      <h2>{t('h2_dimensions')}</h2>
      <p>{t('dim_p1')}</p>

      <div className="not-prose my-6 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b text-left">
              <th className="p-3 font-semibold"></th>
              <th className="p-3 font-semibold">MBTI</th>
              <th className="p-3 font-semibold">SBTI</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            <tr><td className="p-3 font-medium">{t('table_dimensions')}</td><td className="p-3">4</td><td className="p-3">5 × 3 = 15</td></tr>
            <tr><td className="p-3 font-medium">{t('table_types')}</td><td className="p-3">16</td><td className="p-3">27</td></tr>
            <tr><td className="p-3 font-medium">{t('table_questions')}</td><td className="p-3">93</td><td className="p-3">31</td></tr>
            <tr><td className="p-3 font-medium">{t('table_time')}</td><td className="p-3">20-30 min</td><td className="p-3">1-3 min</td></tr>
            <tr><td className="p-3 font-medium">{t('table_tone')}</td><td className="p-3">{t('table_tone_mbti')}</td><td className="p-3">{t('table_tone_sbti')}</td></tr>
            <tr><td className="p-3 font-medium">{t('table_purpose')}</td><td className="p-3">{t('table_purpose_mbti')}</td><td className="p-3">{t('table_purpose_sbti')}</td></tr>
          </tbody>
        </table>
      </div>

      <h2>{t('h2_types')}</h2>
      <p>{t('types_p1')}</p>
      <p>{t('types_p2')}</p>

      <h2>{t('h2_why_viral')}</h2>
      <p>{t('viral_p1')}</p>
      <p>{t('viral_p2')}</p>
      <p>{t('viral_p3')}</p>

      <InlineCta />

      <h2>{t('h2_which')}</h2>
      <p>{t('which_p1')}</p>
      <p>{t('which_p2')}</p>

      <BottomCta />
    </article>
  );
}

function TypesGuideArticle() {
  const t = useTranslations('blog.articles.27-personality-types');
  const tp = useTranslations('personalities');

  const s = (fn: (k: string) => string, key: string, fallback: string) => {
    try { return fn(key); } catch { return fallback; }
  };

  return (
    <article className="prose-custom">
      <p className="text-lg leading-relaxed text-foreground/85">{t('p1')}</p>
      <p className="text-base leading-relaxed text-foreground/85">{t('p2')}</p>

      <div className="not-prose my-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {NORMAL_TYPES.map(({code}) => {
          const name = s(tp, `${code}.name`, code);
          const intro = s(tp, `${code}.intro`, '');
          const img = TYPE_IMAGES[code];
          return (
            <Link key={code} href={`/type/${code}`} className="no-underline">
              <Card className="group h-full border-0 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5">
                <CardContent className="flex items-start gap-4 p-4">
                  {img && (
                    <div className="w-16 shrink-0 overflow-hidden rounded-lg">
                      <Image src={img} alt={`${code} ${name}`} width={64} height={64} className="h-auto w-full" />
                    </div>
                  )}
                  <div className="min-w-0">
                    <h3 className="font-heading text-base font-bold group-hover:text-primary transition-colors">
                      {code}
                      <span className="ml-1.5 text-sm font-normal text-muted-foreground">{name}</span>
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{intro}</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>

      <p>{t('p3')}</p>

      <BottomCta />
    </article>
  );
}

function FiveDimensionsArticle() {
  const t = useTranslations('blog.articles.five-dimensions');

  const DIMS = [
    {key: 'S', subs: ['S1', 'S2', 'S3'], color: 'bg-primary/10 text-primary'},
    {key: 'E', subs: ['E1', 'E2', 'E3'], color: 'bg-secondary/10 text-secondary'},
    {key: 'A', subs: ['A1', 'A2', 'A3'], color: 'bg-accent/10 text-accent-foreground'},
    {key: 'Ac', subs: ['Ac1', 'Ac2', 'Ac3'], color: 'bg-secondary/10 text-secondary'},
    {key: 'So', subs: ['So1', 'So2', 'So3'], color: 'bg-primary/10 text-primary'},
  ];

  return (
    <article className="prose-custom">
      <p className="text-lg leading-relaxed text-foreground/85">{t('p1')}</p>
      <p className="text-base leading-relaxed text-foreground/85">{t('p2')}</p>

      <h2>{t('h2_overview')}</h2>
      <p>{t('overview_p1')}</p>

      {DIMS.map(({key, subs, color}, i) => (
        <section key={key}>
          <h2>
            <span className={`mr-2 inline-flex h-7 w-7 items-center justify-center rounded text-xs font-bold ${color}`}>{key}</span>
            {t(`dim_${key}_title`)}
          </h2>
          <p>{t(`dim_${key}_intro`)}</p>
          <ul>
            {subs.map((sub) => (
              <li key={sub}>
                <strong>{t(`sub_${sub}_name`)}</strong>{t(`sub_${sub}_desc`)}
              </li>
            ))}
          </ul>
          {i === 2 && <InlineCta />}
        </section>
      ))}

      <h2>{t('h2_how_calc')}</h2>
      <p>{t('calc_p1')}</p>
      <p>{t('calc_p2')}</p>

      <h2>{t('h2_disclaimer')}</h2>
      <p>{t('disclaimer_p1')}</p>

      <BottomCta />
    </article>
  );
}

const ARTICLE_COMPONENTS: Record<string, React.ComponentType> = {
  'sbti-vs-mbti': SbtiVsMbtiArticle,
  '27-personality-types': TypesGuideArticle,
  'five-dimensions': FiveDimensionsArticle,
};

export function BlogPostPage({slug}: {slug: string}) {
  const t = useTranslations('blog');
  const tb = useTranslations('breadcrumb');
  const post = getBlogPost(slug);
  const ArticleComponent = ARTICLE_COMPONENTS[slug];

  if (!post || !ArticleComponent) return null;

  return (
    <div className="mx-auto max-w-2xl px-4 py-12">
      <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-1 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground transition-colors">{tb('home')}</Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <Link href="/blog" className="hover:text-foreground transition-colors">{t('pageTitle')}</Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <span className="text-foreground font-medium line-clamp-1">{t(`posts.${slug}.title`)}</span>
      </nav>

      <header className="mb-8">
        <h1 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
          {t(`posts.${slug}.title`)}
        </h1>
        <div className="mt-3 flex items-center gap-3 text-sm text-muted-foreground">
          <time dateTime={post.date}>{post.date}</time>
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            {t('readTime', {minutes: post.readTime})}
          </span>
        </div>
      </header>

      <Separator className="my-8" />

      <ArticleComponent />

      <Separator className="my-8" />

      <div className="flex justify-start">
        <Link href="/blog">
          <Button variant="ghost" className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            {t('backToList')}
          </Button>
        </Link>
      </div>

    </div>
  );
}
