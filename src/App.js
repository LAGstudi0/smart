import React, { useState, useEffect, useRef } from "react";
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
  const [headerVisible, setHeaderVisible] = useState(true);

  const headerRef = useRef(null);
  const headerHeightRef = useRef(0);
  const lastScrollTop = useRef(0);

  // After the header mounts, store its height.
  useEffect(() => {
    if (headerRef.current) {
      headerHeightRef.current = headerRef.current.offsetHeight;
    }
  }, []);

  // Scroll event to toggle headerVisible
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      
      // Always show header at the very top
      if (currentScrollPos <= 0) {
        setHeaderVisible(true);
      } else if (currentScrollPos < lastScrollTop.current) {
        // Scrolling up
        setHeaderVisible(true);
      } else {
        // Scrolling down
        setHeaderVisible(false);
      }
      lastScrollTop.current = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle mobile menu state.
  function handleMenuOpen() {
    setMenuOpen((prev) => (prev === '' ? 'active' : ''));
  }

  // Handle anchor link clicks:
  // Subtract header's height only if headerVisible is true.
  function handleAnchorClick(e) {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    if (!targetElement) return;

    // Use header's height only if visible; otherwise, offset is 0.
    const offset = headerVisible ? headerHeightRef.current : 0;

    const elementPosition = targetElement.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }

    return (
        <div >
            <Header 
              ref={headerRef}
              classAdd={menuOpen} 
              onHandleClick={handleMenuOpen}
              headerVisible={headerVisible}
              handleAnchorClick={handleAnchorClick} 
            />
            <PhoneMenuOpen 
              classAdd={menuOpen} 
              onHandleClick={handleMenuOpen}
              handleAnchorClick={handleAnchorClick}
            />
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