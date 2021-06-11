import { faDev, faGithub, faStackOverflow, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import SocialIcon from './SocialIcon';
import me from './me_bitmoji.png';
import { faPaperclip } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  return (
    <header className="flex justify-center sm:justify-between space-x-4 p-6">
      <div className="flex items-center">
        <img className="rounded-full w-10 h-10 mr-4" src={me} alt="" />
        <a href="/" className="hover:text-white text-2xl">alexkates.dev</a>
      </div>
      <nav className="hidden sm:flex space-x-6 font-semibold w-auto ">
        <SocialIcon icon={faGithub} href="https://github.com/alexkates" />
        <SocialIcon icon={faStackOverflow} href="https://stackoverflow.com/users/3149835/alex?tab=profile" />
        <SocialIcon icon={faTwitter} href="https://twitter.com/thealexkates" />
        <SocialIcon icon={faDev} href="https://dev.to/thealexkates" />
        <SocialIcon icon={faLinkedin} href="https://www.linkedin.com/in/alexanderkates" />
        <SocialIcon icon={faPaperclip} href="https://docs.google.com/document/d/1zRtDKBeNCC8cgrKSRwdsT3CNisbz6oaVNX_QA4F9e2o/edit?usp=sharing" />
      </nav>
    </header>
  );
}