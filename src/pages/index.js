import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { BrowserRouter as Router } from 'react-router-dom';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }


  return (
    <Router>
      <Sidebar />
      <Navbar />
    </Router>
  );
};

export default Home