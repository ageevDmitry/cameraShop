import {getProductsCart,
  getProductsCartDiscount,
  getCoupon,
  getIsCouponValid
} from '../../store/products-data/selectors';
import {addCoupon} from '../../store/products-data/products-data';
import {useAppSelector} from '../../hooks/use-app-selector';
import {useState, useEffect, FormEvent, ChangeEvent} from 'react';
import {getTotal,
  getDiscount,
  getBill,
  getCouponState,
  getCamerasIds
} from '../../utils';
import {useAppDispatch} from '../../hooks/use-app-dispatch';
import {sendCouponAction, sendOrdersAction} from '../../store/api-action';
import styles from './cart-summer.module.css';

function CartSummer (): JSX.Element {

  const dispatch = useAppDispatch();
  const productsCart = useAppSelector(getProductsCart);
  const discountCart = useAppSelector(getProductsCartDiscount);
  const couponCart = useAppSelector(getCoupon);
  const isCouponValid = useAppSelector(getIsCouponValid);
  const [total, setTotal] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [bill, setBill] = useState(0);
  const [coupon, setCoupon] = useState(getCouponState(couponCart));

  const getStyle = () => {
    if (isCouponValid) {
      return 'is-valid';
    }

    if (!isCouponValid && isCouponValid !== undefined) {
      return 'is-invalid';
    }

    return '';
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {

    evt.preventDefault();

    dispatch(sendCouponAction({
      coupon: coupon
    }));

    dispatch(addCoupon((coupon)));
  };

  const handleInputChange = (evt: ChangeEvent<HTMLInputElement>) => {

    if (evt.target.value.includes(' ')) {
      return;
    }

    setCoupon(evt.target.value);
  };

  useEffect(() => {
    setTotal(getTotal(productsCart));
    setDiscount(getDiscount(productsCart, discountCart));
    setBill(getBill(productsCart, discount));
  }, [productsCart, discountCart, discount]);

  return (
    <div className="basket__summary">
      <div className="basket__promo">
        <p className="title title--h4">Если у вас есть промокод на скидку, примените его в этом поле</p>
        <div className="basket-form">
          <form onSubmit={handleSubmit} method="post">
            <div className={`custom-input ${getStyle()}`}>
              <label><span className="custom-input__label">Промокод</span>
                <input type="text"
                  value={coupon}
                  placeholder="Введите промокод"
                  onChange={handleInputChange}
                />
              </label>
              {
                (isCouponValid) &&
                <p className={styles.promoSuccess}>Промокод принят!</p>
              }
              {
                (!isCouponValid && isCouponValid !== undefined) &&
                  <p className={styles.promoError}>Промокод неверный</p>
              }
            </div>
            <button className="btn" type="submit">Применить
            </button>
          </form>
        </div>
      </div>
      <div className="basket__summary-order">
        <p className="basket__summary-item"><span className="basket__summary-text">Всего:</span><span className="basket__summary-value">{`${total} ₽`}</span></p>
        <p className="basket__summary-item"><span className="basket__summary-text">Скидка:</span><span className={`basket__summary-value ${(discount > 0) ? 'basket__summary-value--bonus' : ''}`}>{`${discount} ₽`}</span></p>
        <p className="basket__summary-item"><span className="basket__summary-text basket__summary-text--total">К оплате:</span><span className="basket__summary-value basket__summary-value--total">{`${bill} ₽`}</span></p>
        <button className="btn btn--purple" type="submit" data-testid="orderPost"
          onClick={() => {

            const sendCoupon = (isCouponValid) ? coupon : null;

            dispatch(sendOrdersAction({
              camerasIds: getCamerasIds(productsCart),
              coupon: sendCoupon
            }));
          }}
        >Оформить заказ
        </button>
      </div>
    </div>
  );
}

export default CartSummer;
