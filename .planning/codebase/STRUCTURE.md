# Directory Structure

## Overview
The application is organized by features and technical concerns under the `src/` directory.

## Key Directories
- `public/`: Static assets that are served directly.
- `src/`: The main source code.
  - `assets/`: Images, icons, and other imported static files.
  - `components/`: Reusable, presentation-focused React components (e.g., `Navbar.jsx`, `Footer.jsx`, `LoginModal.jsx`).
  - `layouts/`: Structural wrappers for specific route domains (e.g., `AdminLayout.jsx`, `StudentLayout.jsx`).
  - `pages/`: Top-level route components, organized further by domain:
    - `/`: Public pages (`Home.jsx`, `About.jsx`, etc.)
    - `admin/`: Admin dashboard pages (`Dashboard.jsx`, `Applicants.jsx`, etc.)
    - `student/`: Student dashboard pages (`Dashboard.jsx`, `Profile.jsx`, etc.)

## Naming Conventions
- **Components/Pages/Layouts**: PascalCase (e.g., `StudentLayout.jsx`, `LoginModal.jsx`).
- **Directories**: lowercase (e.g., `components/`, `pages/`).
- **Configuration Files**: kebab-case or standard names (e.g., `tailwind.config.js`, `package.json`).
