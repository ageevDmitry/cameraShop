import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import {ProductsData} from '../../types/state';
import {fetchProductsAction,
} from '../api-action';

const initialState: ProductsData = {
  products: [],
};

export const productsData = createSlice({
  name: NameSpace.ProductsData,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchProductsAction.fulfilled, (state, action) => {
        state.products = action.payload;
      })
      .addCase(fetchProductsAction.rejected, (state) => {
        state.products = [];
      });
  }
});
