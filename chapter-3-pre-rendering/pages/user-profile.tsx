import { GetServerSideProps } from "next";
import { ParsedUrlQuery } from "querystring";
import React from "react";

interface PropsType {
  username: string;
}

const UserProfile = (props: PropsType) => {
  return <h1>{props.username}</h1>;
};

export default UserProfile;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { req, res } = context;

  return {
    props: {
      username: "se hyun",
    },
  };
};
