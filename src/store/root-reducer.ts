import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from '../const';
import {productsData} from './products-data/products-data';
import { productsUI } from './products-ui/products-ui';

export const rootReducer = combineReducers({
  [NameSpace.ProductsData]: productsData.reducer,
  [NameSpace.ProductsUI]: productsUI.reducer,
});
