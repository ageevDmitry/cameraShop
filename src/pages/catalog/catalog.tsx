/* eslint-disable no-mixed-operators */
import {useEffect} from 'react';
import {useParams, useSearchParams} from 'react-router-dom';
import {useAppDispatch} from '../../hooks/useAppDispatch';
import {useAppSelector} from '../../hooks/useAppSelector';
import {PaginationUI, NAV_BREADCRUMB_MAIN, QueryParam} from '../../const';
import {getProducts,
  getProductsTotalCount,
  getPromo,
  getIsCatalogPage
} from '../../store/products-data/selectors';
import {fetchProductsAction,
  fetchPromoAction,
  fetchMinPriceProductsAction,
  fetchMaxPriceProductsAction
} from '../../store/api-action';
import {changeCurrentCatalogPagePath} from '../../store/products-ui/products-ui';
import styles from './catalog.module.css';
import Header from '../../components/header/header';
import Banner from '../../components/banner/banner';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';
import SortCatalog from '../../components/sort-catalog/sort-catalog';
import FilterCatalog from '../../components/filter-catalog/filter-catalog';
import ProductCardList from '../../components/product-card-list/product-card-list';
import Footer from '../../components/footer/footer';
import SpinnerPage from '../../components/spinner-page/spinner-page';

function Catalog (): JSX.Element {

  const dispatch = useAppDispatch();
  const {pageNumber} = useParams();
  const [searchParams] = useSearchParams();
  const currentCatalogPage = Number(pageNumber);
  const currentSort = searchParams.get(QueryParam.Sort);
  const currentOrder = searchParams.get(QueryParam.Order);
  const currentCategory = searchParams.get(QueryParam.Category);
  const currentType = searchParams.get(QueryParam.Type);
  const currentLevel = searchParams.get(QueryParam.Level);
  const currentMinPrice = searchParams.get(QueryParam.MinPrice);
  const currentMaxPrice = searchParams.get(QueryParam.MaxPrice);
  const productsTotalCount = useAppSelector(getProductsTotalCount);
  const paginationCount = Math.ceil(productsTotalCount / PaginationUI.ProductsView);
  const navBreadcrumbs = [NAV_BREADCRUMB_MAIN];
  const products = useAppSelector(getProducts);
  const promo = useAppSelector(getPromo);
  const isCatalogPage = useAppSelector(getIsCatalogPage);

  useEffect(() => {
    if(currentCatalogPage) {
      dispatch(changeCurrentCatalogPagePath({
        currentCatalogPage,
        search: decodeURI(searchParams.toString())
      }));
      dispatch(fetchProductsAction({
        startItem: PaginationUI.ProductsView * currentCatalogPage - PaginationUI.ProductsView,
        endItem: PaginationUI.ProductsView * currentCatalogPage,
        sort: currentSort,
        order: currentOrder,
        type: currentType,
        category: currentCategory,
        level: currentLevel,
        minPrice: currentMinPrice,
        maxPrice: currentMaxPrice,
      }));
    }
  }, [currentCatalogPage,
    searchParams,
    currentSort,
    currentOrder,
    currentType,
    currentCategory,
    currentLevel,
    currentMinPrice,
    currentMaxPrice,
    dispatch]);

  useEffect(() => {
    dispatch(fetchMinPriceProductsAction({
      type: currentType,
      category: currentCategory,
      level: currentLevel,
    }));
    dispatch(fetchMaxPriceProductsAction({
      type: currentType,
      category: currentCategory,
      level: currentLevel,
    }));
  }, [currentType,
    currentCategory,
    currentLevel,
    dispatch]);

  useEffect(() => {
    dispatch(fetchPromoAction());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchPromoAction());
  }, [dispatch]);

  if (!isCatalogPage) {
    return (
      <SpinnerPage />
    );
  }

  return (
    <div className="wrapper">
      <Header/>
      <main>
        {
          (promo) && <Banner promo = {promo}/>
        }
        <div className="page-content">
          <Breadcrumbs
            navBreadcrumbs = {navBreadcrumbs}
            currentBreadCrumb = {'Каталог'}
          />
          <section className="catalog">
            <div className="container">
              <h1 className="title title--h2">Каталог фото- и видеотехники</h1>
              <div className="page-content__columns">
                <div className="catalog__aside">
                  <FilterCatalog/>
                </div>
                <div className="catalog__content">
                  <SortCatalog/>
                  {
                    (products.length === 0 && currentType ||
                      products.length === 0 && currentCategory ||
                      products.length === 0 && currentLevel ||
                      products.length === 0 && currentMinPrice ||
                      products.length === 0 && currentMaxPrice)
                      ?
                      <div className ={styles.notFoundCard}>
                        по вашему запросу ничего не найдено
                      </div>
                      :
                      <ProductCardList
                        products = {products}
                        paginationCount = {paginationCount}
                      />
                  }
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default Catalog;
