import React from 'react';
import './About.css';
import teamwork from '../../../assets/images/annie-spratt-QckxruozjRg-unsplash.jpg';
export default function AboutPage() {
  return (
    <>
      <main className="about-page-main">
        <h1>About ServIt</h1>
        <div className="description">
          <div className="text">
            <h2>ServIt is a service marketplace</h2>
            <p>
              designed for both service providers and seekers. Whether you need
              a skilled handyman, a talented graphic designer, or someone to
              help with everyday tasks, ServIt is here to bridge the gap. Users
              can easily post services they offer or tasks they need assistance
              with.
            </p>
          </div>
          <img src={teamwork} alt="teamwork image" />
        </div>
      </main>
    </>
  );
}
