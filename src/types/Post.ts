export type Post = {
  id: string;
  title: string;
  body: string;
  category: Category;
  publishedAt: string;
  updatedAt: string;
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
