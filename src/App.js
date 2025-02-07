import React, {useEffect, useState} from "react";
import {createRoot} from 'react-dom/client';
import Logo from './images/whiteLogo.png';
import Phone from './images/mockup-screens.png';
import Talking from './images/img-1.jpeg';
import TeamTalk from './images/sikka-featured.jpg';
import Chart from './images/iChart.jpeg'
import Tennis from './images/tennis.webp'
import Card from './Cards.js'

// const root = document.querySelector('#react-root');

const App = () => {

  const [menuOpen, setMenuOpen] = useState('');
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      let currentScrollTop = window.scrollY;

      if (currentScrollTop > lastScrollTop && currentScrollTop > 50) {
        // Scrolling down, hide the header
        setIsHeaderVisible(false);
      } else {
        // Scrolling up, show the header
        setIsHeaderVisible(true);
      }

      setLastScrollTop(currentScrollTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);


  function handleMenuOpen() {
    if(menuOpen === '') {
      setMenuOpen('active');
    } else {
      setMenuOpen('')
    }

    if (!menuOpen) {
    document.body.classList.add('no-scroll'); // Disable scroll
  } else {
    document.body.classList.remove('no-scroll'); // Enable scroll
  }



  }
    return (
        <div >

            <header className={isHeaderVisible ? "" : "header-hidden"}>
                <nav>
                    <div className="logo">
                    <a href='#main-banner'><img src={Logo} alt="logo" className="logo-icon"/></a>
                    </div>
                    <ul className='nav-links'>
                        <li><a className="anchor" href="#about">About</a></li>
                        <li><a className="anchor" href="#press">Press</a></li>
                        <li><a className="anchor" href="#contact">Team</a></li>
                        <li><a className="anchor" href="#patients">Patients</a></li>
                    </ul>
                    <div className={'hamburger' + ' ' +menuOpen} onClick={handleMenuOpen}>
                      <span className="bar"></span>
                      <span className="bar"></span>
                      <span className="bar"></span>
                    </div>

                </nav>

            </header>
            <div className={'nav-menu-phone'  + ' ' + menuOpen}>
                      <ul className='nav-items'>
                          <li><a className="anchor" onClick={handleMenuOpen} href="#about">About</a></li>
                          <li><a className="anchor" onClick={handleMenuOpen} href="#press">Press</a></li>
                          <li><a className="anchor" onClick={handleMenuOpen} href="#contact">Team</a></li>
                          <li><a className="anchor" onClick={handleMenuOpen} href="#patients">Patients</a></li>
                      </ul>
                </div>
            <div id="main-banner" className="hero-container">
              <section className="hero">
                  <div className="hero-left">
                    <h1>Immediate access to your full medical records and personalized health recommendations.</h1>
                    <div><a className="find-out" href="#about">Find out how</a></div>
                  </div>
                  <div className="hero-container-img">
                    <img className="phone-mockup" src={Phone} alt="phone" />
                  </div>
              </section>
            </div>
            
            <section id="green" className="green">
                <div className="green-left">
                  <h3>Our mission is to provide a platform for all patients to have immediate access to personalized medical support at your fingertips.</h3>
                </div>
                <div className="green-right">
                  <p>Using personalized data analytics and artificial intelligence, SMART provides individualized, relevant, and proactive analytics, connectivity, and coaching on your personal health journey through our user-friendly app.</p>
                </div>
            </section>
            
            <section id="about" className="about">
              <div className="about-title">
                <h1>SMART’s mission is to improve access to personalized health care.</h1>
                <img src={Talking} alt="Dr. Sikka" />
              </div>
              <div className="about-content">
              <div className="about-content-1">
                <h2>Data driven wellness</h2>
                <p>Our plan starts with democratizing health care data. Our method enables individuals to have full access to their health data, on their mobile device, in a manner that provides them usable health information, personal insights, and facilitates better care. We put individuals in control of their data, and we take pride in helping individuals get healthy, solve tough problems, and keep you performing at your best. Our methods have been used in elite sports for nearly twenty years, and we allow you to put your information in a safe place, with full access, and give you the ability to use AI to optimize your personal health. Sharing data with your provider, family, friends, and loved ones is easy and under your control. Our transparent methods allow you to understand where your data is at all times. We are grateful for the trust patients put in us, and want to ensure their data, health, privacy, and goals are our top focus.</p>
              </div>
              <div className="divider"></div>
              <div className="about-content-1">
                <h2>How we got here</h2>
                <p>Our vision started over two decades ago working on a football field at NFL training camps. It was there we saw the power of data, the importance of personalized health and good communication. Our approach helped keep players safe, optimized treatments and surgical decision-making, and helped teams win. Over the last twenty years, we’ve built unique data sets, helped thousands of patients, dozens of teams, and built a trusted name in health. We are excited to work with more organizations now using the same methods, building data-driven care, personalized wellness, and access to information.</p>
              </div>
              </div>
            </section>
            
            <section id="press" className="press">
              <div className="press-title">
                <h1>Press</h1>
              </div>
              <div>
                <div className="articles">
                <div className="one-article">
                    <h2>PTPA Launches Groundbreaking Medical Network, Underscoring Its Commitment to Protecting Player Health and Safety</h2>
                    <p>03/01/24</p>
                    <a href="#">Read More</a>
                  </div>
                <div className="one-article">
                    <h2>Press Release</h2>
                    <p>12/14/23</p>
                    <a href="#">Read More</a>
                </div>
                </div>
                <div className="divider"></div>
                <div className="media">
                  <div className="media-title">
                    <h1>Media</h1>
                  </div>
                  <div className="media-container">
                    <div className="media-video">
                      <iframe className="link-video" src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7171546806651199489?compact=1" scrolling="no" height='560px' frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
                    </div>
                    <div className="media-video">
                      <iframe className="link-video" src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7169790655362228226?compact=1" scrolling="no" height='560px' frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
                    </div>
                  </div>
                  <div className="media-title">
                    <h1>Articles</h1>
                  </div>
                  <div className="cards-container">
                      {/* <div className="media-content">
                        <a href="#">The Story of Robby Sikka, Doctor and Leader in the NBA</a>
                        <img src={TeamTalk} alt="Dr. Sikka talking to team"/>
                      </div>
                      <div className="media-content">
                      <a href="#">Report shows tennis night matches lead to increased injury risk</a>
                        <img src={Chart} alt="Chart"/>
                      </div>
                      <div className="media-content">
                        <a href="#">Tennis Injuries Keep Coming As PTPA Publishes Player Welfare Report</a>
                        <img src={Tennis} alt="Dr. checking tennis player"/>
                      </div> */}

              <Card
              title="The Story of Robby Sikka, Doctor and Leader in the NBA"
              image={TeamTalk}
              url="https://www.slamonline.com/the-magazine/robby-sikka-profile/"
            />
            <Card
              title="Report shows tennis night matches lead to increased injury risk"
              image={Chart}
              url="https://www.espn.com/tennis/story/_/id/41210444/report-shows-tennis-night-matches-lead-increased-injury-risk"
            />
            <Card
              title="Tennis Injuries Keep Coming As PTPA Publishes Player Welfare Report"
              image={Tennis}
              url="https://www.forbes.com/sites/timellis/2024/10/01/tennis-injuries-keep-coming-as-ptpa-publishes-player-welfare-report/"
            />
                    </div>
                </div>
              </div>
            </section>
            
            <section id="contact" className="contact">
              <div className="top-contact">
                <div className="image-contact">
                  <img src={TeamTalk} alt="Dr. Sikka talking to the team" />
                </div>
                <div className="contact-text-container">
                  <div className="top-text-1">
                    <h3>Join Our Team</h3>
                    <p>Join our dynamic team at SMART, where you'll collaborate with industry leaders to revolutionize healthcare and wellness through our cutting-edge data and technology solutions.</p>
                  </div>
                  <div className="top-text-2">
                    <p id="bold">For more information:</p>
                    <a href="mailto:jobs@smartdocapp.com">
                      <p>jobs@smartdocapp.com</p>
                    </a>
                  </div>
                  </div>
              </div>
              <div className="partner" >
                <div className="partner-top">
                  <h3>Partnership Opportunities</h3>
                  <p>We’re looking to partner with innovative minds and organizations to advance SMART's mission to revolutionize access to personalized medical care through cutting-edge software solutions.</p>
                </div> 
                <div className="partner-bottom">
                  <p id="bold">To explore further:</p>
                  <a href='mailto:info@smartdocapp.com'>
                    <p>info@smartdocapp.com</p>
                  </a>
                </div>
              </div>
            </section>
            
            <footer>
                <p>Privacy Policy</p>
            </footer>
        </div>
    );
};


export default App;

// createRoot(root).render(App);