import React, {useState} from "react";

// import ReactDOM from "react-dom/client";
// import "./index.css";  // Optional for global styles

import Header from "./Header.js";
import PhoneMenuOpen from "./PhoneMenuOpen.js";
import Footer from "./Footer.js";

export default function PressRelease() {

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
        <div>
                <Header classAdd={menuOpen} onHandleClick={handleMenuOpen} />
                <PhoneMenuOpen classAdd={menuOpen} onHandleClick={handleMenuOpen} />

                <section id="press-release" className="press-article-container">
                    <div className="click-back"></div>
                    <div className="title-press-article">
                        <h1>Press release</h1>
                    </div>
                    <div className="content-press-article">
                        <p>[Minneapolis, Minnesota] Today marks a significant milestone for SMART as the company announces the successful completion of its seed funding round. Led by a diverse group of investors, including professional athletes, team executives and owners, physicians, government officials, and technology and innovation leaders, this funding will propel SMART's mission to revolutionize access to personalized medical care through cutting-edge software solutions.</p>
                        <p>SMART specializes in developing next-generation software that leverages proprietary algorithms, unique data sets, and artificial intelligence to actively engage patients. It is led by CEO and Founder, Dr. Robby Sikka, who previously served as the Vice President of Player Health and Operations for the Minnesota Timberwolves. Sikka also worked heavily on national public health efforts during COVID, and has served as a team physician and overseen sports science programs with teams including the New York Yankees, Denver Broncos, Minnesota Vikings and others.</p>
                        <p>SMART’s innovative platform is designed to empower individuals with their health data, fostering a personalized approach to medical care and performance that maximizes efficiency and outcomes. Businesses can leverage SMART’s AI interface to better understand employee health, improve time to care and care management, and measure long-term outcomes in research.</p>
                        <p>"We are thrilled to have garnered such strong support from a diverse group of individuals who share our vision for transforming healthcare through data and technology,” said Sikka.</p>
                        <p>The recent round of investments includes contributions from notable figures, including NBA All- Star Anthony Edwards, and several other prominent athletes. In tandem with Edwards' investment, his business manager Justin Holland will join SMART as a strategic advisor, helping the company expand its footprint across collegiate and professional sports. Additionally, funding from leaders from the Obama and Trump Administrations, Mayo Clinic physicians and industry veterans in venture and technology underscore the broad appeal and potential impact of SMART's principles of personalized medicine in sports to the broader population.</p>
                        <p>Recommendations for and introductions to qualified doctors and physical therapists around the world</p>
                        <p>Guidance on medical record reviews to ensure appropriate care management</p>
                        <p>“I had an opportunity to get to know Dr. Robby Sikka well when he oversaw player wellness with the Timberwolves,” Edwards said. “I’ve always been impressed with his vision and understanding of healthcare and technology, and I’m proud and excited to invest in SMART, which I believe can revolutionize the industry.”</p>
                        <p>Having previously collaborated with major sports leagues and teams in the NBA, NFL, MLB, MLS, and numerous NCAA teams, SMART has established itself as a trusted partner in optimizing healthcare and performance for athletes. More recently, through Dr. Sikka’s work, SMART has also cultivated partnerships with key players in the technology and health industries, collaborating with companies like Tonal, Oura Ring, and others to enhance their platform's capabilities, and provide users with a data-driven, personalized, wellness experience.</p>
                        <p><b>For more information, press only:</b></p>
                        <p>PR Contact Name: Robby Sikka, CEO/Founder</p>
                        <p>Email: info@smartdocapp.com</p>
                        <p><b>For more information on Product:</b></p>
                        <p>Website: www.smartdocapp.com</p>
                    </div>
                </section>

            <Footer />
        </div>
    );
};