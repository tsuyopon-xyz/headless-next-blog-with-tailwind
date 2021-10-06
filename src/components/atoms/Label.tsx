import { VFC } from 'react';

type LabelProps = {
  labelName: string;
};

export const Label: VFC<LabelProps> = ({ labelName }) => {
  return (
    <div>
      <div className="bg-yellow-400 px-4 py-1 rounded-3xl text-white text-base leading-6 font-bold">
        {labelName}
      </div>
    </div>
  );
};
