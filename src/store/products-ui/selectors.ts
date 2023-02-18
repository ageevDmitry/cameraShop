import {NameSpace} from '../../const';
import {State} from '../../types/state';

export const getCurrentCatalogPage = (state: State): number => state[NameSpace.ProductsUI].currentCatalogPage;
export const getCurrentSortType = (state: State): string | null => state[NameSpace.ProductsUI].currentSortType;
export const getCurrentOrderType = (state: State): string | null => state[NameSpace.ProductsUI].currentOrderType;
