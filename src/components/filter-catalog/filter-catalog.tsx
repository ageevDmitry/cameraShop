import {useAppDispatch} from '../../hooks/useAppDispatch';
import {useAppSelector} from '../../hooks/useAppSelector';
import {cleanUpFilter} from '../../store/products-ui/products-ui';
import {getCurrentCategory,
  getCurrentType,
  getCurrentLevel,
  getCurrentMinPrice,
  getCurrentMaxPrice
} from '../../store/products-ui/selectors';
import FilterPrice from '../filter-price/filter-price';
import FilterCategory from '../filter-category/filter-category';
import FilterType from '../filter-type/filter-type';
import FilterLevel from '../filter-level/filter-level';

function FilterCatalog (): JSX.Element {

  const dispatch = useAppDispatch();
  const currentType = useAppSelector(getCurrentType);
  const currentCategory = useAppSelector(getCurrentCategory);
  const currentLevel = useAppSelector(getCurrentLevel);
  const currentMinPrice = useAppSelector(getCurrentMinPrice);
  const currentMaxPrice = useAppSelector(getCurrentMaxPrice);

  return (
    <div className="catalog-filter">
      <form action="#">
        <h2 className="visually-hidden">Фильтр</h2>
        <FilterPrice/>
        <FilterCategory/>
        <FilterType/>
        <FilterLevel/>
        <button className="btn catalog-filter__reset-btn" type="reset"
          onClick={() => {
            dispatch(cleanUpFilter());
          }}
          disabled={(currentType === null
            && currentCategory === null
            && currentLevel === null
            && currentMinPrice === null
            && currentMaxPrice === null)}
        >Сбросить фильтры
        </button>
      </form>
    </div>
  );
}

export default FilterCatalog;
