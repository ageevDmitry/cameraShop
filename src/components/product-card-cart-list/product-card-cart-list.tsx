import {useAppSelector} from '../../hooks/use-app-selector';
import {getProductsCart} from '../../store/products-data/selectors';
import ProductCardCart from '../../components/product-card-cart/product-card-cart';

function ProductCardCartList (): JSX.Element {

  const productsCart = useAppSelector(getProductsCart);

  return (
    <ul className="basket__list" data-testid="basket__list">
      {
        productsCart.map((product) => (
          <ProductCardCart
            key = {product.product.id}
            product = {product}
          />)
        )
      }
    </ul>
  );
}

export default ProductCardCartList;
