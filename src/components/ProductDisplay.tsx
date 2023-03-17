import { Product } from "../shared/interfaces/product.interface";

type ProductDisplayProps = {
  product: Product;
};

export const ProductDisplay = ({ product }: ProductDisplayProps) => (
  <div>
    <p>{product.item}</p>
    <p>{product.unitPrice}</p>
    {product.specialPrice && <p>{product.specialPrice}</p>}
  </div>
);
