import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import HistoryRouter from '../history-route/history-route';
import SocialLinks from './social-links';

const history = createMemoryHistory();

describe('Component: SocialLinks', () => {
  it('should render correctly', () => {
    render(
      <HistoryRouter history={history}>
        <SocialLinks/>
      </HistoryRouter>
    );

    expect(screen.getByTestId('socialLinks')).toBeInTheDocument();
  });
});
