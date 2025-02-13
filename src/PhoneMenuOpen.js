import React from "react";

export default function PhoneMenuOpen(props) {
  // Combine closing the menu and scrolling to the anchor.

  return (
    <div className={`nav-menu-phone ${props.classAdd}`}>
      <ul className="nav-items">
        <li>
          <a className="anchor" onClick={props.onHandleClick} href="#about">
            About
          </a>
        </li>
        <li>
          <a className="anchor" onClick={props.onHandleClick} href="#press">
            Press
          </a>
        </li>
        <li>
          <a className="anchor" onClick={props.onHandleClick} href="#contact">
            Team
          </a>
        </li>
        <li>
          <a className="anchor" onClick={props.onHandleClick} href="#patients">
            Patients
          </a>
        </li>
      </ul>
    </div>
  );
}
