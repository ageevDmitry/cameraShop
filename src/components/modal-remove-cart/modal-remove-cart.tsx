import FocusTrap from 'focus-trap-react';
import {Product} from '../../types/product';
import {useModalClose} from '../../hooks/use-modal-close';
import {useAppDispatch} from '../../hooks/use-app-dispatch';
import {deleteProductCart} from '../../store/products-data/products-data';
import {Link, generatePath} from 'react-router-dom';
import {AppRoute} from '../../const';
import {checkCategoryDescription} from '../../utils';

type ModalRemoveCartProps = {
  product: Product;
  setIsModalRemoveCart: (isModalReview: boolean) => void;
}

function ModalRemoveCart ({product, setIsModalRemoveCart}: ModalRemoveCartProps): JSX.Element {

  const {name, level, type, category, vendorCode, previewImg, previewImg2x, previewImgWebp, previewImgWebp2x} = product;
  const categoryDescription = checkCategoryDescription(category);
  const dispatch = useAppDispatch();

  useModalClose(setIsModalRemoveCart);

  return (
    <FocusTrap>
      <div className="modal is-active">
        <div className="modal__wrapper">
          <div className="modal__overlay" />
          <div className="modal__content">
            <p className="title title--h4">Удалить этот товар?</p>
            <div className="basket-item basket-item--short">
              <div className="basket-item__img">
                <picture>
                  <source type="image/webp" srcSet={`/${previewImgWebp}, /${previewImgWebp2x} 2x`} /><img src={previewImg} srcSet={`${previewImg2x} 2x`} alt={name} width={140} height={120} />
                </picture>
              </div>
              <div className="basket-item__description">
                <p className="basket-item__title">{name}</p>
                <ul className="basket-item__list">
                  <li className="basket-item__list-item"><span className="basket-item__article">Артикул:</span> <span className="basket-item__number">{vendorCode}</span>
                  </li>
                  <li className="basket-item__list-item">{`${type} ${categoryDescription}`}</li>
                  <li className="basket-item__list-item">{`${level} уровень`}</li>
                </ul>
              </div>
            </div>
            <div className="modal__buttons">
              <button className="btn btn--purple modal__btn modal__btn--half-width" type="button"
                onClick={() =>{
                  dispatch(deleteProductCart(product));
                  setIsModalRemoveCart(false);
                }}
              >Удалить
              </button>
              <Link className="btn btn--transparent modal__btn modal__btn--half-width"
                onClick={() =>{
                  setIsModalRemoveCart(false);
                }}
                to={{
                  pathname: generatePath(AppRoute.Cart)
                }}
              >Продолжить покупки
              </Link>
            </div>
            <button className="cross-btn" type="button" aria-label="Закрыть попап"
              onClick={() =>{
                setIsModalRemoveCart(false);
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

export default ModalRemoveCart;
