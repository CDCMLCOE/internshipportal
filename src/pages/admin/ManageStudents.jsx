import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ClipboardList, CheckSquare, FileText } from 'lucide-react';

const ManageStudents = () => {
  const [activeBranchFilter, setActiveBranchFilter] = useState('All');
  const [activeStatusFilter, setActiveStatusFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isBranchSubMenuOpen, setIsBranchSubMenuOpen] = useState(false);
  const [isStatusSubMenuOpen, setIsStatusSubMenuOpen] = useState(false);
  const [selectedStudentForTask, setSelectedStudentForTask] = useState(null);
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const [isAddingTask, setIsAddingTask] = useState(false);
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskSubmissionDate, setTaskSubmissionDate] = useState('');
  const [studentTasks, setStudentTasks] = useState({});

  const students = [
    { id: 1, name: 'John Doe', branch: 'Computer Engineering', status: 'Task complete' },
    { id: 2, name: 'Jane Smith', branch: 'Information Technology', status: 'pending' },
    { id: 3, name: 'Bob Johnson', branch: 'Computer Engineering', status: 'No Task' },
    { id: 4, name: 'Alice Williams', branch: 'E&TC', status: 'Task complete' },
    { id: 5, name: 'Charlie Brown', branch: 'CSE - ai&ml', status: 'pending' },
    { id: 6, name: 'David Miller', branch: 'Information Technology', status: 'Task incomplete' },
  ];

  const branches = ['Computer Engineering', 'CSE - ai&ml', 'Information Technology', 'E&TC'];
  const statuses = ['Task complete', 'Task incomplete', 'pending', 'No Task'];

  const filteredStudents = students.filter(student => {
    const matchesBranch = activeBranchFilter === 'All' || student.branch === activeBranchFilter;
    const matchesStatus = activeStatusFilter === 'All' || student.status === activeStatusFilter;
    const matchesSearch = student.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          student.branch.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesBranch && matchesStatus && matchesSearch;
  });

  return (
    <div className="space-y-8">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
        <div>
          <h2 className="text-3xl font-heading font-bold uppercase tracking-tight">Manage Students</h2>
          <p className="text-mistral-black/60 font-medium">Assign tasks, evaluate performance, and issue final letters.</p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-4 w-full lg:w-auto">
          {/* Search Bar */}
          <div className="relative w-full md:w-80 group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-4 h-4 text-mistral-black/40 group-focus-within:text-mistral-orange transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search students or branches..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full pl-10 pr-3 py-2.5 bg-brand-ivory border border-mistral-black/10 text-xs font-bold uppercase tracking-widest focus:outline-none focus:border-mistral-orange focus:ring-1 focus:ring-mistral-orange transition-all placeholder:text-mistral-black/20"
            />
          </div>

          {/* Filter Dropdown */}
          <div className="relative w-full md:w-auto">
            <button 
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="w-full md:w-auto px-6 py-2.5 bg-brand-yellow text-mistral-black text-xs font-bold uppercase tracking-widest border border-mistral-black/10 hover:bg-mistral-black hover:text-white transition-all duration-300 flex items-center justify-center gap-2 shadow-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
              Filter{activeBranchFilter !== 'All' || activeStatusFilter !== 'All' ? ': Active' : ''}
            </button>

            <AnimatePresence>
              {isFilterOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 mt-2 w-56 bg-brand-ivory border border-mistral-black/10 shadow-xl z-50 overflow-visible"
                >
                  <div className="flex justify-end p-2 border-b border-mistral-black/5 bg-brand-cream/20">
                    <button 
                      onClick={() => setIsFilterOpen(false)}
                      className="p-1 hover:bg-mistral-black/5 rounded-full transition-colors text-mistral-black/40 hover:text-mistral-orange"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                  </div>
                  <div className="py-1">
                    {/* Branch Submenu */}
                    <div 
                      className="relative"
                      onMouseEnter={() => setIsBranchSubMenuOpen(true)}
                      onMouseLeave={() => setIsBranchSubMenuOpen(false)}
                    >
                      <button
                        className={`w-full text-left px-4 py-3 text-[10px] font-bold uppercase tracking-widest transition-colors flex justify-between items-center ${
                          activeBranchFilter !== 'All' ? 'bg-mistral-black text-white' : 'text-mistral-black hover:bg-brand-yellow'
                        }`}
                      >
                        Branch: {activeBranchFilter === 'All' ? 'All' : 'Selected'}
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </button>

                      <AnimatePresence>
                        {isBranchSubMenuOpen && (
                          <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -10 }}
                            className="absolute right-full top-0 mr-1 w-56 bg-brand-ivory border border-mistral-black/10 shadow-xl"
                          >
                            <button
                                onClick={() => {
                                  setActiveBranchFilter('All');
                                  setIsBranchSubMenuOpen(false);
                                }}
                                className={`w-full text-left px-4 py-3 text-[10px] font-bold uppercase tracking-widest transition-colors border-b border-mistral-black/5 ${
                                  activeBranchFilter === 'All' ? 'bg-mistral-black text-white' : 'text-mistral-black hover:bg-brand-yellow'
                                }`}
                              >
                                All Branches
                              </button>
                            {branches.map((branch) => (
                              <button
                                key={branch}
                                onClick={() => {
                                  setActiveBranchFilter(branch);
                                  setIsBranchSubMenuOpen(false);
                                }}
                                className={`w-full text-left px-4 py-3 text-[10px] font-bold uppercase tracking-widest transition-colors border-b border-mistral-black/5 last:border-0 ${
                                  activeBranchFilter === branch ? 'bg-mistral-black text-white' : 'text-mistral-black hover:bg-brand-yellow'
                                }`}
                              >
                                {branch}
                              </button>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Status Submenu */}
                    <div 
                      className="relative"
                      onMouseEnter={() => setIsStatusSubMenuOpen(true)}
                      onMouseLeave={() => setIsStatusSubMenuOpen(false)}
                    >
                      <button
                        className={`w-full text-left px-4 py-3 text-[10px] font-bold uppercase tracking-widest transition-colors flex justify-between items-center ${
                          activeStatusFilter !== 'All' ? 'bg-mistral-black text-white' : 'text-mistral-black hover:bg-brand-yellow'
                        }`}
                      >
                        Status: {activeStatusFilter === 'All' ? 'All' : 'Selected'}
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </button>

                      <AnimatePresence>
                        {isStatusSubMenuOpen && (
                          <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -10 }}
                            className="absolute right-full top-0 mr-1 w-56 bg-brand-ivory border border-mistral-black/10 shadow-xl"
                          >
                            <button
                                onClick={() => {
                                  setActiveStatusFilter('All');
                                  setIsStatusSubMenuOpen(false);
                                }}
                                className={`w-full text-left px-4 py-3 text-[10px] font-bold uppercase tracking-widest transition-colors border-b border-mistral-black/5 ${
                                  activeStatusFilter === 'All' ? 'bg-mistral-black text-white' : 'text-mistral-black hover:bg-brand-yellow'
                                }`}
                              >
                                All Statuses
                              </button>
                            {statuses.map((status) => (
                              <button
                                key={status}
                                onClick={() => {
                                  setActiveStatusFilter(status);
                                  setIsStatusSubMenuOpen(false);
                                }}
                                className={`w-full text-left px-4 py-3 text-[10px] font-bold uppercase tracking-widest transition-colors border-b border-mistral-black/5 last:border-0 ${
                                  activeStatusFilter === status ? 'bg-mistral-black text-white' : 'text-mistral-black hover:bg-brand-yellow'
                                }`}
                              >
                                {status}
                              </button>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    <button
                      onClick={() => {
                        setActiveBranchFilter('All');
                        setActiveStatusFilter('All');
                        setIsFilterOpen(false);
                      }}
                      className="w-full text-left px-4 py-3 text-[10px] font-bold uppercase tracking-widest text-mistral-orange hover:bg-mistral-orange hover:text-white transition-colors border-t border-mistral-black/10"
                    >
                      Clear Filters
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Data Table */}
      <div className="bg-brand-ivory border border-mistral-black/10 overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            {/* Combined Header with Merged Cells for Centering */}
            <tr className="bg-mistral-black text-white uppercase tracking-widest text-xs">
              <th rowSpan={2} className="px-4 py-4 border-b border-r border-white/20 w-20 text-center align-middle whitespace-nowrap">SR NO</th>
              <th rowSpan={2} className="px-4 py-4 border-b border-r border-white/20 text-center align-middle">STUDENT NAMES</th>
              <th colSpan={3} className="px-2 pt-4 pb-2 border-b border-r border-white/20 text-center">ACTIONS</th>
              <th rowSpan={2} className="px-4 py-4 border-b border-white/20 text-center align-middle">STATUS</th>
            </tr>
            <tr className="bg-mistral-black uppercase tracking-widest text-[10px]">
              <th className="px-2 py-3 border-b border-r border-white/20 text-center align-middle text-brand-yellow/90 w-24 leading-tight">ASSIGN<br/>TASK</th>
              <th className="px-2 py-3 border-b border-r border-white/20 text-center align-middle text-brand-yellow/90 w-24 leading-tight">EVALUATE<br/>TASK</th>
              <th className="px-2 py-3 border-b border-r border-white/20 text-center align-middle text-brand-yellow/90 w-24 leading-tight">FINAL<br/>LETTER</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.length > 0 ? (
              filteredStudents.map((student, index) => (
                <motion.tr 
                  key={student.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className="border-b border-mistral-black/10 hover:bg-brand-cream/50 transition-colors"
                >
                  <td className="p-4 text-center font-bold text-mistral-black/60 border-r border-mistral-black/10">{index + 1}</td>
                  <td className="p-4 text-center border-r border-mistral-black/10">
                    <div className="flex flex-col items-center">
                      <span className="font-bold uppercase tracking-tight text-base text-mistral-black">{student.name}</span>
                      <span className="text-[10px] uppercase tracking-widest text-mistral-black/40 font-bold mt-1">[{student.branch}]</span>
                    </div>
                  </td>
                  <td className="p-4 align-middle border-r border-mistral-black/10">
                    <button 
                      title="Assign Task" 
                      onClick={() => {
                        setSelectedStudentForTask(student);
                        setIsTaskModalOpen(true);
                      }}
                      className="p-2.5 bg-brand-yellow/30 hover:bg-brand-yellow transition-colors text-mistral-black border border-brand-yellow mx-auto block group"
                    >
                      <ClipboardList className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    </button>
                  </td>
                  <td className="p-4 align-middle border-r border-mistral-black/10">
                    <button title="Evaluate Task" className="p-2.5 bg-mistral-orange/10 hover:bg-mistral-orange transition-colors text-mistral-orange hover:text-white border border-mistral-orange/30 hover:border-mistral-orange mx-auto block group">
                      <CheckSquare className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    </button>
                  </td>
                  <td className="p-4 align-middle border-r border-mistral-black/10">
                    <button title="Final Internship Letter" className="p-2.5 bg-brand-cream hover:bg-mistral-black hover:text-white transition-all text-mistral-black border border-mistral-black/20 hover:border-mistral-black mx-auto block group">
                      <FileText className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    </button>
                  </td>
                  <td className="p-4 text-center">
                    <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 border ${
                      student.status === 'Task complete' ? 'bg-emerald-500/10 text-emerald-700 border-emerald-500/30' :
                      student.status === 'Task incomplete' ? 'bg-rose-500/10 text-rose-700 border-rose-500/30' :
                      student.status === 'pending' ? 'bg-brand-yellow/50 text-mistral-black border-brand-yellow' :
                      'bg-brand-cream text-mistral-black/60 border-mistral-black/10'
                    }`}>
                      {student.status}
                    </span>
                  </td>
                </motion.tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="p-8 text-center text-mistral-black/40 font-bold uppercase tracking-widest border-t border-dashed border-mistral-black/20">
                  No students found matching your criteria
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Assign Task Modal */}
      <AnimatePresence>
        {isTaskModalOpen && selectedStudentForTask && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-mistral-black/60 backdrop-blur-sm"
              onClick={() => {
                setIsTaskModalOpen(false);
                setIsAddingTask(false);
              }}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-brand-ivory rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            >
              {/* Profile Header Card */}
              <div className="bg-brand-ivory border-b border-mistral-black/10 p-6 sm:p-8 relative shrink-0">
                <button 
                  onClick={() => {
                    setIsTaskModalOpen(false);
                    setIsAddingTask(false);
                  }}
                  className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-mistral-black/5 hover:bg-mistral-orange hover:text-white transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
                <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-r from-mistral-orange/20 to-brand-yellow/20"></div>
                
                <div className="relative mt-4 flex flex-col sm:flex-row items-center sm:items-start gap-6">
                  {/* Profile Image Circle */}
                  <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full border-4 border-brand-ivory bg-brand-cream flex items-center justify-center shrink-0 overflow-hidden shadow-md">
                    <svg className="w-10 h-10 text-mistral-black/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>

                  {/* Student Details */}
                  <div className="flex flex-col space-y-2 text-center sm:text-left pt-2 sm:pt-8 flex-1">
                    <div>
                      <h3 className="font-heading font-bold text-2xl text-mistral-black tracking-tight">{selectedStudentForTask.name}</h3>
                      <p className="text-mistral-orange font-medium text-xs mt-1 uppercase tracking-wider">{selectedStudentForTask.branch}</p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3 mt-1">
                      <div className="flex items-center justify-center sm:justify-start gap-1.5 text-mistral-black/70">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                        <span className="font-sans text-xs">student@mlcoe.mespune.in</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Task Section */}
              <div className="p-6 sm:p-8 bg-brand-cream/30 overflow-y-auto flex-1">
                {(() => {
                  const currentTasks = studentTasks[selectedStudentForTask.id] || [];
                  return (
                    <>
                      <div className="flex items-center justify-between mb-6">
                        <h4 className="font-heading font-bold text-lg text-mistral-black tracking-tight">Assigned Tasks</h4>
                        <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 bg-brand-yellow/30 text-mistral-black border border-brand-yellow">
                          {currentTasks.length} {currentTasks.length === 1 ? 'Task' : 'Tasks'}
                        </span>
                      </div>

                      <div className="space-y-3 mb-8">
                        {currentTasks.length === 0 ? (
                          <div className="text-center p-8 border-2 border-dashed border-mistral-black/10 rounded-xl bg-brand-ivory/50">
                            <p className="text-mistral-black/40 font-bold text-xs uppercase tracking-widest">No tasks assigned yet</p>
                          </div>
                        ) : (
                          currentTasks.map((task, i) => (
                            <motion.div
                              key={task.id}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, x: -20 }}
                              transition={{ delay: i * 0.04 }}
                              className="bg-brand-ivory border border-mistral-black/10 rounded-xl p-4 flex items-start gap-3 shadow-sm group/task"
                            >
                              <div className="w-6 h-6 mt-0.5 shrink-0 bg-mistral-orange/10 border border-mistral-orange/30 rounded-full flex items-center justify-center">
                                <span className="text-[9px] font-bold text-mistral-orange">{i + 1}</span>
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="font-heading font-bold text-sm text-mistral-black tracking-tight">{task.title}</p>
                                {task.description && (
                                  <p className="text-xs text-mistral-black/60 font-sans mt-1 leading-relaxed">{task.description}</p>
                                )}
                                <div className="flex flex-wrap items-center gap-3 mt-2">
                                  <p className="text-[10px] text-mistral-black/30 font-bold uppercase tracking-widest">{task.createdAt}</p>
                                  {task.submissionDate && (
                                    <div className="flex items-center gap-1 px-2 py-0.5 bg-rose-50 border border-rose-100 rounded text-[9px] font-bold text-rose-600 uppercase tracking-tight">
                                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                      Deadline: {task.submissionDate}
                                    </div>
                                  )}
                                </div>
                              </div>
                              <button
                                title="Delete Task"
                                onClick={() =>
                                  setStudentTasks(prev => ({
                                    ...prev,
                                    [selectedStudentForTask.id]: prev[selectedStudentForTask.id].filter(t => t.id !== task.id),
                                  }))
                                }
                                className="shrink-0 w-7 h-7 flex items-center justify-center rounded-full opacity-0 group-hover/task:opacity-100 bg-rose-50 hover:bg-rose-500 text-rose-400 hover:text-white border border-rose-200 hover:border-rose-500 transition-all duration-200"
                              >
                                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                              </button>
                            </motion.div>
                          ))
                        )}
                      </div>
                    </>
                  );
                })()}

                {/* Add Task Control (Notes App Style) */}
                <div className="relative">
                  <AnimatePresence mode="wait">
                    {!isAddingTask ? (
                      <motion.div
                        key="plus-btn"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="flex justify-center"
                      >
                        <button
                          onClick={() => setIsAddingTask(true)}
                          className="w-14 h-14 bg-mistral-orange text-white rounded-full flex items-center justify-center shadow-lg hover:bg-mistral-black hover:shadow-xl transition-all duration-300 group"
                          title="Add New Task"
                        >
                          <svg className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                          </svg>
                        </button>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="task-form"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        className="bg-brand-ivory border border-mistral-black/10 shadow-xl rounded-xl p-6"
                      >
                        <input 
                          type="text" 
                          placeholder="Task Title..." 
                          value={taskTitle}
                          onChange={(e) => setTaskTitle(e.target.value)}
                          className="w-full bg-transparent border-none text-lg font-heading font-bold text-mistral-black placeholder:text-mistral-black/30 focus:outline-none focus:ring-0 mb-4"
                        />
                        <textarea 
                          placeholder="Task description, instructions, or notes..."
                          rows="4"
                          value={taskDescription}
                          onChange={(e) => setTaskDescription(e.target.value)}
                          className="w-full bg-transparent border-none resize-none text-sm font-sans text-mistral-black/80 placeholder:text-mistral-black/30 focus:outline-none focus:ring-0 mb-2"
                        />
                        <div className="flex flex-col gap-1.5 px-1 pb-2">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-mistral-black/40">Submission Deadline</label>
                          <input 
                            type="date"
                            value={taskSubmissionDate}
                            onChange={(e) => setTaskSubmissionDate(e.target.value)}
                            className="bg-brand-cream border border-mistral-black/10 rounded px-3 py-2 text-xs font-bold text-mistral-black focus:outline-none focus:border-mistral-orange transition-all"
                          />
                        </div>
                        <div className="flex justify-end gap-3 mt-4 pt-4 border-t border-mistral-black/5">
                          <button 
                            onClick={() => {
                              setIsAddingTask(false);
                              setTaskTitle('');
                              setTaskDescription('');
                              setTaskSubmissionDate('');
                            }}
                            className="px-4 py-2 text-xs font-bold uppercase tracking-widest text-mistral-black/50 hover:text-mistral-black transition-colors"
                          >
                            Cancel
                          </button>
                          <button 
                            onClick={() => {
                              if (!taskTitle.trim()) return;
                              const newTask = {
                                id: Date.now(),
                                title: taskTitle.trim(),
                                description: taskDescription.trim(),
                                submissionDate: taskSubmissionDate,
                                createdAt: new Date().toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' }),
                              };
                              setStudentTasks(prev => ({
                                ...prev,
                                [selectedStudentForTask.id]: [...(prev[selectedStudentForTask.id] || []), newTask],
                              }));
                              setTaskTitle('');
                              setTaskDescription('');
                              setTaskSubmissionDate('');
                              setIsAddingTask(false);
                            }}
                            className="px-6 py-2 bg-mistral-black text-white text-xs font-bold uppercase tracking-widest rounded hover:bg-mistral-orange transition-colors shadow-sm"
                          >
                            Save Task
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ManageStudents;
