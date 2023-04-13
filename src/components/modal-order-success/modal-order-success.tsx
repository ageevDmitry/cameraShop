import {useModalClose} from '../../hooks/use-modal-close';
import FocusTrap from 'focus-trap-react';
import {Link, generatePath} from 'react-router-dom';
import {useAppSelector} from '../../hooks/use-app-selector';
import {getCurrentCatalogPagePath} from '../../store/products-ui/selectors';
import {AppRoute} from '../../const';

type ModalOrderProps = {
  setIsModalOrderSuccess: (isModalReview: boolean) => void;
}

function ModalOrderSuccess ({setIsModalOrderSuccess}: ModalOrderProps): JSX.Element {

  const {currentCatalogPage, search} = useAppSelector(getCurrentCatalogPagePath);
  useModalClose(setIsModalOrderSuccess);

  return (
    <FocusTrap>
      <div className="modal is-active modal--narrow">
        <div className="modal__wrapper">
          <div className="modal__overlay"
            onClick={() =>{
              setIsModalOrderSuccess(false);
            }}
          />
          <div className="modal__content">
            <p className="title title--h4">Спасибо за покупку</p>
            <svg className="modal__icon" width={86} height={78} aria-hidden="true">
              <use xlinkHref="#icon-review-success" />
            </svg>
            <div className="modal__buttons">
              <Link className="btn btn--purple modal__btn modal__btn--fit-width"
                onClick={() =>{
                  setIsModalOrderSuccess(false);
                }}
                to={{
                  pathname: generatePath(AppRoute.Catalog, {pageNumber: String(currentCatalogPage)}),
                  search
                }}
              >
                Вернуться к покупкам
              </Link>
            </div>
            <button className="cross-btn" type="button" aria-label="Закрыть попап"
              onClick={() =>{
                setIsModalOrderSuccess(false);
              }}
            >
              <svg width={10} height={10} aria-hidden="true">
                <use xlinkHref="#icon-close" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </FocusTrap>
  );
}

export default ModalOrderSuccess;
