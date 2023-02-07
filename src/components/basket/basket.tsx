import {Link} from 'react-router-dom';

function Basket (): JSX.Element {

  return (
    <Link className="header__basket-link" to="/">
      <svg width={16} height={16} aria-hidden="true">
        <use xlinkHref="#icon-basket" />
      </svg>
    </Link>
  );
}

export default Basket;
