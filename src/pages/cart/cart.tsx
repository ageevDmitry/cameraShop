import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';
import {NAV_BREADCRUMB_MAIN} from '../../const';
import ProductCardCartList from '../../components/product-card-cart-list/product-card-cart-list';
import ModalRemoveCart from '../../components/modal-remove-cart/modal-remove-cart';
import {useState} from 'react';
import {getCurrentProductCart} from '../../store/products-data/selectors';
import {useAppSelector} from '../../hooks/use-app-selector';
import {getProductsCart} from '../../store/products-data/selectors';

function Cart (): JSX.Element {

  const navBreadcrumbs = [NAV_BREADCRUMB_MAIN];
  const [isModalRemoveCart, setIsModalRemoveCart] = useState(false);
  const currentProductCart = useAppSelector(getCurrentProductCart);
  const productsCart = useAppSelector(getProductsCart);

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
              <ProductCardCartList
                productsCart = {productsCart}
                setIsModalRemoveCart = {setIsModalRemoveCart}
              />
            </div>
          </section>
        </div>
        {(isModalRemoveCart && currentProductCart) ?
          <ModalRemoveCart
            product = {currentProductCart}
            setIsModalRemoveCart = {setIsModalRemoveCart}
          /> :
          ''}
      </main>
      <Footer/>
    </div>
  );
}

export default Cart;
