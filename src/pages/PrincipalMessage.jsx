import React from 'react';
import { motion } from 'framer-motion';
import logoUrl from '../assets/logo.png';
import principalImg from '../assets/principal.jpg';

const PrincipalMessage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6 }}
      className="pt-28 sm:pt-36 md:pt-32 pb-12 md:pb-16 px-4 md:px-8 max-w-7xl mx-auto"
    >
      <div className="text-center mb-12">
        <h1 className="font-heading font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight text-mistral-black mb-4">
          Principal's Message
        </h1>
        <p className="text-base md:text-xl text-mistral-black/60 leading-relaxed max-w-3xl mx-auto font-sans">
          A vision for excellence and innovation in engineering education.
        </p>
      </div>

      <div className="bg-brand-yellow/20 rounded-3xl p-8 shadow-xl border border-brand-yellow/50 relative overflow-hidden mb-16">
        {/* Decorative quotes */}
        <div className="absolute top-8 left-8 text-mistral-orange/20 text-8xl font-serif">"</div>
        
        <div className="relative z-10 flex flex-col md:flex-row gap-8 lg:gap-16">
          {/* Left Column: Image & Details */}
          <div className="w-full md:w-1/3 lg:w-1/4 flex flex-col items-center text-center">
            <div className="w-44 h-44 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-2xl overflow-hidden mb-6 border-4 border-mistral-orange/20 shadow-lg bg-mistral-black/5 flex items-center justify-center text-mistral-black/30">
              <img 
                src={principalImg} 
                alt="Prof. Dr. Makrand Jadhav" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = '<span class="text-xs uppercase tracking-widest px-4">Please upload principal.jpg to src/assets</span>';
                }}
              />
            </div>
            <h2 className="font-heading font-semibold text-2xl text-mistral-black">Prof. Dr. Makrand Jadhav</h2>
            <div className="text-mistral-black/60 font-medium mt-1 uppercase tracking-wider text-sm">Incharge Principal</div>
            <div className="text-mistral-black/50 text-sm mt-3 px-4 leading-relaxed">
              Ph.D., Post-Doctoral Fellow, Member IEEE
            </div>
            
            <div className="mt-8 pt-8 border-t border-mistral-black/10 w-full">
              <div className="text-xs uppercase tracking-widest text-mistral-black/40 font-bold mb-2">Contact Details</div>
              <a href="mailto:mmj.mlcoe@mespune.in" className="text-mistral-orange hover:text-mistral-orange/80 transition-colors font-medium break-all">
                mmj.mlcoe@mespune.in
              </a>
            </div>
          </div>

          {/* Right Column: Message Content */}
          <div className="w-full md:w-2/3 lg:w-3/4 space-y-4 lg:space-y-6">
            <p className="text-mistral-black/80 leading-relaxed text-lg">
              Pune has long been recognized as a prominent center of education. The city proudly hosts numerous institutions that provide quality education, preparing the younger generation with the skills required to support the nation’s diverse industries. The current demands of the industry are challenging, requiring engineers to have a strong technical foundation along with IT and soft skills. At MES Mukunddas College of Engineering, Pune, we are committed to shaping young students into competent engineers while also equipping them with essential IT knowledge and soft skills. This holistic approach ensures they are well-prepared to meet the evolving challenges of the industry. Our aim is to nurture competent and resourceful engineers. Our most valuable asset is our team of highly qualified and committed faculty members. The Batch Guardian mechanism ensures personalized student counselling and keeps parents or guardians informed about their ward’s academic progress.
            </p>
            <p className="text-mistral-black/80 leading-relaxed text-lg">
              Along with academics, we are committed to promoting a wide range of student activities, including technical, cultural, and sports events, preparation for competitive examinations, and value-based education. Furthermore, we will focus on strengthening industry collaboration, fostering international partnerships, and advancing research and development to enhance the overall quality of the teaching-learning process. This vision will be supported by high-performance team, State-of-the-art laboratories, use of advanced digital learning tools, and a dynamic academic framework under MES that ensures excellence in both theory and practical application.
            </p>
            <p className="text-mistral-black/80 leading-relaxed text-lg font-medium italic border-l-4 border-mistral-orange pl-6 py-2 my-8 bg-mistral-orange/5 rounded-r-lg">
              By promoting curiosity-driven education with a clear purpose and fostering strong relationships with stakeholders, the institute aims to establish itself in the coming years as the preferred destination for the holistic development of students.
            </p>

            <div className="pt-8 mt-8 border-t border-mistral-black/10 space-y-4">
              <h3 className="font-heading font-semibold text-xl text-mistral-black">About the Principal</h3>
              <p className="text-mistral-black/70 leading-relaxed">
                Dr Makrand M. Jadhav, holds Bachelors and Masters of Engineering in Electronics & Telecommunications from Government College of Engineering, University of Pune and also Doctorate from Savitribai Phule Pune University. He both industry and academia experience.
              </p>
              <p className="text-mistral-black/70 leading-relaxed">
                He has worked with renowned institutes in Pune as Professor and Head of Electronics & Telecommunication Engineering Department. His research interest includes Wireless Networks, Data Science, IoT, Industry 4.0 and Computer Networks.
              </p>
              <p className="text-mistral-black/70 leading-relaxed">
                He has also completed his Post-Doctoral Research Fellowship from Lincoln University College. He has published more than 50 papers in international journals and conferences of repute and is working on many research projects related to more social and industrial problems in association with professional bodies. & IP Lab. He chairs Communication Society for IEEE Pune Chapter. He is also an Executive Committee Member of the IEEE Pune Chapter.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-24 flex flex-col items-center">
        <img src={logoUrl} alt="MES Logo" className="h-24 mb-8 object-contain" />
        <p className="text-center text-sm text-mistral-black/40 uppercase tracking-widest font-medium">
          Guiding the Next Generation of Engineers
        </p>
      </div>
    </motion.div>
  );
};

export default PrincipalMessage;
