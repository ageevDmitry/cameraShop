import {Review} from './review';

export type Product = {
    id: number;
    name: string;
    vendorCode: string;
    type: string;
    category: string;
    description: string;
    level: string;
    rating: number;
    price: number;
    previewImg: string;
    previewImg2x: string;
    previewImgWebp: string;
    previewImgWebp2x: string;
    reviewCount: number;
    reviews: Review[];
}

export type Promo = {
    id: number;
    name: string;
    previewImg: string;
    previewImg2x: string;
    previewImgWebp: string;
    previewImgWebp2x: string;
}

export type ProductsReturnedData = {
    data: Product[];
    dataTotalCount: number;
}

export type ProductsFetchParams = {
    startItem: number;
    endItem: number;
    sort: string | null;
    order: string | null;
    category: string | null;
    type: string |string[] | null;
    level: string | string[] | null;
    minPrice: string | null;
    maxPrice: string | null;
}

export type ProductsMinPriceFetchParams = {
    category: string | null;
    type: string | string[] | null;
    level: string | string[] | null;
}

export type ProductCart = {
    product: Product;
    count: number;
}

export type OrdersPost = {
    camerasIds: number[];
    coupon: string | null;
}
