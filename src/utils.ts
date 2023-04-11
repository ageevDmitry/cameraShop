
import {QueryParam, MinMaxCountProductCart} from './const';
import {ChangeEvent} from 'react';
import {Product, ProductCart} from './types/product';

export const getCurrentPriceString = (price: number | null) => {
  if (price !== null) {
    return String(price);
  } else {
    return ('');
  }
};

export const checkDisable = (searchParams: URLSearchParams, itemDisable: string | string[]) => {

  for (const value of searchParams.values()) {
    if (itemDisable.includes(value)) {
      return true;
    }
  }
};

export const getCurrentPriceState = (searchParams: URLSearchParams,
  setCurrentMinPriceState: (currentMinPriceState: string) => void,
  setCurrentMaxPriceState: (currentMaxPriceState: string) => void,
  minProductsPrice: number | null,
  maxProductsPrice: number | null) => {

  if (!searchParams.get(QueryParam.MinPrice)) {
    setCurrentMinPriceState('');
  }

  if (!searchParams.get(QueryParam.MaxPrice)) {
    setCurrentMaxPriceState('');
  }

  for (const [key, value] of searchParams.entries()) {
    if (key === QueryParam.MinPrice) {
      if (minProductsPrice !== null && Number(value) < minProductsPrice) {
        setCurrentMinPriceState(String(minProductsPrice));
      } else {
        setCurrentMinPriceState(value);
      }
    }

    if (key === QueryParam.MaxPrice) {
      if(maxProductsPrice !== null && Number(value) > maxProductsPrice) {
        setCurrentMaxPriceState(String(maxProductsPrice));
      } else {
        setCurrentMaxPriceState(value);
      }
    }
  }
};

const deleteFilterType = (searchParams: URLSearchParams, queryParam: string, itemType: string) => {

  const searchParamsValues = new Array(0);

  searchParams.getAll(queryParam).forEach((value) => {
    if (value === itemType) {
      return;
    }
    searchParamsValues.push(value);
  });

  searchParams.delete(queryParam);

  searchParamsValues.forEach((value: string) => {
    searchParams.append(queryParam, value);
  });

  return searchParams;
};

export const checkFilter = (searchParams: URLSearchParams, queryParam: string, itemType: string) => {

  const searchParamsValues = Array.from(searchParams.values());

  if (searchParamsValues.includes(itemType)) {
    deleteFilterType(searchParams, queryParam, itemType);
  } else {
    searchParams.append(queryParam, itemType);
  }

  return searchParams;
};

export const cleanUpSearchParams = (searchParams: URLSearchParams) => {

  searchParams.delete(QueryParam.Category);
  searchParams.delete(QueryParam.Type);
  searchParams.delete(QueryParam.Level);
  searchParams.delete(QueryParam.MaxPrice);
  searchParams.delete(QueryParam.MinPrice);

  return searchParams;
};

export const changeFilterPrice = (searchParams: URLSearchParams,
  currentMinPrice: number | null,
  currentMaxPrice: number | null
) => {

  if (currentMinPrice !== null) {
    searchParams.set(QueryParam.MinPrice, String(currentMinPrice));
  } else {
    searchParams.delete(QueryParam.MinPrice);
  }

  if (currentMaxPrice !== null) {
    searchParams.set(QueryParam.MaxPrice, String(currentMaxPrice));
  } else {
    searchParams.delete(QueryParam.MaxPrice);
  }

  return searchParams;
};

export const getValidatedCurrentMinPrice = (currentPrice: string,
  minProductsPrice: number | null) => {

  if (currentPrice === '') {
    return null;
  }

  const inputCurrentPrice = parseFloat(currentPrice);

  if (minProductsPrice === null) {
    return inputCurrentPrice;
  }

  if (inputCurrentPrice < minProductsPrice) {
    return minProductsPrice;
  }

  return inputCurrentPrice;
};

export const getValidatedCurrentMaxPrice = (currentPrice: string,
  maxProductsPrice: number | null,
  minCurrentPrice: string) => {

  if (currentPrice === '') {
    return null;
  }

  const inputCurrentPrice = parseFloat(currentPrice);
  const minCurrentPriceNumber = Number(minCurrentPrice);

  if (maxProductsPrice === null) {
    return inputCurrentPrice;
  }

  if (inputCurrentPrice > maxProductsPrice) {
    return maxProductsPrice;
  }

  if (inputCurrentPrice < minCurrentPriceNumber) {
    return minCurrentPriceNumber;
  }

  return inputCurrentPrice;
};

export const getValidatedCurrentMaxPriceState = (currentPrice: string,
  minCurrentPrice: string) => {

  if (currentPrice === '') {
    return '';
  }

  const inputCurrentPrice = parseFloat(currentPrice);
  const minCurrentPriceNumber = Number(minCurrentPrice);

  if (inputCurrentPrice < minCurrentPriceNumber) {
    return String(minCurrentPriceNumber);
  }

  return String(inputCurrentPrice);

};

export const getValidatedCurrentPriceState = (evt: ChangeEvent<HTMLInputElement>,
  setCurrentMaxPriceState: (currentPriceState: string) => void) => {

  if (evt.target.value !== '') {
    const inputValue = parseFloat(evt.target.value);
    if (inputValue < 0) {
      setCurrentMaxPriceState('');
    }
    setCurrentMaxPriceState(String(inputValue));

  } else {
    setCurrentMaxPriceState('');
  }
};

export const checkAddProductsCart = (productsCart: ProductCart[], product: Product) => {

  const foo = {
    product: product,
    count: 1,
  };

  if (productsCart.length === 0) {

    productsCart.push(foo);

    return productsCart;
  }

  const productsCardIds = [];

  for (const item of productsCart) {

    productsCardIds.push(item.product.id);

    if (item.product.id === product.id) {
      item.count = item.count + 1;
    }
  }

  if (!productsCardIds.includes(product.id)) {
    productsCart.push(foo);
  }

  return productsCart;
};

export const checkDeleteProductsCart = (productsCart: ProductCart[], product: Product) => {

  if (productsCart.length === 0) {

    return productsCart;
  }

  productsCart.forEach((item, i) => {
    if (item.product.id === product.id) {
      productsCart.splice(i, 1);
    }
  });

  return productsCart;
};

export const checkProductInCart = (productsCart: ProductCart[], product: Product) => {

  for (const item of productsCart) {

    if (item.product.id === product.id) {
      return true;
    }
  }
  return false;
};

export const getCountProductsInCart = (productsCart: ProductCart[]) => {

  if (productsCart.length === 0) {
    return 0;
  }

  let count = 0;

  for (const item of productsCart) {

    count = count + item.count;
  }
  return count;
};

export const checkCountProductCart = (productsCart: ProductCart[], changedProductCart: ProductCart) => {

  for (const item of productsCart) {

    if (item.product.id === changedProductCart.product.id) {

      item.count = changedProductCart.count;
    }
  }
  return productsCart;
};

export const getValidatedCountProductCart = (count: number) => {

  if (count < MinMaxCountProductCart.minCountProductCart) {
    return MinMaxCountProductCart.minCountProductCart;
  }

  if (count > MinMaxCountProductCart.maxCountProductCart) {
    return MinMaxCountProductCart.maxCountProductCart;
  }

  return count;
};

export const checkCategoryDescription = (category: string) => {

  const newCategory = category.toLowerCase();

  if (newCategory === 'фотоаппарат') {
    return 'фотокамера';
  }
  return newCategory;
};

export const getTotal = (productsCart: ProductCart[]) => {

  let total = 0;

  for (const item of productsCart) {

    total = total + Number(item.product.price) * Number(item.count);
  }
  return total;
};

export const getBill = (productsCart: ProductCart[], productsCartDiscount: number) => {

  let bill = 0;

  for (const item of productsCart) {

    bill = bill + Number(item.product.price) * Number(item.count);
  }

  const billDiscount = bill - productsCartDiscount;

  return billDiscount;
};
