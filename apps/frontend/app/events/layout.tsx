import dynamic from "next/dynamic";
import type { ReactNode } from "react";

interface EventsLayoutProps {
  children: ReactNode;
  params: { date: string };
}

const EventDatePicker = dynamic(() => import("features/events/components/EventDatePicker"), {
  loading: () => <p>...</p>,
});

export default function EventsLayout({ children }: EventsLayoutProps) {
  return (
    <>
      <EventDatePicker />
      {children}
    </>
  );
}
