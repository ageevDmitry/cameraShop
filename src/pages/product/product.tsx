import {fetchProductDetailAction, fetchProductsSimilarAction, fetchReviewsAction} from '../../store/api-action';
import {getProductDetail, getProductsSimilar, getReviews} from '../../store/products-data/selectors';
import {useEffect, useState} from 'react';
import { useParams} from 'react-router-dom';
import {useAppSelector, useAppDispatch} from '../../hooks';
import {NAV_BREADCRUMB_MAIN, NAV_BREADCRUMB_CATALOG, ProductTab} from '../../const';
import {redirectToRoute} from '../../store/action';
import {cleanUpProductDetail} from '../../store/products-data/products-data';
import Header from '../../components/header/header';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';
import ProductInfo from '../../components/product-info/product-info';
import ProductSimilar from '../../components/products-similar/products-similar';
import ReviewBlock from '../../components/review-block/review-block';
import UpButton from '../../components/up-button/up-button';
import Footer from '../../components/footer/footer';
import ModalReview from '../../components/modal-review/modal-review';
import ModalReviewSuccess from '../../components/modal-review-success/modal-review-success';
import LoadingScreen from '../../components/loading-screen/loading-screen';

function Product(): JSX.Element {

  const {id} = useParams();
  const dispatch = useAppDispatch();
  const product = useAppSelector(getProductDetail);
  const productsSimilar = useAppSelector(getProductsSimilar);
  const reviews = useAppSelector(getReviews);
  const navBreadcrumbs = [NAV_BREADCRUMB_MAIN, NAV_BREADCRUMB_CATALOG];
  const [currentTabControl, setCurrentTabControl] = useState(ProductTab.Description);
  const [isModalReview, setStateModalReview] = useState(false);
  const [isModalReviewSuccess, setStateModalReviewSuccess] = useState(false);

  useEffect(() => {
    if (id) {
      dispatch(redirectToRoute(`/product/${id}#${currentTabControl}`));
      dispatch(fetchProductDetailAction(id));
      dispatch(fetchProductsSimilarAction(id));
      dispatch(fetchReviewsAction(id));
    }
  }, [id, dispatch, currentTabControl]);

  useEffect(() => () => {
    dispatch(cleanUpProductDetail());
  }, [dispatch]);

  if (!product) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <div className="wrapper">
      <Header />
      <main>
        <div className="page-content">
          <Breadcrumbs
            navBreadcrumbs={navBreadcrumbs}
            currentBreadCrumb={product.name}
          />
          <ProductInfo
            product={product}
            currentTabControl={currentTabControl}
            onClickCurrentTabControl={setCurrentTabControl}
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
      </main>
      <UpButton />
      <Footer />
    </div>
  );
}

export default Product;
