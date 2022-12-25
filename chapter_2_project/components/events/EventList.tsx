import React from "react";

import EventItem from "./EventItem";

import { EventsType } from "../../types";

interface PropsType {
  items: EventsType;
}

const EventList = (props: PropsType) => {
  const { items } = props;
  return (
    <ul>
      {items.map((event) => (
        <EventItem key={event.id} {...event} />
      ))}
    </ul>
  );
};

export default EventList;
