import React from "react";
import MainHeader from "./MainHeader";

interface PropsType {
  children: React.ReactNode;
}

const Layout = (props: PropsType) => {
  return (
    <>
      <MainHeader />
      <main>{props.children}</main>
    </>
  );
};

export default Layout;
