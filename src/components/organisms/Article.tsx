import { VFC } from 'react';
import Image from 'next/image';
import type { Profile } from '@/types/Profile';
import styles from './Article.module.css';

type Props = {
  profile: Profile;
};

export const Article: VFC<Props> = ({ profile }) => {
  return (
    <article className="prose max-w-none">
      <h1 className="text-4xl leading-10 font-extrabold text-gray-800">
        {profile.title}
      </h1>
      <div className="aspect-w-16 aspect-h-9 mt-6">
        <Image
          layout="fill"
          src={profile.featuredImage}
          alt="アイキャッチ画像"
        />
      </div>
      <div
        className="py-8"
        dangerouslySetInnerHTML={{ __html: profile.body }}
      ></div>
    </article>
  );
};
