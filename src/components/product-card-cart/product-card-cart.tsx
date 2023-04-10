import {ProductCart} from '../../types/product';
import {useAppDispatch} from '../../hooks/use-app-dispatch';
import {addCurrentProductCart} from '../../store/products-data/products-data';

type ProductCardCartProps = {
  product: ProductCart;
  setIsModalRemoveCart: (isModalReview: boolean) => void;
}

function ProductCardCart ({product, setIsModalRemoveCart}: ProductCardCartProps): JSX.Element {

  const dispatch = useAppDispatch();
  const {name, level, price, type, category, vendorCode, previewImg, previewImg2x, previewImgWebp, previewImgWebp2x} = product.product;
  const categoryLowerCase = category.toLowerCase();

  return (
    <li className="basket-item">
      <div className="basket-item__img">
        <picture>
          <source type="image/webp" srcSet={`/${previewImgWebp}, /${previewImgWebp2x} 2x`} />
          <img src={previewImg} srcSet={`${previewImg2x} 2x`} alt={name} width={140} height={120} />
        </picture>
      </div>
      <div className="basket-item__description">
        <p className="basket-item__title">{name}</p>
        <ul className="basket-item__list">
          <li className="basket-item__list-item"><span className="basket-item__article">Артикул:</span> <span className="basket-item__number">{vendorCode}</span>
          </li>
          <li className="basket-item__list-item">{`${type} ${categoryLowerCase}`}</li>
          <li className="basket-item__list-item">{`${level} уровень`}</li>
        </ul>
      </div>
      <p className="basket-item__price"><span className="visually-hidden">Цена:</span>{`${price} ₽`}</p>
      <div className="quantity">
        <button className="btn-icon btn-icon--prev" disabled aria-label="уменьшить количество товара">
          <svg width={7} height={12} aria-hidden="true">
            <use xlinkHref="#icon-arrow" />
          </svg>
        </button>
        <label className="visually-hidden" htmlFor="counter2" />
        <input type="number" id="counter2" defaultValue={1} min={1} max={99} aria-label="количество товара" />
        <button className="btn-icon btn-icon--next" aria-label="увеличить количество товара">
          <svg width={7} height={12} aria-hidden="true">
            <use xlinkHref="#icon-arrow" />
          </svg>
        </button>
      </div>
      <div className="basket-item__total-price"><span className="visually-hidden">Общая цена:</span>{`${price} ₽`}</div>
      <button className="cross-btn" type="button" aria-label="Удалить товар"
        onClick={() =>{
          dispatch(addCurrentProductCart(product.product));
          if (setIsModalRemoveCart) {
            setIsModalRemoveCart(true);
          }
        }}
      >
        <svg width={10} height={10} aria-hidden="true">
          <use xlinkHref="#icon-close" />
        </svg>
      </button>
    </li>
  );
}

export default ProductCardCart;
