import {createSlice} from '@reduxjs/toolkit';
import {NameSpace, PaginationUI} from '../../const';
import {ProductsUI} from '../../types/state';
import type {PayloadAction} from '@reduxjs/toolkit';

const initialState: ProductsUI = {
  currentCatalogPage: PaginationUI.DefaultCatalogPage,
  currentSortType: null,
  currentOrderType: null,
};

export const productsUI = createSlice({
  name: NameSpace.ProductsUI,
  initialState,
  reducers: {
    changeCurrentCatalogPage: (state, action: PayloadAction<{page: number}>) => {
      state.currentCatalogPage = action.payload.page;
    },
    changeCurrentSortType: (state, action: PayloadAction<{type: string}>) => {
      state.currentSortType = action.payload.type;
    },
    changeCurrentOrderType: (state, action: PayloadAction<{type: string}>) => {
      state.currentSortType = action.payload.type;
    },
  },

});

export const {changeCurrentCatalogPage, changeCurrentSortType, changeCurrentOrderType} = productsUI.actions;
