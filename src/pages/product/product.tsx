import {fetchProductDetailAction, fetchProductsSimilarAction} from '../../store/api-action';
import {getProductDetail, getProductsSimilar, getReviews} from '../../store/products-data/selectors';
import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {useAppSelector} from '../../hooks/useAppSelector';
import {useAppDispatch} from '../../hooks/useAppDispatch';
import {NAV_BREADCRUMB_MAIN, NAV_BREADCRUMB_CATALOG} from '../../const';
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
import SpinnerPage from '../../components/spinner-page/spinner-page';

function Product(): JSX.Element {

  const {id} = useParams();
  const dispatch = useAppDispatch();
  const product = useAppSelector(getProductDetail);
  const reviews = useAppSelector(getReviews);
  const productsSimilar = useAppSelector(getProductsSimilar);
  const navBreadcrumbs = [NAV_BREADCRUMB_MAIN, NAV_BREADCRUMB_CATALOG];
  const [isModalReview, setStateModalReview] = useState(false);
  const [isModalReviewSuccess, setStateModalReviewSuccess] = useState(false);

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
            navBreadcrumbs={navBreadcrumbs}
            currentBreadCrumb={product.name}
          />
          <ProductInfo
            product={product}
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
