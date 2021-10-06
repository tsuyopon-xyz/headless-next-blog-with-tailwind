import type { Article } from '@/types/Base';

export type Post = Article & {
  id: string;
  category: Category;
};

export type Category = {
  id: string;
  name: string;
};

export type Archive = {
  year: number; //  (e.g.) 2021,
  month: number; //  (e.g.) 1~12
  count: number; //  (e.g.) Number of posts in `${year/month}`
};
