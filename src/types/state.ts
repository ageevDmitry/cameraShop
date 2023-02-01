import {Product, Promo} from './product';
import {Review} from './review';
import {store} from '../store';

export type ProductsData = {
    products: Product[];
    promo?: Promo;
    productDetail?: Product;
    productsSimilar?: Product[];
    reviews?: Review[];
};

export type ProductsUI = {
    currentCatalogPage: number;
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
