import Card from '../card/card';
import {Product} from '../../types/product';
import {ComponentType, DefaultCurrentProductsSimilar} from '../../const';
import {useState} from 'react';

type ProductsSimilarType = {
  productsSimilar: Product[];
}

function ProductsSimilar ({productsSimilar}: ProductsSimilarType): JSX.Element {

  const [currentProductsSimilar, setCurrentProductsSimilar] = useState<[number, number]>([DefaultCurrentProductsSimilar.StartItem, DefaultCurrentProductsSimilar.EndItem]);
  const products = productsSimilar.slice(currentProductsSimilar[0], currentProductsSimilar[1]);

  return (
    <div className="page-content__section">
      <section className="product-similar">
        <div className="container">
          <h2 className="title title--h3">Похожие товары</h2>
          <div className="product-similar__slider">
            <div className="product-similar__slider-list">
              {
                products
                  .map((product) => (
                    <Card
                      key = {product.id}
                      product={product}
                      componentType={ComponentType.ProductsSimilar}
                    /> ))
              }
            </div>
            <button className="slider-controls slider-controls--prev" type="button" aria-label="Предыдущий слайд"
              // disabled = {(currentProductsSimilar[0] === 0)}
              onClick={() => {
                setCurrentProductsSimilar([currentProductsSimilar[0] - 1, currentProductsSimilar[1] - 1]);
              }}
            >
              <svg width={7} height={12} aria-hidden="true">
                <use xlinkHref="#icon-arrow" />
              </svg>
            </button>
            <button className="slider-controls slider-controls--next" type="button" aria-label="Следующий слайд"
              // disabled = {(currentProductsSimilar[0] === products.length)}
              onClick={() => {
                setCurrentProductsSimilar([currentProductsSimilar[0] + 1, currentProductsSimilar[1] + 1]);
              }}
            >
              <svg width={7} height={12} aria-hidden="true">
                <use xlinkHref="#icon-arrow" />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductsSimilar;
