import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state.js';
import {Product, Promo} from '../types/product';
import {APIRoute} from '../const';

export const fetchProductsAction = createAsyncThunk<Product[], undefined, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }>(
    'data/fetchProducts',
    async (_arg, {extra: api}) => {
      const {data} = await api.get<Product[]>(APIRoute.Products);
      return data;
    },
  );

export const fetchPromoAction = createAsyncThunk<Promo, undefined, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }>(
    'data/fetchPromo',
    async (_arg, {extra: api}) => {
      const {data} = await api.get<Promo>(APIRoute.Promo);
      return data;
    },
  );
