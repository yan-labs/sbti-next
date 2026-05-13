'use client';

import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/navigation';
import {ChevronRight, ArrowLeft, ArrowRight} from 'lucide-react';
import {BLOG_POSTS, getBlogPost} from '@/lib/data/blog';
import {NORMAL_TYPES, TYPE_IMAGES} from '@/lib/data/personalities';
import Image from 'next/image';

function InlineCta() {
  const t = useTranslations('blog');
  return (
    <aside className="not-prose my-12 border-y border-border py-8 grid gap-4 md:grid-cols-[minmax(0,2fr)_auto] md:items-center">
      <p className="font-heading italic text-xl md:text-2xl leading-snug text-foreground max-w-[36ch]"
         style={{fontVariationSettings: '"opsz" 144, "SOFT" 95, "wght" 500'}}>
        {t('inlineCta')}
      </p>
      <Link href="/test" className="btn-editorial justify-self-start md:justify-self-end">
        {t('inlineCtaButton')}
      </Link>
    </aside>
  );
}

function BottomCta() {
  const t = useTranslations('blog');
  return (
    <aside className="not-prose mt-16 border-t border-border pt-12">
      <span className="editorial-kicker block mb-3">Take the test</span>
      <div className="grid gap-6 md:grid-cols-[minmax(0,2fr)_auto] md:items-end">
        <div>
          <h3 className="editorial-h2">{t('bottomCtaTitle')}</h3>
          <p className="mt-3 text-muted-foreground max-w-[42ch]">{t('bottomCtaDesc')}</p>
        </div>
        <Link href="/test" className="btn-editorial justify-self-start md:justify-self-end">
          {t('bottomCtaButton')}
        </Link>
      </div>
    </aside>
  );
}

function SbtiVsMbtiArticle() {
  const t = useTranslations('blog.articles.sbti-vs-mbti');

  return (
    <article className="prose-custom">
      <p className="text-xl leading-relaxed text-foreground">{t('p1')}</p>
      <p>{t('p2')}</p>

      <h2>{t('h2_origin')}</h2>
      <p>{t('origin_p1')}</p>
      <p>{t('origin_p2')}</p>

      <h2>{t('h2_dimensions')}</h2>
      <p>{t('dim_p1')}</p>

      <div className="not-prose my-8 overflow-x-auto border border-border">
        <table className="prose-custom w-full text-sm">
          <thead>
            <tr>
              <th></th>
              <th>MBTI</th>
              <th>SBTI</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="font-medium text-foreground">{t('table_dimensions')}</td><td>4</td><td>5 × 3 = 15</td></tr>
            <tr><td className="font-medium text-foreground">{t('table_types')}</td><td>16</td><td>27</td></tr>
            <tr><td className="font-medium text-foreground">{t('table_questions')}</td><td>93</td><td>31</td></tr>
            <tr><td className="font-medium text-foreground">{t('table_time')}</td><td>20-30 min</td><td>1-3 min</td></tr>
            <tr><td className="font-medium text-foreground">{t('table_tone')}</td><td>{t('table_tone_mbti')}</td><td>{t('table_tone_sbti')}</td></tr>
            <tr><td className="font-medium text-foreground">{t('table_purpose')}</td><td>{t('table_purpose_mbti')}</td><td>{t('table_purpose_sbti')}</td></tr>
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
      <p className="text-xl leading-relaxed text-foreground">{t('p1')}</p>
      <p>{t('p2')}</p>

      <div className="not-prose my-10 grid grid-cols-1 gap-px bg-border border border-border sm:grid-cols-2">
        {NORMAL_TYPES.map(({code}) => {
          const name = s(tp, `${code}.name`, code);
          const intro = s(tp, `${code}.intro`, '');
          const img = TYPE_IMAGES[code];
          return (
            <Link key={code} href={`/type/${code}`} className="group bg-card p-5 flex items-start gap-4 transition-colors hover:bg-muted">
              {img && (
                <div className="w-16 shrink-0 border border-border overflow-hidden">
                  <Image src={img} alt={`${code} ${name}`} width={64} height={64} className="h-auto w-full" style={{filter: 'saturate(0.92)'}} />
                </div>
              )}
              <div className="min-w-0">
                <div className="font-mono text-[11px] tracking-[0.18em] text-primary mb-1">{code}</div>
                <h3 className="font-heading text-base font-semibold tracking-tight text-foreground group-hover:text-primary transition-colors">
                  {name}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground line-clamp-2">{intro}</p>
              </div>
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
    {key: 'S', subs: ['S1', 'S2', 'S3']},
    {key: 'E', subs: ['E1', 'E2', 'E3']},
    {key: 'A', subs: ['A1', 'A2', 'A3']},
    {key: 'Ac', subs: ['Ac1', 'Ac2', 'Ac3']},
    {key: 'So', subs: ['So1', 'So2', 'So3']},
  ];

  return (
    <article className="prose-custom">
      <p className="text-xl leading-relaxed text-foreground">{t('p1')}</p>
      <p>{t('p2')}</p>

      <h2>{t('h2_overview')}</h2>
      <p>{t('overview_p1')}</p>

      {DIMS.map(({key, subs}, i) => (
        <section key={key}>
          <h2>
            <span className="font-mono text-sm tracking-[0.2em] text-primary mr-3 align-middle">{key}</span>
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

function ContinueReading({currentSlug}: {currentSlug: string}) {
  const t = useTranslations('blog');
  const others = BLOG_POSTS.filter(p => p.slug !== currentSlug).slice(0, 2);
  if (others.length === 0) return null;
  return (
    <section className="not-prose mt-20 border-t border-border pt-12">
      <span className="editorial-kicker block mb-6">Continue reading</span>
      <div className="grid grid-cols-1 gap-px bg-border border border-border md:grid-cols-2">
        {others.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="group bg-card p-7 transition-colors hover:bg-muted">
            <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground mb-3">
              <time dateTime={post.date}>{post.date}</time>
              <span aria-hidden>·</span>
              <span>{t('readTime', {minutes: post.readTime})}</span>
            </div>
            <h3 className="font-heading text-xl md:text-2xl font-bold leading-[1.15] tracking-tight text-foreground group-hover:text-primary transition-colors">
              {t(`posts.${post.slug}.title`)}
            </h3>
            <span className="mt-4 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-foreground/70 group-hover:text-primary transition-colors">
              {t('readArticle')}
              <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

export function BlogPostPage({slug}: {slug: string}) {
  const t = useTranslations('blog');
  const tb = useTranslations('breadcrumb');
  const post = getBlogPost(slug);
  const ArticleComponent = ARTICLE_COMPONENTS[slug];

  if (!post || !ArticleComponent) return null;

  return (
    <div className="bg-background">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8 py-16 md:py-20">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-12 flex items-center gap-2 text-xs font-mono uppercase tracking-[0.18em] text-muted-foreground">
          <Link href="/" className="hover:text-foreground transition-colors">{tb('home')}</Link>
          <ChevronRight className="h-3 w-3" />
          <Link href="/blog" className="hover:text-foreground transition-colors">{t('pageTitle')}</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-foreground line-clamp-1 max-w-[40ch]">{t(`posts.${slug}.title`)}</span>
        </nav>

        {/* Article header */}
        <header className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] gap-8 md:gap-16 mb-14 md:mb-20">
          <div className="flex flex-col gap-3">
            <span className="editorial-kicker text-primary">Article</span>
            <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground leading-[1.7]">
              <time dateTime={post.date}>{post.date}</time><br />
              {t('readTime', {minutes: post.readTime})}
            </div>
          </div>
          <h1 className="editorial-h1 max-w-[20ch]">
            {t(`posts.${slug}.title`)}
          </h1>
        </header>

        {/* Article body — constrained width for readability */}
        <div className="mx-auto max-w-[68ch]">
          <ArticleComponent />
        </div>

        <div className="mx-auto max-w-[68ch]">
          <ContinueReading currentSlug={slug} />

          <div className="mt-12 flex justify-start">
            <Link href="/blog" className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-foreground/70 border-b border-foreground/30 pb-[2px] hover:text-primary hover:border-primary transition-colors">
              <ArrowLeft className="h-3 w-3" />
              {t('backToList')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
