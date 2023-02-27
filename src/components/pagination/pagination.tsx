import {Link, generatePath} from 'react-router-dom';
import {useAppSelector} from '../../hooks/useAppSelector';
import {getCurrentCatalogPagePath} from '../../store/products-ui/selectors';
import styles from './pagination.module.css';
import {AppRoute} from '../../const';

type PaginationProps = {
  paginationCount: number;
}

function Pagination ({paginationCount}: PaginationProps): JSX.Element {

  const {currentCatalogPage, search} = useAppSelector(getCurrentCatalogPagePath);
  const paginationItems = Array.from({length: paginationCount}, (_, index) => index + 1);

  return (
    <div className="pagination">
      <ul className="pagination__list">
        {
          (currentCatalogPage !== paginationItems[0]) ?
            <li className="pagination__item">
              <Link className={`pagination__link pagination__link--text ${styles.pointer}`}
                to={{
                  pathname: generatePath(AppRoute.Catalog, {pageNumber: String(currentCatalogPage - 1)}),
                  search
                }}
              >Назад
              </Link>
            </li>
            : ''
        }
        {paginationItems.map((item) => (
          <li key={item} className="pagination__item">
            <Link className={`pagination__link ${styles.pointer} ${(item === currentCatalogPage) ? 'pagination__link pagination__link--active' : ''}`}
              to={{
                pathname: generatePath(AppRoute.Catalog, {pageNumber: String(item)}),
                search
              }}
            >{item}
            </Link>
          </li>
        ))}
        {(currentCatalogPage !== paginationItems[paginationItems.length - 1]) ?
          <li className="pagination__item">
            <Link className={`pagination__link pagination__link--text ${styles.pointer}`}
              to={{
                pathname: generatePath(AppRoute.Catalog, {pageNumber: String(currentCatalogPage + 1)}),
                search
              }}
            >Далее
            </Link>
          </li>
          : ''}
      </ul>
    </div>
  );
}

export default Pagination;
