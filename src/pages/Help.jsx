import React from 'react';
import { motion } from 'framer-motion';

const FAQ_ITEMS = [
  {
    q: "How do I apply for an internship?",
    a: "Login to your student account, browse the 'Current Openings' section, and click 'Apply' on roles that match your profile. Ensure your resume is updated in your profile settings."
  },
  {
    q: "What are the eligibility criteria?",
    a: "Eligibility varies by company. Generally, students in their 3rd and 4th year with a minimum CGPA of 6.5 are eligible to apply for most technical internships."
  },
  {
    q: "Can I apply for multiple internships?",
    a: "Yes, you can apply for multiple roles. however, once you accept an offer, you will be restricted from applying to other roles to maintain fair opportunities for all students."
  },
  {
    q: "How do I track my application status?",
    a: "Navigate to your 'Dashboard' and check the 'Applications' tab. Statuses include: Applied, Shortlisted, Interview Scheduled, and Selected/Not Selected."
  }
];

const Help = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6 }}
      className="pt-28 sm:pt-36 md:pt-40 pb-16 md:pb-20 px-4 md:px-8 max-w-4xl mx-auto"
    >
      <div className="mb-20">
        <h1 className="font-heading font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight text-mistral-black mb-4 md:mb-6">
          How can we help?
        </h1>
        <p className="text-base md:text-xl text-mistral-black/60 leading-relaxed font-sans">
          Everything you need to know about the MES MLCOE Internship Portal.
        </p>
      </div>

      <div className="space-y-12">
        <section>
          <h2 className="font-heading font-semibold text-2xl uppercase tracking-wider text-mistral-orange mb-8 italic"># Frequently Asked Questions</h2>
          <div className="grid gap-8">
            {FAQ_ITEMS.map((item, idx) => (
              <div key={idx} className="border-b border-mistral-black/10 pb-8 group">
                <h3 className="text-lg font-bold text-mistral-black mb-3 group-hover:text-mistral-orange transition-colors">
                  {item.q}
                </h3>
                <p className="text-mistral-black/60 leading-relaxed">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-brand-yellow/20 p-6 md:p-12 border border-brand-yellow/50 rounded-xl">
          <h2 className="font-heading font-semibold text-2xl uppercase tracking-wider text-mistral-black mb-6">Need more assistance?</h2>
          <p className="text-mistral-black/70 mb-8">
            Our Training & Placement Office is here to support you. You can reach out to us via email or visit the office during working hours.
          </p>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <span className="block text-[10px] uppercase tracking-widest font-bold text-mistral-black/40 mb-2">Email Support</span>
              <a href="mailto:support.internships@mlcoe.pune" className="text-lg font-semibold text-mistral-black hover:text-mistral-orange transition-colors underline decoration-mistral-orange/30">support.internships@mlcoe.pune</a>
            </div>
            <div className="flex-1">
              <span className="block text-[10px] uppercase tracking-widest font-bold text-mistral-black/40 mb-2">Office Location</span>
              <p className="text-lg font-semibold text-mistral-black">Room 102, Main Building, Karve Road Campus.</p>
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default Help;
