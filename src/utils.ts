
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

export const getFilterTypeArray = (array: string[] | null, type: string) => {

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
