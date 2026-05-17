import React from 'react';
import { motion } from 'framer-motion';

const LegalPartnership = () => {
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
          Terms of Partnership.
        </h1>
        <p className="text-base md:text-xl text-mistral-black/60 leading-relaxed font-sans">
          This document outlines the rules of engagement between MES Mukunddas Lohia College of Engineering (the Institution) and registering companies (the Industry Partners).
        </p>
      </div>

      <div className="space-y-12 text-mistral-black/80 leading-relaxed text-lg font-sans">
        <section>
          <h2 className="font-heading font-semibold text-2xl uppercase tracking-wider text-mistral-orange italic mb-4"># Purpose of the Portal</h2>
          <p>
            The MES MLCOE Internship Portal is a digital platform designed to facilitate industry-academia collaboration. Its primary goal is to streamline the process of internship placement, industry projects, and professional mentoring for our students.
          </p>
        </section>

        <section>
          <h2 className="font-heading font-semibold text-2xl uppercase tracking-wider text-mistral-orange italic mb-4"># Scope of Partnership</h2>
          <p>
            Registration on this portal entitles Industry Partners to:
          </p>
          <ul className="list-disc ml-6 mt-4 space-y-2 text-base">
            <li>Post internship opportunities and project requirements.</li>
            <li>Review student profiles, resumes, and academic achievements.</li>
            <li>Schedule and conduct interviews and selection drives.</li>
            <li>Interact with faculty for collaborative research and curriculum feedback.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-heading font-semibold text-2xl uppercase tracking-wider text-mistral-orange italic mb-4"># Company Obligations</h2>
          <p>
            By registering, the Industry Partner agrees to:
          </p>
          <ul className="list-disc ml-6 mt-4 space-y-2 text-base">
            <li>Provide accurate and truthful company information.</li>
            <li>Maintain a professional and safe working environment for interns.</li>
            <li>Clearly define the stipend (if any), roles, and responsibilities for each internship.</li>
            <li>Ensure fair and transparent selection processes.</li>
            <li>Adhere to the institution's placement guidelines and schedules.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-heading font-semibold text-2xl uppercase tracking-wider text-mistral-orange italic mb-4"># Institution Obligations</h2>
          <p>
            The Institution commits to:
          </p>
          <ul className="list-disc ml-6 mt-4 space-y-2 text-base">
            <li>Verifying student academic records and eligibility.</li>
            <li>Facilitating seamless communication between companies and candidates.</li>
            <li>Providing necessary infrastructure for campus placement drives (if applicable).</li>
            <li>Ensuring students are briefed on professional ethics and company expectations.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-heading font-semibold text-2xl uppercase tracking-wider text-mistral-orange italic mb-4"># Data Privacy & Confidentiality</h2>
          <p>
            Industry Partners must agree not to sell, misuse, or share student data (resumes, contact info) with third parties. Both parties agree to maintain confidentiality regarding any proprietary technology, processes, or sensitive information shared during the internship period.
          </p>
        </section>

        <section>
          <h2 className="font-heading font-semibold text-2xl uppercase tracking-wider text-mistral-orange italic mb-4"># Intellectual Property (IP)</h2>
          <p>
            Unless otherwise agreed upon in writing for specific collaborative research, the Intellectual Property created by students during their internship typically belongs to the Industry Partner, provided it is developed using the Partner's resources and guidance.
          </p>
        </section>

        <section>
          <h2 className="font-heading font-semibold text-2xl uppercase tracking-wider text-mistral-orange italic mb-4"># Termination</h2>
          <p>
            Either party may terminate this partnership with a 30-day written notice. In the event of termination, both parties agree to honor and complete any ongoing student internships under the previously agreed terms.
          </p>
        </section>

        <section>
          <h2 className="font-heading font-semibold text-2xl uppercase tracking-wider text-mistral-orange italic mb-4"># Contact Information</h2>
          <p>
            For legal notices, queries, or clarification regarding these terms, please contact our Placement Cell at:
            <br />
            <span className="text-mistral-orange font-medium">internships@mlcoe.pune</span>
          </p>
        </section>
      </div>

      <div className="mt-20 pt-10 border-t border-mistral-black/5 text-sm text-mistral-black/40 uppercase tracking-widest font-medium">
        Last Updated: May 04, 2026
      </div>
    </motion.div>
  );
};

export default LegalPartnership;
