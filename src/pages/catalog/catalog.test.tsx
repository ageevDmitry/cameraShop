import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import HistoryRouter from '../../pages/history-route/history-route';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import Catalog from './catalog';
import {NameSpace} from '../../const';
import {products, promo} from '../../mocks/mocks';

const mockStore = configureMockStore();

const store = mockStore({
  [NameSpace.ProductsData]: {
    products: products,
    promo: promo,
    isDataLoading: false,
    isSuccess: false,
  },
  [NameSpace.ProductsUI]: {
    currentCatalogPage: 1
  },
});

const history = createMemoryHistory();
describe('Component: Catalog', () => {

  it('should render correctly', () => {

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Catalog/>
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByText(/Каталог фото- и видеотехники/i)).toBeInTheDocument();
  });
});
