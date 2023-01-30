import {PRODUCT_RATING_COUNT} from '../../const';

type CardProps = {
    rating: number;
    reviewCount: number;
}

function Rating ({rating, reviewCount}: CardProps): JSX.Element {

  const cardRating: boolean[] = [...Array<number>(PRODUCT_RATING_COUNT)].map((_, i) => i < rating);

  return (
    <div className="rate product-card__rate">
      {
        cardRating
          .map((item, index) => (
            <svg key = {Number(index)} width={17} height={16} aria-hidden="true">
              <use xlinkHref={`${(item === true) ? '#icon-full-star' : '#icon-star'}`}/>
            </svg>
          ))
      }
      <p className="visually-hidden">Рейтинг: {rating}</p>
      <p className="rate__count"><span className="visually-hidden">Всего оценок:</span>{reviewCount}</p>
    </div>
  );
}

export default Rating;
