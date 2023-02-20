import {Product} from '../src/types/product';

export const getMinMaxPriceProducts = (products: Product[]) => {

  const prices = products
    .map((item) => (item.price))
    .sort((a, b) => a - b);

  return [prices[0], prices[prices.length - 1]];
};

export const getFilterTypeArray = (array: string[] | null, type: string) => {

  if (array === null) {
    const newArray = new Array(type);
    return newArray;
  } else if (array.includes(type)) {
    const newArray = array.filter((item) => item !== type);
    if (newArray === undefined) {
      return null;
    } else {
      return newArray;
    }
  } else {
    const newArray = array?.slice();
    newArray.push(type);
    return newArray;
  }
};
