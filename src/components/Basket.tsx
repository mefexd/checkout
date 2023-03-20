import { useEffect, useRef, useState } from "react";
import formatCurrency from "../shared/helpers/format-currency";
import { BasketProduct, Product } from "../shared/interfaces/product.interface";
import { ProductCounter } from "./ProductCounter";

type BasketProps = {
  BasketItems: Product[];
};

export const Basket = ({ BasketItems }: BasketProps) => {
  const [basketTotal, setBasketTotal] = useState<BasketProduct[]>([]);

  const grandTotal = basketTotal.reduce((acc, val) => {
    return (acc += val.totalCost);
  }, 0);

  function handleBasketUpdate(addition: BasketProduct) {
    let updatedBasket: BasketProduct[];
    console.log(basketTotal);
    if (basketTotal.some((item) => item.item === addition.item)) {
      updatedBasket = basketTotal.map((item) =>
        item.item === addition.item ? addition : item
      );
      setBasketTotal(updatedBasket);
    } else {
      setBasketTotal([...basketTotal, addition]);
    }
  }

  return (
    <>
      <div className="basket">
        {BasketItems &&
          BasketItems.map((product) => (
            <div className="basket-item" key={product.item}>
              <h1>{product.item}</h1>
              <p>{formatCurrency(product.unitPrice)}</p>
              {product.specialPrice ? <p>{product.specialPrice}</p> : "-"}
              <ProductCounter
                product={product}
                addToBasket={handleBasketUpdate}
              />
            </div>
          ))}
        <div className="checkout-display">
          <h2>Total: {formatCurrency(grandTotal)}</h2>
        </div>
      </div>
    </>
  );
};
