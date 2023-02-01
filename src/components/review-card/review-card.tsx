import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import Rating from '../../components/rating/rating';
import {Review} from '../../types/review';
import {ComponentType} from '../../const';

type ReviewCardType = {
    survey: Review;
}

function ReviewCard ({survey}: ReviewCardType): JSX.Element {

  const {userName, createAt, rating, advantage, disadvantage, review} = survey;

  return (
    <li className="review-card">
      <div className="review-card__head">
        <p className="title title--h4">{userName}</p>
        <time className="review-card__data" dateTime={createAt}>{dayjs(createAt).locale('ru').format('D MMMM')}</time>
      </div>
      <Rating
        rating={rating}
        componentType={ComponentType.ReviewCardRating}
      />
      <ul className="review-card__list">
        <li className="item-list"><span className="item-list__title">Достоинства:</span>
          <p className="item-list__text">{advantage}</p>
        </li>
        <li className="item-list"><span className="item-list__title">Недостатки:</span>
          <p className="item-list__text">{disadvantage}</p>
        </li>
        <li className="item-list"><span className="item-list__title">Комментарий:</span>
          <p className="item-list__text">{review}</p>
        </li>
      </ul>
    </li>
  );
}

export default ReviewCard;
