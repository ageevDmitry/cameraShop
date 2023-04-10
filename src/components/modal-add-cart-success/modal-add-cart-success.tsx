import {useModalClose} from '../../hooks/use-modal-close';
import FocusTrap from 'focus-trap-react';
import {Link, generatePath} from 'react-router-dom';
import {useAppSelector} from '../../hooks/use-app-selector';
import {getCurrentCatalogPagePath} from '../../store/products-ui/selectors';
import {AppRoute} from '../../const';
import {cleanUpCurrentProductCart} from '../../store/products-data/products-data';
import {useAppDispatch} from '../../hooks/use-app-dispatch';

type ModalAddCartProps = {
  setIsModalAddCartSuccess: (isModalReview: boolean) => void;
}

function ModalAddCartSuccess ({setIsModalAddCartSuccess}: ModalAddCartProps): JSX.Element {

  const {currentCatalogPage, search} = useAppSelector(getCurrentCatalogPagePath);
  useModalClose(setIsModalAddCartSuccess);
  const dispatch = useAppDispatch();
  dispatch(cleanUpCurrentProductCart());

  return (
    <FocusTrap>
      <div className="modal is-active modal--narrow">
        <div className="modal__wrapper">
          <div className="modal__overlay"
            onClick={() =>{
              setIsModalAddCartSuccess(false);
            }}
          />
          <div className="modal__content">
            <p className="title title--h4">Товар успешно добавлен в корзину</p>
            <svg className="modal__icon" width={86} height={80} aria-hidden="true">
              <use xlinkHref="#icon-success" />
            </svg>
            <div className="modal__buttons">
              <Link className="btn btn--transparent modal__btn"
                onClick={() =>{
                  setIsModalAddCartSuccess(false);
                }}
                to={{
                  pathname: generatePath(AppRoute.Catalog, {pageNumber: String(currentCatalogPage)}),
                  search
                }}
              >
                Продолжить покупки
              </Link>
              <Link className="btn btn--purple modal__btn modal__btn--fit-width"
                to={{
                  pathname: generatePath(AppRoute.Cart)
                }}
              >
                Перейти в корзину
              </Link>
            </div>
            <button className="cross-btn" type="button" aria-label="Закрыть попап"
              onClick={() =>{
                setIsModalAddCartSuccess(false);
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

export default ModalAddCartSuccess;
