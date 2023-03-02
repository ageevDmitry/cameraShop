import {useSearchParams} from 'react-router-dom';
import {useAppSelector} from '../../hooks/useAppSelector';
import {useAppDispatch} from '../../hooks/useAppDispatch';
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
  changeFilterPrice,
  setPrice
} from '../../utils';
import {useKeyDownFilterPrice} from '../../hooks/useKeyDownFilterPrice';
import {useClickFilterPrice} from '../../hooks/useClickFilterPrice';
import {getCurrentMinPrice,
  // getCurrentMaxPrice
} from '../../store/products-ui/selectors';
import {
  changeCurrentMinPrice,
  //  changeCurrentMaxPrice
} from '../../store/products-ui/products-ui';

function FilterPrice (): JSX.Element {

  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const minProductsPrice = useAppSelector(getMinProductsPrice);
  const maxProductsPrice = useAppSelector(getMaxProductsPrice);
  const currentMinPrice = useAppSelector(getCurrentMinPrice);

  const [currentMinPriceState, setCurrentMinPriceState] = useState<string>(setPrice(currentMinPrice));
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
    setCurrentMaxPriceState(getValidatedCurrentMaxPriceState(currentMaxPriceState, currentMinPriceState));
    setSearchParams(searchParams);
    dispatch(changeCurrentMinPrice({type: validatedCurrentMinPrice}));
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
