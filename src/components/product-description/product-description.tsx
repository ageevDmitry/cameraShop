type ProductDescriptionType = {
    description: string;
  }

function ProductDescription ({description}: ProductDescriptionType): JSX.Element {

  return (
    <div className="tabs__element is-active">
      <div className="product__tabs-text">
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ProductDescription;

