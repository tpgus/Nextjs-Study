import React from "react";
import Link from "next/link";

const clients = [
  { id: "sehyun", name: "sehyun" },
  { id: "test", name: "test" },
  { id: "abc", name: "def" },
];

const ClientsPage = () => {
  return (
    <div>
      <h1>The Clients Page</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            {/* <Link
              href={{ pathname: "/clients/[id]", query: { id: client.id } }}
            >
              {client.name}
            </Link> */}
            <Link href={`/clients/${client.id}`}>{client.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientsPage;
