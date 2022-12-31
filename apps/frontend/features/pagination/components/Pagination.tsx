"use client";

import Link from "next/link";
import { t } from "utils/translations";

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
          {t("previousPage")}
        </Link>
      )}
      {pageCount > page && (
        <Link
          href={{
            pathname,
            query: {
              page: page + 1,
            },
          }}>
          {t("nextPage")}
        </Link>
      )}
    </>
  );
};

export default Pagination;