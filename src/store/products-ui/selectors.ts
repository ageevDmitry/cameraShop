import {NameSpace} from '../../const';
import {State} from '../../types/state';
import {currentCatalogPagePath} from '../../types/ui';

export const getCurrentCatalogPagePath = (state: State): currentCatalogPagePath => state[NameSpace.ProductsUI].currentCatalogPagePath;
export const getCurrentSort = (state: State): string | null => state[NameSpace.ProductsUI].currentSort;
export const getCurrentOrder = (state: State): string | null => state[NameSpace.ProductsUI].currentOrder;
export const getCurrentCategory = (state: State): string | null => state[NameSpace.ProductsUI].currentCategory;
export const getCurrentType = (state: State): string[] | null => state[NameSpace.ProductsUI].currentType;
export const getCurrentLevel = (state: State): string[] | null => state[NameSpace.ProductsUI].currentLevel;
export const getCurrentMinPrice = (state: State): number | null => state[NameSpace.ProductsUI].currentMinPrice;
export const getCurrentMaxPrice = (state: State): number | null => state[NameSpace.ProductsUI].currentMaxPrice;
