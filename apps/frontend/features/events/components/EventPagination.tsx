import { getDate } from "features/events/utils";
import Link from "next/link";
import { t } from "utils/translations";

interface EventPaginationProps {
  date: string;
}

export const EventPagination = ({ date }: EventPaginationProps) => {
  console.log(date);

  return (
    <>
      <Link href={`events/${getDate(date, "previous")}`}>{t("previousDay")}</Link>
      <Link href={`events/${getDate(date, "next")}`}>{t("nextDay")}</Link>
    </>
  );
};
