import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import HistoryRouter from '../../pages/history-route/history-route';
import ProductDescription from './product-description';
import {product} from '../../mocks/mocks';
import {ProductTab} from '../../const';

const history = createMemoryHistory();

describe('Component: ProductDescription', () => {
  it('should render correctly', () => {
    render(
      <HistoryRouter history={history}>
        <ProductDescription
          currentTabControl={ProductTab.Description}
          description={product.description}
        />
      </HistoryRouter>
    );

    expect(screen.getByText(product.description)).toBeInTheDocument();
  });
});
