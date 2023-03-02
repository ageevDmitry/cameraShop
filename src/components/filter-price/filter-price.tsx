import {useSearchParams} from 'react-router-dom';
import {useAppSelector} from '../../hooks/useAppSelector';
import {getMinProductsPrice, getMaxProductsPrice} from '../../store/products-data/selectors';
import {useState,
  useEffect
} from 'react';
import {
  getValidatedCurrentMinPrice,
  getValidatedCurrentMaxPrice,
  getValidatedCurrentMaxPriceState,
  getValidatedCurrentPriceState,
  getCurrentPriceState,
  changeFilterPrice
} from '../../utils';
import {useKeyDownFilterPrice} from '../../hooks/useKeyDownFilterPrice';
import {useClickFilterPrice} from '../../hooks/useClickFilterPrice';

function FilterPrice (): JSX.Element {

  const [searchParams, setSearchParams] = useSearchParams();
  const minProductsPrice = useAppSelector(getMinProductsPrice);
  const maxProductsPrice = useAppSelector(getMaxProductsPrice);

  const [currentMinPriceState, setCurrentMinPriceState] = useState<string>('');
  const [currentMaxPriceState, setCurrentMaxPriceState] = useState<string>('');

  useEffect(() => {
    getCurrentPriceState(searchParams,
      setCurrentMinPriceState,
      setCurrentMaxPriceState);
  }, [searchParams]);

  const handleChangeFilterPrice = () => {
    const validatedCurrentMinPrice = getValidatedCurrentMinPrice(currentMinPriceState, minProductsPrice);
    const validatedCurrentMaxPrice = getValidatedCurrentMaxPrice(currentMaxPriceState, maxProductsPrice, currentMinPriceState);
    changeFilterPrice(searchParams, validatedCurrentMinPrice, validatedCurrentMaxPrice);

    setSearchParams(searchParams);
    setCurrentMaxPriceState(getValidatedCurrentMaxPriceState(currentMaxPriceState, currentMinPriceState));
  };

  useKeyDownFilterPrice(handleChangeFilterPrice);
  useClickFilterPrice(handleChangeFilterPrice);

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
