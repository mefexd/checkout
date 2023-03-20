import { useState } from "react";
import { Product } from "../shared/interfaces/product.interface";
import { ProductCounter } from "./ProductCounter";

type ProductDisplayProps = {
  product: Product;
};

export const ProductDisplay = ({ product }: ProductDisplayProps) => {
  return (
    <div>
      <p>{product.item}</p>
      <p>{product.unitPrice}</p>
      {product.specialPrice && <p>{product.specialPrice}</p>}
      <ProductCounter product={product} />
    </div>
  );
};
