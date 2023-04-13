import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';
import CartSummer from '../../components/cart-summer/cart-summer';
import ProductCardCartList from '../../components/product-card-cart-list/product-card-cart-list';
import ModalRemoveCart from '../../components/modal-remove-cart/modal-remove-cart';
import ModalOrderSuccess from '../../components/modal-order-success/modal-order-success';
import {NAV_BREADCRUMB_MAIN} from '../../const';
import {useState} from 'react';
import {getCurrentProductCart} from '../../store/products-data/selectors';
import {useAppSelector} from '../../hooks/use-app-selector';
import {getProductsCart} from '../../store/products-data/selectors';

function Cart (): JSX.Element {

  const navBreadcrumbs = [NAV_BREADCRUMB_MAIN];
  const [isModalRemoveCart, setIsModalRemoveCart] = useState(false);
  const [isModalOrderSuccess, setIsModalOrderSuccess] = useState(true);
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
              <CartSummer/>
            </div>
          </section>
        </div>
        {(isModalRemoveCart && currentProductCart) ?
          <ModalRemoveCart
            product = {currentProductCart}
            setIsModalRemoveCart = {setIsModalRemoveCart}
          /> :
          ''}
        {
          (isModalOrderSuccess) &&
            <ModalOrderSuccess
              setIsModalOrderSuccess = {setIsModalOrderSuccess}
            />
        }
      </main>
      <Footer/>
    </div>
  );
}

export default Cart;
