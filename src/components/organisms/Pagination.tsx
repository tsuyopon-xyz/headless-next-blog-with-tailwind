import type { VFC } from 'react';
import Link from 'next/link';
import {
  ArrowNarrowLeftIcon,
  ArrowNarrowRightIcon,
} from '@heroicons/react/solid';

type Props = {
  perPage: number;
  total: number;
  currentPage?: number;
};

export const Pagination: VFC<Props> = ({ perPage, total, currentPage = 1 }) => {
  const maxPage = Math.ceil(total / perPage);
  const unselectedPageClassValues =
    'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 inline-flex items-center text-sm font-medium';
  const selectedPageClassValues =
    'border-indigo-500 text-indigo-600 border-t-2 pt-4 inline-flex items-center text-sm font-medium';

  return (
    <nav className="border-t border-gray-200 flex items-center justify-between">
      <div className="-mt-px w-0 flex-1 flex">
        {currentPage > 1 ? (
          <Link href={`?page=${currentPage - 1}`}>
            <a className={unselectedPageClassValues}>
              <ArrowNarrowLeftIcon
                className="mr-3 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
              Previous
            </a>
          </Link>
        ) : null}
      </div>
      <div className="hidden md:-mt-px md:flex">
        {Array.from({ length: maxPage }).map((_, i) => {
          const pageNumber = i + 1;
          let classValues =
            pageNumber === currentPage
              ? selectedPageClassValues
              : unselectedPageClassValues;

          return (
            <Link key={pageNumber} href={`?page=${pageNumber}`}>
              <a className={`${classValues} px-4`}>{pageNumber}</a>
            </Link>
          );
        })}
      </div>
      <div className="-mt-px w-0 flex-1 flex justify-end">
        {currentPage < maxPage ? (
          <Link href={`?page=${currentPage + 1}`}>
            <a className={unselectedPageClassValues}>
              Next
              <ArrowNarrowRightIcon
                className="ml-3 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </a>
          </Link>
        ) : null}
      </div>
    </nav>
  );
};
