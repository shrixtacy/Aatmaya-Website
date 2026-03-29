import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Contact from './Contact';

const ContactPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-void min-h-screen text-antique-white selection:bg-mystic-gold selection:text-void flex flex-col pt-12 md:pt-24">
            <Navbar />
            
            <main className="flex-grow">
                <Contact />
            </main>

            <Footer />
        </div>
    );
};

export default ContactPage;
