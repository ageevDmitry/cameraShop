import {useAppDispatch} from '../../hooks/useAppDispatch';
import {useAppSelector} from '../../hooks/useAppSelector';
import {fetchProductsSearchAction} from '../../store/api-action';
import {getProductsSearch} from '../../store/products-data/selectors';
import {useState,
  useRef,
  useEffect,
  ChangeEvent,
  FormEvent} from 'react';
import {DEFAULT_SEARCH_VALUE} from '../../const';
import {cleanUpProductsSearch} from '../../store/products-data/products-data';
import {redirectToRoute} from '../../store/action';
import styles from './search.module.css';

function Search (): JSX.Element {

  const dispatch = useAppDispatch();
  const productsSearch = useAppSelector(getProductsSearch);
  const [searchData, setSearchData] = useState(DEFAULT_SEARCH_VALUE);
  const [searchIndexData, setSearchIndexData] = useState(0);
  const listRef = useRef<HTMLUListElement>(null);

  const handleFormChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const {value} = evt.target;
    setSearchData(value);
    dispatch(fetchProductsSearchAction(value));
  };

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (productsSearch && productsSearch?.length !== 0) {
      const result = productsSearch.filter((item) => item.name === searchData);
      dispatch(redirectToRoute(`/product/${result[0].id}`));
    }
  };

  useEffect(() => {
    if (listRef.current?.children[1]) {
      listRef.current?.children[searchIndexData].focus();
    }
  }, [searchIndexData]);

  return (
    <div className="form-search" data-testid="search">
      <form className="form-class-submit" onSubmit={handleFormSubmit}>
        <label>
          <svg className="form-search__icon" width={16} height={16} aria-hidden="true">
            <use xlinkHref="#icon-lens" />
          </svg>
          <input
            onChange={handleFormChange}
            className="form-search__input"
            type="text" autoComplete="off"
            value={searchData}
            placeholder="Поиск по сайту"
            onKeyDown={(evt) => {
              if (evt.key === 'ArrowDown' || evt.key === 'ArrowUp') {
                evt.preventDefault();
                setSearchIndexData(0);
                if (listRef.current?.children[0]) {
                  listRef.current?.children[0].focus();
                }
              }
            }}
          />
        </label>
        {(searchData !== DEFAULT_SEARCH_VALUE && productsSearch?.length !== 0) &&
          <ul ref={listRef} className={`${styles.selectList} ${styles.scroll}`}>
            {productsSearch?.map((item, i) => (
              <li key={item.name}
                tabIndex={0}
                className='form-search__select-item'
                onClick={() => {
                  setSearchData(DEFAULT_SEARCH_VALUE);
                  dispatch(redirectToRoute(`/product/${item.id}`));
                }}
                onKeyDown={(evt) => {
                  if (listRef.current) {
                    if (evt.key === 'Enter' || evt.key === ' ') {
                      setSearchData(DEFAULT_SEARCH_VALUE);
                      dispatch(redirectToRoute(`/product/${item.id}`));
                    }
                    if (evt.key === 'ArrowUp' && searchIndexData !== 0) {
                      evt.preventDefault();
                      setSearchIndexData(searchIndexData - 1);
                    }
                    if (evt.key === 'ArrowDown' && searchIndexData !== listRef.current?.children.length - 1) {
                      evt.preventDefault();
                      setSearchIndexData(searchIndexData + 1);
                    }
                  }
                }}
              >{item.name}
              </li>
            ))}
          </ul>}
      </form>
      <button className={(searchData === DEFAULT_SEARCH_VALUE) ? 'form-search__reset' : `${styles.resetButton}`} type="reset"
        onClick={() => {
          setSearchData(DEFAULT_SEARCH_VALUE);
          dispatch(cleanUpProductsSearch());
        }}
      >
        <svg width={10} height={10} aria-hidden="true">
          <use xlinkHref="#icon-close" />
        </svg><span className="visually-hidden">Сбросить поиск</span>
      </button>
    </div>
  );
}

export default Search;
