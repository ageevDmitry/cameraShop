import {Product} from './types/product';

export function getCurrentProducts(items: Product[], count: number, current: number) {

  return items.slice(count * current - count, count * current);
}

