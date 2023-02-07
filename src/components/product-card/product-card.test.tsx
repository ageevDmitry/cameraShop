import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {Routes, Route} from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import HistoryRouter from '../../pages/history-route/history-route';
import ProductCard from './product-card';
import {product} from '../../mocks/mocks';

const history = createMemoryHistory();

describe('Component: ProductCard', () => {
  it('should render correctly', () => {
    render(
      <HistoryRouter history={history}>
        <ProductCard
          product={product}
        />
      </HistoryRouter>
    );

    expect(screen.getByText(product.name)).toBeInTheDocument();
    expect(screen.getByText(product.type)).toBeInTheDocument();
    expect(screen.getByRole('link')).toBeInTheDocument();
  });

  it('should redirect to root url when user clicked to link', async () => {
    history.push('/fake');

    render(
      <HistoryRouter history={history}>
        <Routes>
          <Route
            path={`/product/${product.id}`}
            element={<h1>This is product page</h1>}
          />
          <Route
            path='*'
            element={
              <ProductCard
                product={product}
              />
            }
          />
        </Routes>
      </HistoryRouter>);

    expect(screen.queryByText(/This is product page/i)).not.toBeInTheDocument();

    await userEvent.click(screen.getByRole('link'));

    expect(screen.getByText(/This is product page/i)).toBeInTheDocument();
  });
});
