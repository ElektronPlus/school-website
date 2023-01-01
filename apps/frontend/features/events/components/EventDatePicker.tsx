"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const EventDatePicker = () => {
  const [date, setDate] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (date) {
      router.push(`/events/${date}`);
    }
  });

  return <input type="date" onChange={(event) => setDate(event.target.value)} />;
};

export default EventDatePicker;
