import Logo from '../logo/logo';
import Navigation from '../navigation/navigation';
import Search from '../search/search';
import Basket from '../basket/basket';

function Header (): JSX.Element {

  return (
    <header className="header" id="header">
      <div className="container">
        <Logo/>
        <Navigation/>
        <Search/>
        <Basket/>
      </div>
    </header>
  );
}

export default Header;
