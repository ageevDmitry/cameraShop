import {useAppSelector} from '../../hooks/useAppSelector';
import {SortCatalogType, QueryParam} from '../../const';
import {getCurrentCatalogPagePath} from '../../store/products-ui/selectors';
import {useSearchParams} from 'react-router-dom';
import {ChangeEvent} from 'react';

function SortCatalog (): JSX.Element {

  const {search} = useAppSelector(getCurrentCatalogPagePath);
  const [searchParams, setSearchParams] = useSearchParams();

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
                  setSearchParams(searchParams);
                }}
              />
              <label htmlFor="sortPrice">по цене</label>
            </div>
            <div className="catalog-sort__btn-text">
              <input type="radio"
                id="sortPopular"
                name="sort"
                value="rating"
                checked={search?.includes(`${QueryParam.Sort}=${SortCatalogType.Rating}`)}
                onChange={(evt: ChangeEvent<HTMLInputElement>) => {
                  const {value} = evt.target;
                  searchParams.set(QueryParam.Sort, value);
                  setSearchParams(searchParams);
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
                value="asc"
                aria-label="По возрастанию"
                checked={search?.includes(`${QueryParam.Order}=${SortCatalogType.Asc}`)}
                onChange={(evt: ChangeEvent<HTMLInputElement>) => {
                  const {value} = evt.target;
                  searchParams.set(QueryParam.Order, value);
                  setSearchParams(searchParams);
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
                value="desc"
                aria-label="По убыванию"
                checked={search?.includes(`${QueryParam.Order}=${SortCatalogType.Desc}`)}
                onChange={(evt: ChangeEvent<HTMLInputElement>) => {
                  const {value} = evt.target;
                  searchParams.set(QueryParam.Order, value);
                  setSearchParams(searchParams);
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

