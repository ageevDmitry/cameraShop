
import {checkDisable, checkFilter} from '../../utils';
import {FilterCatalogType, QueryParam, AppRoute, DEFAULT_CATALOG_PAGE} from '../../const';
import {useSearchParams, useNavigate, generatePath} from 'react-router-dom';

function FilterType (): JSX.Element {

  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  return (
    <fieldset className="catalog-filter__block">
      <legend className="title title--h5">Тип камеры</legend>
      {FilterCatalogType.map((item, i) => (
        <div key={item.name} className="custom-checkbox catalog-filter__item">
          <div className="custom-checkbox catalog-filter__item">
            <label>
              <input type="checkbox"
                name={item.name}
                onChange={() => {
                  checkFilter(searchParams, QueryParam.Type, item.title);
                  setSearchParams(searchParams);
                  navigate({
                    pathname: generatePath(AppRoute.Catalog, {pageNumber: DEFAULT_CATALOG_PAGE}),
                    search: decodeURI(searchParams.toString())
                  });
                }}
                checked={Array.from(searchParams.values()).includes(item.title)}
                disabled={checkDisable(searchParams, item.disable)}
              /><span className="custom-checkbox__icon" /><span className="custom-checkbox__label">{item.title}</span>
            </label>
          </div>
        </div>
      ))}
    </fieldset>
  );
}

export default FilterType;
