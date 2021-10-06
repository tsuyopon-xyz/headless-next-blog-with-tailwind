import { FC, VFC } from 'react';
import Link from 'next/link';
import { ChevronRightIcon } from '@heroicons/react/outline';
import { SidebarTitle } from '@/components/atoms/SidebarTitle';
import { Card } from '@/components/atoms/Card';
import type { Category, Archive } from '@/types/Post';

type Props = {
  categories: Category[];
  archives: Archive[];
};

export const Sidebar: VFC<Props> = ({ categories, archives }) => {
  return (
    <div>
      <ProfileWidget />
      <CategoryWidget categories={categories} />
      <ArchiveWidget archives={archives} />
    </div>
  );
};

type WidgetProps = {
  title: string;
  isFirstWidget?: boolean;
};

const Widget: FC<WidgetProps> = ({ title, children, isFirstWidget }) => {
  return (
    <section className={isFirstWidget ? 'mt-0' : 'mt-10'}>
      <SidebarTitle title={title} />
      <div className="mt-[10px]">{children}</div>
    </section>
  );
};

const ProfileWidget: VFC = () => {
  return (
    <Widget title="プロフィール" isFirstWidget={true}>
      <Card>
        <div className="p-8 flex flex-col">
          <div className="flex justify-center items-center">
            <Link href="/profile">
              <a>
                <img
                  className="object-cover w-[100px] h-[100px] rounded-full"
                  src="/profile.jpg"
                  alt="プロフィールアイコン"
                />
              </a>
            </Link>
          </div>
          <div className="p-4 flex flex-col justify-center items-center">
            <div className="text-gray-700 text-xl leading-7 font-bold">
              前田　剛
            </div>
            <div className="text-gray-500 text-sm leading-8 font-normal">
              Webエンジニア
            </div>
          </div>
          <div className="text-gray-700 text-base leading-6 font-normal">
            <p>
              普段はフリーランスエンジニアとして働いていますが、人生を豊かにするための生き方を模索中です！
            </p>
            <br />
            <p>
              プログラミングは独立するための１つの手段で、同じようにフリーランスを志している方の役に立つ情報を日々更新していきます^^
            </p>
            <br />
            <p>
              プログラミング学習者でなくても現代の仕事はどれもWeb技術が関わってくるので、
            </p>
            <br />
            <p>
              エンジニア以外の方にも勉強になったと思われる記事を書いていくのでよろしくお願いいたします！
            </p>
          </div>
        </div>
      </Card>
    </Widget>
  );
};

type CategoryWidgetProps = {
  categories: Category[];
};

const CategoryWidget: VFC<CategoryWidgetProps> = ({ categories }) => {
  const categoryListItems = categories.map((category, index) => {
    const isLastItem = index + 1 === categories.length;

    return (
      <li
        key={category.id}
        className={`flex items-center py-3 hover:bg-indigo-50 hover:cursor-pointer ${
          isLastItem ? '' : 'border-b'
        }`}
        onClick={() => alert('カテゴリページは未実装だよ')}
      >
        <div className="flex-grow text-gray-900 flex items-center">
          <ChevronRightIcon className="w-5 h-5" aria-hidden="true" />
          <div className="ml-[10px] text-lg leading-6 font-semibold ">
            {category.name}
          </div>
        </div>
      </li>
    );
  });
  return (
    <Widget title="カテゴリー">
      <ul>{categoryListItems}</ul>
    </Widget>
  );
};

type ArchiveWidgetProps = {
  archives: Archive[];
};

const ArchiveWidget: VFC<ArchiveWidgetProps> = ({ archives }) => {
  const archiveListItems = archives.map((archive, index) => {
    const isLastItem = index + 1 === archives.length;
    const { year, month, count } = archive;
    const itemTitle = `${year}年${month}月`;
    const key = `${year}-${month}`;

    return (
      <li
        key={key}
        className={`flex items-center py-3 hover:bg-indigo-50 hover:cursor-pointer ${
          isLastItem ? '' : 'border-b'
        }`}
        onClick={() => alert('アーカイブページは未実装だよ')}
      >
        <div className="flex-grow text-gray-900 flex items-center">
          <ChevronRightIcon className="w-5 h-5" aria-hidden="true" />
          <div className="ml-[10px] text-lg leading-6 font-semibold ">
            {itemTitle}
          </div>
        </div>
        <div className="text-gray-500 text-sm leading-5 font-normal border px-4 py-1">
          {count}
        </div>
      </li>
    );
  });
  return (
    <Widget title="アーカイブ">
      <ul>{archiveListItems}</ul>
    </Widget>
  );
};
