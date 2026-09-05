export interface FaqEntry {
    question: string;
    answer: string;
}

const studentFaq: FaqEntry[] = [
    {
        question: 'How do I find the Warren Mall?',
        answer:
            'The Warren Mall is the walkway towards the Computer Science and Engineering Building from the Geisel Library. It is the walkway right in front of the Jacobs School of Engineering Building. Please refer to the map below.',
    },
    {
        question: 'Is this event limited to engineering majors?',
        answer:
            'Students of any major are free to attend and network with orgs.',
    },
    {
        question: 'Where can I find more information about orgs?',
        answer:
            'More information is listed in the “Attending Organizations” section.',
    },
    {
        question: 'How can I contact orgs that I’m interested in?',
        answer:
            'Each org has provided their emails and links to their website/social media. This information is available on the EOTG website.',
    },
    {
        question:
            'What can I do if I’m not able to come to the event in person?',
        answer:
            'Feel free to reach out to orgs using their email or links to their website/social media.',
    },
];

export default studentFaq;
