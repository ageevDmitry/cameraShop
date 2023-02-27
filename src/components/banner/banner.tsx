import {Promo} from '../../types/product';
import LoadingScreen from '../../components/loading-screen/loading-screen';
import {Link} from 'react-router-dom';

type PromoProps = {
  promo?: Promo;
}

function Banner ({promo}: PromoProps): JSX.Element {

  if (!promo) {
    return (
      <LoadingScreen />
    );
  }

  const {id, name, previewImg, previewImg2x, previewImgWebp, previewImgWebp2x} = promo;

  const productId = `/product/${id}`;

  return (
    <div className="banner">
      <picture>
        <source type="image/webp" srcSet={`/${previewImgWebp}, /${previewImgWebp2x} 2x`} />
        <img src={previewImg} srcSet={`${previewImg2x} 2x`} alt="баннер" width={1280} height={280} />
      </picture>
      <p className="banner__info">
        <span className="banner__message">Новинка!</span>
        <span className="title title--h1">{name}</span>
        <span className="banner__text">Профессиональная камера от&nbsp;известного производителя</span>
        <Link to={productId} className="btn" >Подробнее</Link>
      </p>
    </div>
  );
}

export default Banner;
