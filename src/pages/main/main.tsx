import LoadingScreen from '../../components/loading-screen/loading-screen';
import {PaginationUI} from '../../const';
import {redirectToRoute} from '../../store/action';
import {useEffect} from 'react';
import {useAppDispatch} from '../../hooks/useAppDispatch';

function Main (): JSX.Element {

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(redirectToRoute(`/catalog/page_${PaginationUI.DefaultCatalogPage}`));
  });

  return (
    <LoadingScreen/>
  );
}

export default Main;
