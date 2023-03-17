import {Link, generatePath} from 'react-router-dom';
import {NavBreadcrumb} from '../../types/ui';
import {AppRoute, DEFAULT_CATALOG_PAGE} from '../../const';
import {useAppSelector} from '../../hooks/use-app-selector';
import {getCurrentCatalogPagePath} from '../../store/products-ui/selectors';

type BreadcrumbsProps = {
  currentBreadCrumb?: string;
  navBreadcrumbs:NavBreadcrumb[];
}

function Breadcrumbs ({navBreadcrumbs, currentBreadCrumb}: BreadcrumbsProps): JSX.Element {

  const currentCatalogPagePath = useAppSelector(getCurrentCatalogPagePath);
  const search = currentCatalogPagePath.search;

  return (
    <div className="breadcrumbs">
      <div className="container">
        <ul className="breadcrumbs__list">
          {
            navBreadcrumbs.map((item) => (
              <li key={item.title} className="breadcrumbs__item">
                <Link to={{
                  pathname: generatePath(
                    AppRoute.Catalog,
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
