"use client";

import Link from "next/link";

interface PaginationProps {
  page: number;
  pageCount: number;
  pathname: string;
}

const Pagination = ({ page, pageCount, pathname }: PaginationProps) => {
  return (
    <>
      {page !== 1 && (
        <Link
          href={{
            pathname,
            query: {
              page: page - 1,
            },
          }}>
          Poprzednia strona
        </Link>
      )}
      {pageCount >= page && (
        <Link
          href={{
            pathname,
            query: {
              page: page + 1,
            },
          }}>
          Następna strona
        </Link>
      )}
    </>
  );
};

export default Pagination;