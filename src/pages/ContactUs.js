import React from 'react'
import HeadContact from '../components/Contact/HeadContact';
import Message from '../components/Contact/Message';
import Footer from '../components/Footer';

import Navbar from '../components/Navbar';

const ContactUs = () => {
  return (
    <div>
        <section id="contact" className="aq[120px]">
            {/* Barres de navigation de contact selectionner Contact */}
              <Navbar/>
            {/*  HeadContact pour les information comme l'apple   social network  */}
              <HeadContact/>
            {/* Message  pour l'envoir de message important sur la publication d'articles divers */}
              <Message/>
        </section>
        <Footer/>
    </div>

  )
}

export default ContactUs;
