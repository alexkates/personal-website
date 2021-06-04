
import Typewriter from "typewriter-effect";
import me from './me_waving.png';

export default function Hero() {
  return (
    <section className="lg:flex lg:items-center justify-evenly mt-4">
      <div className="w-auto text-center lg:text-left">
        <h1 className="lg:flex text-6xl">Hi, I'm Alex.
                    <span className="hidden lg:block ml-4 animate-wave">👋</span>
        </h1>
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
              delay: 50
            }}
          />
        </div>
      </div>
      <img className="hidden lg:flex" src={me} alt="" />
    </section>
  );
}