import {useAppDispatch} from '../../hooks/useAppDispatch';
import {useAppSelector} from '../../hooks/useAppSelector';
import {changeCurrentSortType, changeCurrentOrderType} from '../../store/products-ui/products-ui';
import {SortCatalogType} from '../../const';
import {getCurrentSortType, getCurrentOrderType} from '../../store/products-ui/selectors';

function SortCatalog (): JSX.Element {

  const dispatch = useAppDispatch();
  const currentSortType = useAppSelector(getCurrentSortType);
  const currentOrderType = useAppSelector(getCurrentOrderType);

  return (
    <div className="catalog-sort">
      <form action="#">
        <div className="catalog-sort__inner">
          <p className="title title--h5">Сортировать:</p>
          <div className="catalog-sort__type">
            <div className="catalog-sort__btn-text">
              <input type="radio"
                id="sortPrice"
                name="sort"
                checked={(currentSortType === SortCatalogType.Price)}
                onChange={() => {
                  if (currentSortType === null) {
                    dispatch(changeCurrentSortType({type: SortCatalogType.Price}));
                    dispatch(changeCurrentOrderType({type: SortCatalogType.Asc}));
                  } else if (currentSortType !== SortCatalogType.Price) {
                    dispatch(changeCurrentSortType({type: SortCatalogType.Price}));
                  }
                }}
              />
              <label htmlFor="sortPrice">по цене</label>
            </div>
            <div className="catalog-sort__btn-text">
              <input type="radio"
                id="sortPopular"
                name="sort"
                onChange={() => {
                  if (currentSortType === null) {
                    dispatch(changeCurrentSortType({type: SortCatalogType.Rating}));
                    dispatch(changeCurrentOrderType({type: SortCatalogType.Asc}));
                  } else if (currentSortType !== SortCatalogType.Rating) {
                    dispatch(changeCurrentSortType({type: SortCatalogType.Rating}));
                  }
                }}
              />
              <label htmlFor="sortPopular">по популярности</label>
            </div>
          </div>
          <div className="catalog-sort__order">
            <div className="catalog-sort__btn catalog-sort__btn--up">
              <input type="radio"
                id="up"
                name="sort-icon"
                aria-label="По возрастанию"
                checked={(currentOrderType === SortCatalogType.Asc)}
                onChange={() => {
                  if (currentOrderType === null) {
                    dispatch(changeCurrentOrderType({type: SortCatalogType.Asc}));
                    dispatch(changeCurrentSortType({type: SortCatalogType.Price}));
                  } else if (currentSortType !== SortCatalogType.Asc) {
                    dispatch(changeCurrentOrderType({type: SortCatalogType.Asc}));
                  }
                }}
              />
              <label htmlFor="up">
                <svg width={16} height={14} aria-hidden="true">
                  <use xlinkHref="#icon-sort" />
                </svg>
              </label>
            </div>
            <div className="catalog-sort__btn catalog-sort__btn--down">
              <input type="radio"
                id="down"
                name="sort-icon"
                aria-label="По убыванию"
                onChange={() => {
                  if (currentOrderType === null) {
                    dispatch(changeCurrentOrderType({type: SortCatalogType.Desc}));
                    dispatch(changeCurrentSortType({type: SortCatalogType.Price}));
                  } else if (currentSortType !== SortCatalogType.Desc) {
                    dispatch(changeCurrentOrderType({type: SortCatalogType.Desc}));
                  }
                }}
              />
              <label htmlFor="down">
                <svg width={16} height={14} aria-hidden="true">
                  <use xlinkHref="#icon-sort" />
                </svg>
              </label>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SortCatalog;

