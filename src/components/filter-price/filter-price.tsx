import {useAppSelector} from '../../hooks/useAppSelector';
import {useAppDispatch} from '../../hooks/useAppDispatch';
import {getMinProductsPrice, getMaxProductsPrice} from '../../store/products-data/selectors';
import {useState, ChangeEvent} from 'react';
import {changeMinPrice, changeMaxPrice} from '../../store/products-ui/products-ui';

function FilterPrice (): JSX.Element {

  const dispatch = useAppDispatch();
  const minProductsPrice = useAppSelector(getMinProductsPrice);
  const maxProductsPrice = useAppSelector(getMaxProductsPrice);

  const [minCurrentPrice, setMinCurrentPrice] = useState<string>('');
  const [maxCurrentPrice, setMaxCurrentPrice] = useState<string>('');

  const handleChangeMinCurrentPrice = (evt: ChangeEvent<HTMLInputElement>) => {
    const inputValue = parseFloat(evt.target.value);
    if (inputValue < 0) {
      setMinCurrentPrice(String(0));
    } else {
      setMinCurrentPrice(String(inputValue));
    }
  };

  const handleChangeMaxCurrentPrice = (evt: ChangeEvent<HTMLInputElement>) => {
    const inputValue = parseFloat(evt.target.value);
    if (inputValue < 0) {
      setMaxCurrentPrice(String(0));
    } else {
      setMaxCurrentPrice(String(inputValue));
    }
  };

  const handleSendMinMaxCurrentPrice = () => {
    dispatch(changeMinPrice({type: minCurrentPrice}));
    dispatch(changeMaxPrice({type: maxCurrentPrice}));
  };

  return (
    <fieldset className="catalog-filter__block"
      onClick={handleSendMinMaxCurrentPrice}
    >
      <legend className="title title--h5">Цена, ₽
      </legend>
      <div className="catalog-filter__price-range">
        <div className="custom-input">
          <label>
            <input
              type="number"
              min="0"
              name="price"
              value={minCurrentPrice}
              placeholder={`${(minProductsPrice === null) ? 'от' : String(minProductsPrice)}`}
              onChange={handleChangeMinCurrentPrice}
              onKeyDown={(evt) => {
                if (evt.key === 'Enter') {
                  handleSendMinMaxCurrentPrice();
                }
              }}
            />
          </label>
        </div>
        <div className="custom-input">
          <label>
            <input
              type="number"
              name="priceUp"
              value={maxCurrentPrice}
              placeholder={`${(maxProductsPrice === null) ? 'до' : String(maxProductsPrice)}`}
              onChange={handleChangeMaxCurrentPrice}
              onKeyDown={(evt) => {
                if (evt.key === 'Enter') {
                  handleSendMinMaxCurrentPrice();
                }
              }}
            />
          </label>
        </div>
      </div>
    </fieldset>
  );
}

export default FilterPrice;
