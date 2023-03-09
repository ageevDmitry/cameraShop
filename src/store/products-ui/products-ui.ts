import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import {ProductsUI} from '../../types/state';
import {currentCatalogPagePath} from '../../types/ui';

import type {PayloadAction} from '@reduxjs/toolkit';

const initialState: ProductsUI = {
  currentCatalogPagePath: {} as currentCatalogPagePath,
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
    changeCurrentCatalogPagePath: (state, action: PayloadAction<currentCatalogPagePath>) => {
      state.currentCatalogPagePath = action.payload;
    },
    changeCurrentType: (state, action: PayloadAction<{type: string[] | null}>) => {
      state.currentType = action.payload.type;
    },
    changeCurrentMinPrice: (state, action: PayloadAction<{type: number | null}>) => {
      state.currentMinPrice = action.payload.type;
    },
    changeCurrentMaxPrice: (state, action: PayloadAction<{type: number | null}>) => {
      state.currentMaxPrice = action.payload.type;
    },
    cleanUpPrice: (state) => {
      state.currentMinPrice = null;
      state.currentMaxPrice = null;
    },
  },
});

export const {changeCurrentCatalogPagePath,
  changeCurrentType,
  changeCurrentMinPrice,
  changeCurrentMaxPrice,
  cleanUpPrice} = productsUI.actions;
