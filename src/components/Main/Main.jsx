import React from 'react';
import './Main.css';
import HomePage from './HomePage/HomePage';
import { Routes, Route } from 'react-router-dom';
import TasksPage from './TasksPage/Tasks';
import AboutPage from './AboutPage/About';
import ContactPage from './ContactPage/Contact';
import ServicesPage from './ServicesPage/Services';
import AssignmentPage from './AssignmentPage/Assignment';
import NotFound from './NotFoundPage/NotFound';

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/tasks" element={<TasksPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/assignment-3" element={<AssignmentPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
};

export default Main;
