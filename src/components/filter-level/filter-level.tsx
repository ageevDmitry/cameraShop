import {useAppDispatch} from '../../hooks/useAppDispatch';
import {useAppSelector} from '../../hooks/useAppSelector';
import {getFilterArray,
  getCurrentLevelState} from '../../utils';
import {getCurrentLevel} from '../../store/products-ui/selectors';
import {changeCurrentLevel} from '../../store/products-ui/products-ui';
import {FilterCatalogLevel,
  FILTER_CATALOG_LEVEL_DEFAULT} from '../../const';
import {useState, useEffect} from 'react';

function FilterLevel (): JSX.Element {

  const dispatch = useAppDispatch();
  const currentLevel = useAppSelector(getCurrentLevel);
  const [currentLevelState, setCurrentLevelState] = useState(FILTER_CATALOG_LEVEL_DEFAULT);

  useEffect(() => {
    setCurrentLevelState(getCurrentLevelState(currentLevel));
  }, [currentLevel]);

  return (
    <fieldset className="catalog-filter__block">
      <legend className="title title--h5">Уровень</legend>
      {FilterCatalogLevel.map((item, i) => (
        <div key={item.name} className="custom-checkbox catalog-filter__item">
          <label>
            <input type="checkbox"
              name={item.name}
              onChange={() => {
                dispatch(changeCurrentLevel({type: getFilterArray(currentLevel, item.title)}));
              }}
              checked={currentLevelState[i]}
            /><span className="custom-checkbox__icon" /><span className="custom-checkbox__label">{item.title}</span>
          </label>
        </div>
      ))}
    </fieldset>
  );
}

export default FilterLevel;
