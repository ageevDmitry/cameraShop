import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {Routes, Route} from 'react-router-dom';
import {promo} from '../../mocks/mocks';
import userEvent from '@testing-library/user-event';
import HistoryRouter from '../../pages/history-route/history-route';
import Banner from './banner';

const history = createMemoryHistory();

describe('Component: Banner', () => {
  it('should render correctly', () => {
    render(
      <HistoryRouter history={history}>
        <Banner
          promo={promo}
        />
      </HistoryRouter>
    );

    expect(screen.getByText(/Новинка!/i)).toBeInTheDocument();
    expect(screen.getByText(promo.name)).toBeInTheDocument();
    expect(screen.getByText(/Профессиональная камера от известного производителя/i)).toBeInTheDocument();
    expect(screen.getByRole('link')).toBeInTheDocument();
  });

  it('should redirect to root url when user clicked to link', async () => {
    history.push('/fake');

    render(
      <HistoryRouter history={history}>
        <Routes>
          <Route
            path={`/product/${promo.id}`}
            element={<h1>This is main page</h1>}
          />
          <Route
            path='*'
            element={
              <Banner
                promo={promo}
              />
            }
          />
        </Routes>
      </HistoryRouter>);

    expect(screen.queryByText(/This is main page/i)).not.toBeInTheDocument();

    await userEvent.click(screen.getByRole('link'));

    expect(screen.getByText(/This is main page/i)).toBeInTheDocument();
  });
});
