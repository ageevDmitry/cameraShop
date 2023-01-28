import {useAppDispatch} from '../../hooks';
import {changeCurrentCatalogPage} from '../../store/products-ui/products-ui';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';

type PaginationProps = {
  paginationCount: number;
  currentCatalogPage: number;
}

function Pagination ({paginationCount, currentCatalogPage}: PaginationProps): JSX.Element {

  const dispatch = useAppDispatch();
  const paginationItems = Array.from({length: paginationCount}, (_, index) => index + 1);

  return (
    <div className="pagination">
      <ul className="pagination__list">
        {paginationItems.map((item) => (
          <li key={item} className="pagination__item">
            <Link to = {AppRoute.Catalog} className={`pagination__link ${(item === currentCatalogPage) ? 'pagination__link pagination__link--active' : ''}`}
              onClick={() => {
                dispatch(changeCurrentCatalogPage({page: item}));
              }}
            >{item}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Pagination;
