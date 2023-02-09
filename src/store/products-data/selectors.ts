import {NameSpace} from '../../const';
import {State} from '../../types/state';
import {Product, Promo} from '../../types/product';
import {Review} from '../../types/review';

export const getProducts = (state: State): Product[] => state[NameSpace.ProductsData].products;
export const getPromo = (state: State): Promo | undefined => state[NameSpace.ProductsData].promo;
export const getProductDetail = (state: State): Product | undefined => state[NameSpace.ProductsData].productDetail;
export const getProductsSimilar = (state: State): Product[] | undefined => state[NameSpace.ProductsData].productsSimilar;
export const getReviews = (state: State): Review[] | undefined => state[NameSpace.ProductsData].reviews;
export const getIsSuccess = (state: State): boolean => state[NameSpace.ProductsData].isSuccess;
export const getIsDataLoading = (state: State): boolean => state[NameSpace.ProductsData].isDataLoading;
