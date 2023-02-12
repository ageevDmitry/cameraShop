import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import HistoryRouter from '../history-route/history-route';
import {review} from '../../mocks/mocks';
import ReviewCard from './review-card';

const history = createMemoryHistory();

describe('Component: ReviewCard', () => {
  it('should render correctly', () => {
    render(
      <HistoryRouter history={history}>
        <ReviewCard
          survey={review}
        />
      </HistoryRouter>
    );

    expect(screen.getByText(review.userName)).toBeInTheDocument();
    expect(screen.getByText(review.advantage)).toBeInTheDocument();
    expect(screen.getByText(review.disadvantage)).toBeInTheDocument();
    expect(screen.getByText(review.review)).toBeInTheDocument();

  });
});
