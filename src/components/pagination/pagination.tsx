import {useAppDispatch} from '../../hooks';
import {changeCurrentCatalogPage} from '../../store/products-ui/products-ui';

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
        {
          (currentCatalogPage !== paginationItems[0]) ?
            <li className="pagination__item">
              <span className='pagination__link pagination__link--text'
                onClick={() => {
                  dispatch(changeCurrentCatalogPage({page: currentCatalogPage - 1}));
                }}
              >Назад
              </span>
            </li>
            : ''
        }
        {paginationItems.map((item) => (
          <li key={item} className="pagination__item">
            <span className={`pagination__link ${(item === currentCatalogPage) ? 'pagination__link pagination__link--active' : ''}`}
              onClick={() => {
                dispatch(changeCurrentCatalogPage({page: item}));
              }}
            >{item}
            </span>
          </li>
        ))}
        {(currentCatalogPage !== paginationItems[paginationItems.length - 1]) ?
          <li className="pagination__item">
            <span className='pagination__link pagination__link--text'
              onClick={() => {
                dispatch(changeCurrentCatalogPage({page: currentCatalogPage + 1}));
              }}
            >Далее
            </span>
          </li>
          : ''}
      </ul>
    </div>
  );
}

export default Pagination;
