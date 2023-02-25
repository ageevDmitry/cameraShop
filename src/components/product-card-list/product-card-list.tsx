import ProductCard from '../product-card/product-card';
import Pagination from '../pagination/pagination';
import {Product} from '../../types/product';

type ProductCardListProps = {
    products: Product[];
    paginationCount: number;
    currentCatalogPage: number;
  }

function ProductCardList ({products, paginationCount, currentCatalogPage}: ProductCardListProps): JSX.Element {

  return (
    <>
      <div className="cards catalog__cards">
        {
          products.map((product) => (
            <ProductCard
              key = {product.id}
              product = {product}
            />)
          )
        }
      </div>
      <Pagination
        paginationCount = {paginationCount}
        currentCatalogPage = {currentCatalogPage}
      />
    </>
  );
}

export default ProductCardList;
