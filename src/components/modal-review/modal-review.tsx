import {useForm} from 'react-hook-form';
import {useState} from 'react';
import {ReviewPost} from '../../types/review';
import {REVIEW_FORM_STATUSES} from '../../const';
// import {useAppDispatch, useAppSelector} from '../../hooks';
// import {sendNewReviewAction} from '../../store/api-action';
// import {getProductDetail} from '../../store/products-data/selectors';
import {Fragment} from 'react';

function ModalReview (): JSX.Element {

  const [currentRating, setCurrentRating] = useState <number>(0);
  const {register, handleSubmit, formState: {errors}} = useForm<ReviewPost>();
  // const dispatch = useAppDispatch();
  // const productDetail = useAppSelector(getProductDetail);
  // const id = productDetail?.id;

  const onSubmit = (data: ReviewPost) => {

    console.log(data);

    // if (id) {
    //   dispatch(sendNewReviewAction({
    //     cameraId: id,
    //     userName: data.userName,
    //     advantage: data.advantage,
    //     disadvantage: data.disadvantage,
    //     review: data.review,
    //     rating: data.rating,
    //   }
    //   ));
    // }
  };

  return (
    <div className="modal is-active">
      <div className="modal__wrapper">
        <div className="modal__overlay" />
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
                    <div className="rate__group">
                      {REVIEW_FORM_STATUSES.map((item) => (
                        <Fragment key = {item.starNumber}>
                          <input className="visually-hidden" id={`star-${item.starNumber}`} type="radio" value={item.starNumber} {...register('rating', {required: true})}
                            onClick={() => {
                              setCurrentRating(item.starNumber);
                            }}
                          />
                          <label className="rate__label" htmlFor={`star-${item.starNumber}`} title={item.title} />
                        </Fragment>
                      ))}
                    </div>
                    {errors.rating?.type === 'required' && <p className="rate__message" style={{opacity: 100}}>Нужно оценить товар</p>}
                    <div className="rate__progress"><span className="rate__stars"></span>{currentRating}<span>/</span> <span className="rate__all-stars">5</span>
                    </div>
                  </div>
                </fieldset>
                <div className="custom-input form-review__item">
                  <label>
                    <span className="custom-input__label">Ваше имя
                      <svg width={9} height={9} aria-hidden="true">
                        <use xlinkHref="#icon-snowflake" />
                      </svg>
                    </span>
                    <input type="text" placeholder="Введите ваше имя" {...register('userName', {required: true})}
                      aria-invalid={errors.userName ? 'true' : 'false'}
                    />
                    {errors.userName?.type === 'required' && <p className="custom-input__error" style={{opacity: 100}}>Нужно указать имя</p>}
                  </label>
                </div>
                <div className="custom-input form-review__item">
                  <label>
                    <span className="custom-input__label">Достоинства
                      <svg width={9} height={9} aria-hidden="true">
                        <use xlinkHref="#icon-snowflake" />
                      </svg>
                    </span>
                    <input type="text" placeholder="Основные преимущества товара" {...register('advantage', {required: true})}
                      aria-invalid={errors.advantage ? 'true' : 'false'}
                    />
                    {errors.advantage?.type === 'required' && <p className="custom-input__error" style={{opacity: 100}}>Нужно указать достоинства</p>}
                  </label>
                </div>
                <div className="custom-input form-review__item">
                  <label>
                    <span className="custom-input__label">Недостатки
                      <svg width={9} height={9} aria-hidden="true">
                        <use xlinkHref="#icon-snowflake" />
                      </svg>
                    </span>
                    <input type="text" placeholder="Главные недостатки товара" {...register('disadvantage', {required: true})}
                      aria-invalid={errors.disadvantage ? 'true' : 'false'}
                    />
                    {errors.disadvantage?.type === 'required' && <p className="custom-input__error" style={{opacity: 100}}>Нужно указать недостатки</p>}
                  </label>
                </div>
                <div className="custom-textarea form-review__item">
                  <label>
                    <span className="custom-textarea__label">Комментарий
                      <svg width={9} height={9} aria-hidden="true">
                        <use xlinkHref="#icon-snowflake" />
                      </svg>
                    </span>
                    <textarea placeholder="Поделитесь своим опытом покупки" defaultValue={''} {...register('review', {required: true, minLength: 5})}
                      aria-invalid={errors.review ? 'true' : 'false'}
                    />
                    {errors.review?.type === 'required' && <div className="custom-textarea__error" style={{opacity: 100}}>Нужно добавить комментарий</div>}
                    {errors.review?.type === 'minLength' && <div className="custom-textarea__error" style={{opacity: 100}}>Более 5 символов</div>}
                  </label>
                </div>
              </div>
              <button className="btn btn--purple form-review__btn" type="submit">Отправить отзыв</button>
            </form>
          </div>
          <button className="cross-btn" type="button" aria-label="Закрыть попап">
            <svg width={10} height={10} aria-hidden="true">
              <use xlinkHref="#icon-close" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalReview;
