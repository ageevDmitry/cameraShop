import {fetchProductDetailAction, fetchProductsSimilarAction} from '../../store/api-action';
import {getProductDetail, getProductsSimilar, getReviews} from '../../store/products-data/selectors';
import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {useAppSelector} from '../../hooks/use-app-selector';
import {useAppDispatch} from '../../hooks/use-app-dispatch';
import {NAV_BREADCRUMB_MAIN, NAV_BREADCRUMB_CATALOG} from '../../const';
import {cleanUpProductDetail} from '../../store/products-data/products-data';
import {getCurrentProductCart} from '../../store/products-data/selectors';
import Header from '../../components/header/header';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';
import ProductInfo from '../../components/product-info/product-info';
import ProductSimilar from '../../components/products-similar/products-similar';
import ReviewBlock from '../../components/review-block/review-block';
import UpButton from '../../components/up-button/up-button';
import Footer from '../../components/footer/footer';
import ModalReview from '../../components/modal-review/modal-review';
import ModalReviewSuccess from '../../components/modal-review-success/modal-review-success';
import SpinnerPage from '../../components/spinner-page/spinner-page';
import ModalAddCart from '../../components/modal-add-cart/modal-add-cart';
import ModalAddCartSuccess from '../../components/modal-add-cart-success/modal-add-cart-success';

function Product(): JSX.Element {

  const {id} = useParams();
  const dispatch = useAppDispatch();
  const product = useAppSelector(getProductDetail);
  const reviews = useAppSelector(getReviews);
  const productsSimilar = useAppSelector(getProductsSimilar);
  const navBreadcrumbs = [NAV_BREADCRUMB_MAIN, NAV_BREADCRUMB_CATALOG];
  const [isModalReview, setStateModalReview] = useState(false);
  const [isModalReviewSuccess, setStateModalReviewSuccess] = useState(false);
  const [isModalAddCart, setIsModalAddCart] = useState(false);
  const [isModalAddCartSuccess, setIsModalAddCartSuccess] = useState(false);
  const currentProductCart = useAppSelector(getCurrentProductCart);

  useEffect(() => {
    if (id) {
      dispatch(fetchProductDetailAction(id));
      dispatch(fetchProductsSimilarAction(id));
    }
  }, [id, dispatch]);

  useEffect(() => {
    dispatch(cleanUpProductDetail());
  }, [dispatch]);

  if (!product) {
    return (
      <SpinnerPage />
    );
  }

  return (
    <div className="wrapper">
      <Header />
      <main>
        <div className="page-content">
          <Breadcrumbs
            navBreadcrumbsMain={navBreadcrumbs}
            currentBreadCrumb={product.name}
          />
          <ProductInfo
            product={product}
            setIsModalAddCart = {setIsModalAddCart}
          />
          {
            productsSimilar &&
            <ProductSimilar
              productsSimilar={productsSimilar}
            />
          }
          {
            reviews &&
            <ReviewBlock
              reviews={reviews}
              onClickOpenModalReview={setStateModalReview}
            />
          }
        </div>
        {
          isModalReview &&
          <ModalReview
            onClickCloseModalReview={setStateModalReview}
            onClickOpenModalReviewSuccess={setStateModalReviewSuccess}
          />
        }
        {
          isModalReviewSuccess &&
          <ModalReviewSuccess
            product={product}
            onClickCloseModalReviewSuccess={setStateModalReviewSuccess}
          />
        }
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
      <UpButton />
      <Footer />
    </div>
  );
}

export default Product;
