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
import {useAppDispatch} from '../../hooks';
import {useAppSelector} from '../../hooks';
import {getProducts, getPromo} from '../../store/products-data/selectors';
import {getCurrentCatalogPage} from '../../store/products-ui/selectors';
import {getCurrentProducts} from '../../utils';
import {PaginationUI} from '../../const';
import {NAV_BREADCRUMB_MAIN} from '../../const';

function Catalog (): JSX.Element {

  const dispatch = useAppDispatch();
  const currentCatalogPage = useAppSelector(getCurrentCatalogPage);
  const navBreadcrumbs = [NAV_BREADCRUMB_MAIN];

  useEffect(() => {
    dispatch(redirectToRoute(`/catalog/page_${currentCatalogPage}`));
  }, [currentCatalogPage, dispatch]);

  const products = useAppSelector(getProducts);
  const promo = useAppSelector(getPromo);
  const currentProducts = getCurrentProducts(products, PaginationUI.ProductsView, currentCatalogPage);
  const paginationCount = Math.ceil(products.length / PaginationUI.ProductsView);

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
                      currentProducts
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
