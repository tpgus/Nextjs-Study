import React from "react";
import Link from "next/link";
import classes from "./EventItem.module.css";
import Button from "../ui/Button";

interface PropsType {
  id: string;
  title: string;
  description: string;
  location: string;
  date: string;
  image: string;
  isFeatured: boolean;
}

const EventItem = (props: PropsType) => {
  const { title, image, location, date, id } = props;
  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedAddress = location.replace(", ", "\n");
  const exploreLink = `/events/${id}`;

  return (
    <li className={classes["item"]}>
      <img src={"/" + image} alt={title} />
      <div className={classes["content"]}>
        <div className={classes["summary"]}>
          <h2>{title}</h2>
          <div className={classes["date"]}>
            <time>{humanReadableDate}</time>
          </div>
        </div>
        <div className={classes["address"]}>
          <address>{formattedAddress}</address>
        </div>
        <div className={classes["actions"]}>
          <Button link={exploreLink}>explore event</Button>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
