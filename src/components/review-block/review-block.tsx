import {Review} from '../../types/review';
import ReviewCard from '../review-card/review-card';
import {getSortReviews} from '../../utils';
import {useState} from 'react';
import {DefaultReviewsView, STEP_REVIEWS_VIEW} from '../../const';

type ReviewBlockType = {
  reviews: Review[];
  onClickOpenModalReview: (isModalReview: boolean) => void;
}

function ReviewBlock ({reviews, onClickOpenModalReview}: ReviewBlockType): JSX.Element {

  const [currentReviewsView, setCurrentReviewsView] = useState<[number, number]>([DefaultReviewsView.StartItem, DefaultReviewsView.EndItem]);
  const sortedReviews = getSortReviews(reviews);
  const currentReviews = sortedReviews.slice(currentReviewsView[0], currentReviewsView[1]);

  return (
    <div className="page-content__section">
      <section className="review-block">
        <div className="container">
          <div className="page-content__headed">
            <h2 className="title title--h3">Отзывы</h2>
            <button className="btn" type="button"
              onClick={() => {
                onClickOpenModalReview(true);
              }}
            >Оставить свой отзыв
            </button>
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
            {
              (currentReviewsView[1] < reviews.length) &&
              <button className="btn btn--purple" type="button"
                onClick={() => {
                  setCurrentReviewsView([DefaultReviewsView.StartItem, currentReviewsView[1] + STEP_REVIEWS_VIEW]);
                }}
              >Показать больше отзывов
              </button>
            }
          </div>
        </div>
      </section>
    </div>
  );
}

export default ReviewBlock;
