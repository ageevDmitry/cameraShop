import {Product} from '../../types/product';
import {useModalClose} from '../../hooks/use-modal-close';
import {addProductCart} from '../../store/products-data/products-data';
import {getProductsCart} from '../../store/products-data/selectors';
import FocusTrap from 'focus-trap-react';
import {useAppDispatch} from '../../hooks/use-app-dispatch';
import {useAppSelector} from '../../hooks/use-app-selector';
import {checkProductsCart} from '../../utils';

type ModalAddCartProps = {
  product: Product;
  setIsModalAddCart: (isModalReview: boolean) => void;
}

function ModalAddCart ({product, setIsModalAddCart}: ModalAddCartProps): JSX.Element {

  const {name, level, type, category, vendorCode, price, previewImg, previewImg2x, previewImgWebp, previewImgWebp2x} = product;
  const categoryLowerCase = category.toLowerCase();
  const dispatch = useAppDispatch();
  const productsCart = useAppSelector(getProductsCart);

  useModalClose(setIsModalAddCart);

  return (
    <FocusTrap>
      <div className="modal is-active">
        <div className="modal__wrapper">
          <div className="modal__overlay"
            onClick={() => {
              setIsModalAddCart(false);
            }}
          />
          <div className="modal__content">
            <p className="title title--h4">Добавить товар в корзину</p>
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
                  <li className="basket-item__list-item">{`${type} ${categoryLowerCase}`}</li>
                  <li className="basket-item__list-item">{level}</li>
                </ul>
                <p className="basket-item__price"><span className="visually-hidden">Цена:</span>{`${price} ₽`}</p>
              </div>
            </div>
            <div className="modal__buttons">
              <button className="btn btn--purple modal__btn modal__btn--fit-width" type="button"
                onClick={() =>{
                  dispatch(addProductCart(checkProductsCart(productsCart,
                    {product: product,
                      count: 1} )));
                }}
              >
                <svg width={24} height={16} aria-hidden="true">
                  <use xlinkHref="#icon-add-basket" />
                </svg>Добавить в корзину
              </button>
            </div>
            <button className="cross-btn" type="button" aria-label="Закрыть попап"
              onClick={() =>{
                setIsModalAddCart(false);
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

export default ModalAddCart;
