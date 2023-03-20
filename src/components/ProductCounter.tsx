import { useEffect, useState } from "react";
import { Product } from "../shared/interfaces/product.interface";
import useIsFirstRender from "../shared/hooks/useIsFirstRender";

type ProductCounterProps = {
  product: Product;
  addToBasket: Function;
};

export const ProductCounter = ({
  product,
  addToBasket,
}: ProductCounterProps) => {
  const [numberOfProduct, setNumberofProduct] = useState(0);
  const [totalCostOfProduct, setTotalCostOfProduct] = useState(0);
  const isFirst = useIsFirstRender();

  useEffect(() => {
    if (!isFirst) {
      const totalCost = calculatePrice(
        numberOfProduct,
        product.unitPrice,
        product.specialPrice
      );

      setTotalCostOfProduct(totalCost);

      const productForBasket = {
        ...product,
        totalCost: totalCost,
      };

      addToBasket(productForBasket);
    }
  }, [numberOfProduct]);

  const increaseCount = () => {
    setNumberofProduct(numberOfProduct + 1);
  };

  const decreaseCount = () => {
    setNumberofProduct(numberOfProduct - 1);
  };

  const calculatePrice = (
    numberOfProduct: number,
    unitPrice: number,
    specialPrice?: string
  ): number => {
    if (specialPrice) {
      const priceParams = specialPrice.split(" for ");

      const specialPricedItems = Math.floor(
        numberOfProduct / parseInt(priceParams[0])
      );

      const unitPricedItems =
        numberOfProduct - specialPricedItems * parseInt(priceParams[0]);

      const total =
        specialPricedItems * parseInt(priceParams[1]) +
        unitPricedItems * unitPrice;

      return total;
    } else {
      return unitPrice * numberOfProduct;
    }
  };

  return (
    <div className="counter-display">
      <button
        onClick={decreaseCount}
        disabled={numberOfProduct <= 0 ? true : false}
        name="remove item"
      >
        <img
          className="counter-icon remove-counter-icon"
          src={"/images/circle-minus.svg"}
          alt="minus icon"
        />
      </button>
      <span className="product-count">{numberOfProduct}</span>
      <button onClick={increaseCount} name="add item">
        <img
          className="counter-icon add-counter-icon"
          src={"/images/circle-plus.svg"}
          alt="plus icon"
        />
      </button>
      <span className="individual-product-cost">£{totalCostOfProduct}</span>
    </div>
  );
};
