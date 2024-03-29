export enum AppRoute {
    Main = '/',
    Catalog = '/catalog/page_:pageNumber/',
    Product = 'product/:id',
    Cart = '/cart',
    NotFound = '/404',
  }

export enum LogoType {
    Header = '',
    Footer = '-mono',
  }

export const LOGO_CLASS_NAME = {
  [LogoType.Header]: 'header',
  [LogoType.Footer]: 'footer',
};

export const NAV_BREADCRUMB_MAIN = {
  title: 'Главная',
  href: AppRoute.Main,
};

export const NAV_BREADCRUMB_CATALOG = {
  title: 'Каталог',
  href: AppRoute.Catalog,
};

export const NAV_PAGES = [
  {
    title: 'Гарантии',
    href: AppRoute.NotFound,
  },
  {
    title: 'Доставка',
    href: AppRoute.NotFound,
  },
  {
    title: 'О компании',
    href: AppRoute.NotFound,
  },
];

export const RESOURCES_FOOTER_ITEMS = [
  {
    title: 'Курсы операторов',
    href: AppRoute.NotFound,
  },
  {
    title: 'Блог',
    href: AppRoute.NotFound,
  },
  {
    title: 'Сообщество',
    href: AppRoute.NotFound,
  },
];

export const SUPPORT_FOOTER_ITEMS = [
  {
    title: 'FAQ',
    href: AppRoute.NotFound,
  },
  {
    title: 'Задать вопрос',
    href: AppRoute.NotFound,
  },
];

export const SOCIAL_LINKS = [
  {
    type: 'ВКонтакте',
    svgLink: 'vk',
    href: 'https://vk.com/',
    label: 'Переход на страницу вконтатке'
  },
  {
    type: 'Pinterest',
    svgLink: 'pinterest',
    href: 'https://ru.pinterest.com/',
    label: 'Переход на страницу pinterest'
  },
  {
    type: 'Reddit',
    svgLink: 'reddit',
    href: 'https://www.reddit.com/',
    label: 'Переход на страницу reddit'
  },
];

export enum NameSpace {
  ProductsData = 'PRODUCTS-DATA',
  ProductsUI = 'PRODUCTS-UI',
}

export enum APIRoute {
  Products = 'cameras',
  Promo = 'promo',
  Reviews = 'reviews',
  Coupons = 'coupons',
  Orders = 'orders'
}

export const PRODUCT_RATING_COUNT = 5;

export const enum PaginationUI {
  ProductsView = 9,
}

export const enum ProductTab {
  Characteristics = '#characteristics',
  Description = '#description'
}

export const enum ComponentType {
  ProductsSimilar = 'productsSimilar',
  ProductCardRating = 'product',
  ReviewCardRating = 'review',
}

export const enum DefaultProductsSimilarView {
  StartItem = 0,
  EndItem = 3
}

export const enum DefaultReviewsView {
  StartItem = 0,
  EndItem = 3
}

export const enum DefaultMinMaxPriceItem {
  StartItem = 0,
  EndItem = 1
}
export const STEP_REVIEWS_VIEW = 3;


export const REVIEW_FORM_STATUSES = [
  {
    starNumber: 1,
    title: 'Ужасно'
  },
  {
    starNumber: 2,
    title: 'Плохо'
  },
  {
    starNumber: 3,
    title: 'Нормально'
  },
  {
    starNumber: 4,
    title: 'Хорошо'
  },
  {
    starNumber: 5,
    title: 'Отлично'
  },
];

export const DEFAULT_RATING_REVIEW = 0;

export enum QueryParam {
  StartItem = '_start',
  EndItem = '_end',
  NameLike = 'name_like',
  Sort = '_sort',
  Order = '_order',
  Type = 'type',
  Category = 'category',
  Level = 'level',
  MinPrice = 'price_gte',
  MaxPrice = 'price_lte',
}

export const DEFAULT_SEARCH_VALUE = '';

export enum SortCatalogType {
  Price = 'price',
  Rating = 'rating',
  Asc = 'asc',
  Desc = 'desc',
}

export const FilterCatalogLevel = [
  {
    title: 'Нулевой',
    name: 'zero',
  },
  {
    title: 'Любительский',
    name: 'non-professional',
  },
  {
    title: 'Профессиональный',
    name: 'professional',
  },
];

export const FilterCatalogCategory = [
  {
    title: 'Фотокамера',
    name: 'photocamera',
    type: 'Фотоаппарат',
    disable: ['Видеокамера'],
  },
  {
    title: 'Видеокамера',
    name: 'videocamera',
    type: 'Видеокамера',
    disable: ['Фотоаппарат', 'Плёночная', 'Моментальная'],
  },
];

export const FilterCatalogType = [
  {
    title: 'Цифровая',
    name: 'digital',
    disable: '#',
  },
  {
    title: 'Плёночная',
    name: 'film',
    disable: 'Видеокамера',
  },
  {
    title: 'Моментальная',
    name: 'snapshot',
    disable: 'Видеокамера',
  },
  {
    title: 'Коллекционная',
    name: 'collection',
    disable: '#',
  },
];

export enum FilterCatalogName {
  digital = 'Цифровая' ,
  film = 'Плёночная',
  snapshot = 'Моментальная',
  collection = 'Коллекционная',
  zero = 'Нулевой',
  nonProfessional = 'Любительский',
  professional = 'Профессиональный',
}

export const FILTER_CATALOG_TYPE_DEFAULT = [false, false, false, false];

export const FILTER_CATALOG_LEVEL_DEFAULT = [false, false, false];

export const DEFAULT_CATALOG_PAGE = '1';

export const BUTTON_CLASS = 'btn';

export const FORM_SUBMIT_CLASS = 'form-class-submit';

export const PAGINATION_LINK_CLASS = 'pagination__link';

export enum MinMaxCountProductCart {
  minCountProductCart = 1,
  maxCountProductCart = 99,
}

export enum isOrderPostStatus {
  orderNotPost = 'orderNotPost',
  orderPostFulfilled = 'orderPostFulfilled',
  orderPostRejected = 'orderPostRejected'
}
