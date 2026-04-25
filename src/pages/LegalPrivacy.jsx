import React from 'react';
import { motion } from 'framer-motion';

const LegalPrivacy = () => {
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
          Privacy Policy.
        </h1>
        <p className="text-base md:text-xl text-mistral-black/60 leading-relaxed font-sans">
          Your privacy is important to us. This policy outlines how we handle and protect your personal information within the MES MLCOE Internship Portal.
        </p>
      </div>

      <div className="space-y-12 text-mistral-black/80 leading-relaxed text-lg font-sans">
        <section>
          <h2 className="font-heading font-semibold text-2xl uppercase tracking-wider text-mistral-orange italic mb-4"># Information Collection</h2>
          <p>
            We collect information that you provide directly to us when you create an account, apply for internships, or communicate with us. This may include your name, email address, student ID, academic records, and resume details.
          </p>
        </section>

        <section>
          <h2 className="font-heading font-semibold text-2xl uppercase tracking-wider text-mistral-orange italic mb-4"># Use of Information</h2>
          <p>
            The information we collect is used to facilitate the internship application process, connect students with potential employers, and improve our services. We may also use your contact information to send you updates about new opportunities.
          </p>
        </section>

        <section>
          <h2 className="font-heading font-semibold text-2xl uppercase tracking-wider text-mistral-orange italic mb-4"># Data Security</h2>
          <p>
            We implement a variety of security measures to maintain the safety of your personal information. Your data is stored on secure servers and access is restricted to authorized personnel only.
          </p>
        </section>

        <section>
          <h2 className="font-heading font-semibold text-2xl uppercase tracking-wider text-mistral-orange italic mb-4"># Third-Party Sharing</h2>
          <p>
            We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties except to provide the services you requested (e.g., sharing your resume with a prospective employer).
          </p>
        </section>

        <section>
          <h2 className="font-heading font-semibold text-2xl uppercase tracking-wider text-mistral-orange italic mb-4"># Contact Us</h2>
          <p>
            If you have any questions regarding this privacy policy, you may contact us at <span className="text-mistral-orange font-medium">privacy@mlcoe.pune</span>.
          </p>
        </section>
      </div>

      <div className="mt-20 pt-10 border-t border-mistral-black/5 text-sm text-mistral-black/40 uppercase tracking-widest font-medium">
        Last Updated: April 24, 2026
      </div>
    </motion.div>
  );
};

export default LegalPrivacy;
