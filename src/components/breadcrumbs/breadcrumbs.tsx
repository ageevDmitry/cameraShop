import {Link, generatePath} from 'react-router-dom';
import {NavBreadcrumb} from '../../types/ui';
import {DEFAULT_CATALOG_PAGE} from '../../const';
import {useAppSelector} from '../../hooks/use-app-selector';
import {getCurrentCatalogPagePath} from '../../store/products-ui/selectors';

type BreadcrumbsProps = {
  currentBreadCrumb?: string;
  navBreadcrumbsMain: NavBreadcrumb[];
  navBreadcrumbsCatalog?: NavBreadcrumb[];
}

function Breadcrumbs ({navBreadcrumbsMain, navBreadcrumbsCatalog, currentBreadCrumb}: BreadcrumbsProps): JSX.Element {

  const currentCatalogPagePath = useAppSelector(getCurrentCatalogPagePath);
  const search = currentCatalogPagePath.search;

  return (
    <div className="breadcrumbs">
      <div className="container">
        <ul className="breadcrumbs__list">
          {
            navBreadcrumbsMain.map((item) => (
              <li key={item.title} className="breadcrumbs__item">
                <Link to={{
                  pathname: generatePath(
                    item.href,
                    {pageNumber: (currentCatalogPagePath.currentCatalogPage)
                      ? String(currentCatalogPagePath.currentCatalogPage) : DEFAULT_CATALOG_PAGE}
                  ),
                  search
                }}
                className="breadcrumbs__link"
                >{item.title}
                  <svg width={5} height={8} aria-hidden="true">
                    <use xlinkHref="#icon-arrow-mini" />
                  </svg>
                </Link>
              </li>
            ))
          }
          {
            (navBreadcrumbsCatalog) &&
            navBreadcrumbsCatalog.map((item) => (
              <li key={item.title} className="breadcrumbs__item">
                <Link to={{
                  pathname: generatePath(
                    item.href,
                    {pageNumber: (currentCatalogPagePath.currentCatalogPage)
                      ? String(currentCatalogPagePath.currentCatalogPage) : DEFAULT_CATALOG_PAGE}
                  ),
                  search
                }}
                className="breadcrumbs__link"
                >{item.title}
                  <svg width={5} height={8} aria-hidden="true">
                    <use xlinkHref="#icon-arrow-mini" />
                  </svg>
                </Link>
              </li>
            ))
          }
          {
            currentBreadCrumb &&
            <li className="breadcrumbs__item">
              <span className="breadcrumbs__link breadcrumbs__link--active">{currentBreadCrumb}</span>
            </li>
          }
        </ul>
      </div>
    </div>
  );
}

export default Breadcrumbs;
