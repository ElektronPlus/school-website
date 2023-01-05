"use client";

import { Heading } from "components/Heading";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { t } from "utils/translations";

const EventDatePicker = () => {
  const [date, setDate] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (date) {
      router.push(`/events/${date}`);
    }
  });

  return (
    <section aria-describedby="chooseDate">
      <Heading as="h2" id="chooseDate">{t("chooseDate")}</Heading>
      <input type="date" onChange={(event) => setDate(event.target.value)} />
    </section>
  );
};

export default EventDatePicker;
