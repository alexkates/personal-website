import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDev, faGithub, faStackOverflow, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import './Header.css';

export default function Header() {
  return (
    <header>
      <a className="home-icon" href="/" title="Home">
        a
      </a>
      <div>
        <a href="https://github.com/alexkates" target="blank">
          <FontAwesomeIcon icon={faGithub} className="social-icon" />
        </a>
        <a href="https://stackoverflow.com/users/3149835/alex?tab=profile" target="blank">
          <FontAwesomeIcon icon={faStackOverflow} className="social-icon" />
        </a>
        <a href="https://twitter.com/thealexkates" target="blank">
          <FontAwesomeIcon icon={faTwitter} className="social-icon" />
        </a>
        <a href="https://dev.to/thealexkates" target="blank">
          <FontAwesomeIcon icon={faDev} className="social-icon" />
        </a>
        <a href="https://www.linkedin.com/in/alexanderkates/" target="blank">
          <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
        </a>
      </div>
    </header>
  );
}
