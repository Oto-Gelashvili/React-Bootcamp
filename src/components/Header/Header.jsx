import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShirt } from '@fortawesome/free-solid-svg-icons'; // Importing the fa-shirt icon

export default function Header() {
  return (
    <header>
      <div className="title-cont">
        <FontAwesomeIcon className="shirt" icon={faShirt} />
        <h1>FashionHub</h1>
      </div>
      <nav>
        <a href="_blank" className="home">
          Home
        </a>
        <a href="_blank" className="Shop">
          Shop
        </a>
        <a href="_blank" className="Collections">
          Collections
        </a>
      </nav>
      <div className="registration-cont">
        <a href="_blank" className="login">
          login
        </a>
        <a href="_blank" className="register">
          Register
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
