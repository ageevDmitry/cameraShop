import {useForm} from 'react-hook-form';
import {getProductsCart,
  getProductsCartDiscount
} from '../../store/products-data/selectors';
import {useAppSelector} from '../../hooks/use-app-selector';
import {useState, useEffect} from 'react';
import {getTotal, getDiscount, getBill} from '../../utils';
import {useAppDispatch} from '../../hooks/use-app-dispatch';
import {sendCouponAction} from '../../store/api-action';
import {CouponPost} from '../../types/coupon';

function CartSummer (): JSX.Element {

  const dispatch = useAppDispatch();
  const productsCart = useAppSelector(getProductsCart);
  const discountCart = useAppSelector(getProductsCartDiscount);
  const productsCartDiscount = 10;
  const [total, setTotal] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [bill, setBill] = useState(0);
  const {register, handleSubmit} = useForm<CouponPost>();

  const onSubmit = (data: CouponPost) => {
    dispatch(sendCouponAction({
      coupon: data.coupon
    }));
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
          <form onSubmit={(...args) => void handleSubmit(onSubmit)(...args)} method="post">
            <div className="custom-input">
              <label><span className="custom-input__label">Промокод</span>
                <input type="text" placeholder="Введите промокод" {...register('coupon')}/>
              </label>
              <p className="custom-input__error">Промокод неверный</p>
              <p className="custom-input__success">Промокод принят!</p>
            </div>
            <button className="btn" type="submit">Применить
            </button>
          </form>
        </div>
      </div>
      <div className="basket__summary-order">
        <p className="basket__summary-item"><span className="basket__summary-text">Всего:</span><span className="basket__summary-value">{`${total} ₽`}</span></p>
        <p className="basket__summary-item"><span className="basket__summary-text">Скидка:</span><span className={`basket__summary-value ${(productsCartDiscount > 0) ? 'basket__summary-value--bonus' : ''}`}>{`${discount} ₽`}</span></p>
        <p className="basket__summary-item"><span className="basket__summary-text basket__summary-text--total">К оплате:</span><span className="basket__summary-value basket__summary-value--total">{`${bill} ₽`}</span></p>
        <button className="btn btn--purple" type="submit">Оформить заказ
        </button>
      </div>
    </div>
  );
}

export default CartSummer;
