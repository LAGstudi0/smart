import React, {useState} from "react";
import {createRoot} from 'react-dom/client';

import Header from "./Header.js";
import PhoneMenuOpen from "./PhoneMenuOpen.js";
import Hero from "./main-page/Hero.js";
import Green from "./main-page/Green.js";
import About from "./main-page/About.js";
import Press from "./main-page/Press.js";
import Contact from "./main-page/Contact.js";
import Footer from "./Footer.js";

export default function MainPage() {
     const [menuOpen, setMenuOpen] = useState('');
      const [isHeaderVisible, setIsHeaderVisible] = useState(true);
    
    
    
      function handleMenuOpen() {
        if(menuOpen == '') {
          setMenuOpen('active');
        } else {
          setMenuOpen('')
        }
      }
        return (
            <div >
                <Header classAdd={menuOpen} onHandleClick={handleMenuOpen} />
                <PhoneMenuOpen classAdd={menuOpen} onHandleClick={handleMenuOpen} />
                <Hero />
                <Green />
                <About />
                <Press />
                <Contact />
                <Footer />
            </div>
        );
};