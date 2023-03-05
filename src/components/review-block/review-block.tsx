import dayjs from 'dayjs';
import {useState} from 'react';
import {useAppSelector} from '../../hooks/useAppSelector';
import {Review} from '../../types/review';
import {DefaultReviewsView, STEP_REVIEWS_VIEW} from '../../const';
import {getIsDataLoading} from '../../store/products-data/selectors';
import ReviewCard from '../review-card/review-card';
import SpinnerComponent from '../../components/spinner-component/spinner-component';

type ReviewBlockType = {
  reviews: Review[];
  onClickOpenModalReview: (isModalReview: boolean) => void;
}

function ReviewBlock ({reviews, onClickOpenModalReview}: ReviewBlockType): JSX.Element {

  const isLoading = useAppSelector(getIsDataLoading);
  const [currentReviewsView, setCurrentReviewsView] = useState<[number, number]>([DefaultReviewsView.StartItem, DefaultReviewsView.EndItem]);
  const sortedReviews = reviews.slice().sort((a, b) => dayjs(b.createAt).diff(dayjs(a.createAt)));
  const currentReviews = sortedReviews.slice(currentReviewsView[0], currentReviewsView[1]);

  if (isLoading) {
    return (
      <SpinnerComponent/>
    );
  }

  return (
    <div className="page-content__section">
      <section className="review-block">
        <div className="container">
          <div className="page-content__headed">
            <h2 className="title title--h3">Отзывы</h2>
            <button className="btn" type="button" data-testid="modalReview"
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
