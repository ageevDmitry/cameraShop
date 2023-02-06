import 'react-toastify/dist/ReactToastify.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {ToastContainer} from 'react-toastify';
import {Provider} from 'react-redux';
import {store} from './store';
import {fetchProductsAction, fetchPromoAction} from './store/api-action';
import App from './components/app/app';
import browserHistory from './browser-history';
import HistoryRouter from './pages/history-route/history-route';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

store.dispatch(fetchProductsAction());
store.dispatch(fetchPromoAction());

root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <HistoryRouter history={browserHistory}>
        <ToastContainer/>
        <App/>
      </HistoryRouter>
    </Provider>
  </React.StrictMode>,
);
