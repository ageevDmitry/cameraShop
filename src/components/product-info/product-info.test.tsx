import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import HistoryRouter from '../history-route/history-route';
import ProductInfo from './product-info';
import {product} from '../../mocks/mocks';

const history = createMemoryHistory();

describe('Component: ProductInfo', () => {

  it('should render correctly', () => {
    render(
      <HistoryRouter history={history}>
        <ProductInfo
          product={product}
        />
      </HistoryRouter>
    );

    expect(screen.getByText(product.name)).toBeInTheDocument();
  });
});
