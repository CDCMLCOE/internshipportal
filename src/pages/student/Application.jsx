import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import InternshipDetailModal from '../../components/InternshipDetailModal';

const Application = () => {
  const [selectedInternship, setSelectedInternship] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const applications = [
    {
      id: 1,
      title: 'Frontend Developer Intern',
      company: 'TechCorp Solutions',
      location: 'Bangalore / Remote',
      stipend: '₹ 15,000 /month',
      type: 'Full-time',
      duration: '6 Months',
      date: 'Oct 24, 2023',
      status: 'Pending Review',
      statusClass: 'bg-brand-yellow/30 text-mistral-black',
      aboutCompany: "TechCorp Solutions is a leading software development company specializing in modern web and mobile applications for global clients. We pride ourselves on innovation and quality engineering.",
      roleDescription: "We are looking for a Frontend Developer Intern who is passionate about building beautiful, responsive, and functional user interfaces using React.js. You will work closely with our design and engineering teams.",
      requirements: [
        "Proficiency in React.js and modern JavaScript (ES6+)",
        "Strong understanding of CSS and Tailwind CSS",
        "Experience with animation libraries like Framer Motion is a plus",
        "Good communication and teamwork skills"
      ],
      perks: [
        "Certificate of Completion",
        "Letter of Recommendation",
        "Flexible working hours",
        "Exposure to real-world projects"
      ],
      skills: ["React", "JavaScript", "Tailwind", "Framer Motion", "CSS"],
      deadline: "Oct 30, 2023"
    },
    {
      id: 2,
      title: 'Data Science Intern',
      company: 'InnovateX',
      location: 'Hyderabad',
      stipend: '₹ 25,000 /month',
      type: 'Part-time',
      duration: '3 Months',
      date: 'Sep 15, 2023',
      status: 'Rejected',
      statusClass: 'bg-red-100 text-red-700',
      aboutCompany: "InnovateX is at the forefront of AI and Data Science innovation, helping businesses leverage their data to make informed decisions through advanced analytics and machine learning.",
      roleDescription: "Join our data science team to help build predictive models and analyze complex datasets. You will be responsible for data cleaning, visualization, and implementing basic machine learning algorithms.",
      requirements: [
        "Strong knowledge of Python and SQL",
        "Experience with data libraries like Pandas, NumPy, and Scikit-learn",
        "Good understanding of statistical modeling",
        "Ability to present findings clearly"
      ],
      perks: [
        "Certificate of Completion",
        "Potential PPO (Pre-Placement Offer)",
        "One-on-one Mentorship",
        "Modern office environment"
      ],
      skills: ["Python", "SQL", "Pandas", "Machine Learning", "Statistics"],
      deadline: "Sep 20, 2023"
    },
  ];

  const handleViewDetails = (app) => {
    setSelectedInternship(app);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedInternship(null), 350);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="space-y-6"
      >
        {/* Page Header */}
        <div className="bg-brand-ivory border border-mistral-black/10 p-6 md:p-8 shadow-sm">
          <h2 className="font-heading font-semibold text-xl md:text-2xl uppercase tracking-tight mb-1">My Applications</h2>
          <p className="text-mistral-black/60 font-sans text-sm">Track the status of your internship applications.</p>
        </div>

        {/* ── Desktop Table (md+) ── */}
        <div className="hidden md:block bg-brand-ivory border border-mistral-black/10 shadow-sm overflow-hidden">
          <table className="w-full text-left text-sm font-sans">
            <thead className="bg-mistral-black text-white text-[10px] uppercase tracking-widest">
              <tr>
                <th className="px-6 py-4 font-normal">Company</th>
                <th className="px-6 py-4 font-normal">Role</th>
                <th className="px-6 py-4 font-normal">Date Applied</th>
                <th className="px-6 py-4 font-normal">Status</th>
                <th className="px-6 py-4 font-normal text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-mistral-black/5 text-mistral-black">
              {applications.map((app, i) => (
                <tr key={i} className="hover:bg-brand-yellow/10 transition-colors">
                  <td className="px-6 py-4 font-semibold">{app.company}</td>
                  <td className="px-6 py-4 text-mistral-black/70">{app.title}</td>
                  <td className="px-6 py-4 text-mistral-black/70">{app.date}</td>
                  <td className="px-6 py-4">
                    <span className={`${app.statusClass} px-2 py-1 text-[10px] uppercase tracking-wider font-bold rounded-sm`}>
                      {app.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button 
                      onClick={() => handleViewDetails(app)}
                      className="text-mistral-orange hover:underline text-xs font-semibold uppercase tracking-wider"
                    >
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ── Mobile Cards (< md) ── */}
        <div className="flex flex-col gap-4 md:hidden">
          {applications.map((app, i) => (
            <div key={i} className="bg-brand-ivory border border-mistral-black/10 p-5 shadow-sm space-y-3">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-heading font-bold text-base text-mistral-black leading-tight">{app.company}</p>
                  <p className="text-xs text-mistral-black/60 mt-0.5">{app.title}</p>
                </div>
                <span className={`${app.statusClass} shrink-0 px-2 py-1 text-[10px] uppercase tracking-wider font-bold rounded-sm`}>
                  {app.status}
                </span>
              </div>
              <div className="flex items-center justify-between text-xs text-mistral-black/50 border-t border-mistral-black/5 pt-3">
                <span>Applied: {app.date}</span>
                <button 
                  onClick={() => handleViewDetails(app)}
                  className="text-mistral-orange font-semibold uppercase tracking-wider hover:underline"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <InternshipDetailModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        internship={selectedInternship}
        showApplyButton={false}
        showDeadline={false}
      />
    </>
  );
};

export default Application;
