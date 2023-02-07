import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import HistoryRouter from '../../pages/history-route/history-route';
import {reviews} from '../../mocks/mocks';
import ReviewBlock from './review-block';

const history = createMemoryHistory();

const setStateModalReview = jest.fn();

describe('Component: ReviewBlock', () => {
  it('should render correctly', () => {
    render(
      <HistoryRouter history={history}>
        <ReviewBlock
          reviews={reviews}
          onClickOpenModalReview={setStateModalReview}
        />
      </HistoryRouter>
    );

    expect(screen.getByText(/Отзывы/i)).toBeInTheDocument();
    expect(screen.getByText(/Оставить свой отзыв/i)).toBeInTheDocument();
  });
});
