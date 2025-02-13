import React, {useState} from "react";

// import ReactDOM from "react-dom/client";
// import "./index.css";  // Optional for global styles

import Header from "./Header.js";
import PhoneMenuOpen from "./PhoneMenuOpen.js";
import Footer from "./Footer.js";


export default function PTPAPress() {

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
                <section id="ptpa-press" className="press-article-container">
                    <div className="click-back"></div>
                    <div className="title-press-article">
                        <h1>PTPA Launches Groundbreaking Medical Network, Underscoring Its Commitment to Protecting Player Health and Safety</h1>
                        <h4>Dr. Robby Sikka appointed PTPA Medical Director, will oversee players’ concierge medical services, point-of-care resources and related research studies</h4>
                    </div>
                    <div className="content-press-article">
                        <p>Washington, D.C., March 1, 2024 – The Professional Tennis Players Association (PTPA) today announced the launch of <b>PTPA MedNet</b>, a first-of-its-kind initiative specifically designed to protect and support professional tennis players’ health and safety. Led by Dr. Robby Sikka, a renowned innovator at the intersection of technology, healthcare, sports, and analytics, who has been appointed as the inaugural Medical Director of the PTPA, PTPA MedNet will work in conjunction with Dr. Sikka’s SMART Care Network to provide players independent, data-driven health and wellness resources and support. This initiative empowers players to gain a deeper understanding of their health and receive more personalized care.</p>
                        <p>“Understanding how to protect your personal health and optimize your physical performance is of paramount importance to professional athletes,” said Dr. Sikka. “I’m looking forward to supporting the health of both men’s and women’s professional tennis players worldwide through PTPA MedNet and the SMART Care Network and believe this is the gold standard in player-centric healthcare and ensures equal access to care for all tennis players throughout their lifetime. Thanks to the vision and leadership of the PTPA, we are prioritizing personalized health and creating a new standard of care for professional athletes.”</p>
                        <p>“Tennis players across tours and rankings deserve to have access to high-quality medical support, guidance and resources. Athletes in team sports benefit from the resources of their teams and players associations, but that has been a notable gap in professional tennis,” said Ahmad Nassar, PTPA Executive Director. “Safeguarding players’ health and wellness is a core part of our PTPA Principles and a fundamental component of Dr. Sikka’s lifetime work. We’re confident this program will equip players with the tools they need to better understand and manage their unique needs.”</p>
                        <p>PTPA MedNet will feature a concierge service offering for players and player teams to work directly with Dr. Sikka and his network of renowned sports medicine specialists, empowering well-informed decisions based on each player’s individual situation and needs. Dr. Sikka will work alongside players, player agents, athletic trainers and physical therapists to provide consultation and robust data analysis on health and wellness challenges ranging from injury prevention methods and initial injury diagnostics through treatment and return-to-play strategies for end-to-end, comprehensive care.</p>
                        <p>Dr. Sikka will also oversee the PTPA MedNet Hotline, a new resource available to players and player teams 24/7. Players are encouraged to leverage the hotline for any timely medical concerns and needs, such as:</p>
                        <p>Requests for a primary medical opinion or an independent, secondary medical opinion in addition to any opinions given by tour-provided physicians</p>
                        <p>Recommendations for and introductions to qualified doctors and physical therapists around the world</p>
                        <p>Guidance on medical record reviews to ensure appropriate care management</p>
                        <p>Furthermore, players will receive access to Dr. Sikka’s SMART platform, a cutting-edge, data-driven software solution that helps patients worldwide receive more personalized care. SMART provides users with their full medical records and bespoke health recommendations at their fingertips through its proprietary algorithms, unique data sets and artificial intelligence.</p>
                        <p>Overseeing medical studies on behalf of the PTPA, Dr. Sikka will review and analyze comprehensive health and safety data across players and tours. His initial research will concentrate on injury epidemiology, aiming to identify the prevalence and frequency of the most common injuries and conditions on tour, as well as determining the most common causes for match-related withdrawals and retirements.</p>
                        <p>Dr. Sikka joins the PTPA following decades of work with professional athletes across sports. He previously served as the Vice President of Player Health & Operations for the Minnesota Timberwolves, and has also served as a team physician and overseen sports science programs with the New York Yankees, Denver Broncos, Minnesota Vikings, Washington Wizards and others. He is the developer of the world’s largest sports injury database for injury prediction and risk assessment, return to play and performance guidance, and optimization of rehabilitation strategies.</p>
                        <p>Additional information on PTPA MedNet will be shared directly with players and player teams in the coming weeks.</p>
                        <p><b>About the Professional Tennis Players Association</b></p>
                        <p>The Professional Tennis Players Association (PTPA) is a global organization that unites and mobilizes tennis players to foster transparency and fairness in professional tennis. As an independent entity, the PTPA is dedicated to advancing and safeguarding the rights of professional men’s and women’s tennis players throughout their careers. By prioritizing crucial aspects such as health and safety, schedules, rules, purses, benefits, and education, the PTPA endeavors to build an equitable and sustainable competitive environment for present and future generations of players. Headquartered in the Washington, D.C. area, the PTPA operates on a global scale. For more information, visit www.ptpaplayers.com and connect with @ptpaplayers on social media.</p>
                        <p><b>About SMART</b></p>
                        <p>Our mission is to provide a platform for all patients to have immediate access to personalized medical support at your fingertips.</p>
                        <p>Using personalized data analytics and artificial intelligence, SMART provides individualized, relevant, and proactive analytics, connectivity, and coaching on your personal health journey through our user-friendly app.</p>
                        <p>Our method enables individuals to have full access to their health data, on their mobile device, in a manner that provides them usable health information, personal insights, and facilitates better care. We put individuals in control of their data, and we take pride in helping individuals get healthy, solve tough problems, and keep you performing at your best. Our methods have been used in elite sports for over twenty years, and we allow you to put your information in a safe place, with full access, and give you the ability to use AI to optimize your personal health. Sharing data with your provider, family, friends, and loved ones is easy and under your control. Our transparent methods allow you to understand where your data is at all times. To learn more, visit www.smartdocapp.com.</p>
                        <p><b>Media Contacts</b></p>
                        <p>For PTPA: david@mvppr.com</p>
                        <p>For SMART: info@smartdocapp.com</p>
                    </div>
                </section>
            <Footer />
        </div>
    );
}



