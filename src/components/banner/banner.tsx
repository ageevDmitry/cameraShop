import {Promo} from '../../types/product';
import LoadingScreen from '../../components/loading-screen/loading-screen';

type PromoProps = {
  promo?: Promo;
}

function Banner ({promo}: PromoProps): JSX.Element {

  if (!promo) {
    return (
      <LoadingScreen />
    );
  }

  const {name, previewImg, previewImg2x, previewImgWebp, previewImgWebp2x} = promo;

  return (
    <div className="banner">
      <picture>
        <source type="image/webp" srcSet={`${previewImgWebp}, ${previewImgWebp2x}`} />
        <img src={previewImg} srcSet={previewImg2x} alt="баннер" width={1280} height={280} />
      </picture>
      <p className="banner__info">
        <span className="banner__message">Новинка!</span>
        <span className="title title--h1">{name}</span>
        <span className="banner__text">Профессиональная камера от&nbsp;известного производителя</span>
        <a className="btn" href="/">Подробнее</a>
      </p>
    </div>
  );
}

export default Banner;
