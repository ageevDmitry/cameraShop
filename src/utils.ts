
import {FilterCatalogName,
  FILTER_CATALOG_TYPE_DEFAULT,
  FILTER_CATALOG_LEVEL_DEFAULT} from './const';

export const checkDisable = (currentCategory: string | null, currentType: string[] | null, itemDisable: string[]) => {

  if (currentType !== null) {
    for (const value of itemDisable) {
      const foo = currentType.includes(value);
      if (foo) {
        return true;
      }
    }
  } else if (currentCategory !== null && (itemDisable.includes(currentCategory))) {
    return true;
  } else {
    return false;
  }
};

export const checkCheckBox = (currentType: string[] | null, itemChecked: string) => {
  if (currentType !== null) {
    const flag = currentType.includes(itemChecked);
    return flag;
  } else {
    return false;
  }
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

export const getValidateMinCurrentPrice = (currentPrice: string,
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

export const getValidateMaxCurrentPrice = (currentPrice: string,
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

export const getValidateMaxStatePrice = (currentPrice: string,
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

export const getStringCurrentPrice = (currentPrice: number | null) => {

  if (currentPrice === null) {
    return '';
  } else {
    return String(currentPrice);
  }
};

export const getCurrentTypeState = (currentType: string[] | null) => {

  const currentTypeState = FILTER_CATALOG_TYPE_DEFAULT;

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

  const currentLevelState = FILTER_CATALOG_LEVEL_DEFAULT;

  if (currentLevel === null) {
    return currentLevelState;
  }

  (currentLevel.includes(FilterCatalogName.zero)) ? currentLevelState[0] = true : currentLevelState[0] = false;
  (currentLevel.includes(FilterCatalogName.nonProfessional)) ? currentLevelState[1] = true : currentLevelState[1] = false;
  (currentLevel.includes(FilterCatalogName.professional)) ? currentLevelState[2] = true : currentLevelState[2] = false;

  return currentLevelState;
};
