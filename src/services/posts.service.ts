import dayjs from 'dayjs';
import { posts, categories } from '@/data/post-data';
import type { Archive } from '@/types/Post';

// TODO: 将来的にmicroCMSから取得した投稿一覧を返す
// microCMSから取得する際は非同期処理になるため、
// ダミーデータ利用時もasync/awaitを使って、後々の修正を少なくする
export const fetchAllPosts = async () => {
  return posts;
};

export const fetchAllCategories = async () => {
  return categories;
};

export const fetchAllArchives = async () => {
  const allPosts = await fetchAllPosts();

  const archiveMap: { [key: string]: number } = {};
  allPosts.forEach((post) => {
    const dayjsObject = dayjs(post.publishedAt);
    const year = dayjsObject.year();
    const month = dayjsObject.month() + 1;
    const key = `${year}-${month}`;
    if (typeof archiveMap[key] === 'number') {
      archiveMap[key] += 1;
    } else {
      archiveMap[key] = 1;
    }
  });

  const archives: Archive[] = Object.keys(archiveMap).map((dateString) => {
    const dayjsObject = dayjs(dateString);
    const year = dayjsObject.year();
    const month = dayjsObject.month() + 1;

    return {
      year,
      month,
      count: archiveMap[dateString],
    };
  });

  return archives;
};
