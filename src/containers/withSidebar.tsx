import type { NextPage, GetStaticProps } from 'next';
import {
  fetchAllArchives,
  fetchAllCategories,
  fetchAllPosts,
} from '@/services/posts.service';
import type { Archive, Category, Post } from '@/types/Post';
import { Sidebar } from '@/components/layouts/Sidebar';

export type WithSidebarProps = {
  posts: Post[];
  categories: Category[];
  archives: Archive[];
};

export const withSidebar = (
  PageComponent: NextPage<WithSidebarProps & any>
) => {
  const wrappedComponent = (props: WithSidebarProps) => (
    <main className="px-4 xl:px-0 py-[60px] grid grid-cols-1 md:grid-cols-3 md:max-w-7xl md:mx-auto gap-6">
      <div className="md:col-span-2">
        <PageComponent {...props} />
      </div>
      <div className="md:col-start-3">
        <Sidebar {...props} />
      </div>
    </main>
  );

  return wrappedComponent;
};

export const getStaticProps: GetStaticProps<WithSidebarProps> = async (
  _context
) => {
  const posts = await fetchAllPosts();
  const categories = await fetchAllCategories();
  const archives = await fetchAllArchives();

  return {
    props: {
      posts,
      categories,
      archives,
    },
  };
};
