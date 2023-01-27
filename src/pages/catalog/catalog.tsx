import Header from '../../components/header/header';
import Banner from '../../components/banner/banner';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';
import FilterCatalog from '../../components/filter-catalog/filter-catalog';
import SortCatalog from '../../components/sort-catalog/sort-catalog';
import Cards from '../../components/card/card';
import Pagination from '../../components/pagination/pagination';
import Footer from '../../components/footer/footer';
import {useAppSelector} from '../../hooks';
import {getProducts, getPromo} from '../../store/products-data/selectors';
import {getCurrentProducts} from '../../utils';

function Catalog (): JSX.Element {

  const products = useAppSelector(getProducts);
  const promo = useAppSelector(getPromo);
  const count = 9;
  const page = 1;

  const currentProducts = getCurrentProducts(products, count, page);

  return (
    <div className="wrapper">
      <Header/>
      <main>
        <Banner promo = {promo}/>
        <div className="page-content">
          <Breadcrumbs/>
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
                          <Cards
                            key = {product.id}
                            product = {product}
                          />))
                    }
                  </div>
                  <Pagination/>
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
