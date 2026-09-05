import BearBlocks from '../assets/bear-blocks.svg';
import bgDaytime from '../assets/bg-daytime.svg';

function Hero() {
    return (
        <section
            className="relative flex min-h-screen items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: `url(${bgDaytime})` }}
        >
            <img
                src={BearBlocks}
                alt=""
                className="pointer-events-none absolute bottom-0 left-0 w-[min(60%,40rem)]"
            />
            <div className="relative z-10 px-6 text-center font-ubuntu text-eotg-navy">
                <div className="animate-float mb-2 text-5xl">
                    <b>Engineers on the Green</b>
                </div>
                <div className="text-2xl">
                    January 8th, 2026
                    <br />
                    11 AM - 2:30 PM
                    <br />
                    Warren Mall
                </div>
            </div>
        </section>
    );
}

export default Hero;
