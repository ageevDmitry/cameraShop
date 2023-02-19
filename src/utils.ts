import {Product} from '../src/types/product';

export const getMinMaxPriceProducts = (products: Product[]) => {

  const prices = products
    .map((item) => (item.price))
    .sort((a, b) => a - b);

  return [prices[0], prices[prices.length - 1]];
};
