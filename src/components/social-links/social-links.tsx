import {SOCIAL_LINKS} from '../../const';

function SocialLinks (): JSX.Element {

  return (
    <ul className="social" data-testid="socialLinks">
      {SOCIAL_LINKS.map((item) => (
        <li key={item.type} className="social__item">
          <a className="link" href={item.href} aria-label={item.label}>
            <svg width={20} height={20} aria-hidden="true">
              <use xlinkHref={`#icon-${item.svgLink}`}/>
            </svg>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default SocialLinks;
