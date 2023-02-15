export enum AppRoute {
    Main = '/',
    Catalog = 'catalog/:id',
    Product = 'product/:id',
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
  href: AppRoute.Main,
};

export const NAV_PAGES = [
  {
    title: 'Каталог',
    href: AppRoute.Main,
  },
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
}

export const PRODUCT_RATING_COUNT = 5;

export const enum PaginationUI {
  ProductsView = 9,
  DefaultCatalogPage = 1
}

export const enum ProductTab {
  Characteristics = 'characteristics',
  Description = 'description'
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
  NameLike = 'name_like',
}
