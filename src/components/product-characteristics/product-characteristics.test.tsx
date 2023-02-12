import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import HistoryRouter from '../history-route/history-route';
import ProductCharacteristics from './product-characteristics';
import {product} from '../../mocks/mocks';
import {ProductTab} from '../../const';

const history = createMemoryHistory();

describe('Component: ProductCharacteristics', () => {
  it('should render correctly', () => {
    render(
      <HistoryRouter history={history}>
        <ProductCharacteristics
          currentTabControl={ProductTab.Characteristics}
          vendorCode={product.vendorCode}
          category={product.category}
          type={product.type}
          level={product.level}
        />
      </HistoryRouter>
    );

    expect(screen.getByText(product.vendorCode)).toBeInTheDocument();
    expect(screen.getByText(product.category)).toBeInTheDocument();
    expect(screen.getByText(product.type)).toBeInTheDocument();
    expect(screen.getByText(product.level)).toBeInTheDocument();

  });
});
