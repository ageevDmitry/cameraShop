import {Product} from './product';
import {store} from '../store';

export type ProductsData = {
    products: Product[];
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
