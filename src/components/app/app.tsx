import {Route, Routes, Navigate} from 'react-router-dom';
import {AppRoute} from '../../const';
import {HelmetProvider} from 'react-helmet-async';
import Main from '../../pages/main/main';
import Catalog from '../../pages/catalog/catalog';
import Product from '../../pages/product/product';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';

function App(): JSX.Element {
  return (
    <HelmetProvider>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<Main/>}
        />
        <Route
          path={AppRoute.Catalog}
          element={<Catalog/>}
        />
        <Route
          path={AppRoute.Product}
          element={<Product/>}
        />
        <Route
          path={AppRoute.NotFound}
          element={<NotFoundScreen/>}
        />
        <Route
          path={'*'}
          element={<Navigate to={AppRoute.NotFound} replace />}
        />
      </Routes>
    </HelmetProvider>
  );
}

export default App;
