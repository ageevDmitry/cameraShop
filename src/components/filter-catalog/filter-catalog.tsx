import {useAppDispatch} from '../../hooks/useAppDispatch';
import {cleanUpFilter} from '../../store/products-ui/products-ui';
import FilterPrice from '../filter-price/filter-price';
import FilterCategory from '../filter-category/filter-category';
import FilterType from '../filter-type/filter-type';
import FilterLevel from '../filter-level/filter-level';

function FilterCatalog (): JSX.Element {

  const dispatch = useAppDispatch();

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
        >Сбросить фильтры
        </button>
      </form>
    </div>
  );
}

export default FilterCatalog;
