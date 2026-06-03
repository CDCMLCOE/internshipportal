import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase } from '../../../backend/services/supabaseClient';

const AssignmentPage = () => {
  const [selectedAssignment, setSelectedAssignment] = useState(null);
  const [selectedFormat, setSelectedFormat] = useState("");
  const [assignments, setAssignments] = useState([]);
  const [submissions, setSubmissions] = useState({});
  const [loading, setLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionFile, setSubmissionFile] = useState(null);

  useEffect(() => {
    fetchAssignments();
  }, []);

  const fetchAssignments = async () => {
    setLoading(true);
    try {
      const { data: assignmentsData, error: assError } = await supabase
        .from('assignments')
        .select('*')
        .order('deadline', { ascending: true });

      if (assError) throw assError;

      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        const { data: submissionsData } = await supabase
          .from('submissions')
          .select('assignment_id, status')
          .eq('student_id', user.id);
        
        const subMap = (submissionsData || []).reduce((acc, sub) => {
          acc[sub.assignment_id] = sub.status;
          return acc;
        }, {});
        setSubmissions(subMap);
      }

      setAssignments(assignmentsData || []);
    } catch (error) {
      console.error('Error fetching assignments:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleViewDetails = (assignment) => {
    setSelectedAssignment(assignment);
    setSelectedFormat(""); 
  };

  const handleSubmit = async () => {
    if (!selectedAssignment || !selectedFormat) return;
    setIsSubmitting(true);
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error('Not authenticated');

      let fileUrl = null;
      if (submissionFile) {
        const ext = submissionFile.name.split('.').pop();
        const path = `${user.id}/${selectedAssignment.id}_${Date.now()}.${ext}`;
        const { error: uploadError } = await supabase.storage.from('submissions').upload(path, submissionFile);
        if (uploadError) throw uploadError;
        const { data: { publicUrl } } = supabase.storage.from('submissions').getPublicUrl(path);
        fileUrl = publicUrl;
      }

      const { error } = await supabase
        .from('submissions')
        .insert([{
          assignment_id: selectedAssignment.id,
          student_id: user.id,
          format: selectedFormat,
          file_url: fileUrl,
          status: 'Submitted'
        }]);

      if (error) throw error;
      
      alert('Assignment submitted successfully!');
      setSubmissions(prev => ({ ...prev, [selectedAssignment.id]: 'Submitted' }));
      setSelectedAssignment(null);
      setSubmissionFile(null);
    } catch (error) {
      console.error('Error submitting assignment:', error);
      alert('Failed to submit assignment.');
    } finally {
      setIsSubmitting(false);
    }
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
        {assignments.map((assignment) => (
          <div key={assignment.id} className="bg-brand-ivory p-6 border border-mistral-black/10 shadow-sm hover:border-mistral-orange transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-4 group">

            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <span className={`px-2 py-1 text-[10px] uppercase tracking-widest font-bold ${
                  submissions[assignment.id] === 'Submitted' ? 'bg-green-100 text-green-700' :
                  'bg-brand-yellow/20 text-brand-yellow-dark'
                }`}>
                  {submissions[assignment.id] || 'Not Started'}
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
                <span>{new Date(assignment.deadline).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
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
                <span className="text-sm font-bold text-mistral-black">{new Date(selectedAssignment.assigned_date).toLocaleDateString()}</span>
              </div>
              <div className="bg-brand-cream/30 p-4 border border-mistral-black/5">
                <span className="text-[10px] font-bold text-mistral-black/40 uppercase tracking-widest block mb-1">Submission Date</span>
                <span className="text-sm font-bold text-mistral-black">{new Date(selectedAssignment.deadline).toLocaleDateString()}</span>
              </div>
            </div>



            <div className="space-y-4">
              <h4 className="font-heading font-bold text-lg text-mistral-black uppercase tracking-wider">Instructions</h4>
              <p className="text-mistral-black/70 leading-relaxed">
                {selectedAssignment.description}
              </p>
            </div>

            {/* Conditional Input Fields */}
            {selectedFormat && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-6">
                <div className="flex justify-between items-end mb-2">
                  <label className="text-[10px] font-bold text-mistral-black/40 uppercase tracking-widest block">Choose {selectedFormat.toUpperCase()} File</label>
                  <span className="text-[9px] font-bold text-mistral-orange uppercase tracking-widest">Max Size: 5MB</span>
                </div>
                <input 
                  type="file" 
                  onChange={(e) => setSubmissionFile(e.target.files[0] || null)}
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
                  disabled={submissions[selectedAssignment.id] === 'Submitted'}
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
              
              <button 
                onClick={handleSubmit}
                disabled={isSubmitting || !selectedFormat || submissions[selectedAssignment.id] === 'Submitted'}
                className={`flex-1 py-4 font-bold uppercase tracking-widest transition-all duration-300 ${
                  submissions[selectedAssignment.id] === 'Submitted'
                    ? 'bg-green-600 text-white cursor-not-allowed'
                    : 'bg-mistral-black text-white hover:bg-mistral-orange'
                }`}
              >
                {isSubmitting ? 'Submitting...' : submissions[selectedAssignment.id] === 'Submitted' ? 'Assignment Submitted' : 'Submit Assignment'}
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default AssignmentPage;
