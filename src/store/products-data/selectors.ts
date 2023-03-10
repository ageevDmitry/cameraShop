import {NameSpace} from '../../const';
import {State} from '../../types/state';
import {Product, Promo} from '../../types/product';
import {Review} from '../../types/review';

export const getProducts = (state: State): Product[] => state[NameSpace.ProductsData].products;
export const getMinProductsPrice = (state: State): number | null => state[NameSpace.ProductsData].minPrice;
export const getMaxProductsPrice = (state: State): number | null => state[NameSpace.ProductsData].maxPrice;
export const getProductsTotalCount = (state: State): number => state[NameSpace.ProductsData].productsTotalCount;
export const getPromo = (state: State): Promo | undefined => state[NameSpace.ProductsData].promo;
export const getProductDetail = (state: State): Product | undefined => state[NameSpace.ProductsData].productDetail;
export const getProductsSimilar = (state: State): Product[] | undefined => state[NameSpace.ProductsData].productsSimilar;
export const getProductsSearch = (state: State): Product[] | undefined => state[NameSpace.ProductsData].productsSearch;
export const getReviews = (state: State): Review[] | undefined => state[NameSpace.ProductsData].reviews;
export const getIsCatalogPage = (state: State): boolean => state[NameSpace.ProductsData].isCatalogPage;
export const getIsDataLoading = (state: State): boolean => state[NameSpace.ProductsData].isDataLoading;
