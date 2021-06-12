import Typewriter from "typewriter-effect";
import me from './me_waving.png';

import SocialIcon from "./SocialIcon";
import { faDev, faGithub, faStackOverflow, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faPaperclip } from '@fortawesome/free-solid-svg-icons';

export default function Hero() {
  return (
    <section className="lg:flex lg:items-center justify-evenly mt-4">
      <div className="w-auto text-center lg:text-left">
        <h1 className="lg:flex text-6xl">Hi, I'm Alex.
          <span className="hidden lg:block ml-4 animate-wave">👋</span>
        </h1>
        <div className="mt-8 lg:flex space-x-6 font-semibold w-auto ">
          <SocialIcon icon={faGithub} href="https://github.com/alexkates" />
          <SocialIcon icon={faStackOverflow} href="https://stackoverflow.com/users/3149835/alex?tab=profile" />
          <SocialIcon icon={faTwitter} href="https://twitter.com/thealexkates" />
          <SocialIcon icon={faDev} href="https://dev.to/thealexkates" />
          <SocialIcon icon={faLinkedin} href="https://www.linkedin.com/in/alexanderkates" />
          <SocialIcon icon={faPaperclip} href="https://docs.google.com/document/d/1zRtDKBeNCC8cgrKSRwdsT3CNisbz6oaVNX_QA4F9e2o/edit?usp=sharing" />
        </div>
        <div className="text-xl md:text-2xl mt-8">
          <Typewriter
            options={{
              strings: [
                'Senior Software Engineer',
                'AWS Certified Solutions Architect',
                'AWS Community Builder',
                'Tech for Campaigns Volunteer',
              ],
              autoStart: true,
              loop: true,
              delay: 15,
              deleteSpeed: 15,
            }}
          />
        </div>
      </div>
      <img className="hidden lg:flex" src={me} alt="" />
    </section>
  );
}