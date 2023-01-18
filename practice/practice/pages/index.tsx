import React from "react";
import EventList from "@/components/events/EventList";
import { getAllEvents, getFeaturedEvents } from "../dummy-data";

const AllEventsPage = () => {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  );
};

export default AllEventsPage;
