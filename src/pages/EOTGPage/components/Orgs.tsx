import { orgGalleries, type OrgGalleryDay } from '../data/OrgGalleries';

function Orgs() {
    const renderDay = (day: OrgGalleryDay) => {
        return (
            <iframe
                className="w-full border border-[#ccc] bg-transparent"
                src={`${orgGalleries[day]}?backgroundColor=green`}
                title={`orgs on ${day}`}
                frameBorder="0"
                height="585"
            />
        );
    };

    return (
        <section className="bg-eotg-blue" id="orgs">
            <h1 className="animate-float mb-8 ml-[30px] pt-16 text-center font-ubuntu text-5xl text-white">
                Attending Organizations
            </h1>
            <div className="mx-auto w-full max-w-[960px] px-4">
                <div className="text-center font-ubuntu text-2xl text-white">
                    Engineers on the Green will be in person at the Warren Mall
                    this fall, and we have the following organizations on the
                    roster!
                </div>

                <div className="flex flex-col items-center">
                    <ul className="mt-4 flex min-h-0 list-none flex-wrap items-end justify-center border-0 p-0 max-sm:min-h-32">
                        <li className="mx-2 rounded-2xl border border-solid border-white">
                            <span className="inline-block px-2 align-bottom text-[1.1rem] font-bold text-white">
                                Thursday, Jan. 8th
                            </span>
                        </li>
                    </ul>
                    <div className="w-full">
                        <div className="py-6 font-ubuntu text-[1.2rem] text-white" />
                        {renderDay('tue')}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Orgs;
