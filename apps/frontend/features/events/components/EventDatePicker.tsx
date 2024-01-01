"use client";

import { Heading } from "components/Heading";
import { useRouter } from "next/navigation";
import { t } from "utils/translations";

const EventDatePicker = () => {
  const router = useRouter();

  return (
    <section aria-describedby="chooseDate">
      <Heading as="h2" id="chooseDate">{t("chooseDate")}</Heading>
      <input type="date" onChange={(event) => router.push(`/events/${event.target.value}`)} />
    </section>
  );
};

export default EventDatePicker;
