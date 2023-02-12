import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import HistoryRouter from '../history-route/history-route';
import ProductInfo from './product-info';
import {product} from '../../mocks/mocks';
import {ProductTab} from '../../const';

const history = createMemoryHistory();

describe('Component: ProductInfo', () => {

  const setCurrentTabControl = jest.fn();
  it('should render correctly', () => {
    render(
      <HistoryRouter history={history}>
        <ProductInfo
          product={product}
          currentTabControl={ProductTab.Description}
          onClickCurrentTabControl={setCurrentTabControl}
        />
      </HistoryRouter>
    );

    expect(screen.getByText(product.name)).toBeInTheDocument();
  });
});
