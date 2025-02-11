import React from "react";

export default function PhoneMenuOpen(props) {
  // Combine closing the menu and scrolling to the anchor.
  const handleClick = (e) => {
    props.onHandleClick();
    props.handleAnchorClick(e);
  };

  return (
    <div className={`nav-menu-phone ${props.classAdd}`}>
      <ul className="nav-items">
        <li>
          <a className="anchor" onClick={handleClick} href="#about">
            About
          </a>
        </li>
        <li>
          <a className="anchor" onClick={handleClick} href="#press">
            Press
          </a>
        </li>
        <li>
          <a className="anchor" onClick={handleClick} href="#contact">
            Team
          </a>
        </li>
        <li>
          <a className="anchor" onClick={handleClick} href="#patients">
            Patients
          </a>
        </li>
      </ul>
    </div>
  );
}
