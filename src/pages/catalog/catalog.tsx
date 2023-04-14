import {useEffect, useState} from 'react';
import {useParams, useSearchParams} from 'react-router-dom';
import {useAppDispatch} from '../../hooks/use-app-dispatch';
import {useAppSelector} from '../../hooks/use-app-selector';
import {PaginationUI, NAV_BREADCRUMB_MAIN, QueryParam} from '../../const';
import {getProducts,
  getProductsTotalCount,
  getPromo,
  getIsCatalogPage,
  getCurrentProductCart
} from '../../store/products-data/selectors';
import {fetchProductsAction,
  fetchPromoAction,
  fetchMinPriceProductsAction,
  fetchMaxPriceProductsAction
} from '../../store/api-action';
import {setIsNotCatalogPage} from '../../store/products-data/products-data';
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
import ModalAddCart from '../../components/modal-add-cart/modal-add-cart';
import ModalAddCartSuccess from '../../components/modal-add-cart-success/modal-add-cart-success';

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
  const currentProductCart = useAppSelector(getCurrentProductCart);
  const [isModalAddCart, setIsModalAddCart] = useState(false);
  const [isModalAddCartSuccess, setIsModalAddCartSuccess] = useState(false);

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

    return () => {
      dispatch(setIsNotCatalogPage());
    };
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
            navBreadcrumbsMain = {navBreadcrumbs}
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
                    (products.length === 0)
                      ?
                      <div className ={styles.notFoundCard}>
                        по вашему запросу ничего не найдено
                      </div>
                      :
                      <ProductCardList
                        products = {products}
                        paginationCount = {paginationCount}
                        setIsModalAddCart = {setIsModalAddCart}
                      />
                  }
                </div>
              </div>
            </div>
          </section>
        </div>
        {(isModalAddCart && currentProductCart) ?
          <ModalAddCart
            product = {currentProductCart}
            setIsModalAddCart = {setIsModalAddCart}
            setIsModalAddCartSuccess = {setIsModalAddCartSuccess}
          /> :
          ''}
        {(isModalAddCartSuccess) &&
          <ModalAddCartSuccess
            setIsModalAddCartSuccess = {setIsModalAddCartSuccess}
          />}
      </main>
      <Footer/>
    </div>
  );
}

export default Catalog;
