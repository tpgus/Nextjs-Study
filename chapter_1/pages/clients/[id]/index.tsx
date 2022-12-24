import React from "react";
import { useRouter } from "next/router";

const ClientProjects = () => {
  const router = useRouter();
  console.log(router.query);

  const loadProjectHandler = () => {
    router.push("/clients/max/projecta");
  };

  return (
    <div>
      <h1>The Project of a Given Client</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
};

export default ClientProjects;
