import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Outlet } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Public Pages
import Home from './pages/Home';
import About from './pages/About';
import PrincipalMessage from './pages/PrincipalMessage';
import Help from './pages/Help';
import LegalPrivacy from './pages/LegalPrivacy';
import LegalTerms from './pages/LegalTerms';

// Student Dashboard
import StudentLayout from './layouts/StudentLayout';
import Dashboard from './pages/student/Dashboard';
import Application from './pages/student/Application';
import Profile from './pages/student/Profile';
import Assignments from './pages/student/Assignments';


// Admin Pages
import AdminLayout from './layouts/AdminLayout';
import AdminDashboard from './pages/admin/Dashboard';
import AdminInternships from './pages/admin/Internships';
import AdminInternshipAccess from './pages/admin/InternshipAccess';
import AdminApplicants from './pages/admin/Applicants';
import AdminStudentsData from './pages/admin/StudentsData';
import AdminUsers from './pages/admin/Users';
import AdminManageStudents from './pages/admin/ManageStudents';

// Main Public Layout
const MainLayout = () => {
  return (
    <div className="min-h-screen bg-mesh-pattern text-mistral-black font-sans selection:bg-brand-yellow selection:text-mistral-black overflow-x-hidden flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Public Routes with Navbar and Footer */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/principal-message" element={<PrincipalMessage />} />
          <Route path="/help" element={<Help />} />
          <Route path="/privacy" element={<LegalPrivacy />} />
          <Route path="/terms" element={<LegalTerms />} />
        </Route>

        {/* Student Dashboard Routes (No standard Navbar/Footer) */}
        <Route path="/student" element={<StudentLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="application" element={<Application />} />
          <Route path="profile" element={<Profile />} />
          <Route path="assignments" element={<Assignments />} />

        </Route>

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="internships" element={<AdminInternships />} />
          <Route path="internship-access" element={<AdminInternshipAccess />} />
          <Route path="applicants" element={<AdminApplicants />} />
          <Route path="students" element={<AdminStudentsData />} />
          <Route path="manage-students" element={<AdminManageStudents />} />
          <Route path="users" element={<AdminUsers />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
