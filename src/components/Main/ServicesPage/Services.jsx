import React from 'react';
import './Services.css';
import ServicesList from './ServicesList/ServicesList';
export default function ServicesPage() {
  return (
    <main className="services-main">
      <h1 className="service-title">
        <span>ServIt Up:</span> <br></br> Where Skills Meet Opportunities!
      </h1>
      <ServicesList />
    </main>
  );
}
