import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';
import {NAV_BREADCRUMB_MAIN} from '../../const';
import ProductCardCartList from '../../components/product-card-cart-list/product-card-cart-list';

function Cart (): JSX.Element {

  const navBreadcrumbs = [NAV_BREADCRUMB_MAIN];

  return (
    <div className="wrapper">
      <Header/>
      <main>
        <div className="page-content">
          <Breadcrumbs
            navBreadcrumbs = {navBreadcrumbs}
            currentBreadCrumb = {'Корзина'}
          />
          <section className="basket">
            <div className="container">
              <h1 className="title title--h2">Корзина</h1>
              <ProductCardCartList/>
            </div>
          </section>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default Cart;
