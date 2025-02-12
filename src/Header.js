import React, {useState} from "react";

import Logo from './images/whiteLogo.png';


export default function Header(props, ref) {


   return <header
   ref={ref}
   className={props.headerVisible ? "header-visible" : "header-hidden"}>
   <nav>
     <div className="logo">
       <a href="#main-banner" onClick={props.handleAnchorClick}>
         <img src={Logo} alt="logo" className="logo-icon" />
       </a>
     </div>
     <ul className="nav-links">
       <li>
         <a className="anchor" onClick={props.handleAnchorClick} href="#about">
           About
         </a>
       </li>
       <li>
         <a className="anchor" onClick={props.handleAnchorClick} href="#press">
           Press
         </a>
       </li>
       <li>
         <a className="anchor" onClick={props.handleAnchorClick} href="#contact">
           Team
         </a>
       </li>
       <li>
         <a className="anchor" onClick={props.handleAnchorClick} href="#patients">
           Patients
         </a>
       </li>
     </ul>
     <div className={`hamburger ${props.classAdd}`} onClick={props.onHandleClick}>
       <span className="bar"></span>
       <span className="bar"></span>
       <span className="bar"></span>
     </div>
   </nav>
 </header>

}