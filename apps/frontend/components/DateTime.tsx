"use client";

import type { TimeHTMLAttributes } from "react";

interface DateTimeProps extends TimeHTMLAttributes<HTMLTimeElement> {
  dateTime: string;
}

const DateTime = ({ dateTime, ...props }: DateTimeProps) => {
  const date = new Date(dateTime);
  const format = new Intl.DateTimeFormat(process.env.NEXT_PUBLIC_LANG, {
    timeStyle: "short",
    dateStyle: "long",
  });

  return (
    <time dateTime={dateTime} {...props}>
      {format.format(date)}
    </time>
  );
};

export default DateTime;
