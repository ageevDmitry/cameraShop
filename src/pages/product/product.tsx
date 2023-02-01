import Header from '../../components/header/header';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';
import ProductInfo from '../../components/product-info/product-info';
import ProductSimilar from '../../components/products-similar/products-similar';
import ReviewBlock from '../../components/review-block/review-block';
import UpButton from '../../components/up-button/up-button';
import Footer from '../../components/footer/footer';
import {fetchProductDetailAction, fetchProductsSimilarAction, fetchReviewsAction} from '../../store/api-action';
import LoadingScreen from '../../components/loading-screen/loading-screen';
import {getProductDetail, getProductsSimilar, getReviews} from '../../store/products-data/selectors';
import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {useAppSelector, useAppDispatch} from '../../hooks';
import {NAV_BREADCRUMB_MAIN, NAV_BREADCRUMB_CATALOG, ProductTab} from '../../const';

function Product (): JSX.Element {

  const {id} = useParams();
  const dispatch = useAppDispatch();
  const product = useAppSelector(getProductDetail);
  const productsSimilar = useAppSelector(getProductsSimilar);
  const reviews = useAppSelector(getReviews);
  const navBreadcrumbs = [NAV_BREADCRUMB_MAIN, NAV_BREADCRUMB_CATALOG];
  const [currentTabControl, setCurrentTabControl] = useState(ProductTab.Characteristics);

  useEffect(() => {
    if (id) {
      dispatch(fetchProductDetailAction(id));
      dispatch(fetchProductsSimilarAction(id));
      dispatch(fetchReviewsAction(id));
    }
  }, [id, dispatch]);

  if (!product) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <div className="wrapper">
      <Header/>
      <main>
        <div className="page-content">
          <Breadcrumbs
            navBreadcrumbs = {navBreadcrumbs}
            currentBreadCrumb = {product.name}
          />
          <ProductInfo
            product = {product}
            currentTabControl = {currentTabControl}
            onClickCurrentTabControl = {setCurrentTabControl}
          />
          {
            productsSimilar &&
            <ProductSimilar
              productsSimilar = {productsSimilar}
            />
          }
          <ReviewBlock/>
        </div>
      </main>
      <UpButton/>
      <Footer/>
    </div>
  );
}

export default Product;
