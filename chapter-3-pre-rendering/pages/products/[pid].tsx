import React from "react";
import fs from "fs/promises";
import path from "path";
import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import type { ProductType } from "../../types";

interface Params extends ParsedUrlQuery {
  pid: string;
}

interface PropsType {
  loadedProduct: ProductType;
}

const ProductDetailPage = (props: PropsType) => {
  const { loadedProduct } = props;

  if (!loadedProduct) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h1>{loadedProduct.title}</h1>
      <p>{loadedProduct.description}</p>
    </>
  );
};

const getData = async () => {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData.toString());

  return data;
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { pid: productId } = context.params as Params;
  const data = await getData();

  const product = data.products.find(
    (product: ProductType) => product.id === productId
  );

  if (!product) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      loadedProduct: product,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await getData();

  const ids = data.products.map((product: ProductType) => product.id);
  const pathWithParams = ids.map((id: string) => ({ params: { pid: id } }));

  return {
    //구체적인 pid 값에 대해 세 개의 페이지를 사전 생성하기 위해서 Nextjs는 각각의 pid에 대해 getStaticProps 함수를 호출한다(3번)
    //그리고 세 개의 페이지를 사전 생성한다.
    paths: pathWithParams,
    fallback: true,
    //true, false, 'blocking'
    //false: 모든 구체적인 매개변수 값에 대한 페이지를 생성할 때에는 false
    //즉, 이 외에는 모두 404에러다.
    //하지만 fallback이 true일 필요가 있고, (모든 페이지를 사전렌더링 하지 않을 경우)
    //사전에 정의되지 않은 매개변수, 즉 없는 데이터에 대한 페이지를 찾을 경우 404 페이지를 띄워줘야 할 경우
    // getStaticProps 에서 notFound 설정을 해줘야 한다.
    // fallback:true이고, 사전에 정의 되지 않은 매개변수, 즉 없는 데이터에 대한 페이지를 요청하면
    // getStaticProps에서 데이터 자체를 받아오지 못하고 컴포넌트에 전달되는 props도 비어있으므로 오류가 발생한다.
    // 로딩 스피너를 띄우는 것과 무관함 (로딩 스피너 이후에 오류 발생)
    // 로딩 스피너를 띄우고 정상적인 페이지를 만드는 경우는 데이터가 있을 경우임.
    // fallback이 true이고 없는 데이터에 대한 페이지를 요청한다? -> 로딩 스피너 이후에 404 페이지가 뜨는 것임.
  };
};

export default ProductDetailPage;
