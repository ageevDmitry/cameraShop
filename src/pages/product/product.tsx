import Header from '../../components/header/header';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';
import ProductInfo from '../../components/product-info/product-info';
import ProductSimilar from '../../components/product-similar/product-similar';
import ReviewBlock from '../../components/review-block/review-block';
import UpButton from '../../components/up-button/up-button';
import Footer from '../../components/footer/footer';

function Product (): JSX.Element {

  return (
    <div className="wrapper">
      <Header/>
      <main>
        <div className="page-content">
          <Breadcrumbs/>
          <ProductInfo/>
          <ProductSimilar/>
          <ReviewBlock/>
        </div>
      </main>
      <UpButton/>
      <Footer/>
    </div>
  );
}

export default Product;
