import hero from '../svg/hero.svg';

function NotFoundPage() {
    return (
        <section className="mt-16 ml-[10%] block w-[90%] max-sm:ml-0 max-sm:w-full">
            <div className="h-full p-0">
                <div className="flex h-full w-full flex-col md:flex-row">
                    <div className="flex w-full md:w-1/2">
                        <div className="self-center">
                            <div className="-mt-24 text-[2.6rem] font-bold text-tesc-blue max-sm:mt-6 max-sm:text-center">
                                404: Page Not Found
                            </div>
                        </div>
                    </div>
                    <div className="flex w-full p-0 md:w-1/2">
                        <img
                            src={hero}
                            className="w-full max-h-[85%] self-center"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default NotFoundPage;
