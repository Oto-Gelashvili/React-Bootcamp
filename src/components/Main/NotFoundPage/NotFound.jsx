// src/components/NotFound/NotFound.js
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <main>
      <h1>404 - Page Not Found</h1>
      <p>
        Oops! The page you are looking for does not exist, So you ended up on
        temporary 404 page.
      </p>
      <Link to="/">Go to Home</Link>
    </main>
  );
};

export default NotFound;
