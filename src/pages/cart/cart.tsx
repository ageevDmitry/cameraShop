import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';
import CartSummer from '../../components/cart-summer/cart-summer';
import ProductCardCartList from '../../components/product-card-cart-list/product-card-cart-list';
import ModalRemoveCart from '../../components/modal-remove-cart/modal-remove-cart';
import ModalOrderSuccess from '../../components/modal-order-success/modal-order-success';
import {NAV_BREADCRUMB_MAIN, NAV_BREADCRUMB_CATALOG} from '../../const';
import {useState, useEffect} from 'react';
import {getCurrentProductCart, getIsOrderPost} from '../../store/products-data/selectors';
import {useAppSelector} from '../../hooks/use-app-selector';
import {useAppDispatch} from '../../hooks/use-app-dispatch';
import {getProductsCart} from '../../store/products-data/selectors';
import {useNavigate, generatePath} from 'react-router-dom';
import {AppRoute} from '../../const';
import {cleanUpIsOrderPost} from '../../store/products-data/products-data';

function Cart (): JSX.Element {

  const dispatch = useAppDispatch();
  const navBreadcrumbsMain = [NAV_BREADCRUMB_MAIN];
  const navBreadcrumbsCatalog = [NAV_BREADCRUMB_CATALOG];
  const [isModalRemoveCart, setIsModalRemoveCart] = useState(false);
  const [isModalOrderSuccess, setIsModalOrderSuccess] = useState(false);
  const currentProductCart = useAppSelector(getCurrentProductCart);
  const isOrderPost = useAppSelector(getIsOrderPost);
  const productsCart = useAppSelector(getProductsCart);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOrderPost) {
      setIsModalOrderSuccess(true);
    }

    if (!isOrderPost && isOrderPost !== undefined) {
      navigate({
        pathname: generatePath(AppRoute.NotFound),
      });
    }

    return () => {
      dispatch(cleanUpIsOrderPost());
    };
  }, [isOrderPost, navigate, dispatch]);

  return (
    <div className="wrapper">
      <Header/>
      <main>
        <div className="page-content">
          <Breadcrumbs
            navBreadcrumbsMain = {navBreadcrumbsMain}
            navBreadcrumbsCatalog = {navBreadcrumbsCatalog}
            currentBreadCrumb = {'Корзина'}
          />
          <section className="basket">
            <div className="container">
              <h1 className="title title--h2" data-testid="cart">Корзина</h1>
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
