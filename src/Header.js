import { faDev, faGithub, faStackOverflow, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import SocialIcon from './SocialIcon';

export default function Header() {
  return (
    <header className="flex flex-row justify-between space-x-4 py-6">
      <a href="/" className="hover:text-white text-2xl">
        alexkates.dev
        </a>
      <nav className="flex flex-row space-x-6 font-semibold w-auto ">
        <SocialIcon icon={faGithub} href="https://github.com/alexkates" />
        <SocialIcon icon={faStackOverflow} href="https://stackoverflow.com/users/3149835/alex?tab=profile" />
        <SocialIcon icon={faTwitter} href="https://twitter.com/thealexkates" />
        <SocialIcon icon={faDev} href="https://dev.to/thealexkates" />
        <SocialIcon icon={faLinkedin} href="https://www.linkedin.com/in/alexanderkates" />
      </nav>
    </header>
  );
}
