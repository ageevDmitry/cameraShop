import {useAppSelector} from '../../hooks/useAppSelector';
import {getProducts} from '../../store/products-data/selectors';
import {getMinMaxPriceProducts} from '../../utils';

function FilterPrice (): JSX.Element {

  const products = useAppSelector(getProducts);
  const minMaxPrice = getMinMaxPriceProducts(products);

  return (
    <fieldset className="catalog-filter__block">
      <legend className="title title--h5">Цена, ₽</legend>
      <div className="catalog-filter__price-range">
        <div className="custom-input">
          <label>
            <input type="number" name="price" placeholder={String(minMaxPrice[0])} />
          </label>
        </div>
        <div className="custom-input">
          <label>
            <input type="number" name="priceUp" placeholder={String(minMaxPrice[1])} />
          </label>
        </div>
      </div>
    </fieldset>
  );
}

export default FilterPrice;
