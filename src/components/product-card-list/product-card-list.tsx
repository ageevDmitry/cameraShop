import {Product} from '../../types/product';
import {useAppSelector} from '../../hooks/use-app-selector';
import ProductCard from '../product-card/product-card';
import Pagination from '../pagination/pagination';
import SpinnerComponent from '../spinner-component/spinner-component';
import {getIsDataLoading} from '../../store/products-data/selectors';

type ProductCardListProps = {
    products: Product[];
    paginationCount: number;
    setIsModalAddCart: (isModalReview: boolean) => void;
  }

function ProductCardList ({products, paginationCount, setIsModalAddCart}: ProductCardListProps): JSX.Element {

  const isLoading = useAppSelector(getIsDataLoading);

  if (isLoading) {
    return <SpinnerComponent/>;
  }

  return (
    <>
      <div className="cards catalog__cards" data-testid="product-card-list">
        {
          products.map((product) => (
            <ProductCard
              key = {product.id}
              product = {product}
              setIsModalAddCart = {setIsModalAddCart}
            />)
          )
        }
      </div>
      <Pagination
        paginationCount = {paginationCount}
      />
    </>
  );
}

export default ProductCardList;
