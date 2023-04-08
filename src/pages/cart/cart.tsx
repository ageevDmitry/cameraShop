import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';
import {NAV_BREADCRUMB_MAIN} from '../../const';

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
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default Cart;
