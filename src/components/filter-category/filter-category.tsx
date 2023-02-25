import {useAppDispatch} from '../../hooks/useAppDispatch';
import {useAppSelector} from '../../hooks/useAppSelector';
import {getCurrentCategory,
  getCurrentType} from '../../store/products-ui/selectors';
import {changeCurrentCategory} from '../../store/products-ui/products-ui';
import {FilterCatalogCategory} from '../../const';
import {checkDisable} from '../../utils';

function FilterCategory (): JSX.Element {

  const dispatch = useAppDispatch();
  const currentCategory = useAppSelector(getCurrentCategory);
  const currentType = useAppSelector(getCurrentType);

  return (
    <fieldset className="catalog-filter__block">
      <legend className="title title--h5">Категория</legend>
      {FilterCatalogCategory.map((item) => (
        <div key={item.name} className="custom-checkbox catalog-filter__item">
          <label>
            <input type="checkbox"
              name={item.name}
              onChange={() => {
                (currentCategory === null)
                  ? dispatch(changeCurrentCategory({type: item.type}))
                  : dispatch(changeCurrentCategory({type: null}));
              }}
              disabled={checkDisable(currentCategory, currentType, item.disable)}
            /><span className="custom-checkbox__icon" /><span className="custom-checkbox__label">{item.title}</span>
          </label>
        </div>
      ))}
    </fieldset>
  );
}

export default FilterCategory;
