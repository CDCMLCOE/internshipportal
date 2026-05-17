import React from 'react';
import { motion } from 'framer-motion';

const LegalTerms = () => {
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
          Terms of Service.
        </h1>
        <p className="text-base md:text-xl text-mistral-black/60 leading-relaxed font-sans">
          By using the MES MLCOE Internship Portal, you agree to comply with and be bound by the following terms and conditions.
        </p>
      </div>

      <div className="space-y-12 text-mistral-black/80 leading-relaxed text-lg font-sans">
        <section>
          <h2 className="font-heading font-semibold text-2xl uppercase tracking-wider text-mistral-orange italic mb-4"># Acceptance of Terms</h2>
          <p>
            Your access to and use of this portal is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all students, faculty, and employers who access or use the Service.
          </p>
        </section>

        <section>
          <h2 className="font-heading font-semibold text-2xl uppercase tracking-wider text-mistral-orange italic mb-4"># User Conduct</h2>
          <p>
            You agree to provide accurate, current, and complete information during the registration and application process. You are responsible for maintaining the confidentiality of your account and password.
          </p>
        </section>

        <section>
          <h2 className="font-heading font-semibold text-2xl uppercase tracking-wider text-mistral-orange italic mb-4"># Intellectual Property</h2>
          <p>
            The Service and its original content, features, and functionality are and will remain the exclusive property of MES MLCOE. Any content you upload remains your property, but you grant us a license to use it for the purpose of the internship process.
          </p>
        </section>

        <section>
          <h2 className="font-heading font-semibold text-2xl uppercase tracking-wider text-mistral-orange italic mb-4"># Limitation of Liability</h2>
          <p>
            MES MLCOE shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your access to or use of the Service.
          </p>
        </section>

        <section>
          <h2 className="font-heading font-semibold text-2xl uppercase tracking-wider text-mistral-orange italic mb-4"># Termination</h2>
          <p>
            We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
          </p>
        </section>
      </div>

      <div className="mt-20 pt-10 border-t border-mistral-black/5 text-sm text-mistral-black/40 uppercase tracking-widest font-medium">
        Last Updated: April 24, 2026
      </div>
    </motion.div>
  );
};

export default LegalTerms;
