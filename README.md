# Internship Portal — MES MLCOE

A full-stack internship management platform for **MES College of Engineering (MLCOE)** that connects students, administrators, superadmins, and industry partners in a unified workflow.

## Live Demo

> _Deployed URL coming soon_

## Features

### Public Pages
- Landing page with internship highlights
- About, Principal Message, Student Guidelines
- Legal pages (Privacy Policy, Terms, Partnership Terms)
- Industry partner registration & login

### Student Dashboard
- View and apply to available internships
- Track application status in real-time
- Manage profile and academic details
- Complete assigned tasks/assignments
- Download application receipts (PDF)

### Admin Dashboard
- Manage internship postings (create, edit, remove)
- Review and approve student applications
- Manage student records and data
- Monitor internship access requests
- View pending approval queue

### Superadmin Dashboard
- Full user management (students, admins)
- Create, edit, and delete user accounts
- Role assignment and management
- System-wide analytics and monitoring
- CSV export for student data

### Industry Partner Portal
- Post and manage internship opportunities
- Review student applicants
- Track application pipeline
- Company profile management

## Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | React 19, Vite 8, Tailwind CSS 4 |
| **Routing** | React Router DOM 7 |
| **Animations** | Framer Motion 12 |
| **Backend** | Supabase (Auth + PostgreSQL) |
| **Icons** | Lucide React, React Icons |
| **PDF** | jsPDF, html2canvas |
| **Linting** | ESLint + React Hooks/Refresh plugins |

## Project Structure

```
src/
├── assets/                 # Static images (logo, hero, principal photo)
├── backend/                # Server-side logic & services
│   ├── auth/               # Authentication context & protected routes
│   │   ├── AuthContext.jsx
│   │   └── ProtectedRoute.jsx
│   └── services/           # Supabase client & data stores
│       ├── supabaseClient.js
│       └── pendingApprovals.js
├── frontend/               # All UI components & pages
│   ├── components/         # Reusable UI elements
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── LoginModal.jsx
│   │   ├── InternshipDetailModal.jsx
│   │   ├── StudentProfileReviewModal.jsx
│   │   └── CustomDropdown.jsx
│   ├── layouts/            # Role-based page layouts
│   │   ├── StudentLayout.jsx
│   │   ├── AdminLayout.jsx
│   │   ├── SuperadminLayout.jsx
│   │   └── IndustrialLayout.jsx
│   └── pages/              # Route-level page components
│       ├── student/        # Student dashboard pages
│       ├── admin/          # Admin management pages
│       ├── superadmin/     # Superadmin oversight pages
│       ├── industry/       # Industry partner pages
│       └── *.jsx           # Public-facing pages
├── App.jsx                 # Main router & layout composition
├── main.jsx                # Application entry point
└── index.css               # Global styles & Tailwind config
```

## Getting Started

### Prerequisites

- **Node.js** 18+ 
- **npm** (or yarn/pnpm)
- A **Supabase** project (free tier works)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/psb-001/internshipportal.git
   cd internshipportal
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the project root:
   ```env
   VITE_SUPABASE_URL=your_supabase_project_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   VITE_USE_MOCK_AUTH=false
   ```

   > Get your Supabase credentials from [supabase.com](https://supabase.com) → Project Settings → API

4. **Run the development server**
   ```bash
   npm run dev
   ```
   
   The app will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
npm run preview
```

## Authentication

The portal supports two authentication modes:

### Production Mode (`VITE_USE_MOCK_AUTH=false`)
- Uses Supabase Auth for real user authentication
- Student/Admin/Superadmin accounts use email + password
- Industry accounts use company name + password
- Session persistence via `sessionStorage` (8-hour TTL)

### Development Mode (`VITE_USE_MOCK_AUTH=true`)
- Mock accounts for testing without Supabase:

| Role | Email / Company | Password |
|------|----------------|----------|
| Student | `student@mlcoe.mespune.in` | `student123` |
| Admin | `admin@mlcoe.in` | `admin123` |
| Superadmin | `superadmin@mlcoe.in` | `superadmin123` |
| Industry | `Google` | `google123` |

## Database Schema

The Supabase database includes these key tables:

| Table | Purpose |
|-------|---------|
| `profiles` | User profiles linked to auth.users |
| `applications` | Student internship applications |
| `internships` | Industry-posted internship opportunities |
| `submissions` | Student assignment submissions |
| `audit_logs` | System activity tracking |
| `industry_registrations` | Pending industry partner registrations |

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server (Vite) |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Style
- Follow existing component naming (PascalCase for components, camelCase for hooks/services)
- Use Tailwind utility classes for styling
- Keep components under 200 lines where possible
- Add JSDoc comments for exported functions

## License

This project is for internal use at **MES College of Engineering**.

## Contact

- **Project Maintainer**: [psb-001](https://github.com/psb-001)
- **Institution**: MES College of Engineering, Pune
