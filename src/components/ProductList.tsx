import { useEffect, useState } from "react";
import { Product } from "../shared/interfaces/product.interface";
import { ProductCounter } from "./ProductCounter";

type ProductDisplayProps = {
  product: Product;
};

type ProductListProps = {
  ProductList: Product[];
};

export const ProductList = ({ ProductList }: ProductListProps) => {
  return (
    <>
      {ProductList &&
        ProductList.map((product) => (
          <div key={product.item}>
            <p>{product.item}</p>
            <p>{product.unitPrice}</p>
            {product.specialPrice && <p>{product.specialPrice}</p>}
            <ProductCounter product={product} />
          </div>
        ))}
    </>
  );
};
