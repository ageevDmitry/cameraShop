import {Link} from 'react-router-dom';
import {NavBreadcrumb} from '../../types/ui';

type BreadcrumbsProps = {
  currentBreadCrumb?: string;
  navBreadcrumbs:NavBreadcrumb[];
}

function Breadcrumbs ({navBreadcrumbs, currentBreadCrumb}: BreadcrumbsProps): JSX.Element {

  return (
    <div className="breadcrumbs">
      <div className="container">
        <ul className="breadcrumbs__list">
          {
            navBreadcrumbs.map((item) => (
              <li key={item.title} className="breadcrumbs__item">
                <Link to={item.href} className="breadcrumbs__link" >{item.title}
                  <svg width={5} height={8} aria-hidden="true">
                    <use xlinkHref="#icon-arrow-mini" />
                  </svg>
                </Link>
              </li>
            ))
          }
          {
            currentBreadCrumb &&
            <li className="breadcrumbs__item">
              <span className="breadcrumbs__link breadcrumbs__link--active">{currentBreadCrumb}</span>
            </li>
          }
        </ul>
      </div>
    </div>
  );
}

export default Breadcrumbs;
