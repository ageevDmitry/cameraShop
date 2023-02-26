import {useAppDispatch} from '../../hooks/useAppDispatch';
import {useAppSelector} from '../../hooks/useAppSelector';
import {getFilterArray} from '../../utils';
import {getCurrentLevel} from '../../store/products-ui/selectors';
import {changeCurrentLevel} from '../../store/products-ui/products-ui';
import {FilterCatalogLevel} from '../../const';

function FilterLevel (): JSX.Element {

  const dispatch = useAppDispatch();
  const currentLevel = useAppSelector(getCurrentLevel);

  return (
    <fieldset className="catalog-filter__block">
      <legend className="title title--h5">Уровень</legend>
      {FilterCatalogLevel.map((item) => (
        <div key={item.name} className="custom-checkbox catalog-filter__item">
          <label>
            <input type="checkbox"
              name={item.name}
              onChange={() => {
                dispatch(changeCurrentLevel({type: getFilterArray(currentLevel, item.title)}));
              }}
            /><span className="custom-checkbox__icon" /><span className="custom-checkbox__label">{item.title}</span>
          </label>
        </div>
      ))}
    </fieldset>
  );
}

export default FilterLevel;
