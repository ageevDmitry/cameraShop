import {useForm} from 'react-hook-form';
import {ReviewPost} from '../../types/review';
// import {REVIEW_FORM_STATUSES} from '../../const';
// import {useAppDispatch, useAppSelector} from '../../hooks';
// import {sendNewReviewAction} from '../../store/api-action';
// import {getProductDetail} from '../../store/products-data/selectors';

function ModalReview (): JSX.Element {

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
                      <input className="visually-hidden" id="star-5" name="rate" type="radio" defaultValue={5} />
                      <label className="rate__label" htmlFor="star-5" title="Отлично" />
                      <input className="visually-hidden" id="star-4" name="rate" type="radio" defaultValue={4} />
                      <label className="rate__label" htmlFor="star-4" title="Хорошо" />
                      <input className="visually-hidden" id="star-3" name="rate" type="radio" defaultValue={3} />
                      <label className="rate__label" htmlFor="star-3" title="Нормально" />
                      <input className="visually-hidden" id="star-2" name="rate" type="radio" defaultValue={2} />
                      <label className="rate__label" htmlFor="star-2" title="Плохо" />
                      <input className="visually-hidden" id="star-1" name="rate" type="radio" defaultValue={1} />
                      <label className="rate__label" htmlFor="star-1" title="Ужасно" />
                    </div>
                    <div className="rate__progress"><span className="rate__stars">0</span> <span>/</span> <span className="rate__all-stars">5</span>
                    </div>
                  </div>
                  <p className="rate__message">Нужно оценить товар</p>
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
