import React, {useState} from "react";
import {createRoot} from 'react-dom/client';

import Header from "./Header.js";
import PhoneMenuOpen from "./PhoneMenuOpen.js";
import Hero from "./Hero.js";
import Green from "./Green.js";
import About from "./About.js";
import Press from "./Press.js";
import Contact from "./Contact.js";
import Footer from "./Footer.js";

// const root = document.querySelector('#react-root');

const App = () => {

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


export default App;

// createRoot(root).render(App);