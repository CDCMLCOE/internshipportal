import React from 'react';
import { motion } from 'framer-motion';

const StudentGuidelines = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6 }}
      className="pt-28 sm:pt-36 md:pt-40 pb-16 md:pb-20 px-4 md:px-8 max-w-4xl mx-auto"
    >
      <div className="mb-16">
        <h1 className="font-heading font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight text-mistral-black mb-4 md:mb-6">
          Student Guidelines.
        </h1>
        <p className="text-base md:text-xl text-mistral-black/60 leading-relaxed font-sans">
          Welcome to the MES MLCOE Internship Portal. Please review the following guidelines to ensure a successful internship experience.
        </p>
      </div>

      <div className="space-y-12 text-mistral-black/80 leading-relaxed text-lg font-sans">
        <section>
          <h2 className="font-heading font-semibold text-2xl uppercase tracking-wider text-mistral-orange italic mb-4"># Profile Completion</h2>
          <p>
            Ensure your profile is complete and up-to-date. This includes your contact information, academic records, and a professional resume. A complete profile increases your chances of being selected by prospective employers.
          </p>
        </section>

        <section>
          <h2 className="font-heading font-semibold text-2xl uppercase tracking-wider text-mistral-orange italic mb-4"># Application Process</h2>
          <p>
            Browse available internships regularly and apply only to those that align with your skills and career goals. Tailor your resume and cover letter for each application to stand out.
          </p>
        </section>

        <section>
          <h2 className="font-heading font-semibold text-2xl uppercase tracking-wider text-mistral-orange italic mb-4"># Professional Conduct</h2>
          <p>
            Maintain professionalism in all communications with employers and the college placement cell. Respond to emails promptly and attend interviews on time and appropriately dressed.
          </p>
        </section>

        <section>
          <h2 className="font-heading font-semibold text-2xl uppercase tracking-wider text-mistral-orange italic mb-4"># Post-Selection</h2>
          <p>
            Once selected, adhere to the company's rules and regulations. Submit regular progress reports as required by the college and ensure you complete the internship duration successfully.
          </p>
        </section>
      </div>
    </motion.div>
  );
};

export default StudentGuidelines;
