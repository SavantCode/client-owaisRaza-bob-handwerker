import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar'; // adjust paths
import Hero from './Components/Hero';
import Features from './Components/Features';
import Footer from './Components/Footer';

// Dummy placeholders for your pages
import CreateOrder from './Pages/CreateOrder'
import CategoriesSection from './Pages/CategoriesSection';

import FindJob from './Pages/FindJob';
import ContactPage from './Pages/Contact'

import Imprint from './Pages/Imprint';
import DataProtection from './Pages/DataProtection';

const Home = () => (
  <>
    <Hero />
    <Features />
  </>
);

const App = () => {
  return (
    <div className="bg-white antialiased font-sans text-gray-900">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />/create-order
        <Route path="/create-order" element={<CreateOrder />} />
        <Route path="/find-job" element={<FindJob />} />
          <Route path="/categories" element={<CategoriesSection />} />

        <Route path="/contact" element={<ContactPage />} />
        <Route path="/imprint" element={<Imprint />} />
        <Route path="/data-protection" element={<DataProtection />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
