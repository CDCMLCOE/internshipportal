import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import InternshipDetailModal from '../../components/InternshipDetailModal';

const INTERNSHIPS = [
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

const CATEGORIES = ["All", "Software", "Web Development", "Data Science", "Hardware", "UI/UX Design", "Marketing"];

const Dashboard = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedInternship, setSelectedInternship] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewDetails = (internship) => {
    setSelectedInternship(internship);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedInternship(null), 350);
  };

  const filteredInternships = INTERNSHIPS.filter(job => {
    const matchesFilter = activeFilter === "All" || 
                         job.title.toLowerCase().includes(activeFilter.toLowerCase()) || 
                         job.skills.some(s => s.toLowerCase().includes(activeFilter.toLowerCase()));
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.skills.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="space-y-6"
      >
        <div className="pt-2 pb-2">
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl uppercase tracking-tight mb-3 text-mistral-black leading-tight">
            Welcome Back, <span className="text-mistral-orange">Student</span>
          </h2>
          <p className="text-mistral-black/70 font-sans text-sm sm:text-base md:text-lg lg:text-xl font-medium">
            What are you looking for today?
          </p>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-2 border-b border-mistral-black/5">
          <h3 className="font-heading font-bold text-xl sm:text-2xl text-mistral-black tracking-tight whitespace-nowrap">
            Available Opportunities
          </h3>
          
          <div className="flex flex-col md:flex-row items-center gap-4 w-full lg:w-auto">
            <div className="relative w-full md:w-72 group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-4 w-4 text-mistral-black/40 group-focus-within:text-blue-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search roles or skills..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full pl-10 pr-3 py-2.5 bg-brand-ivory border border-mistral-black/10 text-xs font-bold uppercase tracking-widest focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-mistral-black/20"
              />
            </div>

            <div className="relative w-full md:w-auto">
              <button 
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="w-full md:w-auto px-6 py-2.5 bg-brand-yellow text-mistral-black text-xs font-bold uppercase tracking-widest border border-mistral-black/10 hover:bg-mistral-black hover:text-white transition-all duration-300 flex items-center justify-center gap-2 shadow-sm"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
                Filter: <span className="text-blue-600">{activeFilter}</span>
              </button>

              <AnimatePresence>
                {isFilterOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-56 bg-brand-ivory border border-mistral-black/10 shadow-xl z-50 overflow-hidden"
                  >
                    <div className="flex justify-end p-2 border-b border-mistral-black/5 bg-brand-cream/20">
                      <button 
                        onClick={() => setIsFilterOpen(false)}
                        className="p-1 hover:bg-mistral-black/5 rounded-full transition-colors text-mistral-black/40 hover:text-blue-600"
                      >
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                      </button>
                    </div>
                    <div className="py-1">
                      <div className="px-4 py-2 text-[8px] uppercase tracking-widest font-bold text-mistral-black/40 border-b border-mistral-black/5">Categories</div>
                      {CATEGORIES.map((cat) => (
                        <button
                          key={cat}
                          onClick={() => {
                            setActiveFilter(cat);
                            setIsFilterOpen(false);
                          }}
                          className={`w-full text-left px-4 py-3 text-[10px] font-bold uppercase tracking-widest transition-colors border-b border-mistral-black/5 last:border-0 ${
                            activeFilter === cat ? 'bg-mistral-black text-white' : 'text-mistral-black hover:bg-brand-yellow'
                          }`}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredInternships.map((job) => (
            <div key={job.id} className="bg-white rounded-2xl p-6 border border-mistral-black/10 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col group">
              <div className="flex justify-between items-start mb-1">
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] text-mistral-black/40 font-bold uppercase tracking-widest mb-2">{job.company}</p>
                  <h4 className="font-heading font-bold text-xl text-mistral-black leading-tight group-hover:text-mistral-orange transition-colors">{job.title}</h4>
                </div>
                <div className="w-10 h-10 bg-mistral-black/5 rounded-lg flex items-center justify-center text-mistral-black/20 font-bold text-xl shrink-0 ml-3">
                  {job.company.charAt(0)}
                </div>
              </div>

              <div className="flex-grow flex flex-col justify-center space-y-3 mt-4">
                <div className="flex items-center gap-3 text-sm text-mistral-black/70">
                  <svg className="w-4 h-4 text-mistral-black/30 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-semibold text-mistral-orange">
                  <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{job.stipend}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-mistral-black/50">
                  <svg className="w-4 h-4 text-mistral-black/30 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{job.duration}</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 mt-4 border-t border-mistral-black/5">
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
      </motion.div>

      <InternshipDetailModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        internship={selectedInternship}
      />
    </>
  );
};

export default Dashboard;
