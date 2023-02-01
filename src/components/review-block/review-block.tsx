import {Review} from '../../types/review';
import ReviewCard from '../review-card/review-card';
import {getSortReviews} from '../../utils';

type ReviewBlockType = {
  reviews: Review[];
}

function ReviewBlock ({reviews}: ReviewBlockType): JSX.Element {

  const currentReviews = getSortReviews(reviews.slice(0, 3));

  return (
    <div className="page-content__section">
      <section className="review-block">
        <div className="container">
          <div className="page-content__headed">
            <h2 className="title title--h3">Отзывы</h2>
            <button className="btn" type="button">Оставить свой отзыв</button>
          </div>
          <ul className="review-block__list">
            {
              currentReviews
                .map((review) => (
                  <ReviewCard
                    key = {review.id}
                    survey={review}
                  /> ))
            }
          </ul>
          <div className="review-block__buttons">
            <button className="btn btn--purple" type="button">Показать больше отзывов
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ReviewBlock;
