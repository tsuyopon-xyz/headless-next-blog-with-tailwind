import type { Post } from '@/types/Post';

export const posts: Post[] = Array.from({ length: 81 }).map((_, index) => {
  return {
    id: (index + 1).toString(),
    title: 'ブログ記事のタイトルあああああああああああああああああああ',
    body: 'ここにはHTML形式のテキストが入ってくる',
    categoryId: 'category-id',
    categoryName: 'JavaScript',
    publishedAt: '2021年10月5日',
    updatedAt: '2021年10月6日',
  };
});
