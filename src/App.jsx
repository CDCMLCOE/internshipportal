import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Help from './pages/Help';
import LegalPrivacy from './pages/LegalPrivacy';
import LegalTerms from './pages/LegalTerms';

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/help" element={<Help />} />
        <Route path="/privacy" element={<LegalPrivacy />} />
        <Route path="/terms" element={<LegalTerms />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-mesh-pattern text-mistral-black font-sans selection:bg-brand-yellow selection:text-mistral-black overflow-x-hidden flex flex-col">
        <Navbar />
        
        {/* Main Content Area */}
        <div className="flex-grow">
          <AnimatedRoutes />
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
