import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ASSIGNMENTS = [
  {
    id: 1,
    title: "Weekly Progress Report",
    course: "Software Development",
    assignedDate: "May 01, 2026",
    submissionDate: "May 07, 2026",
    status: "Pending",
    description: "Submit your weekly progress report detailing the tasks completed, challenges faced, and goals for the next week.",
    points: 20
  },
  {
    id: 2,
    title: "Mid-term Project Review",
    course: "Web Technology",
    assignedDate: "May 10, 2026",
    submissionDate: "May 20, 2026",
    status: "In Progress",
    description: "Prepare a demonstration of your current progress on the internship project for review by your mentor.",
    points: 50
  },
  {
    id: 3,
    title: "Final Presentation",
    course: "Data Science",
    assignedDate: "May 25, 2026",
    submissionDate: "June 10, 2026",
    status: "Not Started",
    description: "Prepare and submit your final presentation slides and documentation for the end-of-internship review.",
    points: 150
  },
  {
    id: 4,
    title: "Final Internship Report",
    course: "Professional Ethics",
    assignedDate: "June 01, 2026",
    submissionDate: "June 15, 2026",
    status: "Not Started",
    description: "A comprehensive report summarizing your overall internship experience, learnings, and contributions.",
    points: 100
  },
  {
    id: 5,
    title: "Peer Code Review",
    course: "Cloud Computing",
    assignedDate: "May 15, 2026",
    submissionDate: "May 22, 2026",
    status: "Pending",
    description: "Review and provide constructive feedback on code submissions from your fellow interns.",
    points: 30
  }
];




const AssignmentPage = () => {
  const [selectedAssignment, setSelectedAssignment] = useState(null);
  const [selectedFormat, setSelectedFormat] = useState("");


  const handleViewDetails = (assignment) => {
    setSelectedAssignment(assignment);
    setSelectedFormat(""); // Reset format when opening new assignment
  };


  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6"
    >
      <div className="pt-2 pb-2">
        <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl uppercase tracking-tight mb-3 text-mistral-black leading-tight">
          My <span className="text-mistral-orange">Assignments</span>
        </h2>
        <p className="text-mistral-black/70 font-sans text-sm sm:text-base md:text-lg lg:text-xl font-medium">Keep track of your tasks and deadlines.</p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {ASSIGNMENTS.map((assignment) => (
          <div key={assignment.id} className="bg-brand-ivory p-6 border border-mistral-black/10 shadow-sm hover:border-mistral-orange transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-4 group">

            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <span className={`px-2 py-1 text-[10px] uppercase tracking-widest font-bold ${
                  assignment.status === 'Pending' ? 'bg-brand-yellow/20 text-brand-yellow-dark' :
                  assignment.status === 'In Progress' ? 'bg-blue-100 text-blue-600' :
                  'bg-gray-100 text-gray-600'
                }`}>
                  {assignment.status}
                </span>

                <span className="text-xs text-mistral-black/40 font-bold uppercase tracking-widest">{assignment.course}</span>
              </div>
              <h4 className="font-heading font-bold text-lg md:text-xl text-mistral-black group-hover:text-mistral-orange transition-colors">{assignment.title}</h4>
              <p className="text-sm text-mistral-black/60 mt-1 line-clamp-1">{assignment.description}</p>
            </div>

            <div className="flex flex-row md:flex-col items-center md:items-end gap-4 md:gap-1">
              <div className="flex items-center gap-2 text-sm font-semibold text-mistral-black">
                <svg className="w-4 h-4 text-mistral-black/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>{assignment.submissionDate}</span>
              </div>
            </div>


            <div className="pt-4 md:pt-0 md:pl-6 md:border-l border-mistral-black/5">
              <button 
                onClick={() => handleViewDetails(assignment)}
                className="w-full md:w-auto bg-mistral-black text-white px-6 py-2.5 text-sm font-bold uppercase tracking-widest hover:bg-mistral-orange transition-all duration-300 shadow-sm flex items-center justify-center gap-2"
              >
                View Details
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

            </div>
          </div>
        ))}
      </div>

      {/* Basic Detail View (In place for now, could be a modal) */}
      {selectedAssignment && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-mistral-black/40 backdrop-blur-sm"
          onClick={() => setSelectedAssignment(null)}
        >
          <div 
            className="bg-brand-ivory p-8 max-w-2xl w-full shadow-2xl relative overflow-hidden"
            onClick={e => e.stopPropagation()}
          >

            <div className="absolute top-0 left-0 w-full h-2 bg-mistral-orange"></div>
            <button 
              onClick={() => setSelectedAssignment(null)}
              className="absolute top-4 right-4 p-2 hover:bg-mistral-black/5 transition-colors"
            >

              <svg className="w-6 h-6 text-mistral-black/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="mb-6">
              <span className="text-xs font-bold text-mistral-orange uppercase tracking-[0.2em] mb-2 block">{selectedAssignment.course}</span>
              <h3 className="font-heading font-extrabold text-3xl text-mistral-black uppercase tracking-tight">{selectedAssignment.title}</h3>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-brand-cream/30 p-4 border border-mistral-black/5">
                <span className="text-[10px] font-bold text-mistral-black/40 uppercase tracking-widest block mb-1">Assigned Date</span>
                <span className="text-sm font-bold text-mistral-black">{selectedAssignment.assignedDate}</span>
              </div>
              <div className="bg-brand-cream/30 p-4 border border-mistral-black/5">
                <span className="text-[10px] font-bold text-mistral-black/40 uppercase tracking-widest block mb-1">Submission Date</span>
                <span className="text-sm font-bold text-mistral-black">{selectedAssignment.submissionDate}</span>
              </div>
            </div>



            <div className="space-y-4">
              <h4 className="font-heading font-bold text-lg text-mistral-black uppercase tracking-wider">Instructions</h4>
              <p className="text-mistral-black/70 leading-relaxed">
                {selectedAssignment.description}
              </p>
            </div>

            {/* Conditional Input Fields */}
            {selectedFormat === 'pdf' && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-6">
                <div className="flex justify-between items-end mb-2">
                  <label className="text-[10px] font-bold text-mistral-black/40 uppercase tracking-widest block">Choose PDF File</label>
                  <span className="text-[9px] font-bold text-mistral-orange uppercase tracking-widest">Max Size: 5MB</span>
                </div>
                <input 
                  type="file" 
                  accept=".pdf"
                  className="w-full border border-mistral-black/10 p-4 text-sm font-medium focus:outline-none focus:border-mistral-orange bg-brand-cream/10" 
                />
              </motion.div>
            )}


            {(selectedFormat === 'jpg' || selectedFormat === 'png') && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-6">
                <div className="flex justify-between items-end mb-2">
                  <label className="text-[10px] font-bold text-mistral-black/40 uppercase tracking-widest block">Choose Image Files</label>
                  <span className="text-[9px] font-bold text-mistral-orange uppercase tracking-widest">Max Size: 15MB</span>
                </div>
                <input 
                  type="file" 
                  accept="image/*"
                  multiple
                  className="w-full border border-mistral-black/10 p-4 text-sm font-medium focus:outline-none focus:border-mistral-orange bg-brand-cream/10" 
                />
              </motion.div>
            )}


            {selectedFormat === 'ppt' && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-6">
                <div className="flex justify-between items-end mb-2">
                  <label className="text-[10px] font-bold text-mistral-black/40 uppercase tracking-widest block">Choose Presentation File (PPT/PPTX)</label>
                  <span className="text-[9px] font-bold text-mistral-orange uppercase tracking-widest">Max Size: 15MB</span>
                </div>
                <input 
                  type="file" 
                  accept=".ppt,.pptx"
                  className="w-full border border-mistral-black/10 p-4 text-sm font-medium focus:outline-none focus:border-mistral-orange bg-brand-cream/10" 
                />
              </motion.div>
            )}




            <div className="mt-10 flex flex-col md:flex-row gap-4">
              <div className="relative flex-1 md:flex-none">
                <select 
                  className="w-full bg-white border border-mistral-black/10 px-6 py-4 pr-12 font-bold uppercase tracking-widest text-xs text-mistral-black focus:outline-none focus:border-mistral-orange appearance-none cursor-pointer"
                  value={selectedFormat}
                  onChange={(e) => setSelectedFormat(e.target.value)}
                >
                  <option value="" disabled>Select Format</option>
                  <option value="pdf">Pdf</option>
                  <option value="jpg">jpg</option>
                  <option value="png">png</option>
                  <option value="ppt">ppt</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                  <svg className="w-4 h-4 text-mistral-black/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
              
              <button className="flex-1 bg-mistral-black text-white py-4 font-bold uppercase tracking-widest hover:bg-mistral-orange transition-all duration-300">
                Submit Assignment
              </button>
            </div>




          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default AssignmentPage;
