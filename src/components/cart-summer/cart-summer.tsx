import {getProductsCart,
  // getProductsCartDiscount
} from '../../store/products-data/selectors';
import {useAppSelector} from '../../hooks/use-app-selector';
import {useState, useEffect} from 'react';
import {getTotal, getBill} from '../../utils';

function CartSummer (): JSX.Element {

  const productsCart = useAppSelector(getProductsCart);

  const productsCartDiscount = 10;
  const [total, setTotal] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [bill, setBill] = useState(0);

  useEffect(() => {
    setTotal(getTotal(productsCart));
    setDiscount(productsCartDiscount);
    setBill(getBill(productsCart, productsCartDiscount));
  }, [productsCart]);

  return (
    <div className="basket__summary">
      <div className="basket__promo">
        <p className="title title--h4">Если у вас есть промокод на скидку, примените его в этом поле</p>
        <div className="basket-form">
          <form action="#">
            <div className="custom-input">
              <label><span className="custom-input__label">Промокод</span>
                <input type="text" name="promo" placeholder="Введите промокод" />
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
