import {NAV_PAGES, RESOURCES_FOOTER_ITEMS, SUPPORT_FOOTER_ITEMS} from '../../const';

function NavigationFooter (): JSX.Element {

  return (
    <ul className="footer__nav">
      <li className="footer__nav-item">
        <p className="footer__title">Навигация</p>
        <ul className="footer__list">
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
