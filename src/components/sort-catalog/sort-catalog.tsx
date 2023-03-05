import {SortCatalogType, QueryParam} from '../../const';
import {useSearchParams} from 'react-router-dom';
import {ChangeEvent, useEffect, useState} from 'react';

function SortCatalog (): JSX.Element {

  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPriceState, setCurrentPriceState] = useState<boolean>(false);
  const [currentRatingState, setCurrentRatingState] = useState<boolean>(false);
  const [currentAscState, setCurrentAscState] = useState<boolean>(false);
  const [currentDescState, setCurrentDescState] = useState<boolean>(false);

  const checkSort = () => {
    if (!Array.from(searchParams.values()).includes(SortCatalogType.Asc)
    && !Array.from(searchParams.values()).includes(SortCatalogType.Desc)) {
      searchParams.set(QueryParam.Order, SortCatalogType.Asc);
      setSearchParams(searchParams);
    }
  };

  const checkOrder = () => {
    if (!Array.from(searchParams.values()).includes(SortCatalogType.Price)
    && !Array.from(searchParams.values()).includes(SortCatalogType.Rating)) {
      searchParams.set(QueryParam.Sort, SortCatalogType.Price);
      setSearchParams(searchParams);
    }
  };

  const setSortCatalog = (evt: ChangeEvent<HTMLInputElement>, sortType: string) => {
    const {value} = evt.target;
    searchParams.set(sortType, value);
    setSearchParams(searchParams);
  };

  useEffect(() => {
    setCurrentPriceState(Array.from(searchParams.values()).includes(SortCatalogType.Price));
    setCurrentRatingState(Array.from(searchParams.values()).includes(SortCatalogType.Rating));
    setCurrentAscState(Array.from(searchParams.values()).includes(SortCatalogType.Asc));
    setCurrentDescState(Array.from(searchParams.values()).includes(SortCatalogType.Desc));
  }, [searchParams, setSearchParams]);


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
                checked={currentPriceState}
                onChange={(evt: ChangeEvent<HTMLInputElement>) => {
                  setSortCatalog(evt, QueryParam.Sort);
                  setSearchParams(searchParams);
                  checkSort();
                }}
              />
              <label htmlFor="sortPrice">по цене</label>
            </div>
            <div className="catalog-sort__btn-text">
              <input type="radio"
                id="sortPopular"
                name="sort"
                value="rating"
                checked={currentRatingState}
                onChange={(evt: ChangeEvent<HTMLInputElement>) => {
                  setSortCatalog(evt, QueryParam.Sort);
                  checkSort();
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
                checked={currentAscState}
                onChange={(evt: ChangeEvent<HTMLInputElement>) => {
                  setSortCatalog(evt, QueryParam.Order);
                  checkOrder();
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
                checked={currentDescState}
                onChange={(evt: ChangeEvent<HTMLInputElement>) => {
                  setSortCatalog(evt, QueryParam.Order);
                  checkOrder();
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

