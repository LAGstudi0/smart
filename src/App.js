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

  // Store header height after mounting
  useEffect(() => {
    if (headerRef.current) {
      headerHeightRef.current = headerRef.current.offsetHeight;
    }
  }, []);

  // Scroll event to update headerVisible
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (currentScrollPos <= 0) {
        setHeaderVisible(true);
      } else if (currentScrollPos < lastScrollTop.current) {
        setHeaderVisible(true);
      } else {
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

  // Detect if the user is on iOS
  function isiOS() {
    return /iPad|iPhone|iPod/.test(navigator.userAgent);
  }

  // Updated anchor click handler:
  function handleAnchorClick(e) {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    if (!targetElement) return;

    // If on iOS, add a temporary class to force the header background to transparent.
    if (isiOS() && headerRef.current) {
      headerRef.current.classList.add("header-anchor-hide");
    }

    // Determine the offset only when header is visible.
    const offset = headerVisible ? headerHeightRef.current : 0;
    const elementPosition = targetElement.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });

    // Remove the temporary class after a delay (adjust timing if needed)
    setTimeout(() => {
      if (headerRef.current) {
        headerRef.current.classList.remove("header-anchor-hide");
      }
    }, 500);
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