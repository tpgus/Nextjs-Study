import React from "react";
import useSwr from "swr";
import { useEffect, useState } from "react";
import { GetStaticProps } from "next";

interface SalesType {
  id: string;
  username: string;
  volume: number;
}

interface PropsType {
  sales: SalesType[];
}

const LastSalePage = (props: PropsType) => {
  const [sales, setSales] = useState<SalesType[]>(props.sales);
  //   const [isLoading, setIsLoading] = useState(false);

  const { data, error, isLoading } = useSwr(
    "https://react-http-323ac-default-rtdb.asia-southeast1.firebasedatabase.app/sales.json"
  );

  useEffect(() => {
    if (data) {
      const transformedSales = [];
      for (const key in data) {
        transformedSales.push({
          id: key,
          username: data[key].username as string,
          volume: data[key].volume as number,
        });
      }
      setSales(transformedSales);
    }
  }, [data]);

  if (error) {
    return <p>Failed to Load...</p>;
  }
  if (!data && !sales) {
    return <p>no data</p>;
  }

  return (
    <ul>
      {sales.map((sale) => (
        <li key={sale.id}>
          {sale.username} - ${sale.volume}
        </li>
      ))}
    </ul>
  );
};

export default LastSalePage;

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch(
    "https://react-http-323ac-default-rtdb.asia-southeast1.firebasedatabase.app/sales.json"
  );
  const data = await response.json();
  const transformedSales = [];
  for (const key in data) {
    transformedSales.push({
      id: key,
      username: data[key].username,
      volume: data[key].volume,
    });
  }
  return {
    props: { sales: transformedSales },
    revalidate: 10,
  };
};
