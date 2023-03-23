
import {useSearchParams, useNavigate, generatePath} from 'react-router-dom';
import {FilterCatalogLevel, QueryParam, AppRoute, DEFAULT_CATALOG_PAGE} from '../../const';
import {checkFilter} from '../../utils';

function FilterLevel (): JSX.Element {

  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  return (
    <fieldset className="catalog-filter__block">
      <legend className="title title--h5">Уровень</legend>
      {FilterCatalogLevel.map((item) => (
        <div key={item.name} className="custom-checkbox catalog-filter__item">
          <label>
            <input type="checkbox"
              name={item.name}
              onChange={() => {
                checkFilter(searchParams, QueryParam.Level, item.title);
                setSearchParams(searchParams);
                navigate({
                  pathname: generatePath(AppRoute.Catalog, {pageNumber: DEFAULT_CATALOG_PAGE}),
                  search: decodeURI(searchParams.toString())
                });
              }}
              checked={Array.from(searchParams.values()).includes(item.title)}
            /><span className="custom-checkbox__icon" /><span className="custom-checkbox__label">{item.title}</span>
          </label>
        </div>
      ))}
    </fieldset>
  );
}

export default FilterLevel;
