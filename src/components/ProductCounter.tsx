import { useEffect, useState } from "react";
import { Product } from "../shared/interfaces/product.interface";

type ProductCounterProps = {
  product: Product;
};

export const ProductCounter = ({ product }: ProductCounterProps) => {
  const [numberOfProduct, setNumberofProduct] = useState(0);
  const [totalCostOfProduct, setTotalCostOfProduct] = useState(0);

  useEffect(() => {
    const totalCost = calculatePrice(
      numberOfProduct,
      product.unitPrice,
      product.specialPrice
    );

    setTotalCostOfProduct(totalCost);
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
    <>
      <button
        onClick={decreaseCount}
        disabled={numberOfProduct <= 0 ? true : false}
      >
        -
      </button>
      <span>{numberOfProduct}</span>
      <button onClick={increaseCount}>+</button>
      <span>Total: £{totalCostOfProduct}</span>
    </>
  );
};
