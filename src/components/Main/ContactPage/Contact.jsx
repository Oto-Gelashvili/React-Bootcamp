import React from 'react';
import './Contact.css';

export default function Contact() {
  return (
    <main className="contact-main">
      <div className="submit-form">
        <h3>Contact Us</h3>
        <form action="#" method="post">
          <div className="input-box">
            <input type="text" className="input" required />
            <label htmlFor="name">Name</label>
          </div>
          <div className="input-box">
            <input type="email" className="input" required />
            <label htmlFor="email">Email</label>
          </div>
          <div className="input-box">
            <textarea
              className="input"
              required
              id="message"
              cols="30"
              rows="10"
            ></textarea>
            <label htmlFor="message">Message</label>
          </div>
          <input type="submit" value="Submit" className="btn" />
        </form>
      </div>
    </main>
  );
}
