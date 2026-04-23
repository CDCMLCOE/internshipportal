import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import logoUrl from './assets/logo.png';

const COMPANIES = [
  "Google", "Microsoft", "Amazon", "Infosys", "TCS", "Wipro",
  "Cognizant", "Tech Mahindra", "Accenture", "IBM", "Capgemini", "L&T Infotech"
];

const TypewriterText = ({ text, delay = 0 }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setIndex((prev) => {
          if (prev >= text.length) {
            clearInterval(interval);
            return prev;
          }
          return prev + 1;
        });
      }, 50);
      return () => clearInterval(interval);
    }, delay * 1000);
    return () => clearTimeout(timer);
  }, [text, delay]);

  return <span>{text.substring(0, index)}</span>;
};

function App() {
  return (
    <div className="min-h-screen bg-brand-ivory text-mistral-black font-sans selection:bg-brand-yellow selection:text-mistral-black overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-6 flex justify-between items-center bg-brand-ivory/80 backdrop-blur-md border-b border-mistral-black/10">
        <div className="flex items-center gap-12">
          {/* Home Link */}
          <a href="#" className="flex-shrink-0 flex items-center hover:opacity-80 transition-opacity">
            <span className="font-bold text-xl tracking-tighter uppercase hover:text-mistral-orange transition-colors">H o m e</span>
          </a>

          <div className="hidden md:flex items-center gap-8 font-normal text-[16px]">
            <a href="#" className="hover:text-mistral-orange transition-colors duration-200 uppercase tracking-wide">About Us</a>
            <a href="#" className="hover:text-mistral-orange transition-colors duration-200 uppercase tracking-wide">Admissions</a>
            <a href="#" className="hover:text-mistral-orange transition-colors duration-200 uppercase tracking-wide">Help</a>
          </div>
        </div>

        <div>
          <a href="#" className="bg-mistral-black text-white px-6 py-3 uppercase tracking-wide font-normal text-sm hover:bg-mistral-orange transition-colors duration-300">
            Login
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="pt-40 pb-20 px-4 md:px-8 max-w-7xl mx-auto flex flex-col min-h-[80vh] justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center gap-4 mb-16"
        >
          {/* Main Title */}
          <div className="flex flex-col items-center">
            {/* Logo instead of MES text */}
            <div className="flex justify-center mb-6">
              <img src={logoUrl} alt="MES Logo" className="h-32 md:h-48 w-auto object-contain" />
            </div>

            <h1 className="font-heading font-semibold text-[48px] md:text-[56px] leading-[1.1] tracking-tight max-w-[1000px] min-h-[100px] md:min-h-[120px] flex items-center justify-center text-mistral-black">
              <span className="block">
                <TypewriterText text="Mukunddas Lohia College of Engineering, Pune." delay={0.3} />
              </span>
            </h1>
          </div>

          {/* Subtitle - Fade in with reduced height/spacing */}
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2, duration: 1.5 }}
            className="mt-6 text-[18px] md:text-[20px] font-sans font-medium max-w-4xl mx-auto text-mistral-black/80 leading-relaxed"
          >
            Approved by AICTE, New Delhi, Recognised by Government of Maharashtra, DTE Mumbai and Affiliated to Dr. Babasaheb Ambedkar Technological University (DBATU), Lonere.
          </motion.h2>

          {/* Internship Portal as isolated glowing text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 1.5 }}
            className="mt-6"
          >
            <h3 className="font-portal font-bold text-[36px] md:text-[42px] tracking-tight text-mistral-orange drop-shadow-[0_4px_12px_rgba(250,82,15,0.3)] italic">
              # Internship Portal
            </h3>
          </motion.div>
        </motion.div>
      </main>

      {/* Infinite Company Carousel */}
      <div className="py-16 bg-white overflow-hidden relative border-t border-brand-cream/50 shadow-[0_-10px_30px_rgba(250,82,15,0.05)]">
        <div className="text-center mb-8 uppercase tracking-widest text-mistral-black/40 text-sm font-semibold">
          Top companies hiring our students
        </div>

        {/* Gradients for fade effect on edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>

        <div className="flex w-[200%] gap-8">
          <div className="flex animate-scroll whitespace-nowrap min-w-full justify-around items-center gap-16">
            {COMPANIES.map((company, i) => (
              <div key={`c1-${i}`} className="text-3xl font-bold tracking-tighter text-mistral-black/20 hover:text-mistral-orange transition-colors duration-300 font-sans uppercase">
                {company}
              </div>
            ))}
          </div>
          <div className="flex animate-scroll whitespace-nowrap min-w-full justify-around items-center gap-16">
            {COMPANIES.map((company, i) => (
              <div key={`c2-${i}`} className="text-3xl font-bold tracking-tighter text-mistral-black/20 hover:text-mistral-orange transition-colors duration-300 font-sans uppercase">
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
