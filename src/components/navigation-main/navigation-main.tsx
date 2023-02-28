import {NAV_PAGES} from '../../const';
import {Link, generatePath} from 'react-router-dom';
import {AppRoute, DEFAULT_CATALOG_PAGE} from '../../const';
import {useAppSelector} from '../../hooks/useAppSelector';
import {getCurrentCatalogPagePath} from '../../store/products-ui/selectors';

function NavigationMain (): JSX.Element {

  const currentCatalogPagePath = useAppSelector(getCurrentCatalogPagePath);
  const search = currentCatalogPagePath.search;

  return (
    <nav className="main-nav header__main-nav" data-testid="nav">
      <ul className="main-nav__list">
        {
          <li className="main-nav__item">
            <Link className="main-nav__link"
              to={{
                pathname: generatePath(
                  AppRoute.Catalog,
                  {pageNumber: (currentCatalogPagePath.currentCatalogPage)
                    ? String(currentCatalogPagePath.currentCatalogPage) : DEFAULT_CATALOG_PAGE}
                ),
                search
              }}
            >Каталог
            </Link>
          </li>
        }

        {NAV_PAGES.map((item) => (
          <li key = {item.title} className="main-nav__item">
            <a className="main-nav__link" href={item.href}>{item.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavigationMain;
