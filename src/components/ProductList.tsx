import { Product } from "../shared/interfaces/product.interface";
import { ProductDisplay } from "./ProductDisplay";

type ProductListProps = {
  ProductList: Product[];
};

export const ProductList = ({ ProductList }: ProductListProps) => {
  return (
    <>
      {ProductList &&
        ProductList.map((product) => <ProductDisplay product={product} />)}
    </>
  );
};
