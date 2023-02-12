import {Link} from 'react-router-dom';
import {Product} from '../../types/product';
import {useModalClose} from '../../hooks/useModalClose';

type ModalReviewSuccessType = {
    product: Product;
    onClickCloseModalReviewSuccess: (isModalReviewSuccess: boolean) => void;
  }

function ModalReviewSuccess ({product, onClickCloseModalReviewSuccess}: ModalReviewSuccessType): JSX.Element {

  const {id} = product;
  const productId = `/product/${id}`;

  useModalClose(onClickCloseModalReviewSuccess);

  return (
    <div className="modal is-active modal--narrow">
      <div className="modal__wrapper">
        <div className="modal__overlay"
          onClick={() => {
            onClickCloseModalReviewSuccess(false);
          }}
        />
        <div className="modal__content">
          <p className="title title--h4">Спасибо за отзыв</p>
          <svg className="modal__icon" width={80} height={78} aria-hidden="true">
            <use xlinkHref="#icon-review-success" />
          </svg>
          <div className="modal__buttons">
            <Link to={productId} className="btn btn--purple modal__btn modal__btn--fit-width" type="button"
              onClick={() => {
                onClickCloseModalReviewSuccess(false);
              }}
            >Вернуться к покупкам
            </Link>
          </div>
          <button className="cross-btn" type="button" aria-label="Закрыть попап"
            onClick={() => {
              onClickCloseModalReviewSuccess(false);
            }}
          >
            <svg width={10} height={10} aria-hidden="true">
              <use xlinkHref="#icon-close" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalReviewSuccess;
