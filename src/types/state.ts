import {Product, Promo, ProductCart} from './product';
import {Review} from './review';
import {store} from '../store';
import {currentCatalogPagePath} from './ui';

export type ProductsData = {
    products: Product[];
    currentProductCart?: Product;
    productsCart: ProductCart[];
    minPrice: number | null;
    maxPrice: number | null;
    productsTotalCount: number;
    promo?: Promo;
    productDetail?: Product;
    productsSimilar?: Product[];
    productsSearch?: Product[];
    reviews?: Review[];
    coupon?: string;
    discount: number | null;
    isCatalogPage: boolean;
    isDataLoading: boolean;
    isSuccess: boolean;
    isCouponValid: boolean | undefined;
    isOrderPost: boolean | undefined;
};

export type ProductsUI = {
    currentCatalogPagePath: currentCatalogPagePath;
    currentMinPrice: number | null;
    currentMaxPrice: number | null;
    isModalAddCart: boolean;
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
