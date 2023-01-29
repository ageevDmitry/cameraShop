// import {AppRoute} from '../../const';
import {Link} from 'react-router-dom';

function Main (): JSX.Element {

  return (
    <div className="wrapper">
      <Link to = {'/catalog/1'}>1</Link>
    </div>
  );
}

export default Main;
