import { Product } from "../shared/interfaces/product.interface";

type ProductListProps = {
  ProductList: Product[];
};

export const ProductList = ({ ProductList }: ProductListProps) => (
  <div>
    {ProductList && ProductList.map((product) => <div>{product.item}</div>)}
  </div>
);
