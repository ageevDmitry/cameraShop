import {animateScroll as scroll } from 'react-scroll';

function UpButton (): JSX.Element {

  return (
    <a className="up-btn" href="#header" onClick={() => scroll.scrollToTop()}>
      <svg width={12} height={18} aria-hidden="true">
        <use xlinkHref="#icon-arrow2" />
      </svg>
    </a>
  );
}

export default UpButton;
