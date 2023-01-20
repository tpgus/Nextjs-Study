import { GetServerSideProps } from "next";
import { ParsedUrlQuery } from "querystring";
import React from "react";

interface PropsType {
  id: string;
}

interface Params extends ParsedUrlQuery {
  uid: string;
}
const UserIdPage = (props: PropsType) => {
  return <h1>{props.id}</h1>;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { uid: userId } = context.params as Params;

  console.log("server side code");
  return {
    props: { id: "user-" + userId },
  };
};

export default UserIdPage;
