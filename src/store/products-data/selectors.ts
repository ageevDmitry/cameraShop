import {NameSpace} from '../../const';
import {State} from '../../types/state';
import {Product, Promo} from '../../types/product';

export const getProducts = (state: State): Product[] => state[NameSpace.ProductsData].products;
export const getPromo = (state: State): Promo | undefined => state[NameSpace.ProductsData].promo;
export const getProductDetail = (state: State): Product | undefined => state[NameSpace.ProductsData].productDetail;
