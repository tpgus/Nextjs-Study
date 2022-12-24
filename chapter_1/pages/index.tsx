import React from "react";
import Link from "next/link";

const Main = () => {
  return (
    <div>
      <h1>Main Page</h1>
      <ul>
        <li>
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link href="/clients">Clients</Link>
        </li>
      </ul>
    </div>
  );
};

export default Main;
