function Footer() {
    return (
        <div>
            <section
                className="relative h-72 -translate-y-0.5 bg-eotg-green text-center before:absolute before:bottom-[-1px] before:left-0 before:block before:h-full before:w-full before:bg-[url('/contact-clip.svg')] before:bg-bottom before:bg-cover before:bg-no-repeat before:content-['']"
                id="contact mx-20"
            >
                <div className="flex h-full w-full items-center">
                    <h1 className="relative z-[2] m-auto text-[clamp(2rem,2.5vw,2.5rem)] leading-[1.7] text-white">
                        Talk to us at{' '}
                        <a
                            className="text-white"
                            href="mailto:contact@tescatucsd.org"
                        >
                            contact@tescatucsd.org
                        </a>{' '}
                        if you have any questions.
                    </h1>
                </div>
            </section>
            <footer className="w-full text-tesc-blue" id="footer">
                <div className="w-full">
                    <ul className="m-0 flex list-none flex-col items-center mx-20 justify-between p-0 text-center md:flex-row md:text-left">
                        <li className="mt-4 text-[1.75rem] first:mt-0 md:mt-0">
                            <a
                                className="text-tesc-blue hover:no-underline"
                                target="_new"
                                href="https://www.facebook.com/ucsd.tesc/"
                            >
                                <i className="fab fa-facebook-square"></i>
                            </a>
                        </li>
                        <li className="mt-4 text-[1.75rem] first:mt-0 md:mt-0">
                            <a
                                className="text-tesc-blue hover:no-underline"
                                target="_new"
                                href="https://twitter.com/ucsdtesc"
                            >
                                <i className="fab fa-twitter"></i>
                            </a>
                        </li>
                        <li className="mt-4 max-w-xs text-center text-[1.75rem] first:mt-0 md:mt-0 max-md:w-full">
                            <a
                                className="text-tesc-blue hover:no-underline"
                                href="https://tescatucsd.org/"
                                target="_new"
                            >
                                <img
                                    src="/tesc-logo.png"
                                    alt="tesc-logo"
                                    className="w-28"
                                />
                            </a>
                        </li>
                        <li className="mt-4 text-[1.75rem] first:mt-0 md:mt-0">
                            <a
                                className="text-tesc-blue hover:no-underline"
                                target="_new"
                                href="https://www.instagram.com/tesc.at.ucsd/"
                            >
                                <i className="fab fa-instagram"></i>
                            </a>
                        </li>
                        <li className="mt-4 text-[1.75rem] first:mt-0 md:mt-0">
                            <a
                                className="text-tesc-blue hover:no-underline"
                                target="_new"
                                href="mailto:hello@tesc.ucsd.edu"
                            >
                                <i className="fas fa-envelope-square"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
