import { VFC } from 'react';
import Link from 'next/link';
import { Label } from '@/components/atoms/Label';
import type { Post } from '@/types/Post';

type Props = {
  post: Post;
};

export const PostCard: VFC<Props> = ({ post }) => {
  return (
    <div className="bg-white w-full border border-gray-300 box-border shadow-md">
      <Link href={`/posts/${post.id}`}>
        <a className="block">
          <div className="relative overflow-hidden h-[238px]">
            <div className="absolute top-2 left-2">
              <Label labelName={post.categoryName} />
            </div>
            <div>
              <img
                className="object-cover"
                src="https://source.unsplash.com/random/"
                alt=""
              />
            </div>
          </div>
          <div className="p-4 min-h-[212px] max-h-[212px] flex flex-col justify-between">
            <h2 className="text-2xl leading-8 font-bold text-gray-800">
              {post.title}
            </h2>
            <div className="text-lg leading-6 font-medium text-right text-gray-600 ">
              {post.publishedAt}
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};
