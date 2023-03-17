import {useAppDispatch} from '../../hooks/use-app-dispatch';
import {useSearchParams} from 'react-router-dom';
import FilterPrice from '../filter-price/filter-price';
import FilterCategory from '../filter-category/filter-category';
import FilterType from '../filter-type/filter-type';
import FilterLevel from '../filter-level/filter-level';
import {cleanUpSearchParams} from '../../utils';
import {QueryParam} from '../../const';
import {cleanUpPrice} from '../../store/products-ui/products-ui';

function FilterCatalog (): JSX.Element {

  const [searchParams, setSearchParams] = useSearchParams();
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
            cleanUpSearchParams(searchParams);
            setSearchParams(searchParams);
            dispatch(cleanUpPrice());
          }}
          disabled={(!searchParams.has(QueryParam.Category) &&
            !searchParams.has(QueryParam.Type) &&
            !searchParams.has(QueryParam.Level) &&
            !searchParams.has(QueryParam.MaxPrice) &&
            !searchParams.has(QueryParam.MinPrice))}
        >Сбросить фильтры
        </button>
      </form>
    </div>
  );
}

export default FilterCatalog;
