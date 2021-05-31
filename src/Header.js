import { faDev, faGithub, faStackOverflow, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import SocialIcon from './SocialIcon';
import me from './me_bitmoji.png';

export default function Header() {
  return (
    <header className="flex justify-center md:justify-between space-x-4 p-6">
      <div className="flex items-center">
        <img className="rounded-full w-10 h-10 mr-4" src={me} alt="" />
        <a href="/" className="hover:text-white text-2xl">alexkates.dev</a>
      </div>
      <nav className="hidden md:flex space-x-6 font-semibold w-auto ">
        <SocialIcon icon={faGithub} href="https://github.com/alexkates" />
        <SocialIcon icon={faStackOverflow} href="https://stackoverflow.com/users/3149835/alex?tab=profile" />
        <SocialIcon icon={faTwitter} href="https://twitter.com/thealexkates" />
        <SocialIcon icon={faDev} href="https://dev.to/thealexkates" />
        <SocialIcon icon={faLinkedin} href="https://www.linkedin.com/in/alexanderkates" />
      </nav>
    </header>
  );
}
