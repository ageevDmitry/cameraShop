import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {Routes, Route} from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import HistoryRouter from '../../pages/history-route/history-route';
import Breadcrumbs from './breadcrumbs';
import {NAV_BREADCRUMB_MAIN} from '../../const';

const history = createMemoryHistory();

describe('Component: Breadcrumbs', () => {
  it('should render correctly', () => {
    render(
      <HistoryRouter history={history}>
        <Breadcrumbs
          navBreadcrumbs={[NAV_BREADCRUMB_MAIN]}
          currentBreadCrumb={'Каталог'}
        />
      </HistoryRouter>
    );

    expect(screen.getByText(NAV_BREADCRUMB_MAIN.title)).toBeInTheDocument();
    expect(screen.getByText(/Каталог/i)).toBeInTheDocument();
  });

  it('should redirect to root url when user clicked to link', async () => {
    history.push('/fake');

    render(
      <HistoryRouter history={history}>
        <Routes>
          <Route
            path="/"
            element={<h1>This is main page</h1>}
          />
          <Route
            path='*'
            element={
              <Breadcrumbs
                navBreadcrumbs={[NAV_BREADCRUMB_MAIN]}
                currentBreadCrumb={'Каталог'}
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
