import {NameSpace} from '../../const';
import {State} from '../../types/state';

export const getCurrentCatalogPage = (state: State): number => state[NameSpace.ProductsUI].currentCatalogPage;
