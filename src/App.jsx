import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Outlet, Link } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Components
import Navbar from './frontend/components/Navbar';
import Footer from './frontend/components/Footer';
import { AuthProvider } from './backend/auth/AuthContext';
import ProtectedRoute from './backend/auth/ProtectedRoute';

// Public Pages
import Home from './frontend/pages/Home';
import About from './frontend/pages/About';
import PrincipalMessage from './frontend/pages/PrincipalMessage';
import Help from './frontend/pages/Help';
import LegalPrivacy from './frontend/pages/LegalPrivacy';
import LegalTerms from './frontend/pages/LegalTerms';
import StudentGuidelines from './frontend/pages/StudentGuidelines';
import LegalPartnership from './frontend/pages/LegalPartnership';

// Student Dashboard
import StudentLayout from './frontend/layouts/StudentLayout';
import Dashboard from './frontend/pages/student/Dashboard';
import Application from './frontend/pages/student/Application';
import Profile from './frontend/pages/student/Profile';
import Assignments from './frontend/pages/student/Assignments';


// Admin Pages
import AdminLayout from './frontend/layouts/AdminLayout';
import AdminDashboard from './frontend/pages/admin/Dashboard';
import AdminInternships from './frontend/pages/admin/Internships';
import AdminInternshipAccess from './frontend/pages/admin/InternshipAccess';
import AdminApplicants from './frontend/pages/admin/Applicants';
import AdminStudentsData from './frontend/pages/admin/StudentsData';
import AdminManageStudents from './frontend/pages/admin/ManageStudents';
import PendingApprovals from './frontend/pages/admin/PendingApprovals';

// Superadmin Pages
import SuperadminLayout from './frontend/layouts/SuperadminLayout';
import SuperadminDashboard from './frontend/pages/superadmin/Dashboard';
import SuperadminUserManagement from './frontend/pages/superadmin/UserManagement';
import SuperadminManageStudents from './frontend/pages/superadmin/ManageStudents';

// Industry Pages
import IndustrialLayout from './frontend/layouts/IndustrialLayout';
import IndustryLogin from './frontend/pages/industry/Login';
import IndustryDashboard from './frontend/pages/industry/Dashboard';
import IndustryInternships from './frontend/pages/industry/Internships';
import IndustryApplicants from './frontend/pages/industry/Applicants';
import IndustryRegister from './frontend/pages/industry/Register';

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
          <Route path="/terms-partnership" element={<LegalPartnership />} />
          <Route path="/student-guidelines" element={<StudentGuidelines />} />
          <Route path="/industry-register" element={<IndustryRegister />} />
        </Route>

        {/* Student Dashboard Routes */}
        <Route element={<ProtectedRoute allowedRoles={['student']} redirectTo="/" />}>
          <Route path="/student" element={<StudentLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="application" element={<Application />} />
            <Route path="profile" element={<Profile />} />
            <Route path="assignments" element={<Assignments />} />
          </Route>
        </Route>

        {/* Admin Routes */}
        <Route element={<ProtectedRoute allowedRoles={['admin']} redirectTo="/" />}>
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="internships" element={<AdminInternships />} />
            <Route path="internship-access" element={<AdminInternshipAccess />} />
            <Route path="applicants" element={<AdminApplicants />} />
            <Route path="students" element={<AdminStudentsData />} />
            <Route path="manage-students" element={<AdminManageStudents />} />
            <Route path="pending-approvals" element={<PendingApprovals />} />
          </Route>
        </Route>

        {/* Superadmin Routes */}
        <Route element={<ProtectedRoute allowedRoles={['superadmin']} redirectTo="/" />}>
          <Route path="/superadmin" element={<SuperadminLayout />}>
            <Route index element={<SuperadminDashboard />} />
            <Route path="dashboard" element={<SuperadminDashboard />} />
            <Route path="users" element={<SuperadminUserManagement />} />
            <Route path="students" element={<SuperadminManageStudents />} />
          </Route>
        </Route>

        {/* Industry Login (standalone, no layout) */}
        <Route path="/industry" element={<IndustryLogin />} />

        {/* Industry Dashboard Routes */}
        <Route element={<ProtectedRoute allowedRoles={['industry']} redirectTo="/industry" />}>
          <Route path="/industry" element={<IndustrialLayout />}>
            <Route path="dashboard" element={<IndustryDashboard />} />
            <Route path="internships" element={<IndustryInternships />} />
            <Route path="applicants" element={<IndustryApplicants />} />
          </Route>
        </Route>

        {/* 404 Fallback */}
        <Route path="*" element={
          <div className="min-h-screen bg-brand-ivory flex flex-col items-center justify-center text-center px-6">
            <h1 className="text-8xl font-heading font-bold text-mistral-black/10 select-none">404</h1>
            <h2 className="text-2xl font-heading font-bold uppercase tracking-tight text-mistral-black mt-4">Page Not Found</h2>
            <p className="text-mistral-black/50 text-sm mt-2 max-w-md">The page you are looking for doesn't exist or has been moved.</p>
            <Link to="/" className="mt-8 px-8 py-3 bg-mistral-black text-white text-xs font-bold uppercase tracking-widest hover:bg-mistral-orange transition-colors duration-300">
              Back to Home
            </Link>
          </div>
        } />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <AnimatedRoutes />
      </Router>
    </AuthProvider>
  );
}

export default App;
