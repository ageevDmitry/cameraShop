import {createSlice} from '@reduxjs/toolkit';
import {NameSpace, PaginationUI} from '../../const';
import {ProductsUI} from '../../types/state';
import type {PayloadAction} from '@reduxjs/toolkit';

const initialState: ProductsUI = {
  currentCatalogPage: PaginationUI.DefaultCatalogPage,
  currentSort: null,
  currentOrder: null,
  currentType: null,
  currentCategory: null,
  currentLevel: null,
  currentMinPrice: null,
  currentMaxPrice: null,
};

export const productsUI = createSlice({
  name: NameSpace.ProductsUI,
  initialState,
  reducers: {
    changeCurrentCatalogPage: (state, action: PayloadAction<{page: number}>) => {
      state.currentCatalogPage = action.payload.page;
    },
    changeCurrentSort: (state, action: PayloadAction<{type: string}>) => {
      state.currentSort = action.payload.type;
    },
    changeCurrentOrder: (state, action: PayloadAction<{type: string}>) => {
      state.currentOrder = action.payload.type;
    },
    changeCurrentCategory: (state, action: PayloadAction<{type: string | null}>) => {
      state.currentCategory = action.payload.type;
    },
    changeCurrentType: (state, action: PayloadAction<{type: string[] | null}>) => {
      state.currentType = action.payload.type;
    },
    changeCurrentLevel: (state, action: PayloadAction<{type: string[] | null}>) => {
      state.currentLevel = action.payload.type;
    },
    changeCurrentMinPrice: (state, action: PayloadAction<{type: number | null}>) => {
      state.currentMinPrice = action.payload.type;
    },
    changeCurrentMaxPrice: (state, action: PayloadAction<{type: number | null}>) => {
      state.currentMaxPrice = action.payload.type;
    },
    cleanUpFilter: (state) => {
      state.currentOrder = null;
      state.currentType = null;
      state.currentCategory = null;
      state.currentLevel = null;
      state.currentMinPrice = null;
      state.currentMaxPrice = null;
    },
  },
});

export const {changeCurrentCatalogPage,
  changeCurrentSort,
  changeCurrentOrder,
  changeCurrentType,
  changeCurrentCategory,
  changeCurrentLevel,
  changeCurrentMinPrice,
  changeCurrentMaxPrice,
  cleanUpFilter} = productsUI.actions;
