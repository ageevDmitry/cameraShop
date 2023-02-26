import {useAppDispatch} from '../../hooks/useAppDispatch';
import {useAppSelector} from '../../hooks/useAppSelector';
import {getFilterTypeArray,
  getFilterTypeState} from '../../utils';
import {getCurrentCategory,
  getCurrentType} from '../../store/products-ui/selectors';
import {changeCurrentType} from '../../store/products-ui/products-ui';
import {FilterCatalogType} from '../../const';
import {useState, useEffect} from 'react';

function FilterType (): JSX.Element {

  const dispatch = useAppDispatch();
  const currentCategory = useAppSelector(getCurrentCategory);
  const currentType = useAppSelector(getCurrentType);
  const [flag, setFlag] = useState([false, false, false, false]);

  useEffect(() => {
    setFlag(getFilterTypeState(currentType));
  }, [currentType]);

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
                  dispatch(changeCurrentType({type: getFilterTypeArray(currentType, item.title)}));
                }}
                disabled={(currentCategory === item.disable)}
                checked={flag[i]}
              /><span className="custom-checkbox__icon" /><span className="custom-checkbox__label">{item.title}</span>
            </label>
          </div>
        </div>
      ))}
    </fieldset>
  );
}

export default FilterType;
