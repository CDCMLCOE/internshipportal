import React, { useState } from 'react';
import { motion } from 'framer-motion';
import InternshipDetailModal from '../../components/InternshipDetailModal';

const INTERNSHIPS = [
  {
    id: 1,
    title: "Software Engineering Intern",
    company: "TECHCORP INDIA",
    location: "Pune, Bangalore",
    stipend: "₹ 15,000 - 25,000 /month",
    type: "Internship",
    duration: "6 Months",
    deadline: "May 30, 2026",
    aboutCompany: "TechCorp India is a leading software development company specializing in enterprise-grade solutions, cloud infrastructure, and AI-powered platforms. Founded in 2012, they have delivered over 200+ products to clients across 15 countries with a team of 500+ engineers.",
    roleDescription: "As a Software Engineering Intern, you will work closely with senior engineers to design, develop, and test software features for production systems. You'll participate in agile sprints, code reviews, and have the opportunity to contribute to open-source internal tools. This role provides hands-on experience across the full software development lifecycle.",
    requirements: [
      "Currently pursuing B.E./B.Tech in CSE, IT, or related field",
      "Proficiency in at least one programming language (Java, Python, or JavaScript)",
      "Understanding of data structures, algorithms, and OOP concepts",
      "Familiarity with Git version control",
      "Strong problem-solving and communication skills"
    ],
    perks: [
      "Certificate of completion",
      "Letter of recommendation",
      "Flexible working hours",
      "Pre-placement offer opportunity",
      "Mentorship program",
      "Free lunch & snacks"
    ],
    skills: ["Java", "Python", "React", "Node.js", "Git", "SQL"]
  },
  {
    id: 2,
    title: "Data Science Intern",
    company: "DATAVISION ANALYTICS",
    location: "Work from home",
    stipend: "₹ 20,000 /month",
    type: "Internship",
    duration: "3 Months",
    deadline: "June 15, 2026",
    aboutCompany: "DataVision Analytics is a fast-growing data analytics firm that helps Fortune 500 companies unlock insights from their data. They specialize in machine learning, predictive analytics, and business intelligence dashboards. Their clients include top players in finance, healthcare, and e-commerce.",
    roleDescription: "Join the Data Science team to work on real-world machine learning projects including recommendation engines, natural language processing pipelines, and predictive models. You will clean, analyze, and visualize large datasets while collaborating with domain experts to deliver actionable insights.",
    requirements: [
      "Pursuing B.E./B.Tech in CSE, IT, AIML, or related discipline",
      "Strong foundation in statistics and linear algebra",
      "Experience with Python (NumPy, Pandas, Scikit-learn)",
      "Basic understanding of machine learning algorithms",
      "Familiarity with data visualization tools (Matplotlib, Seaborn, or Tableau)"
    ],
    perks: [
      "Work from home",
      "Certificate of completion",
      "Performance-based bonus",
      "Letter of recommendation",
      "Exposure to real datasets",
      "Publication opportunity"
    ],
    skills: ["Python", "TensorFlow", "Pandas", "SQL", "Tableau", "NLP"]
  },
  {
    id: 3,
    title: "Electronics Design Intern",
    company: "ELECTROSYS SOLUTIONS",
    location: "Pune",
    stipend: "₹ 12,000 - 18,000 /month",
    type: "Internship",
    duration: "4 Months",
    deadline: "May 10, 2026",
    aboutCompany: "ElectroSys Solutions is a premier electronics design house focused on IoT devices, embedded systems, and PCB prototyping. They partner with major automotive and consumer electronics companies to develop next-generation hardware products. Their R&D lab in Pune houses state-of-the-art testing equipment.",
    roleDescription: "Work alongside hardware engineers on the design, simulation, and prototyping of embedded systems and IoT devices. You'll gain experience with PCB design, microcontroller programming, and hardware debugging. The role includes hands-on lab work with oscilloscopes, logic analyzers, and soldering stations.",
    requirements: [
      "Currently pursuing B.E./B.Tech in ENTC, Electrical, or related field",
      "Knowledge of analog and digital circuit design",
      "Familiarity with microcontrollers (Arduino, ESP32, or STM32)",
      "Basic understanding of PCB design tools (KiCad or Eagle)",
      "Ability to read and interpret datasheets and schematics"
    ],
    perks: [
      "Hands-on lab access",
      "Certificate of completion",
      "Letter of recommendation",
      "Travel allowance",
      "Project ownership",
      "PPO for top performers"
    ],
    skills: ["Embedded C", "Arduino", "PCB Design", "MATLAB", "IoT", "Verilog"]
  }
];

const FILTERS = ["AIML", "CSE", "IT", "Web Dev", "ENTC", "Engineering", "Data Science", "Design"];

const Dashboard = () => {
  const [activeFilter, setActiveFilter] = useState("CSE");
  const [selectedInternship, setSelectedInternship] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewDetails = (internship) => {
    setSelectedInternship(internship);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    // Delay clearing data so exit animation can play
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
        <div className="pt-2 pb-2">
          <h2 className="font-heading font-extrabold text-4xl md:text-5xl uppercase tracking-tight mb-4 text-mistral-black flex items-center gap-4">
            Welcome Back, <span className="text-mistral-orange">Student</span>
          </h2>
          <p className="text-mistral-black/70 font-sans text-lg md:text-xl font-medium">What are you looking for today?</p>
        </div>

        <div className="space-y-6">
          <h3 className="font-heading font-bold text-2xl text-mistral-black">Current Available Internships</h3>
          
          {/* Filters */}
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {FILTERS.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`whitespace-nowrap px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 border ${
                  activeFilter === filter
                    ? 'bg-mistral-black text-white border-mistral-black shadow-md'
                    : 'bg-white text-mistral-black/70 border-mistral-black/10 hover:border-mistral-black/30 hover:text-mistral-black'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Internship Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
            {INTERNSHIPS.map((job) => (
              <div key={job.id} className="bg-white rounded-2xl p-6 border border-mistral-black/10 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col group">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="font-heading font-bold text-lg text-mistral-black mb-1 leading-tight group-hover:text-mistral-orange transition-colors">{job.title}</h4>
                    <p className="text-xs text-mistral-black/40 font-bold uppercase tracking-widest">{job.company}</p>
                  </div>
                  {/* Company Logo Placeholder */}
                  <div className="w-10 h-10 bg-mistral-black/5 rounded-lg flex items-center justify-center text-mistral-black/20 font-bold text-xl shrink-0">
                    {job.company.charAt(0)}
                  </div>
                </div>

                <div className="flex-grow flex flex-col justify-center space-y-4">
                  <div className="flex items-center gap-3 text-sm text-mistral-black/70">
                    <svg className="w-4 h-4 text-mistral-black/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-mistral-black/70">
                    <svg className="w-4 h-4 text-mistral-black/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{job.stipend}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-mistral-black/5">
                  <span className="bg-mistral-black/5 text-mistral-black px-3 py-1 text-[10px] uppercase tracking-widest font-bold rounded-md">
                    {job.type}
                  </span>
                  <button 
                    onClick={() => handleViewDetails(job)}
                    className="text-mistral-orange text-sm font-semibold flex items-center gap-1 hover:gap-2 hover:text-mistral-black transition-all"
                  >
                    View details 
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Internship Detail Modal */}
      <InternshipDetailModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        internship={selectedInternship}
      />
    </>
  );
};

export default Dashboard;
