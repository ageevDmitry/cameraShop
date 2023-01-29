import {useEffect} from 'react';
import {redirectToRoute} from '../../store/action';
import {useAppDispatch} from '../../hooks';
// import {Link} from 'react-router-dom';
import LoadingScreen from '../../components/loading-screen/loading-screen';

function Main (): JSX.Element {

  const dispatch = useAppDispatch();

  useEffect(() => () => {
    dispatch(redirectToRoute('/catalog/page_1'));
  }, [dispatch]);

  return (

    <LoadingScreen/>
    // <div className="wrapper">
    //   <Link to = {'/catalog/page_1'}>1</Link>
    // </div>
  );
}

export default Main;
