import {Product} from '../../types/product';
import Rating from '../rating/rating';
import ProductCharacteristics from '../product-characteristics/product-characteristics';
import ProductDescription from '../product-description/product-description';

type ProductProps = {
  product: Product;
}

function ProductInfo ({product}: ProductProps): JSX.Element {

  const {name, price, reviewCount, rating, previewImg, previewImg2x, previewImgWebp, previewImgWebp2x, vendorCode, category, type, level, description} = product;

  return (
    <div className="page-content__section">
      <section className="product">
        <div className="container">
          <div className="product__img">
            <picture>
              <source type="image/webp" srcSet={`../${previewImgWebp}, ../${previewImgWebp2x}`} /><img src={`../${previewImg}`} srcSet={`../${previewImg2x}`} alt={name} width={560} height={480} />
            </picture>
          </div>
          <div className="product__content">
            <h1 className="title title--h3">{name}</h1>
            <Rating
              rating = {rating}
              reviewCount = {reviewCount}
            />
            <p className="product__price"><span className="visually-hidden">Цена:</span>{price}</p>
            <button className="btn btn--purple" type="button">
              <svg width={24} height={16} aria-hidden="true">
                <use xlinkHref="#icon-add-basket" />
              </svg>Добавить в корзину
            </button>
            <div className="tabs product__tabs">
              <div className="tabs__controls product__tabs-controls">
                <button className="tabs__control is-active" type="button">Характеристики</button>
                <button className="tabs__control" type="button">Описание</button>
              </div>
              <div className="tabs__content">
                <ProductCharacteristics
                  vendorCode = {vendorCode}
                  category = {category}
                  type = {type}
                  level = {level}
                />
                <ProductDescription
                  description = {description}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductInfo;
