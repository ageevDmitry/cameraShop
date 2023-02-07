import {NAV_PAGES} from '../../const';

function NavigationMain (): JSX.Element {

  return (
    <nav className="main-nav header__main-nav" data-testid="nav">
      <ul className="main-nav__list">
        {NAV_PAGES.map((item) => (
          <li key = {item.title} className="main-nav__item">
            <a className="main-nav__link" href={item.href}>{item.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavigationMain;
