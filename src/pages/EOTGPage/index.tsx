import { useEffect } from 'react';

import Hero from './components/Hero';
import About from './components/About';
import Orgs from './components/Orgs';
import Faq from './components/Faq';
import Footer from './components/Footer';

function EOTGPage() {
    useEffect(() => {
        document.title = 'EOTG | UCSD TESC';
    }, []);

    return (
        <>
            <Hero />
            <About />
            <Orgs />
            <Faq />
            <Footer />
        </>
    );
}

export default EOTGPage;
