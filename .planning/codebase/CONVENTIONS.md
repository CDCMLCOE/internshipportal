# Coding Conventions

## Code Style
- **Language Features**: Heavy use of ES6+ syntax (arrow functions, destructuring, modules).
- **React Patterns**: Functional components and React Hooks (`useState`, `useEffect`, etc.).
- **Styling**: Utility-first CSS using Tailwind CSS (`className` attributes).

## Naming Conventions
- React components use PascalCase (e.g., `InternshipDetailModal.jsx`).
- Hook variables use camelCase.

## Error Handling
No centralized error handling pattern or error boundary implementation is apparent at the root level. Component-level error catching and standard `try-catch` are likely used.

## Linting
- Enforced by ESLint (`eslint.config.js`) configured with React hooks and React refresh plugins.
