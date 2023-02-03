import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state.js';
import {Product, Promo} from '../types/product';
import {Review, ReviewPost} from '../types/review';
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

export const fetchProductDetailAction = createAsyncThunk<Product, string, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }>(
    'data/fetchProductDetail',
    async (id, {extra: api}) => {
      const {data} = await api.get<Product>(`${APIRoute.Products}/${id}`);
      return data;
    },
  );

export const fetchProductsSimilarAction = createAsyncThunk<Product[], string, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }>(
    'data/fetchProductsSimilar',
    async (id, {extra: api}) => {
      const {data} = await api.get<Product[]>(`${APIRoute.Products}/${id}/similar`);
      return data;
    },
  );

export const fetchReviewsAction = createAsyncThunk<Review[], string, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }>(
    'data/fetchReviews',
    async (id, {extra: api}) => {
      const {data} = await api.get<Review[]>(`${APIRoute.Products}/${id}/reviews`);
      return data;
    },
  );

export const sendNewReviewAction = createAsyncThunk<ReviewPost, ReviewPost, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }>(
    'data/sendReview',
    async (userReview, {extra: api}) => {
      const {data} = await api.post<ReviewPost>(APIRoute.Reviews, userReview);
      return data;
    },
  );
