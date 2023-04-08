import {Product} from '../../types/product';
import {Link, generatePath} from 'react-router-dom';
import Rating from '../rating/rating';
import {ComponentType} from '../../const';
import {addCurrentProductCart} from '../../store/products-data/products-data';
import {useAppDispatch} from '../../hooks/use-app-dispatch';
import {useAppSelector} from '../../hooks/use-app-selector';
import {getProductsCart} from '../../store/products-data/selectors';
import {getCurrentCatalogPagePath} from '../../store/products-ui/selectors';
import {checkProductInCart} from '../../utils';
import {useEffect, useState} from 'react';
import {AppRoute} from '../../const';

type ProductCardProps = {
  product: Product;
  componentType?: ComponentType;
  setIsModalAddCart?: (isModalReview: boolean) => void;
}

function ProductCard ({product, componentType, setIsModalAddCart}: ProductCardProps): JSX.Element {

  const dispatch = useAppDispatch();
  const {id, name, price, reviewCount, rating, previewImg, previewImg2x, previewImgWebp, previewImgWebp2x} = product;
  const productId = `/product/${id}`;
  const productsCart = useAppSelector(getProductsCart);
  const [isProductCart, setIsProductCart] = useState(false);
  const {currentCatalogPage, search} = useAppSelector(getCurrentCatalogPagePath);

  useEffect(() => {
    setIsProductCart(checkProductInCart(productsCart, product));
  }, [productsCart, product]);

  return (
    <div className={`product-card ${(componentType === ComponentType.ProductsSimilar) ? 'is-active' : ''}`}>
      <div className="product-card__img">
        <picture>
          <source type="image/webp" srcSet={`/${previewImgWebp}, /${previewImgWebp2x} 2x`} />
          <img src={previewImg} srcSet={`${previewImg2x} 2x`} alt={name} width={280} height={240} />
        </picture>
      </div>
      <div className="product-card__info">
        <Rating
          rating = {rating}
          reviewCount = {reviewCount}
          componentType = {ComponentType.ProductCardRating}
        />
        <p className="product-card__title">{name}</p>
        <p className="product-card__price"><span className="visually-hidden">Цена:</span>{`${price} ₽`}</p>
      </div>
      <div className="product-card__buttons">
        {
          (isProductCart) ?
            <Link className="btn btn--purple-border product-card__btn product-card__btn--in-cart" type="button"
              to={{
                pathname: generatePath(AppRoute.Catalog, {pageNumber: String(currentCatalogPage)}),
                search
              }}
            >
              В корзине
            </Link>
            :
            <button className="btn btn--purple product-card__btn" type="button"
              onClick={() =>{
                dispatch(addCurrentProductCart(product));
                if (setIsModalAddCart) {
                  setIsModalAddCart(true);
                }
              }}
            >Купить
            </button>
        }
        <Link to={productId} className="btn btn--transparent">Подробнее
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
