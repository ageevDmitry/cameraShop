import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state.js';
import {Product,
  Promo,
  ProductsReturnedData,
  ProductsFetchParams,
  ProductsMinPriceFetchParams} from '../types/product';
import {Review, ReviewPost} from '../types/review';
import {APIRoute,
  QueryParam,
  SortCatalogType,
  DefaultMinMaxPriceItem
} from '../const';

export const fetchProductsAction = createAsyncThunk<ProductsReturnedData, ProductsFetchParams,{
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }>(
    'data/fetchProducts',
    async ({startItem,
      endItem,
      sort,
      order,
      category,
      type,
      level,
      minPrice,
      maxPrice}, {extra: api}) => {
      const response = await api.get<Product[]>(APIRoute.Products, {
        params: {
          [QueryParam.StartItem]: startItem,
          [QueryParam.EndItem]: endItem,
          [QueryParam.Sort]: sort,
          [QueryParam.Order]: order,
          [QueryParam.Category]: category,
          [QueryParam.Type]: type,
          [QueryParam.Level]: level,
          [QueryParam.MinPrice]: minPrice,
          [QueryParam.MaxPrice]: maxPrice,
        }
      });
      return {
        data: response.data,
        dataTotalCount: Number(response.headers['x-total-count'])
      };
    }
  );

export const fetchMinPriceProductsAction = createAsyncThunk<number, ProductsMinPriceFetchParams,{
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }>(
    'data/fetchMinPriceProducts',
    async ({category,
      type,
      level,
    }, {extra: api}) => {
      const response = await api.get<Product[]>(APIRoute.Products, {
        params: {
          [QueryParam.StartItem]: DefaultMinMaxPriceItem.StartItem,
          [QueryParam.EndItem]: DefaultMinMaxPriceItem.EndItem,
          [QueryParam.Sort]: SortCatalogType.Price,
          [QueryParam.Order]: SortCatalogType.Asc,
          [QueryParam.Category]: category,
          [QueryParam.Type]: type,
          [QueryParam.Level]: level,
        }
      });
      return response.data[0].price;
    }
  );

export const fetchMaxPriceProductsAction = createAsyncThunk<number, ProductsMinPriceFetchParams,{
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }>(
    'data/fetchMaxPriceProducts',
    async ({category,
      type,
      level,
    }, {extra: api}) => {
      const response = await api.get<Product[]>(APIRoute.Products, {
        params: {
          [QueryParam.StartItem]: DefaultMinMaxPriceItem.StartItem,
          [QueryParam.EndItem]: DefaultMinMaxPriceItem.EndItem,
          [QueryParam.Sort]: SortCatalogType.Price,
          [QueryParam.Order]: SortCatalogType.Desc,
          [QueryParam.Category]: category,
          [QueryParam.Type]: type,
          [QueryParam.Level]: level,
        }
      });
      return response.data[0].price;
    }
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
      const {data} = await api.get<Product>(`${APIRoute.Products}/${id}?_embed=reviews`);
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

export const fetchProductsSearchAction = createAsyncThunk<Product[], string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'cameras/fetchProductsSearch',
  async (input, {extra: api}) => {
    const {data} = await api.get<Product[]>(APIRoute.Products, {
      params: {
        [QueryParam.NameLike]: input
      }
    });
    return data;
  }
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

export const sendNewReviewAction = createAsyncThunk<Review, ReviewPost, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }>(
    'data/sendReview',
    async (userReview, {dispatch, extra: api}) => {
      const {data} = await api.post<Review>(APIRoute.Reviews, userReview);
      dispatch(fetchReviewsAction(String(userReview.cameraId)));
      return data;
    },
  );
