import {Product, Promo} from './product';
import {Review} from './review';
import {store} from '../store';

export type ProductsData = {
    products: Product[];
    productsTotalCount: number;
    promo?: Promo;
    productDetail?: Product;
    productsSimilar?: Product[];
    productsSearch?: Product[];
    reviews?: Review[];
    isDataLoading: boolean;
    isSuccess: boolean;
};

export type ProductsUI = {
    currentCatalogPage: number;
    currentSortType: string | null;
    currentOrderType: string | null;
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
