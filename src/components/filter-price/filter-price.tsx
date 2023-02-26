import {useAppSelector} from '../../hooks/useAppSelector';
import {useAppDispatch} from '../../hooks/useAppDispatch';
import {getMinProductsPrice, getMaxProductsPrice} from '../../store/products-data/selectors';
import {useState, useEffect} from 'react';
import {changeCurrentMinPrice, changeCurrentMaxPrice} from '../../store/products-ui/products-ui';
import {getValidatedCurrentMinPrice,
  getValidatedCurrentMaxPrice,
  getValidatedCurrentMaxPriceState,
  getValidatedCurrentPriceState,
  getStringCurrentMinPriceState,
} from '../../utils';
import {getCurrentMinPrice,
  getCurrentMaxPrice} from '../../store/products-ui/selectors';
import {useKeyDownFilterPrice} from '../../hooks/useKeyDownFilterPrice';

function FilterPrice (): JSX.Element {

  const dispatch = useAppDispatch();
  const minProductsPrice = useAppSelector(getMinProductsPrice);
  const maxProductsPrice = useAppSelector(getMaxProductsPrice);
  const currentMinPrice = useAppSelector(getCurrentMinPrice);
  const currentMaxPrice = useAppSelector(getCurrentMaxPrice);

  const [currentMinPriceState, setCurrentMinPriceState] = useState<string>('');
  const [currentMaxPriceState, setCurrentMaxPriceState] = useState<string>('');

  const handleKeyDownFilterPrice = () => {
    dispatch(changeCurrentMinPrice({type: getValidatedCurrentMinPrice(currentMinPriceState, minProductsPrice)}));
    dispatch(changeCurrentMaxPrice({type: getValidatedCurrentMaxPrice(currentMaxPriceState, maxProductsPrice, currentMinPriceState)}));
    setCurrentMaxPriceState(getValidatedCurrentMaxPriceState(currentMaxPriceState, currentMinPriceState));
  };

  useEffect(() => {
    setCurrentMinPriceState(getStringCurrentMinPriceState(currentMinPrice));
    setCurrentMaxPriceState(getStringCurrentMinPriceState(currentMaxPrice));
  }, [currentMinPrice, currentMaxPrice]);

  useKeyDownFilterPrice(handleKeyDownFilterPrice);

  return (
    <fieldset className="catalog-filter__block"
      onClick={() => {
        handleKeyDownFilterPrice();
      }}
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
              value={currentMinPriceState}
              placeholder={`${(minProductsPrice === null) ? 'от' : String(minProductsPrice)}`}
              onChange={(evt) => {
                getValidatedCurrentPriceState(evt, setCurrentMinPriceState);
              }}
            />
          </label>
        </div>
        <div className="custom-input">
          <label>
            <input
              type="number"
              name="priceUp"
              value={currentMaxPriceState}
              placeholder={`${(maxProductsPrice === null) ? 'до' : String(maxProductsPrice)}`}
              onChange={(evt) => {
                getValidatedCurrentPriceState(evt, setCurrentMaxPriceState);
              }}
            />
          </label>
        </div>
      </div>
    </fieldset>
  );
}

export default FilterPrice;
