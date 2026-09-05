import { useState } from 'react';

interface FaqItemProps {
    question: string;
    answer: string;
}

function FaqItem({ question, answer }: FaqItemProps) {
    const [open, setOpen] = useState(false);

    return (
        <div className="mb-8 rounded-xl border-2 border-solid border-white bg-white text-left font-ubuntu text-[1.2rem]">
            <button
                type="button"
                className="mx-8 my-[0.8rem] flex w-[calc(100%-4rem)] flex-wrap justify-center text-center text-[1.4rem] font-extrabold text-eotg-green hover:no-underline"
                aria-expanded={open}
                onClick={() => setOpen((prev) => !prev)}
            >
                <span className="mx-auto">{question}</span>
                <i
                    className={`fa fa-plus mt-1 transition-transform duration-500 ${
                        open ? 'rotate-[135deg]' : 'rotate-0'
                    }`}
                />
            </button>
            {open && (
                <div className="mx-8 pb-4 text-eotg-green">
                    <p>{answer}</p>
                </div>
            )}
        </div>
    );
}

export default FaqItem;
