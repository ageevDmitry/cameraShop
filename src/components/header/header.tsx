import {LogoType} from '../../const';
import Logo from '../logo/logo';
import NavigationMain from '../navigation-main/navigation-main';
import Search from '../search/search';
import CartHeader from '../cart-header/cart-header';

function Header (): JSX.Element {

  return (
    <header className="header" id="header" data-testid="header">
      <div className="container">
        <Logo typeComponent = {LogoType.Header}/>
        <NavigationMain/>
        <Search/>
        <CartHeader/>
      </div>
    </header>
  );
}

export default Header;
