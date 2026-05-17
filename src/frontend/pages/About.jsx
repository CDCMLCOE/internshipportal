import React from 'react';
import { motion } from 'framer-motion';
import logoUrl from '../../assets/logo.png';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6 }}
      className="pt-28 sm:pt-36 md:pt-40 pb-16 md:pb-20 px-4 md:px-8 max-w-5xl mx-auto"
    >
      <div className="text-center mb-20">
        <h1 className="font-heading font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight text-mistral-black mb-4 md:mb-6">
          Empowering Careers Since 1860.
        </h1>
        <p className="text-base md:text-xl text-mistral-black/60 leading-relaxed max-w-3xl mx-auto font-sans">
          Maharashtra Education Society's Mukunddas Lohia College of Engineering is dedicated to fostering innovation and excellence in engineering education.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
        <div className="space-y-6">
          <h2 className="font-heading font-semibold text-2xl uppercase tracking-wider text-mistral-orange italic"># Our Legacy</h2>
          <p className="text-mistral-black/70 leading-relaxed text-lg">
            Founded by the visionary revolutionary Vasudev Balwant Phadke, Maharashtra Education Society (MES) has been a cornerstone of quality education in India for over 160 years. Our institution, MLCOE Pune, carries this torch forward by bridging the gap between academic theory and industrial practice.
          </p>
        </div>
        <div className="space-y-6">
          <h2 className="font-heading font-semibold text-2xl uppercase tracking-wider text-mistral-orange italic"># The Portal</h2>
          <p className="text-mistral-black/70 leading-relaxed text-lg">
            The MES MLCOE Internship Portal is a bespoke digital ecosystem designed to connect our talented engineering students with global industry leaders. We believe that real-world exposure is the ultimate teacher, and this portal is the bridge to that experience.
          </p>
        </div>
      </div>

      {/* Stats or Highlights */}
      <div className="bg-mistral-black text-white p-6 sm:p-8 md:p-12 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center rounded-2xl shadow-xl">
        <div>
          <div className="text-3xl font-bold font-portal mb-1 text-mistral-orange">160+</div>
          <div className="text-[9px] uppercase tracking-[0.2em] text-white/40">Years of Excellence</div>
        </div>
        <div>
          <div className="text-3xl font-bold font-portal mb-1 text-mistral-orange">500+</div>
          <div className="text-[9px] uppercase tracking-[0.2em] text-white/40">Industry Partners</div>
        </div>
        <div>
          <div className="text-3xl font-bold font-portal mb-1 text-mistral-orange">95%</div>
          <div className="text-[9px] uppercase tracking-[0.2em] text-white/40">Placement Success</div>
        </div>
        <div>
          <div className="text-3xl font-bold font-portal mb-1 text-mistral-orange">10k+</div>
          <div className="text-[9px] uppercase tracking-[0.2em] text-white/40">Global Alumni</div>
        </div>
      </div>

      <div className="mt-24 flex flex-col items-center">
        <img src={logoUrl} alt="MES Logo" className="h-24 mb-8 object-contain" />
        <p className="text-center text-sm text-mistral-black/40 uppercase tracking-widest font-medium">
          Approved by AICTE • Recognised by DTE Maharashtra • Affiliated to DBATU
        </p>
      </div>
    </motion.div>
  );
};

export default About;
