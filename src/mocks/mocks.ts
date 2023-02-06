import {Product, Promo} from '../../src/types/product';
import {Review} from '../../src/types/review';

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
};

export const products: Product[] = [
  product,
  product,
  product,
  product,
];

export const promo: Promo = {
  id: 1,
  name: 'Ретрокамера Dus Auge lV',
  previewImg: 'img/content/das-auge.jpg',
  previewImg2x: 'img/content/das-auge@2x.jpg',
  previewImgWebp: 'img/content/das-auge.webp',
  previewImgWebp2x: 'img/content/das-auge@2x.webp',
};

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
  review,
  review,
  review,
];
