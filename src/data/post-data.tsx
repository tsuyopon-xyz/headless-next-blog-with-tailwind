import type { Post, Category } from '@/types/Post';

export const categories: Category[] = [
  {
    id: 'javascript',
    name: 'JavaScript',
  },
  {
    id: 'typeScript',
    name: 'TypeScript',
  },
  {
    id: 'firebase',
    name: 'Firebase',
  },
  {
    id: 'react',
    name: 'React',
  },
  {
    id: 'next-js',
    name: 'Next.js',
  },
];

export const posts: Post[] = Array.from({ length: 81 }).map((_, index) => {
  const category = categories[index % categories.length];
  const date = Math.random() > 0.5 ? '2021-10-05' : '2021-11-05';

  return {
    id: (index + 1).toString(),
    title: 'ブログ記事のタイトルあああああああああああああああああああ',
    body: 'ここにはHTML形式のテキストが入ってくる',
    category,
    publishedAt: date,
    updatedAt: date,
  };
});
