import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <div className="title-cont">
        <div>
          <svg
            width="150"
            height="100%"
            viewBox="0 0 175.14285714285714 36"
            className="looka-1j8o68f"
          >
            <defs id="SvgjsDefs16781"></defs>
            <g
              id="SvgjsG16782"
              featurekey="nameLeftFeature-0"
              transform="matrix(2.4861879239010025,0,0,2.4861879239010025,-4.972375847802005,-13.07734904876253)"
              fill="#000000"
            >
              <path d="M4.5 15.4 c0 1.04 0.74 1.86 1.76 1.86 c0.98 0 1.74 -0.82 1.74 -1.86 l0 -0.24 c0 -1.12 -0.76 -1.9 -1.74 -1.9 c-2.32 0 -4.02 -1.7 -4.02 -3.9 l0 -0.26 c0 -2.2 1.7 -3.84 4.02 -3.84 c2.28 0 3.98 1.64 3.98 3.84 l-0.98 0 c0 -1.6 -1.32 -2.86 -3 -2.86 c-1.72 0 -3 1.26 -3 2.86 l0 0.26 c0 1.64 1.28 2.88 3 2.88 c1.54 0 2.74 1.26 2.74 2.92 l0 0.24 c0 1.6 -1.2 2.84 -2.74 2.84 c-1.56 0 -2.76 -1.24 -2.76 -2.84 l1 0 z M6.26 7.74 c-0.36 0 -0.72 0.12 -0.9 0.26 l-0.76 -0.7 c0.4 -0.3 1.1 -0.54 1.66 -0.54 c1.38 0 2.48 0.98 2.48 2.34 l-0.98 0 c0 -0.76 -0.66 -1.36 -1.5 -1.36 z M4.76 9.36 c0 0.78 0.64 1.38 1.5 1.38 c2.4 0 4.24 1.92 4.24 4.42 l0 0.24 c0 1.16 -0.5 2.2 -1.16 3 l-0.74 -0.7 c0.5 -0.66 0.9 -1.64 0.9 -2.3 l0 -0.24 c0 -1.96 -1.4 -3.4 -3.24 -3.4 c-1.42 0 -2.52 -1.06 -2.52 -2.4 l0 -0.26 c0 -0.46 0.2 -1.1 0.5 -1.44 l0.76 0.74 c-0.16 0.24 -0.24 0.54 -0.24 0.7 l0 0.26 z M3 15.4 c0 1.9 1.4 3.36 3.26 3.36 c0.68 0 1.54 -0.3 1.98 -0.7 l0.76 0.74 c-0.64 0.56 -1.8 0.94 -2.74 0.94 c-2.4 0 -4.26 -1.84 -4.26 -4.34 l1 0 z M21.5 11.5 l0 1 l-5.5 0 l0 4.5 l6.5 0 l0 1 l-7.5 0 l0 -12.5 l7.5 0 l0 1 l-6.5 0 l0 5 l5.5 0 z M22.5 8 l-4.6 0 l-1.06 -1 l5.66 0 l0 1 z M16.5 7.359999999999999 l1 0.98 l0 2.66 l-1 0 l0 -3.64 z M21.5 14 l-3.6 0 l-1.06 -1 l4.66 0 l0 1 z M16.5 13.36 l1 0.98 l0 2.16 l-1 0 l0 -3.14 z M22.5 19.5 l-7.5 0 l0 -1 l7.5 0 l0 1 z M28 19.5 l-1 0 l0 -14 l4.5 0 c2.7 0 4.5 1.8 4.5 4.5 c0 1.2 -0.36 2.24 -1 3.06 l-0.76 -0.76 c0.46 -0.6 0.76 -1.4 0.76 -2.3 c0 -2.1 -1.4 -3.5 -3.5 -3.5 l-3.5 0 l0 5.5 l3.5 0 c1.2 0 2 -0.8 2 -2 s-0.8 -2 -2 -2 l-1.64 0 l-1.06 -1 l2.7 0 c1.8 0 3 1.2 3 3 c0 1.6 -0.96 2.76 -2.46 2.96 l2.2 6.54 l-1.08 0 l-2.16 -6.5 l-3 0 l0 6.5 z M28.5 7.4 l1 1 l0 3.1 l-1 0 l0 -4.1 z M32.7 13.36 c0.46 -0.16 0.84 -0.36 1.2 -0.66 l0.7 0.7 c-0.2 0.2 -0.4 0.34 -0.66 0.5 l1.86 5.6 l-1.06 0 z M29.9 14.5 l-1.06 -1 l1.8 0 l0.36 1 l-1.1 0 z M28.5 19.5 l0 -5.64 l1 1 l0 4.64 l-1 0 z"></path>
            </g>
            <g
              id="SvgjsG16783"
              featurekey="inlineSymbolFeature-0"
              transform="matrix(1.120770293955084,0,0,1.120770293955084,53.25648239616183,-38.082914720271305)"
              fill="#000000"
            >
              <g xmlns="http://www.w3.org/2000/svg">
                <path d="M47.9,66.1L47.9,66.1c-1.4-0.1-2.4-1.7-3.8-4c-1.9-3.1-4.8-7.9-10.5-11.9c-0.7-0.5-1-1.3-0.7-2.1c0.3-0.9,1.2-1.5,2.2-1.3   c6.9,1.6,10,4.8,11.6,6.5c0.4,0.4,0.9,0.9,1.1,1c0.2-0.1,0.8-1.1,1.4-2.1c2-3.3,6.1-10.2,15-17.8c1-0.8,2.4-0.4,2.9,0.7   c0.3,0.7,0.2,1.4-0.3,2c-8.5,9.4-12.9,18.7-15.6,24.2C49.4,64.9,48.8,66.1,47.9,66.1z M34.6,47.8c-0.4,0-0.7,0.3-0.8,0.6   c0,0.1-0.2,0.6,0.3,1c5.9,4.2,8.9,9,10.8,12.2c1.2,2,2.1,3.4,2.9,3.5c0.4-0.3,1.3-2.2,2.3-4.2C52.7,55.7,57.3,46,66,36.4   c0.3-0.4,0.2-0.7,0.2-0.9c-0.2-0.5-0.9-0.7-1.4-0.3C56,42.6,51.9,49.4,50,52.7c-0.9,1.5-1.4,2.3-1.8,2.5c-0.1,0.1-0.3,0.1-0.4,0.1   c-0.6,0-1-0.5-1.8-1.3c-1.6-1.6-4.5-4.7-11.1-6.2C34.8,47.8,34.7,47.8,34.6,47.8z"></path>
              </g>
            </g>
            <g
              id="SvgjsG16784"
              featurekey="nameRightFeature-0"
              transform="matrix(2.5714285714285716,0,0,2.5714285714285716,127.57142857142857,-14.142857142857144)"
              fill="#000000"
            >
              <path d="M2.5 5.5 l1 0 l0 14 l-1 0 l0 -14 z M4 5.5 l1 0 l0 14 l-1 0 l0 -14 z M18.5 6.5 l-5 0 l0 13 l-1 0 l0 -13 l-3.5 0 l0 -1 l9.5 0 l0 1 z M12 8 l-3 0 l0 -1 l3 0 l0 1 z M18.5 8 l-3.16 0 l-0.98 -1 l4.14 0 l0 1 z M15 19.5 l-1 0 l0 -12.14 l1 1.04 l0 11.1 z"></path>
            </g>
          </svg>
        </div>
      </div>
      <nav>
        <NavLink to="/" activeclassname="active" className="nav-link">
          Home
        </NavLink>
        <NavLink to="/about" activeclassname="active" className="nav-link">
          About
        </NavLink>
        <NavLink to="/contact" activeclassname="active" className="nav-link">
          Contact
        </NavLink>
        <NavLink to="/tasks" activeclassname="active" className="nav-link">
          Tasks
        </NavLink>
        <NavLink to="/services" activeclassname="active" className="nav-link">
          Services
        </NavLink>
        <NavLink
          to="/assignment-3"
          activeclassname="active"
          className="nav-link"
        >
          Assignment-3
        </NavLink>
      </nav>
      <div className="registration-cont">
        <a href="_blank" className="Signup">
          Sign up
        </a>
        <a href="_blank" className="login">
          Log in
        </a>
      </div>
      <div className="hamburger">
        <div className="stick"></div>
        <div className="stick"></div>
        <div className="stick"></div>
      </div>
    </header>
  );
}
