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

export const getValidateMinCurrentPrice = (currentPrice: string,
  minProductsPrice: number | null) => {

  const inputCurrentPrice = parseFloat(currentPrice);

  if (minProductsPrice === null) {
    return inputCurrentPrice;
  } else if (inputCurrentPrice < minProductsPrice) {
    return minProductsPrice;
  } else {
    return inputCurrentPrice;
  }
};

export const getValidateMaxCurrentPrice = (currentPrice: string,
  maxProductsPrice: number | null) => {

  const inputCurrentPrice = parseFloat(currentPrice);

  if (maxProductsPrice === null) {
    return inputCurrentPrice;
  } else if (inputCurrentPrice > maxProductsPrice) {
    return maxProductsPrice;
  } else {
    return inputCurrentPrice;
  }
};
