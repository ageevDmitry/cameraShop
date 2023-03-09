import {useAppDispatch} from '../../hooks/useAppDispatch';
import {useAppSelector} from '../../hooks/useAppSelector';
import {fetchProductsSearchAction} from '../../store/api-action';
import {getProductsSearch} from '../../store/products-data/selectors';
import {useState,
  // useRef,
  ChangeEvent,
  // KeyboardEvent,
  FormEvent} from 'react';
// import {nanoid} from 'nanoid';
import {DEFAULT_SEARCH_VALUE} from '../../const';
import {cleanUpProductsSearch} from '../../store/products-data/products-data';
import {redirectToRoute} from '../../store/action';
import styles from './search.module.css';
// import {AppRoute} from '../../const';

function Search (): JSX.Element {

  const dispatch = useAppDispatch();
  const productsSearch = useAppSelector(getProductsSearch);
  const [searchData, setSearchData] = useState(DEFAULT_SEARCH_VALUE);
  // const [selectedItem, setSelectedItem] = useState(0);
  // const [currentScroll, setCurrentScroll] = useState(160);
  // const [limitScroll, setLimitScroll] = useState(2);
  // const listRef = useRef<HTMLUListElement>(null);

  const handleFormChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const {value} = evt.target;
    setSearchData(value);
    dispatch(fetchProductsSearchAction(value));
  };

  // const handleScrollToDown = () => {
  //   if (listRef.current) {
  //     const foo = currentScroll + 160;
  //     setCurrentScroll(foo);
  //     listRef.current.scrollTop = currentScroll;
  //   }
  // };

  // const handleScrollToUp = () => {
  //   if (listRef.current) {
  //     const foo = currentScroll - 160;
  //     setCurrentScroll(foo);
  //     listRef.current.scrollTop = currentScroll;
  //   }
  // };

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (productsSearch && productsSearch?.length !== 0) {
      const result = productsSearch.filter((item) => item.name === searchData);
      dispatch(redirectToRoute(`/product/${result[0].id}`));
      // console.log(result[0].id);
    }
  };

  // const handleKeyDown = (evt: KeyboardEvent<HTMLInputElement>) => {

  //   if (productsSearch ) {

  //     if (evt.key === 'ArrowUp') {
  //       if (selectedItem !== 0) {

  //         setSelectedItem(selectedItem - 1);

  //         if (selectedItem < limitScroll) {
  //           handleScrollToUp();
  //           const foo = limitScroll - 4;
  //           setLimitScroll(foo);
  //         }
  //       }
  //     } else if (evt.key === 'ArrowDown') {

  //       if (selectedItem !== productsSearch.length - 1) {

  //         setSelectedItem(selectedItem + 1);

  //         if (selectedItem > limitScroll) {
  //           handleScrollToDown();
  //           const foo = limitScroll + 4;
  //           setLimitScroll(foo);
  //         }
  //       }
  //     }
  //   }
  // };

  return (
    <div className="form-search">
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
            // onKeyDown={handleKeyDown}
          />
        </label>
        {/* {(searchData !== DEFAULT_SEARCH_VALUE && productsSearch?.length !== 0) &&
          <ul ref={listRef} className={`${styles.selectList} ${styles.scroller}`}>
            {productsSearch?.map((item, i) => (
              // <li key={nanoid()} className={`form-search__select-item ${(selectedItem === i) ? styles.selected : '' }`} tabIndex={0}
              <li key={nanoid()} className='form-search__select-item' tabIndex={0}
                onClick={() => {
                  setSearchData(DEFAULT_SEARCH_VALUE);
                  dispatch(redirectToRoute(`/product/${item.id}`));
                }}
                onKeyDown={(evt) => {
                  if (evt.key === 'Enter' || evt.key === ' ') {
                    setSearchData(DEFAULT_SEARCH_VALUE);
                    dispatch(redirectToRoute(`/product/${item.id}`));
                  }
                }}
              >{item.name}
              </li>
            ))}
          </ul>} */}
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
