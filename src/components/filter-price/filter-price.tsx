import {useAppSelector} from '../../hooks/useAppSelector';
import {getMinProductsPrice, getMaxProductsPrice} from '../../store/products-data/selectors';

function FilterPrice (): JSX.Element {

  const minPrice = useAppSelector(getMinProductsPrice);
  const maxPrice = useAppSelector(getMaxProductsPrice);

  return (
    <fieldset className="catalog-filter__block">
      <legend className="title title--h5">Цена, ₽</legend>
      <div className="catalog-filter__price-range">
        <div className="custom-input">
          <label>
            <input type="number"
              name="price"
              placeholder={`${(minPrice === null) ? 'от' : String(minPrice)}`}
            />
          </label>
        </div>
        <div className="custom-input">
          <label>
            <input type="number"
              name="priceUp"
              placeholder={`${(maxPrice === null) ? 'до' : String(maxPrice)}`}
            />
          </label>
        </div>
      </div>
    </fieldset>
  );
}

export default FilterPrice;
