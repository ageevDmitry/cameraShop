import {Product} from '../../types/product';
import {Link} from 'react-router-dom';
import Rating from '../rating/rating';
import {ComponentType} from '../../const';

type ProductCardProps = {
  product: Product;
  componentType?: ComponentType;
}

function ProductCard ({product, componentType}: ProductCardProps): JSX.Element {

  const {id, name, price, reviewCount, rating, previewImg, previewImg2x, previewImgWebp, previewImgWebp2x, type} = product;

  const productId = `/product/${id}`;

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
        <p className="product-card__type">{type}</p>
      </div>
      <div className="product-card__buttons">
        <button className="btn btn--purple product-card__btn" type="button">Купить
        </button>
        <Link to={productId} className="btn btn--transparent">Подробнее
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
