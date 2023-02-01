import dayjs from 'dayjs';
import {Review} from './types/review';

import {Product} from './types/product';

export function getCurrentProducts(items: Product[], count: number, current: number) {

  return items.slice(count * current - count, count * current);
}

export function getSortReviews(items: Review[]) {

  const sortItems = items.slice();

  return sortItems.sort((a, b) => dayjs(a.createAt).diff(dayjs(b.createAt)));
}
