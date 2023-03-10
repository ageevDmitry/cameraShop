
import {QueryParam} from './const';
import {ChangeEvent} from 'react';

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
  setCurrentMaxPriceState: (currentMaxPriceState: string) => void) => {

  if (!searchParams.get(QueryParam.MinPrice)) {
    setCurrentMinPriceState('');
  }

  if (!searchParams.get(QueryParam.MaxPrice)) {
    setCurrentMaxPriceState('');
  }

  for (const [key, value] of searchParams.entries()) {
    if (key === QueryParam.MinPrice) {
      setCurrentMinPriceState(value);
    }
  }

  for (const [key, value] of searchParams.entries()) {
    if (key === QueryParam.MaxPrice) {
      setCurrentMaxPriceState(value);
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
  } else {
    const inputCurrentPrice = parseFloat(currentPrice);

    if (minProductsPrice === null) {
      return inputCurrentPrice;
    } else if (inputCurrentPrice < minProductsPrice) {
      return minProductsPrice;
    } else {
      return inputCurrentPrice;
    }
  }
};

export const getValidatedCurrentMaxPrice = (currentPrice: string,
  maxProductsPrice: number | null,
  minCurrentPrice: string) => {

  if (currentPrice === '') {
    return null;
  } else {
    const inputCurrentPrice = parseFloat(currentPrice);
    const minCurrentPriceNumber = Number(minCurrentPrice);

    if (maxProductsPrice === null) {
      return inputCurrentPrice;
    } else if (inputCurrentPrice > maxProductsPrice) {
      return maxProductsPrice;
    } else if (inputCurrentPrice < minCurrentPriceNumber) {
      return minCurrentPriceNumber;
    } else {
      return inputCurrentPrice;
    }
  }
};

export const getValidatedCurrentMaxPriceState = (currentPrice: string,
  minCurrentPrice: string) => {

  if (currentPrice === '') {
    return '';
  } else {
    const inputCurrentPrice = parseFloat(currentPrice);
    const minCurrentPriceNumber = Number(minCurrentPrice);

    if (inputCurrentPrice < minCurrentPriceNumber) {
      return String(minCurrentPriceNumber);
    } else {
      return String(inputCurrentPrice);
    }
  }
};

export const getValidatedCurrentPriceState = (evt: ChangeEvent<HTMLInputElement>,
  setCurrentMaxPriceState: (currentPriceState: string) => void) => {

  if (evt.target.value !== '') {
    const inputValue = parseFloat(evt.target.value);
    if (inputValue < 0) {
      setCurrentMaxPriceState('');
    } else {
      setCurrentMaxPriceState(String(inputValue));
    }
  } else {
    setCurrentMaxPriceState('');
  }
};
