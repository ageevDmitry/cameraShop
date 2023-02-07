import {PRODUCT_RATING_COUNT, ComponentType} from '../../const';

type CardProps = {
    rating: number;
    reviewCount?: number;
    componentType: ComponentType;
}

function Rating ({rating, reviewCount, componentType}: CardProps): JSX.Element {

  function getRatingDescription(type: ComponentType) {
    switch(type) {
      case ComponentType.ProductCardRating:
        return (
          <>
            <p className="visually-hidden">Рейтинг: {rating}</p>
            <p className="rate__count"><span className="visually-hidden">Всего оценок:</span>{reviewCount}</p>
          </>
        );
      case ComponentType.ReviewCardRating:
        return (
          <p className="visually-hidden">Оценка: {rating}</p>
        );
    }
  }

  const productRating: boolean[] = [...Array<number>(PRODUCT_RATING_COUNT)].map((_, i) => i < rating);
  const ratingDescription = getRatingDescription(componentType);

  return (
    <div className={`rate ${componentType}-card__rate`} data-testid="rating">
      {
        productRating
          .map((item, index) => (
            <svg key = {Number(index)} width={17} height={16} aria-hidden="true">
              <use xlinkHref={`${(item === true) ? '#icon-full-star' : '#icon-star'}`}/>
            </svg>
          ))
      }
      {
        ratingDescription
      }
    </div>
  );
}

export default Rating;
