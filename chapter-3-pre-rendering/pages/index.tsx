import React from "react";
import Link from "next/link";
import path from "path";
import fs from "fs/promises";
import { GetStaticProps } from "next";

interface PropsType {
  products: {
    id: string;
    title: string;
  }[];
}

const MainPage = (props: PropsType) => {
  const { products } = props;
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <Link href={`/products/${product.id}`}>{product.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  console.log("re-generate");
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData.toString());

  if (!data) {
    return {
      redirect: {
        destination: "/no-data",
        permanent: false,
      },
    };
  }

  if (data.products.length === 0) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      products: data.products,
    },
    revalidate: 10,
  };
};

export default MainPage;
