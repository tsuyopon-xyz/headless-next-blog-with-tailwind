import type { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';
import {
  withSidebar,
  WithSidebarProps,
  getStaticProps as getStaticPropsOfSidebarContainer,
} from '@/containers/withSidebar';
import { Article } from '@/components/organisms/Article';
import { Post } from '@/types/Post';
import { fetchAllPosts } from '@/services/posts.service';

type PageProps = WithSidebarProps & {
  post: Post;
};

const PostDetailPage: NextPage<PageProps> = ({ post }) => {
  return (
    <div>
      <Head>
        <title>{post.title}</title>
      </Head>

      <Article articleData={post} />
    </div>
  );
};

type UrlParams = {
  id: string;
};

export const getStaticPaths: GetStaticPaths<UrlParams> = async () => {
  const posts = await fetchAllPosts();
  const paths = posts.map((post) => {
    return {
      params: {
        id: post.id,
      },
    };
  });

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps<PageProps> = async (context) => {
  const { props } = (await getStaticPropsOfSidebarContainer(context)) as {
    props: WithSidebarProps;
  };
  const { params } = context;
  const { id } = params as UrlParams;
  const post = props.posts.find((post) => post.id === id);

  if (!post) {
    return { notFound: true };
  }

  return {
    props: {
      ...props,
      post,
    },
  };
};

export default withSidebar(PostDetailPage);
