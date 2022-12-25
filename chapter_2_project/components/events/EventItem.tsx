import React from "react";
import Image from "next/image";
import { EventType } from "../../types";
import Link from "next/link";

const EventItem = (props: EventType) => {
  const { title, image, date, location, id } = props;

  const humanReadableDate = new Date(date).toLocaleDateString(undefined, {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedAddress = location.replace(", ", "\n");
  const exploreLink = `/events/${id}`;

  return (
    <li>
      <Image
        src={"/" + image}
        alt="event-image"
        width={50}
        height={50}
        placeholder="blur"
        blurDataURL="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg"
      />
      <div>
        <div>
          <h2>{title}</h2>
          <div>
            <time>{humanReadableDate}</time>
          </div>
          <div>
            <address>{formattedAddress}</address>
          </div>
        </div>

        <div>
          <Link href={exploreLink}>Explore Event</Link>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
