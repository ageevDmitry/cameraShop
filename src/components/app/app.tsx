import HistoryRouter from '../../pages/history-route/history-route';
import {Route, Routes, Navigate} from 'react-router-dom';
import {AppRoute} from '../../const';
import browserHistory from '../../browser-history';
import Catalog from '../../pages/catalog/catalog';
import Product from '../../pages/product/product';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';

function App(): JSX.Element {
  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<Catalog />}
        />
        <Route
          path={AppRoute.Catalog}
          element={<Catalog />}
        />
        <Route
          path={AppRoute.Product}
          element={<Product />}
        />
        <Route
          path={AppRoute.NotFound}
          element={<NotFoundScreen />}
        />
        <Route
          path={'*'}
          element={<Navigate to={AppRoute.NotFound} replace />}
        />
      </Routes>
    </HistoryRouter>
  );
}

export default App;
