import {FilterCatalogCategory, QueryParam} from '../../const';
import {useSearchParams} from 'react-router-dom';
import {checkDisable} from '../../utils';

function FilterCategory (): JSX.Element {

  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <fieldset className="catalog-filter__block">
      <legend className="title title--h5">Категория</legend>
      {FilterCatalogCategory.map((item) => (
        <div key={item.name} className="custom-checkbox catalog-filter__item">
          <label>
            <input type="checkbox"
              name={item.name}
              onChange={() => {
                (searchParams.get(QueryParam.Category) === item.type)
                  ? searchParams.delete(QueryParam.Category)
                  : searchParams.append(QueryParam.Category, item.type);

                setSearchParams(searchParams);
              }}
              checked={searchParams.get(QueryParam.Category) === item.type}
              disabled={checkDisable(searchParams, item.disable)}
            /><span className="custom-checkbox__icon" /><span className="custom-checkbox__label">{item.title}</span>
          </label>
        </div>
      ))}
    </fieldset>
  );
}

export default FilterCategory;
