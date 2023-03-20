export interface Product {
  item: string;
  unitPrice: number;
  specialPrice?: string;
}

export interface BasketProduct extends Product {
  totalCost: number;
}
