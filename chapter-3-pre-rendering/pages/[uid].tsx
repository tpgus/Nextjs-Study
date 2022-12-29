import { GetServerSideProps } from "next";
import { ParsedUrlQuery } from "querystring";
import React from "react";

interface PropsType {
  id: string;
}

interface ParamsType extends ParsedUrlQuery {
  uid: string;
}

const UserIdPage = (props: PropsType) => {
  return <h1>{props.id}</h1>;
};

export default UserIdPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params } = context;
  const userId = (params as ParamsType).uid;

  console.log("server side code");
  return {
    props: { id: "userid-" + userId },
  };
};
