import Header from '../../components/header/header';
import Banner from '../../components/banner/banner';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';
import FilterCatalog from '../../components/filter-catalog/filter-catalog';
import SortCatalog from '../../components/sort-catalog/sort-catalog';
import ProductCards from '../../components/product-card/product-card';
import Pagination from '../../components/pagination/pagination';
import Footer from '../../components/footer/footer';
import {useEffect} from 'react';
import {redirectToRoute} from '../../store/action';
import {useAppDispatch} from '../../hooks/useAppDispatch';
import {useAppSelector} from '../../hooks/useAppSelector';
import {getProducts,
  getProductsTotalCount,
  getPromo} from '../../store/products-data/selectors';
import {getCurrentCatalogPage,
  getCurrentSort,
  getCurrentOrder,
  getCurrentType,
  getCurrentCategory,
  getCurrentLevel,
  getCurrentMinPrice,
  getCurrentMaxPrice} from '../../store/products-ui/selectors';
import {PaginationUI} from '../../const';
import {NAV_BREADCRUMB_MAIN} from '../../const';
import {fetchProductsAction, fetchPromoAction} from '../../store/api-action';

function Catalog (): JSX.Element {

  const dispatch = useAppDispatch();
  const currentCatalogPage = useAppSelector(getCurrentCatalogPage);
  const currentSort = useAppSelector(getCurrentSort);
  const currentOrder = useAppSelector(getCurrentOrder);
  const currentType = useAppSelector(getCurrentType);
  const currentCategory = useAppSelector(getCurrentCategory);
  const currentLevel = useAppSelector(getCurrentLevel);
  const currentMinPrice = useAppSelector(getCurrentMinPrice);
  const currentMaxPrice = useAppSelector(getCurrentMaxPrice);
  const productsTotalCount = useAppSelector(getProductsTotalCount);
  const paginationCount = Math.ceil(productsTotalCount / PaginationUI.ProductsView);
  const navBreadcrumbs = [NAV_BREADCRUMB_MAIN];
  const products = useAppSelector(getProducts);
  const promo = useAppSelector(getPromo);

  useEffect(() => {
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
    dispatch(redirectToRoute(`/catalog/page_${currentCatalogPage}`));
  }, [currentCatalogPage,
    currentSort,
    currentOrder,
    currentType,
    currentCategory,
    currentLevel,
    currentMinPrice,
    currentMaxPrice,
    dispatch]);

  useEffect(() => {
    dispatch(fetchPromoAction());
  }, [dispatch]);

  return (
    <div className="wrapper">
      <Header/>
      <main>
        <Banner promo = {promo}/>
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
                  <div className="cards catalog__cards">
                    {
                      products
                        .map((product) => (
                          <ProductCards
                            key = {product.id}
                            product = {product}
                          />))
                    }
                  </div>
                  <Pagination
                    paginationCount = {paginationCount}
                    currentCatalogPage = {currentCatalogPage}
                  />
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
