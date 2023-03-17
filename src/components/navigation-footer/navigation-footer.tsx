import {NAV_PAGES,
  RESOURCES_FOOTER_ITEMS,
  SUPPORT_FOOTER_ITEMS} from '../../const';
import {Link, generatePath} from 'react-router-dom';
import {AppRoute, DEFAULT_CATALOG_PAGE} from '../../const';
import {useAppSelector} from '../../hooks/use-app-selector';
import {getCurrentCatalogPagePath} from '../../store/products-ui/selectors';

function NavigationFooter (): JSX.Element {

  const currentCatalogPagePath = useAppSelector(getCurrentCatalogPagePath);
  const search = currentCatalogPagePath.search;

  return (
    <ul className="footer__nav">
      <li className="footer__nav-item">
        <p className="footer__title">Навигация</p>
        <ul className="footer__list">
          <li className="footer__item">
            <Link className="link"
              to={{
                pathname: generatePath(
                  AppRoute.Catalog,
                  {pageNumber: (currentCatalogPagePath.currentCatalogPage)
                    ? String(currentCatalogPagePath.currentCatalogPage) : DEFAULT_CATALOG_PAGE}
                ),
                search
              }}
            >Каталог
            </Link>
          </li>
          {NAV_PAGES.map((item) => (
            <li key = {item.title} className="footer__item">
              <a className="link" href={item.href}>{item.title}</a>
            </li>
          ))}
        </ul>
      </li>
      <li className="footer__nav-item">
        <p className="footer__title">Ресурсы</p>
        <ul className="footer__list">
          {RESOURCES_FOOTER_ITEMS.map((item) => (
            <li key = {item.title} className="footer__item">
              <a className="link" href={item.href}>{item.title}</a>
            </li>
          ))}
        </ul>
      </li>
      <li className="footer__nav-item">
        <p className="footer__title">Поддержка</p>
        <ul className="footer__list">
          {SUPPORT_FOOTER_ITEMS.map((item) => (
            <li key = {item.title} className="footer__item">
              <a className="link" href={item.href}>{item.title}</a>
            </li>
          ))}
        </ul>
      </li>
    </ul>
  );
}

export default NavigationFooter;
