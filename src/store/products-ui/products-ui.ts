import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import {ProductsUI} from '../../types/state';
import {currentCatalogPagePath} from '../../types/ui';

import type {PayloadAction} from '@reduxjs/toolkit';

const initialState: ProductsUI = {
  currentCatalogPagePath: {} as currentCatalogPagePath,
  currentMinPrice: null,
  currentMaxPrice: null,
  isModalAddCart: false,
};

export const productsUI = createSlice({
  name: NameSpace.ProductsUI,
  initialState,
  reducers: {
    changeCurrentCatalogPagePath: (state, action: PayloadAction<currentCatalogPagePath>) => {
      state.currentCatalogPagePath = action.payload;
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
    changeIsModalAdd: (state, action: PayloadAction<{type: boolean}>) => {
      state.isModalAddCart = action.payload.type;
    }
  },
});

export const {changeCurrentCatalogPagePath,
  changeCurrentMinPrice,
  changeCurrentMaxPrice,
  cleanUpPrice,
  changeIsModalAdd
} = productsUI.actions;
