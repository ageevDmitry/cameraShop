import {Product, Promo, ProductsReturnedData} from '../../src/types/product';
import {Review, ReviewPost} from '../../src/types/review';

export const review: Review = {
  id: '1',
  userName: 'Семен',
  advantage: 'С объективом',
  disadvantage: 'Железная',
  review: 'Клевая',
  rating: 5,
  createAt: String(new Date()),
  cameraId: 1,
};

export const reviews: Review[] = [
  {
    id: '1',
    userName: 'Семен',
    advantage: 'С объективом',
    disadvantage: 'Железная',
    review: 'Клевая',
    rating: 5,
    createAt: String(new Date()),
    cameraId: 1,
  },
  {
    id: '2',
    userName: 'Семен',
    advantage: 'С объективом',
    disadvantage: 'Железная',
    review: 'Клевая',
    rating: 5,
    createAt: String(new Date()),
    cameraId: 1,
  },
  {
    id: '3',
    userName: 'Семен',
    advantage: 'С объективом',
    disadvantage: 'Железная',
    review: 'Клевая',
    rating: 5,
    createAt: String(new Date()),
    cameraId: 1,
  },
  {
    id: '4',
    userName: 'Семен',
    advantage: 'С объективом',
    disadvantage: 'Железная',
    review: 'Клевая',
    rating: 5,
    createAt: String(new Date()),
    cameraId: 1,
  },
];


export const product: Product = {
  id: 1,
  name: 'Ретрокамера Dus Auge lV',
  vendorCode: 'DA4IU67AD5',
  type: 'Коллекционная',
  category: 'Видеокамера',
  description: 'Немецкий концерн BRW разработал видеокамеру Das Auge IV в начале 80-х годов, однако она до сих пор пользуется популярностью среди коллекционеров и яростных почитателей старинной техники. Вы тоже можете прикоснуться к волшебству аналоговой съёмки, заказав этот чудо-аппарат. Кто знает, может с Das Auge IV начнётся ваш путь к наградам всех престижных кинофестивалей.',
  level: 'Любительский',
  rating: 4,
  price: 73450,
  previewImg: 'img/content/das-auge.jpg',
  previewImg2x: 'img/content/das-auge@2x.jpg',
  previewImgWebp: 'img/content/das-auge.webp',
  previewImgWebp2x: 'img/content/das-auge@2x.webp',
  reviewCount: 6,
  reviews: reviews,
};

export const products: Product[] = [
  {
    id: 1,
    name: 'Ретрокамера Dus Auge lV',
    vendorCode: 'DA4IU67AD5',
    type: 'Коллекционная',
    category: 'Видеокамера',
    description: 'Немецкий концерн BRW разработал видеокамеру Das Auge IV в начале 80-х годов, однако она до сих пор пользуется популярностью среди коллекционеров и яростных почитателей старинной техники. Вы тоже можете прикоснуться к волшебству аналоговой съёмки, заказав этот чудо-аппарат. Кто знает, может с Das Auge IV начнётся ваш путь к наградам всех престижных кинофестивалей.',
    level: 'Любительский',
    rating: 4,
    price: 73450,
    previewImg: 'img/content/das-auge.jpg',
    previewImg2x: 'img/content/das-auge@2x.jpg',
    previewImgWebp: 'img/content/das-auge.webp',
    previewImgWebp2x: 'img/content/das-auge@2x.webp',
    reviewCount: 6,
    reviews: reviews,
  },
  {
    id: 2,
    name: 'Ретрокамера Dus Auge lV',
    vendorCode: 'DA4IU67AD5',
    type: 'Коллекционная',
    category: 'Видеокамера',
    description: 'Немецкий концерн BRW разработал видеокамеру Das Auge IV в начале 80-х годов, однако она до сих пор пользуется популярностью среди коллекционеров и яростных почитателей старинной техники. Вы тоже можете прикоснуться к волшебству аналоговой съёмки, заказав этот чудо-аппарат. Кто знает, может с Das Auge IV начнётся ваш путь к наградам всех престижных кинофестивалей.',
    level: 'Любительский',
    rating: 4,
    price: 73450,
    previewImg: 'img/content/das-auge.jpg',
    previewImg2x: 'img/content/das-auge@2x.jpg',
    previewImgWebp: 'img/content/das-auge.webp',
    previewImgWebp2x: 'img/content/das-auge@2x.webp',
    reviewCount: 6,
    reviews: reviews,
  },
  {
    id: 3,
    name: 'Ретрокамера Dus Auge lV',
    vendorCode: 'DA4IU67AD5',
    type: 'Коллекционная',
    category: 'Видеокамера',
    description: 'Немецкий концерн BRW разработал видеокамеру Das Auge IV в начале 80-х годов, однако она до сих пор пользуется популярностью среди коллекционеров и яростных почитателей старинной техники. Вы тоже можете прикоснуться к волшебству аналоговой съёмки, заказав этот чудо-аппарат. Кто знает, может с Das Auge IV начнётся ваш путь к наградам всех престижных кинофестивалей.',
    level: 'Любительский',
    rating: 4,
    price: 73450,
    previewImg: 'img/content/das-auge.jpg',
    previewImg2x: 'img/content/das-auge@2x.jpg',
    previewImgWebp: 'img/content/das-auge.webp',
    previewImgWebp2x: 'img/content/das-auge@2x.webp',
    reviewCount: 6,
    reviews: reviews,
  },
  {
    id: 4,
    name: 'Ретрокамера Dus Auge lV',
    vendorCode: 'DA4IU67AD5',
    type: 'Коллекционная',
    category: 'Видеокамера',
    description: 'Немецкий концерн BRW разработал видеокамеру Das Auge IV в начале 80-х годов, однако она до сих пор пользуется популярностью среди коллекционеров и яростных почитателей старинной техники. Вы тоже можете прикоснуться к волшебству аналоговой съёмки, заказав этот чудо-аппарат. Кто знает, может с Das Auge IV начнётся ваш путь к наградам всех престижных кинофестивалей.',
    level: 'Любительский',
    rating: 4,
    price: 73450,
    previewImg: 'img/content/das-auge.jpg',
    previewImg2x: 'img/content/das-auge@2x.jpg',
    previewImgWebp: 'img/content/das-auge.webp',
    previewImgWebp2x: 'img/content/das-auge@2x.webp',
    reviewCount: 6,
    reviews: reviews,
  },
];

export const productsReturnedData: ProductsReturnedData = {
  data: products,
  dataTotalCount: 40,
};

export const productsFetchParams = {
  startItem: 0,
  endItem: 9,
  sort: null,
  order: null,
  type: null,
  category: null,
  level: null,
  minPrice: null,
  maxPrice: null,
};

export const productsMinMaxFetchParams = {
  startItem: 0,
  endItem: 9,
  sort: null,
  order: null,
  type: null,
  category: null,
  level: null,
};

export const promo: Promo = {
  id: 1,
  name: 'Ретрокамера Dus Auge lV',
  previewImg: 'img/content/das-auge.jpg',
  previewImg2x: 'img/content/das-auge@2x.jpg',
  previewImgWebp: 'img/content/das-auge.webp',
  previewImgWebp2x: 'img/content/das-auge@2x.webp',
};

export const reviewPost: ReviewPost = {
  userName: 'Семен',
  advantage: 'С объективом',
  disadvantage: 'Железная',
  review: 'Клевая',
  rating: 5,
  cameraId: 1,
};

export const productsCart = [{
  product: {
    id: 1,
    name: 'Ретрокамера Dus Auge lV',
    vendorCode: 'DA4IU67AD5',
    type: 'Коллекционная',
    category: 'Видеокамера',
    description: 'Немецкий концерн BRW разработал видеокамеру Das Auge IV в начале 80-х годов, однако она до сих пор пользуется популярностью среди коллекционеров и яростных почитателей старинной техники. Вы тоже можете прикоснуться к волшебству аналоговой съёмки, заказав этот чудо-аппарат. Кто знает, может с Das Auge IV начнётся ваш путь к наградам всех престижных кинофестивалей.',
    level: 'Любительский',
    rating: 4,
    price: 73450,
    previewImg: 'img/content/das-auge.jpg',
    previewImg2x: 'img/content/das-auge@2x.jpg',
    previewImgWebp: 'img/content/das-auge.webp',
    previewImgWebp2x: 'img/content/das-auge@2x.webp',
    reviewCount: 6,
    reviews: reviews,
  },
  count: 1
}];

export const productCart = {
  product: {
    id: 1,
    name: 'Ретрокамера Dus Auge lV',
    vendorCode: 'DA4IU67AD5',
    type: 'Коллекционная',
    category: 'Видеокамера',
    description: 'Немецкий концерн BRW разработал видеокамеру Das Auge IV в начале 80-х годов, однако она до сих пор пользуется популярностью среди коллекционеров и яростных почитателей старинной техники. Вы тоже можете прикоснуться к волшебству аналоговой съёмки, заказав этот чудо-аппарат. Кто знает, может с Das Auge IV начнётся ваш путь к наградам всех престижных кинофестивалей.',
    level: 'Любительский',
    rating: 4,
    price: 73450,
    previewImg: 'img/content/das-auge.jpg',
    previewImg2x: 'img/content/das-auge@2x.jpg',
    previewImgWebp: 'img/content/das-auge.webp',
    previewImgWebp2x: 'img/content/das-auge@2x.webp',
    reviewCount: 6,
    reviews: reviews,
  },
  count: 1
};

export const coupon = {
  coupon: 'camera-555'
};

export const orderPost = {
  camerasIds: [1, 2, 3],
  coupon: 'camera-555'
};
