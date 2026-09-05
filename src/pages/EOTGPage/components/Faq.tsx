import studentFaq from '../data/EOTGFaq';
import FaqItem from './FaqItem';
import WarrenMallMap from '../assets/warren-mall-map.png';

function Faq() {
    return (
        <div className="w-full bg-eotg-green text-white" id="faq">
            <div className="animate-float mb-8 ml-[30px] mt-[5px] pt-16 text-center font-ubuntu text-5xl font-black text-white">
                Frequently Asked Questions
            </div>
            <div className="mx-auto w-full max-w-[960px] px-4">
                <div className="pb-4">
                    {studentFaq.map((d, i) => (
                        <FaqItem {...d} key={i} />
                    ))}
                    <img
                        src={WarrenMallMap}
                        alt=""
                        className="mx-auto w-full border-[3px] border-solid border-white p-2.5"
                    />
                </div>
            </div>
        </div>
    );
}

export default Faq;
