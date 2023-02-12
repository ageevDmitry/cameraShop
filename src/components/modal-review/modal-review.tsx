import {useForm} from 'react-hook-form';
import {useState} from 'react';
import {useModalClose} from '../../hooks/useModalClose';
import {ReviewPost} from '../../types/review';
import {REVIEW_FORM_STATUSES, DEFAULT_RATING_REVIEW} from '../../const';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {sendNewReviewAction} from '../../store/api-action';
import {getProductDetail} from '../../store/products-data/selectors';
import {Fragment} from 'react';
import FocusTrap from 'focus-trap-react';
import styles from './modal-review.module.css';

type ModalReviewType = {
  onClickCloseModalReview: (isModalReview: boolean) => void;
  onClickOpenModalReviewSuccess: (isModalReviewSuccess: boolean) => void;
}

function ModalReview ({onClickCloseModalReview, onClickOpenModalReviewSuccess}: ModalReviewType): JSX.Element {

  useModalClose(onClickCloseModalReview);

  const [currentRating, setCurrentRating] = useState <number>(DEFAULT_RATING_REVIEW);
  const {register, handleSubmit, formState: {errors}} = useForm<ReviewPost>();
  const dispatch = useAppDispatch();
  const productDetail = useAppSelector(getProductDetail);
  const id = productDetail?.id;

  const onSubmit = (data: ReviewPost) => {

    if (id) {
      dispatch(sendNewReviewAction({
        userName: data.userName,
        advantage: data.advantage,
        disadvantage: data.disadvantage,
        review: data.review,
        rating: Number(data.rating),
        cameraId: id,
      }
      ));
    }
    onClickCloseModalReview(false);
    onClickOpenModalReviewSuccess(true);
  };

  return (
    <FocusTrap>
      <div className="modal is-active">
        <div className="modal__wrapper">
          <div className="modal__overlay"
            onClick={() => {
              onClickCloseModalReview(false);
            }}
          />
          <div className="modal__content">
            <p className="title title--h4">Оставить отзыв</p>
            <div className="form-review">
              <form onSubmit={(...args) => void handleSubmit(onSubmit)(...args)} method="post">
                <div className="form-review__rate">
                  <fieldset className="rate form-review__item">
                    <legend className="rate__caption">Рейтинг
                      <svg width={9} height={9} aria-hidden="true">
                        <use xlinkHref="#icon-snowflake" />
                      </svg>
                    </legend>
                    <div className="rate__bar">
                      <div className={`rate__group ${styles.rate__group__reverse}`}>
                        {REVIEW_FORM_STATUSES.map((item) => (
                          <Fragment key = {item.starNumber}>
                            <input className="visually-hidden" id={`star-${item.starNumber}`} type="radio" value={item.starNumber} {...register('rating', {required: true})}
                              onClick={() => {
                                setCurrentRating(item.starNumber);
                              }}
                            />
                            <label className={`${(currentRating >= item.starNumber) ? `${styles.rate__label__hover}` : 'rate__label'}`} htmlFor={`star-${item.starNumber}`} title={item.title} />
                          </Fragment>
                        ))}
                      </div>
                      {errors.rating?.type === 'required' && <p className="rate__message" style={{opacity: 100}}>Нужно оценить товар</p>}
                      <div className="rate__progress"><span className="rate__stars"></span>{currentRating}<span>/</span> <span className="rate__all-stars">5</span>
                      </div>
                    </div>
                  </fieldset>
                  <div className={`custom-input form-review__item ${(errors.userName?.type === 'required') ? 'is-invalid' : ''}`}>
                    <label>
                      <span className="custom-input__label">Ваше имя
                        <svg width={9} height={9} aria-hidden="true">
                          <use xlinkHref="#icon-snowflake" />
                        </svg>
                      </span>
                      <input type="text" placeholder="Введите ваше имя" {...register('userName', {required: true})}
                        aria-invalid={errors.userName ? 'true' : 'false'} data-testid="userName"
                      />
                      {errors.userName?.type === 'required' && <p className="custom-input__error" style={{opacity: 100}}>Нужно указать имя</p>}
                    </label>
                  </div>
                  <div className={`custom-input form-review__item ${(errors.advantage?.type === 'required') ? 'is-invalid' : ''}`}>
                    <label>
                      <span className="custom-input__label">Достоинства
                        <svg width={9} height={9} aria-hidden="true">
                          <use xlinkHref="#icon-snowflake" />
                        </svg>
                      </span>
                      <input type="text" placeholder="Основные преимущества товара" {...register('advantage', {required: true})}
                        aria-invalid={errors.advantage ? 'true' : 'false'} data-testid="advantage"
                      />
                      {errors.advantage?.type === 'required' && <p className="custom-input__error" style={{opacity: 100}}>Нужно указать достоинства</p>}
                    </label>
                  </div>
                  <div className={`custom-input form-review__item ${(errors.disadvantage?.type === 'required') ? 'is-invalid' : ''}`}>
                    <label>
                      <span className="custom-input__label">Недостатки
                        <svg width={9} height={9} aria-hidden="true">
                          <use xlinkHref="#icon-snowflake" />
                        </svg>
                      </span>
                      <input type="text" placeholder="Главные недостатки товара" {...register('disadvantage', {required: true})}
                        aria-invalid={errors.disadvantage ? 'true' : 'false'} data-testid="disadvantage"
                      />
                      {errors.disadvantage?.type === 'required' && <p className="custom-input__error" style={{opacity: 100}}>Нужно указать недостатки</p>}
                    </label>
                  </div>
                  <div className={`custom-textarea form-review__item ${(errors.disadvantage?.type === 'required' || errors.review?.type === 'minLength') ? 'is-invalid' : ''}`}>
                    <label>
                      <span className="custom-textarea__label">Комментарий
                        <svg width={9} height={9} aria-hidden="true">
                          <use xlinkHref="#icon-snowflake" />
                        </svg>
                      </span>
                      <textarea placeholder="Поделитесь своим опытом покупки" defaultValue={''} {...register('review', {required: true, minLength: 5})}
                        aria-invalid={errors.review ? 'true' : 'false'} data-testid="review"
                      />
                      {errors.review?.type === 'required' && <div className="custom-textarea__error" style={{opacity: 100}}>Нужно добавить комментарий</div>}
                      {errors.review?.type === 'minLength' && <div className="custom-textarea__error" style={{opacity: 100}}>Более 5 символов</div>}
                    </label>
                  </div>
                </div>
                <button className="btn btn--purple form-review__btn" type="submit" data-testid="modalReviewSuccess">Отправить отзыв</button>
              </form>
            </div>
            <button className="cross-btn" type="button" aria-label="Закрыть попап"
              onClick={() => {
                onClickCloseModalReview(false);
              }}
            >
              <svg width={10} height={10} aria-hidden="true">
                <use xlinkHref="#icon-close" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </FocusTrap>
  );
}

export default ModalReview;
