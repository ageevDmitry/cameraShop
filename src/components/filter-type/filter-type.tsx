import {useAppDispatch} from '../../hooks/useAppDispatch';
import {useAppSelector} from '../../hooks/useAppSelector';
import {getFilterTypeArray} from '../../utils';
import {getCurrentCategory,
  getCurrentType} from '../../store/products-ui/selectors';
import {changeCurrentType} from '../../store/products-ui/products-ui';
import {FilterCatalogType} from '../../const';

function FilterType (): JSX.Element {

  const dispatch = useAppDispatch();
  const currentCategory = useAppSelector(getCurrentCategory);
  const currentType = useAppSelector(getCurrentType);

  return (
    <fieldset className="catalog-filter__block">
      <legend className="title title--h5">Тип камеры</legend>
      {FilterCatalogType.map((item) => (
        <div key={item.name} className="custom-checkbox catalog-filter__item">
          <div className="custom-checkbox catalog-filter__item">
            <label>
              <input type="checkbox"
                name={item.name}
                onChange={() => {
                  dispatch(changeCurrentType({type: getFilterTypeArray(currentType, item.title)}));
                }}
                disabled={(currentCategory === item.disable)}
              /><span className="custom-checkbox__icon" /><span className="custom-checkbox__label">{item.title}</span>
            </label>
          </div>
        </div>
      ))}
    </fieldset>
  );
}

export default FilterType;
