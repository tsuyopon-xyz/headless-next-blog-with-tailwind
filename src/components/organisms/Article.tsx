import { VFC } from 'react';
import Image from 'next/image';
import { ClockIcon } from '@heroicons/react/outline';
import { Label } from '@/components/atoms/Label';
import { formatDateToHumanReadable } from '@/utils/day.util';
import type { Profile } from '@/types/Profile';
import type { Post } from '@/types/Post';

type Props = {
  articleData: Profile | Post;
};

export const Article: VFC<Props> = ({ articleData }) => {
  return (
    <article className="prose max-w-none">
      {'category' in articleData && (
        <div className="inline-block mb-6">
          <Label labelName={articleData.category.name} />
        </div>
      )}
      <h1 className="text-4xl leading-10 font-extrabold text-gray-800">
        {articleData.title}
      </h1>
      <div className="flex items-center justify-end">
        <ClockIcon className="w-6 h-6 text-gray-900 " aria-hidden="true" />
        <div className="text-2xl leading-8 font-semibold text-gray-600 ml-2">
          {formatDateToHumanReadable(articleData.publishedAt)}
        </div>
      </div>
      <div className="aspect-w-16 aspect-h-9">
        <Image
          layout="fill"
          src={articleData.featuredImage}
          alt="アイキャッチ画像"
        />
      </div>
      <div
        className="py-8"
        dangerouslySetInnerHTML={{ __html: articleData.body }}
      ></div>
    </article>
  );
};
