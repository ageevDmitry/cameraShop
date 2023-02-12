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

export type ProductsRange = {
    startItem: number;
    endItem: number;
}
