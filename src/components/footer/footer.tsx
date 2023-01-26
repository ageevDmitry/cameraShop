import {LogoType} from '../../const';
import Logo from '../logo/logo';
import NavigationFooter from '../navigation-footer/navigation-footer';
import SocialLinks from '../social-links/social-links';

function Footer (): JSX.Element {

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__info">
          <Logo typeComponent = {LogoType.Footer}/>
          <p className="footer__description">Интернет-магазин фото- и видеотехники</p>
          <SocialLinks/>
        </div>
        <NavigationFooter/>
      </div>
    </footer>
  );
}

export default Footer;

