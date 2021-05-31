
import Typewriter from "typewriter-effect";
import me from './me_waving.png';

export default function Hero() {
    return (
        <section className="lg:flex lg:items-center justify-evenly mt-4">
            <div className="w-auto text-center lg:text-left">
                <h1 className="text-6xl">Hi, I'm Alex.</h1>
                <div className="text-xl md:text-2xl mt-8">
                    <Typewriter
                        options={{
                            strings: [
                                'Senior Software Engineer',
                                'AWS Certified Soluctions Architect'
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