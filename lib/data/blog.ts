export interface BlogPost {
  slug: string;
  date: string;
  readTime: number; // minutes
  ogImage?: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'sbti-vs-mbti',
    date: '2026-04-12',
    readTime: 5,
  },
  {
    slug: '27-personality-types',
    date: '2026-04-12',
    readTime: 8,
  },
  {
    slug: 'five-dimensions',
    date: '2026-04-12',
    readTime: 6,
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
