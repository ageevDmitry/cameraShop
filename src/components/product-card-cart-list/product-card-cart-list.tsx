import ProductCardCart from '../../components/product-card-cart/product-card-cart';
import {ProductCart} from '../../types/product';

type ProductCardCartListProps = {
  productsCart: ProductCart[];
  setIsModalRemoveCart: (isModalReview: boolean) => void;
}

function ProductCardCartList ({productsCart, setIsModalRemoveCart}: ProductCardCartListProps): JSX.Element {

  return (
    <ul className="basket__list" data-testid="basket__list">
      {
        productsCart.map((product) => (
          <ProductCardCart
            key = {product.product.id}
            product = {product}
            setIsModalRemoveCart = {setIsModalRemoveCart}
          />)
        )
      }
    </ul>
  );
}

export default ProductCardCartList;
