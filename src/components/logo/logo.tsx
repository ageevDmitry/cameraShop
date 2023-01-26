import {LogoType, LOGO_CLASS_NAME} from '../../const';

type LogoProps = {
  typeComponent: LogoType;
}

function Logo ({typeComponent}: LogoProps): JSX.Element {

  return (
    <a className={`${LOGO_CLASS_NAME[typeComponent]}__logo`} href="index.html" aria-label="Переход на главную">
      <svg width={100} height={36} aria-hidden="true">
        <use xlinkHref={`#icon-logo${typeComponent}`}/>
      </svg>
    </a>
  );
}

export default Logo;
