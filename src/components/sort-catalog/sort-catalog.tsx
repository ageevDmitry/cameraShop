import {useAppDispatch} from '../../hooks/useAppDispatch';
import {useAppSelector} from '../../hooks/useAppSelector';
import {changeCurrentSort, changeCurrentOrder} from '../../store/products-ui/products-ui';
import {SortCatalogType, QueryParam} from '../../const';
import {getCurrentSort, getCurrentOrder} from '../../store/products-ui/selectors';
import {getCurrentCatalogPagePath} from '../../store/products-ui/selectors';
import {useSearchParams} from 'react-router-dom';
import {ChangeEvent, useEffect} from 'react';

function SortCatalog (): JSX.Element {

  const {search} = useAppSelector(getCurrentCatalogPagePath);
  const [searchParams, setSearchParams] = useSearchParams();

  const dispatch = useAppDispatch();
  const currentSortType = useAppSelector(getCurrentSort);
  const currentOrderType = useAppSelector(getCurrentOrder);

  return (
    <div className="catalog-sort">
      <form action="#">
        <div className="catalog-sort__inner">
          <p className="title title--h5">Сортировать:</p>
          <div className="catalog-sort__type">
            <div className="catalog-sort__btn-text">
              <input
                type="radio"
                id="sortPrice"
                name="sort"
                value="price"
                checked={search?.includes(`${QueryParam.Sort}=${SortCatalogType.Price}`)}
                onChange={(evt: ChangeEvent<HTMLInputElement>) => {
                  const {value} = evt.target;
                  searchParams.set(QueryParam.Sort, value);
                  //  if (currentSortType === null) {
                  //   dispatch(changeCurrentSort({type: SortCatalogType.Price}));
                  //   dispatch(changeCurrentOrder({type: SortCatalogType.Asc}));
                  // } else if (currentSortType !== SortCatalogType.Price) {
                  //   dispatch(changeCurrentSort({type: SortCatalogType.Price}));
                  // }
                  setSearchParams(searchParams);
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
                    dispatch(changeCurrentSort({type: SortCatalogType.Rating}));
                    dispatch(changeCurrentOrder({type: SortCatalogType.Asc}));
                  } else if (currentSortType !== SortCatalogType.Rating) {
                    dispatch(changeCurrentSort({type: SortCatalogType.Rating}));
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
                    dispatch(changeCurrentOrder({type: SortCatalogType.Asc}));
                    dispatch(changeCurrentSort({type: SortCatalogType.Price}));
                  } else if (currentSortType !== SortCatalogType.Asc) {
                    dispatch(changeCurrentOrder({type: SortCatalogType.Asc}));
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
                    dispatch(changeCurrentOrder({type: SortCatalogType.Desc}));
                    dispatch(changeCurrentSort({type: SortCatalogType.Price}));
                  } else if (currentSortType !== SortCatalogType.Desc) {
                    dispatch(changeCurrentOrder({type: SortCatalogType.Desc}));
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

