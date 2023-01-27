import {createSlice} from '@reduxjs/toolkit';
import {NameSpace, PaginationUI} from '../../const';
import {ProductsUI} from '../../types/state';
import type {PayloadAction} from '@reduxjs/toolkit';

const initialState: ProductsUI = {
  currentCatalogPage: PaginationUI.DefaultCatalogPage,
};

export const productsUI = createSlice({
  name: NameSpace.ProductsUI,
  initialState,
  reducers: {
    changeCurrentCatalogPage: (state, action: PayloadAction<{page: number}>) => {
      state.currentCatalogPage = action.payload.page;
    },
  },
});

export const {changeCurrentCatalogPage} = productsUI.actions;
