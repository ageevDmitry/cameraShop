import {NameSpace} from '../../const';
import {State} from '../../types/state';
import {currentCatalogPagePath} from '../../types/ui';

export const getCurrentCatalogPagePath = (state: State): currentCatalogPagePath => state[NameSpace.ProductsUI].currentCatalogPagePath;
export const getCurrentMinPrice = (state: State): number | null => state[NameSpace.ProductsUI].currentMinPrice;
export const getCurrentMaxPrice = (state: State): number | null => state[NameSpace.ProductsUI].currentMaxPrice;
