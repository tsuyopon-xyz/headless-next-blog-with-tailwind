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

const MAX_NUMBER_OF_NUMBER_LINKS = 8;

const unselectedPageClassValues =
  'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 inline-flex items-center text-sm font-medium';
const selectedPageClassValues =
  'border-indigo-500 text-indigo-600 border-t-2 pt-4 inline-flex items-center text-sm font-medium';

export const Pagination: VFC<Props> = ({ perPage, total, currentPage = 1 }) => {
  const maxPage = Math.ceil(total / perPage);

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
              前のページ
            </a>
          </Link>
        ) : null}
      </div>
      <div className="hidden md:-mt-px md:flex">
        {maxPage <= MAX_NUMBER_OF_NUMBER_LINKS ? (
          <NumberLinkUnder8 maxPage={maxPage} currentPage={currentPage} />
        ) : (
          <NumberLinkOver8 maxPage={maxPage} currentPage={currentPage} />
        )}
      </div>
      <div className="-mt-px w-0 flex-1 flex justify-end">
        {currentPage < maxPage ? (
          <Link href={`?page=${currentPage + 1}`}>
            <a className={unselectedPageClassValues}>
              次のページ
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

type NumberLinksProps = {
  maxPage: number;
  currentPage: number;
};

const NumberLinkUnder8: VFC<NumberLinksProps> = ({ maxPage, currentPage }) => {
  return (
    <>
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
    </>
  );
};

// TODO: 力技で実装して読みづらいためリファクタリングする
const NumberLinkOver8: VFC<NumberLinksProps> = ({ maxPage, currentPage }) => {
  const firstPageNumbers: number[] = [];
  const middlePageNumbers: number[] = [];
  const lastPageNumbers: number[] = [];

  if (2 < currentPage && currentPage < maxPage - 1) {
    firstPageNumbers.push(1);
    middlePageNumbers.push(currentPage - 1, currentPage, currentPage + 1);
    lastPageNumbers.push(maxPage);
  } else {
    firstPageNumbers.push(1, 2, 3);
    lastPageNumbers.push(maxPage - 2, maxPage - 1, maxPage);
  }

  return (
    <>
      {firstPageNumbers.map((pageNumber) => {
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

      {middlePageNumbers.length > 0 ? (
        <span className="border-transparent text-gray-500 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium">
          ...
        </span>
      ) : null}

      {middlePageNumbers.map((pageNumber) => {
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

      <span className="border-transparent text-gray-500 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium">
        ...
      </span>

      {lastPageNumbers.map((pageNumber) => {
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
    </>
  );
};
