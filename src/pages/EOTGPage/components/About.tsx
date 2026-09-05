function About() {
    return (
        <section
            className="relative flex min-h-screen w-full flex-col items-center justify-center bg-eotg-green bg-contain max-sm:pt-4"
            id="abouteotg"
        >
            <div className="mx-auto w-full max-w-[960px] px-4">
                <div className="text-center">
                    <h1 className="animate-float ml-[30px] mt-[5px] w-full pt-20 text-center font-ubuntu text-5xl text-eotg-ice">
                        About Engineers on the Green
                    </h1>
                    <p className="mt-20 font-ubuntu text-[2rem] text-eotg-ice">
                        Engineers on the Green is an annual event held in Fall
                        and Winter quarter where students can network with the
                        various engineering orgs on campus. This event will take
                        place in person at Warren Mall on January 8th, 2026 from
                        11 AM to 2:30 PM.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About;
