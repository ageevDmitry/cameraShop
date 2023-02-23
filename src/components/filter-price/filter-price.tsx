import {useAppSelector} from '../../hooks/useAppSelector';
import {useAppDispatch} from '../../hooks/useAppDispatch';
import {getMinProductsPrice, getMaxProductsPrice} from '../../store/products-data/selectors';
import {useState, useEffect, ChangeEvent} from 'react';
import {changeMinPrice, changeMaxPrice} from '../../store/products-ui/products-ui';
import {getValidateMinCurrentPrice,
  getValidateMaxCurrentPrice,
  getStringCurrentPrice,
} from '../../utils';
import {getCurrentMinPrice, getCurrentMaxPrice} from '../../store/products-ui/selectors';

function FilterPrice (): JSX.Element {

  const dispatch = useAppDispatch();
  const minProductsPrice = useAppSelector(getMinProductsPrice);
  const maxProductsPrice = useAppSelector(getMaxProductsPrice);
  const minFilterPrice = useAppSelector(getCurrentMinPrice);
  const maxFilterPrice = useAppSelector(getCurrentMaxPrice);

  const [minCurrentPrice, setMinCurrentPrice] = useState<string>('');
  const [maxCurrentPrice, setMaxCurrentPrice] = useState<string>('');

  const handleChangeMinCurrentPrice = (evt: ChangeEvent<HTMLInputElement>) => {

    if (evt.target.value !== '') {
      const inputValue = parseFloat(evt.target.value);
      if (inputValue < 0) {
        setMinCurrentPrice('');
      } else {
        setMinCurrentPrice(String(inputValue));
      }
    } else {
      setMinCurrentPrice('');
    }
  };

  const handleChangeMaxCurrentPrice = (evt: ChangeEvent<HTMLInputElement>) => {

    if (evt.target.value !== '') {
      const inputValue = parseFloat(evt.target.value);
      if (inputValue < 0) {
        setMaxCurrentPrice('');
      } else {
        setMaxCurrentPrice(String(inputValue));
      }
    } else {
      setMaxCurrentPrice('');
    }
  };

  const handleSendMinCurrentPrice = () => {
    if (minCurrentPrice !== '') {
      const outputMinCurrentPrice = getValidateMinCurrentPrice(minCurrentPrice, minProductsPrice);
      dispatch(changeMinPrice({type: outputMinCurrentPrice}));
    }
  };

  const handleSendMaxCurrentPrice = () => {
    if (maxCurrentPrice !== '') {
      const outputMaxCurrentPrice = getValidateMaxCurrentPrice(maxCurrentPrice, maxProductsPrice);
      dispatch(changeMaxPrice({type: outputMaxCurrentPrice}));
    }
  };

  useEffect(() => {
    setMinCurrentPrice(getStringCurrentPrice(minFilterPrice));
    setMaxCurrentPrice(getStringCurrentPrice(maxFilterPrice));
  }, [minFilterPrice, maxFilterPrice]);

  return (
    <fieldset className="catalog-filter__block">
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
                  handleSendMinCurrentPrice();
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
                  handleSendMaxCurrentPrice();
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
