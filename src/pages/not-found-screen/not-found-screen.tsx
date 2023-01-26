import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';

function NotFoundScreen(): JSX.Element {
  return (
    <Link to={AppRoute.Catalog}>
      <div className="page-content">404. Страница Отсутсвует. На главную страницу</div>
    </Link>
  );
}

export default NotFoundScreen;
