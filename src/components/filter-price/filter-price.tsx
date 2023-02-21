import {useAppSelector} from '../../hooks/useAppSelector';
import {useAppDispatch} from '../../hooks/useAppDispatch';
import {getMinProductsPrice, getMaxProductsPrice} from '../../store/products-data/selectors';
import {useState, ChangeEvent} from 'react';
import {changeMinPrice, changeMaxPrice} from '../../store/products-ui/products-ui';

function FilterPrice (): JSX.Element {

  const dispatch = useAppDispatch();
  const minPriceProducts = useAppSelector(getMinProductsPrice);
  const maxPriceProducts = useAppSelector(getMaxProductsPrice);

  const [minCurrentPrice, setMinCurrentPrice] = useState<number | null>(null);
  const [maxCurrentPrice, setMaxCurrentPrice] = useState<number | null>(null);

  const handleInputMinChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const {value} = evt.target;
    setMinCurrentPrice(Number(value));
  };

  const handleInputMaxChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const {value} = evt.target;
    setMaxCurrentPrice(Number(value));
  };

  const handleSendMinMaxPrice = () => {
    if (minCurrentPrice !== null && maxCurrentPrice !== null) {
      dispatch(changeMinPrice({type: minCurrentPrice}));
      dispatch(changeMaxPrice({type: maxCurrentPrice}));
    }
  };

  return (
    <fieldset className="catalog-filter__block"
      onClick={() => {
        handleSendMinMaxPrice();
      }}
    >
      <legend className="title title--h5">Цена, ₽
      </legend>
      <div className="catalog-filter__price-range">
        <div className="custom-input">
          <label>
            <input type="number"
              name="price"
              placeholder={`${(minPriceProducts === null) ? 'от' : String(minPriceProducts)}`}
              onChange={handleInputMinChange}
              onKeyDown={(evt) => {
                if (evt.key === 'Enter') {
                  handleSendMinMaxPrice();
                }
              }}
            />
          </label>
        </div>
        <div className="custom-input">
          <label>
            <input type="number"
              name="priceUp"
              placeholder={`${(maxPriceProducts === null) ? 'до' : String(maxPriceProducts)}`}
              onChange={handleInputMaxChange}
              onKeyDown={(evt) => {
                if (evt.key === 'Enter') {
                  handleSendMinMaxPrice();
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
