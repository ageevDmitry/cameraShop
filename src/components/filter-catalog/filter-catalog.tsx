import {useAppDispatch} from '../../hooks/useAppDispatch';
import {useAppSelector} from '../../hooks/useAppSelector';
import {getProducts} from '../../store/products-data/selectors';
import {getMinMaxPriceProducts, getFilterTypeArray} from '../../utils';
import {getCurrentCategory,
  getCurrentType} from '../../store/products-ui/selectors';
import {changeCurrentCategory,
  changeCurrentType,
  changeCurrentLevel,
  cleanUpFilter} from '../../store/products-ui/products-ui';
import {FilterCatalogType} from '../../const';

function FilterCatalog (): JSX.Element {

  const dispatch = useAppDispatch();
  const products = useAppSelector(getProducts);
  const currentCategory = useAppSelector(getCurrentCategory);
  const currentType = useAppSelector(getCurrentType);
  const minMaxPrice = getMinMaxPriceProducts(products);

  return (
    <div className="catalog-filter">
      <form action="#">
        <h2 className="visually-hidden">Фильтр</h2>
        <fieldset className="catalog-filter__block">
          <legend className="title title--h5">Цена, ₽</legend>
          <div className="catalog-filter__price-range">
            <div className="custom-input">
              <label>
                <input type="number" name="price" placeholder={String(minMaxPrice[0])} />
              </label>
            </div>
            <div className="custom-input">
              <label>
                <input type="number" name="priceUp" placeholder={String(minMaxPrice[1])} />
              </label>
            </div>
          </div>
        </fieldset>
        <fieldset className="catalog-filter__block">
          <legend className="title title--h5">Категория</legend>
          <div className="custom-checkbox catalog-filter__item">
            <label>
              <input type="checkbox"
                name="photocamera"
                onChange={() => {
                  (currentCategory === null)
                    ? dispatch(changeCurrentCategory({type: FilterCatalogType.Photo}))
                    : dispatch(changeCurrentCategory({type: null}));
                }}
                disabled={(currentCategory === FilterCatalogType.Video)}
              /><span className="custom-checkbox__icon" /><span className="custom-checkbox__label">Фотокамера</span>
            </label>
          </div>
          <div className="custom-checkbox catalog-filter__item">
            <label>
              <input type="checkbox"
                name="videocamera"
                onChange={() => {
                  (currentCategory === null)
                    ? dispatch(changeCurrentCategory({type: FilterCatalogType.Video}))
                    : dispatch(changeCurrentCategory({type: null}));
                }}
                disabled={(currentCategory === FilterCatalogType.Photo)}
              /><span className="custom-checkbox__icon" /><span className="custom-checkbox__label">Видеокамера</span>
            </label>
          </div>
        </fieldset>
        <fieldset className="catalog-filter__block">
          <legend className="title title--h5">Тип камеры</legend>
          <div className="custom-checkbox catalog-filter__item">
            <label>
              <input type="checkbox"
                name="digital"
                onChange={() => {
                  dispatch(changeCurrentType({type: getFilterTypeArray(currentType, FilterCatalogType.Digital)}));
                }}
              /><span className="custom-checkbox__icon" /><span className="custom-checkbox__label">Цифровая</span>
            </label>
          </div>
          <div className="custom-checkbox catalog-filter__item">
            <label>
              <input type="checkbox"
                name="film"
                onChange={() => {
                  dispatch(changeCurrentType({type: getFilterTypeArray(currentType, FilterCatalogType.Film)}));
                }}
                disabled={(currentCategory === FilterCatalogType.Video)}
              /><span className="custom-checkbox__icon" /><span className="custom-checkbox__label">Плёночная</span>
            </label>
          </div>
          <div className="custom-checkbox catalog-filter__item">
            <label>
              <input type="checkbox"
                name="snapshot"
                onChange={() => {
                  dispatch(changeCurrentType({type: getFilterTypeArray(currentType, FilterCatalogType.Instant)}));
                }}
                disabled={(currentCategory === FilterCatalogType.Video)}
              /><span className="custom-checkbox__icon" /><span className="custom-checkbox__label">Моментальная</span>
            </label>
          </div>
          <div className="custom-checkbox catalog-filter__item">
            <label>
              <input type="checkbox"
                name="collection"
                onChange={() => {
                  dispatch(changeCurrentType({type: getFilterTypeArray(currentType, FilterCatalogType.Collection)}));
                }}
              /><span className="custom-checkbox__icon" /><span className="custom-checkbox__label">Коллекционная</span>
            </label>
          </div>
        </fieldset>
        <fieldset className="catalog-filter__block">
          <legend className="title title--h5">Уровень</legend>
          <div className="custom-checkbox catalog-filter__item">
            <label>
              <input type="checkbox"
                name="zero"
                onChange={() => {
                  dispatch(changeCurrentLevel({type: getFilterTypeArray(currentType, FilterCatalogType.Elementary)}));
                }}
              /><span className="custom-checkbox__icon" /><span className="custom-checkbox__label">Нулевой</span>
            </label>
          </div>
          <div className="custom-checkbox catalog-filter__item">
            <label>
              <input type="checkbox"
                name="non-professional"
                onChange={() => {
                  dispatch(changeCurrentLevel({type: getFilterTypeArray(currentType, FilterCatalogType.Amateur)}));
                }}
              /><span className="custom-checkbox__icon" /><span className="custom-checkbox__label">Любительский</span>
            </label>
          </div>
          <div className="custom-checkbox catalog-filter__item">
            <label>
              <input type="checkbox"
                name="professional"
                onChange={() => {
                  dispatch(changeCurrentLevel({type: getFilterTypeArray(currentType, FilterCatalogType.Professional)}));
                }}
              /><span className="custom-checkbox__icon" /><span className="custom-checkbox__label">Профессиональный</span>
            </label>
          </div>
        </fieldset>
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
