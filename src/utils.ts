
import {FilterCatalogName,
  FILTER_CATALOG_TYPE_DEFAULT,
  FILTER_CATALOG_LEVEL_DEFAULT, QueryParam} from './const';
import {ChangeEvent} from 'react';

export const setPrice = (price: number | null) => {
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

export const cleanUpFilter = (searchParams: URLSearchParams) => {

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

export const getFilterArray = (array: string[] | null, type: string) => {

  if (array === null) {
    const newArray = new Array(type);
    return newArray;
  } else if (array.includes(type)) {
    const newArray = array.filter((item) => item !== type);
    if (newArray.length === 0) {
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

export const getCurrentTypeState = (currentType: string[] | null) => {

  const currentTypeState = FILTER_CATALOG_TYPE_DEFAULT.slice();

  if (currentType === null) {
    return currentTypeState;
  }

  (currentType.includes(FilterCatalogName.digital)) ? currentTypeState[0] = true : currentTypeState[0] = false;
  (currentType.includes(FilterCatalogName.film)) ? currentTypeState[1] = true : currentTypeState[1] = false;
  (currentType.includes(FilterCatalogName.snapshot)) ? currentTypeState[2] = true : currentTypeState[2] = false;
  (currentType.includes(FilterCatalogName.collection)) ? currentTypeState[3] = true : currentTypeState[3] = false;

  return currentTypeState;
};

export const getCurrentLevelState = (currentLevel: string[] | null) => {

  const currentLevelState = FILTER_CATALOG_LEVEL_DEFAULT.slice();

  if (currentLevel === null) {
    return currentLevelState;
  }

  (currentLevel.includes(FilterCatalogName.zero)) ? currentLevelState[0] = true : currentLevelState[0] = false;
  (currentLevel.includes(FilterCatalogName.nonProfessional)) ? currentLevelState[1] = true : currentLevelState[1] = false;
  (currentLevel.includes(FilterCatalogName.professional)) ? currentLevelState[2] = true : currentLevelState[2] = false;

  return currentLevelState;
};
