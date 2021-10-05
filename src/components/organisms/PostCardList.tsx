import { VFC } from 'react';
import { PostCard } from '@/components/molecules/PostCard';
import type { Post } from '@/types/Post';

type Props = {
  posts: Post[];
};

export const PostCardList: VFC<Props> = ({ posts }) => {
  return (
    <>
      {posts.map((post) => (
        <PostCard post={post} key={post.id} />
      ))}
    </>
  );
};
