import {Product} from '../../types/product';
import {PRODUCT_RATING_COUNT} from '../../const';

type CardProps = {
  product: Product;
}

function Card ({product}: CardProps): JSX.Element {

  const {name, price, reviewCount, rating, previewImg, previewImg2x, previewImgWebp, previewImgWebp2x, type} = product;

  const cardRating: boolean[] = [...Array<number>(PRODUCT_RATING_COUNT)].map((_, i) => i < rating);

  return (
    <div className="product-card">
      <div className="product-card__img">
        <picture>
          <source type="image/webp" srcSet={`../${previewImgWebp}, ../${previewImgWebp2x}`} /><img src={`../${previewImg}`} srcSet={`../${previewImg2x}`} alt={name} width={280} height={240} />
        </picture>
      </div>
      <div className="product-card__info">
        <div className="rate product-card__rate">
          {
            cardRating
              .map((item, index) => (
                <svg key = {Number(index)} width={17} height={16} aria-hidden="true">
                  <use xlinkHref={`${(item === true) ? '#icon-full-star' : '#icon-star'}`}/>
                </svg>
              ))
          }
          <p className="visually-hidden">Рейтинг: 3</p>
          <p className="rate__count"><span className="visually-hidden">Всего оценок:</span>{reviewCount}</p>
        </div>
        <p className="product-card__title">{name}</p>
        <p className="product-card__price"><span className="visually-hidden">Цена:</span>{`${price} ₽`}</p>
        <p className="product-card__type">{type}</p>
      </div>
      <div className="product-card__buttons">
        <button className="btn btn--purple product-card__btn" type="button">Купить
        </button>
        <a className="btn btn--transparent" href="/">Подробнее
        </a>
      </div>
    </div>
  );
}

export default Card;
