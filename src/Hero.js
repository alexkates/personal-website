
import Typewriter from "typewriter-effect";

export default function Hero() {
    return (
        <section className="mt-12 md:mt-24">
            <h1 className="text-center lg:text-left text-6xl">Hi, I'm Alex.</h1>
            <div className="text-center lg:text-left text-xl md:text-2xl mt-8">
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
        </section>
    );
}