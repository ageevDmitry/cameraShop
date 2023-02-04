import {LogoType, LOGO_CLASS_NAME, AppRoute} from '../../const';
import {Link} from 'react-router-dom';
import {useLocation} from 'react-router-dom';

type LogoProps = {
  typeComponent: LogoType;
}

function Logo ({typeComponent}: LogoProps): JSX.Element {

  const location = useLocation();

  return (
    <Link to={`${(location.pathname === AppRoute.Catalog) ? '' : AppRoute.Main}`} className={`${LOGO_CLASS_NAME[typeComponent]}__logo`} aria-label="Переход на главную">
      <svg width={100} height={36} aria-hidden="true">
        <use xlinkHref={`#icon-logo${typeComponent}`}/>
      </svg>
    </Link>
  );
}

export default Logo;
