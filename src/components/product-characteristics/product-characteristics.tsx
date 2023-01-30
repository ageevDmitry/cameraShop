import {ProductTab} from '../../const';

type ProductCharacteristicsType = {
  currentTabControl: string;
  vendorCode: string;
  category: string;
  type: string;
  level: string;
}

function ProductCharacteristics ({currentTabControl, vendorCode, category, type, level}: ProductCharacteristicsType): JSX.Element {

  return (
    <div className={`tabs__element ${(currentTabControl === ProductTab.Characteristics) ? 'is-active' : ''}`}>
      <ul className="product__tabs-list">
        <li className="item-list"><span className="item-list__title">Артикул:</span>
          <p className="item-list__text">{vendorCode}</p>
        </li>
        <li className="item-list"><span className="item-list__title">Категория:</span>
          <p className="item-list__text">{category}</p>
        </li>
        <li className="item-list"><span className="item-list__title">Тип камеры:</span>
          <p className="item-list__text">{type}</p>
        </li>
        <li className="item-list"><span className="item-list__title">Уровень:</span>
          <p className="item-list__text">{level}</p>
        </li>
      </ul>
    </div>
  );
}

export default ProductCharacteristics;
