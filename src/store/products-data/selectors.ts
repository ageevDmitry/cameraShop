import {NameSpace} from '../../const';
import {State} from '../../types/state';
import {Product} from '../../types/product';

export const getProducts = (state: State): Product[] => state[NameSpace.ProductsData].products;
