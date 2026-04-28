# Architecture

## High-Level Pattern
The application follows a standard Single Page Application (SPA) architecture built with React and Vite. It utilizes client-side routing via `react-router-dom`.

## Layers
1. **Presentation Layer**: Components in `src/components/` (e.g., `Navbar.jsx`, `Footer.jsx`, `LoginModal.jsx`) and `src/pages/`.
2. **Layout Layer**: Components in `src/layouts/` (e.g., `StudentLayout.jsx`, `AdminLayout.jsx`) which act as structural wrappers for specific route groups.
3. **Routing Layer**: Defined entirely in `src/App.jsx` using React Router's `<BrowserRouter>`, `<Routes>`, and `<Route>`.

## Data Flow
Data flows downward from layouts/pages to components via props. Currently, there is no global state management library (like Redux or Zustand) visible in the core structure; state is likely managed locally via React's `useState` and `useContext`.

## Entry Points
- Application Initialization: `src/main.jsx`
- Main Routing: `src/App.jsx`
