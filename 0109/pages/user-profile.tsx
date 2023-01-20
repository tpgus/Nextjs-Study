import { GetServerSideProps } from "next";
import React from "react";

const UserProfilePage = ({ userName }: { userName: string }) => {
  return <h1>{userName}</h1>;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params, req, res } = context;
  console.log("server side code");
  return {
    props: { userName: "max" },
  };
};
export default UserProfilePage;
