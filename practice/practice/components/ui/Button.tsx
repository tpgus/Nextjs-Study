import React from "react";
import Link from "next/link";
import classes from "./Button.module.css";

interface PropsType {
  children: React.ReactNode;
  onClick?: () => void;
  link?: string;
}

const Button = (props: PropsType) => {
  if (props.link) {
    return (
      <Link href={props.link} className={classes["btn"]}>
        {props.children}
      </Link>
    );
  }

  return (
    <button className={classes["btn"]} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
