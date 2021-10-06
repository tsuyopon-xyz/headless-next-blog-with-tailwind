import { FC } from 'react';

export const Card: FC = ({ children }) => {
  return (
    <div className="bg-white w-full border border-gray-300 box-border shadow-md">
      {children}
    </div>
  );
};
