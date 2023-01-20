import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import fs from "fs/promises";
import path from "path";

interface ParamsType extends ParsedUrlQuery {
  pid: string;
}

interface Data {
  products: {
    id: string;
    title: string;
    description: string;
  }[];
}
interface PropsType {
  product: {
    id: string;
    title: string;
    description: string;
  };
}

const ProductDetailPage = (props: PropsType) => {
  const loadedProduct = props.product;

  if (!loadedProduct) return <p>Loading...</p>;

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
  const data: Data = JSON.parse(jsonData.toString());

  return data;
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;

  const productId = (params as ParamsType).pid;

  const data = await getData();

  const product = data.products.find((product) => product.id === productId);

  if (!product) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      product,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await getData();

  const ids = data.products.map((product) => product.id);
  const params = ids.map((id) => ({ params: { pid: id } }));

  return {
    paths: params,
    fallback: true,
  };
};
export default ProductDetailPage;
