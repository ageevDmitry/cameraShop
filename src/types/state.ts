import {Product, Promo} from './product';
import {Review} from './review';
import {store} from '../store';
import {currentCatalogPagePath} from './ui';

export type ProductsData = {
    products: Product[];
    minPrice: number | null;
    maxPrice: number | null;
    productsTotalCount: number;
    promo?: Promo;
    productDetail?: Product;
    productsSimilar?: Product[];
    productsSearch?: Product[];
    reviews?: Review[];
    isCatalogPage: boolean;
    isDataLoading: boolean;
    isSuccess: boolean;
};

export type ProductsUI = {
    currentCatalogPagePath: currentCatalogPagePath;
    currentMinPrice: number | null;
    currentMaxPrice: number | null;
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
