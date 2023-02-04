import LoadingScreen from '../../components/loading-screen/loading-screen';
import {PaginationUI} from '../../const';
import {changeCurrentCatalogPage} from '../../store/products-ui/products-ui';
import {redirectToRoute} from '../../store/action';
import {useEffect} from 'react';
import {useAppDispatch} from '../../hooks';

function Main (): JSX.Element {

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(changeCurrentCatalogPage({page: PaginationUI.DefaultCatalogPage}));
    dispatch(redirectToRoute(`/catalog/page_${PaginationUI.DefaultCatalogPage}`));
  });

  return (
    <LoadingScreen/>
  );
}

export default Main;
