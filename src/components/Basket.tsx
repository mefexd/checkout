import { useEffect, useState } from "react";
import formatCurrency from "../shared/helpers/format-currency";
import useIsFirstRender from "../shared/hooks/useIsFirstRender";
import { BasketProduct, Product } from "../shared/interfaces/product.interface";
import { ProductCounter } from "./ProductCounter";

export const Basket = () => {
  const [basketTotal, setBasketTotal] = useState<BasketProduct[]>([]);
  const [productList, setProductList] = useState<Product[]>([]);
  const isFirst = useIsFirstRender();

  const fetchData = async () => {
    const response = await fetch("/services/mockProductListJson.json");
    const data = await response.json();
    setProductList(data.products);
  };

  const grandTotal = basketTotal.reduce((acc, val) => {
    return (acc += val.totalCost);
  }, 0);

  function handleBasketUpdate(addition: BasketProduct) {
    let updatedBasket: BasketProduct[];
    if (basketTotal.some((item) => item.item === addition.item)) {
      updatedBasket = basketTotal.map((item) =>
        item.item === addition.item ? addition : item
      );
      setBasketTotal(updatedBasket);
    } else {
      setBasketTotal([...basketTotal, addition]);
    }
  }

  useEffect(() => {
    if (isFirst) fetchData();
  });

  return (
    <>
      <div className="basket">
        {productList &&
          productList.map((product: Product) => (
            <div className="basket-item" key={product.item}>
              <h1>{product.item}</h1>
              <p>{formatCurrency(product.unitPrice)}</p>
              {product.specialPrice ? (
                <span>
                  <p className="special-offer">{product.specialPrice}</p>
                </span>
              ) : (
                "-"
              )}
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
