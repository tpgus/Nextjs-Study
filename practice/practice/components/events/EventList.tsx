import React from "react";
import classes from "./EventList.module.css";
import EventItem from "./EventItem";

interface PropsType {
  items: {
    id: string;
    title: string;
    description: string;
    location: string;
    date: string;
    image: string;
    isFeatured: boolean;
  }[];
}

const EventList = (props: PropsType) => {
  const items = props.items;
  return (
    <ul className={classes["list"]}>
      {items.map((event) => (
        <EventItem {...event} key={event.id} />
      ))}
    </ul>
  );
};

export default EventList;
