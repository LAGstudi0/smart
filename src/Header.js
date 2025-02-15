import React, {useState} from "react";

import Logo from './images/whiteLogo.png';


export default function Header(props) {

    //   const [menuOpen, setMenuOpen] = useState('');
    //   const [isHeaderVisible, setIsHeaderVisible] = useState(true);
    
    
    
    //   function handleMenuOpen() {
    //     if(menuOpen == '') {
    //       setMenuOpen('active');
    //     } else {
    //       setMenuOpen('')
    //     }
    
    
    
    //   }
   return <header>
                    <nav>
                        <div className="logo">
                        <a href='/smart#main-banner'><img src={Logo} alt="logo" className="logo-icon"/></a>
                        </div>
                        <ul className='nav-links'>
                            <li><a className="anchor" href="/smart#about">About</a></li>
                            <li><a className="anchor" href="/smart#press">Press</a></li>
                            <li><a className="anchor" href="/smart#contact">Team</a></li>
                            <li><a className="anchor" href="/smart#patients">Patients</a></li>
                        </ul>
                        <div className={'hamburger' + ' ' +props.classAdd} onClick={props.onHandleClick}>
                          <span className="bar"></span>
                          <span className="bar"></span>
                          <span className="bar"></span>
                        </div>
    
                    </nav>
    
                </header>
}