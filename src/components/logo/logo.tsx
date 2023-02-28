import {LogoType, LOGO_CLASS_NAME, AppRoute, DEFAULT_CATALOG_PAGE} from '../../const';
import {Link, generatePath} from 'react-router-dom';
import {useAppSelector} from '../../hooks/useAppSelector';
import {getCurrentCatalogPagePath} from '../../store/products-ui/selectors';

type LogoProps = {
  typeComponent: LogoType;
}

function Logo ({typeComponent}: LogoProps): JSX.Element {

  const currentCatalogPagePath = useAppSelector(getCurrentCatalogPagePath);
  const search = currentCatalogPagePath.search;

  return (
    <Link className={`${LOGO_CLASS_NAME[typeComponent]}__logo`} aria-label="Переход на главную"
      to={{
        pathname: generatePath(
          AppRoute.Catalog,
          {pageNumber: (currentCatalogPagePath.currentCatalogPage)
            ? String(currentCatalogPagePath.currentCatalogPage) : DEFAULT_CATALOG_PAGE}
        ),
        search
      }}
    >
      <svg width={100} height={36} aria-hidden="true">
        <use xlinkHref={`#icon-logo${typeComponent}`}/>
      </svg>
    </Link>
  );
}

export default Logo;
