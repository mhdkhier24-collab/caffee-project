import { Metadata } from "next";
import { EventsHero } from "@/components/events/events-hero";
import { EventsCalendar } from "@/components/events/events-calendar";
import { EventsList } from "@/components/events/events-list";
import { EventsRegistration } from "@/components/events/events-registration";
import { PastEvents } from "@/components/events/past-events";
import { Partners } from "@/components/events/partners";

export const metadata: Metadata = {
  title: "Events | Caffe Syntax",
  description: "Join our Hack & Sip events, coding workshops, hackathons, and tech meetups. Connect with fellow developers over great coffee.",
};

export default function EventsPage() {
  return (
    <>
      <EventsHero />
      <EventsCalendar />
      <EventsList />

      <PastEvents />
      <Partners />
    </>
  );
}
