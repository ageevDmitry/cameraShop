import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import HistoryRouter from '../../pages/history-route/history-route';
import {product} from '../../mocks/mocks';
import Rating from './rating';
import {ComponentType} from '../../const';

const history = createMemoryHistory();

describe('Component: Rating', () => {
  it('should render correctly', () => {
    render(
      <HistoryRouter history={history}>
        <Rating
          rating={product.rating}
          reviewCount = {product.reviewCount}
          componentType = {ComponentType.ProductCardRating}
        />
      </HistoryRouter>
    );

    expect(screen.getByTestId('rating')).toBeInTheDocument();
  });
});
