import { posts } from '@/data/post-data';

// TODO: 将来的にmicroCMSから取得した投稿一覧を返す
// microCMSから取得する際は非同期処理になるため、
// ダミーデータ利用時もasync/awaitを使って、後々の修正を少なくする
export const fetchAllPosts = async () => {
  return posts;
};
