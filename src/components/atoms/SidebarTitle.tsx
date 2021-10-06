import { VFC } from 'react';

type Props = {
  title: string;
};

export const SidebarTitle: VFC<Props> = ({ title }) => {
  return (
    <div className="p-4 bg-indigo-600 text-white text-2xl leading-8 font-semibold">
      {title}
    </div>
  );
};
