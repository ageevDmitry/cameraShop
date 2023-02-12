import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import HistoryRouter from '../history-route/history-route';
import {products} from '../../mocks/mocks';
import ProductSimilar from './products-similar';


const history = createMemoryHistory();

describe('Component: ProductSimilar', () => {
  it('should render correctly', () => {
    render(
      <HistoryRouter history={history}>
        <ProductSimilar
          productsSimilar={products}
        />
      </HistoryRouter>
    );

    expect(screen.getByText(/Похожие товары/i)).toBeInTheDocument();
  });
});
