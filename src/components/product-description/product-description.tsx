import {ProductTab} from '../../const';

type ProductDescriptionType = {
    currentTabControl: string;
    description: string;
  }

function ProductDescription ({currentTabControl, description}: ProductDescriptionType): JSX.Element {

  return (
    <div className={`tabs__element ${(currentTabControl === ProductTab.Description) ? 'is-active' : ''}`}>
      <div className="product__tabs-text">
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ProductDescription;

