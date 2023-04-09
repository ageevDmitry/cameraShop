import {Link, generatePath} from 'react-router-dom';
import {useAppSelector} from '../../hooks/use-app-selector';
import {getProductsCart} from '../../store/products-data/selectors';
import {useEffect, useState} from 'react';
import {getCountProductsInCart} from '../../utils';
import {AppRoute} from '../../const';

function CartHeader (): JSX.Element {

  const productsCart = useAppSelector(getProductsCart);
  const [productCartCount, setProductCartCount] = useState(0);

  useEffect(() => {
    setProductCartCount(getCountProductsInCart(productsCart));
  }, [productsCart]);

  return (
    <Link className="header__basket-link"
      to={{
        pathname: generatePath(AppRoute.Cart)
      }}
    >
      <svg width={16} height={16} aria-hidden="true">
        <use xlinkHref="#icon-basket" />
      </svg>
      {
        (productCartCount > 0) ?
          <span className="header__basket-count">{productCartCount}</span> :
          ''
      }
    </Link>
  );
}

export default CartHeader;
