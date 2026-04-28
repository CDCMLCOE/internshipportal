# Concerns and Technical Debt

## Technical Debt
- **Global State Management**: As the application grows (e.g., handling admin and student data), a dedicated state management solution (Context API, Zustand, Redux) will likely be needed.
- **Authentication**: Authentication flow is mocked or missing; it needs integration with a secure backend.

## Security
- Hardcoded sensitive data or lack of route guards may exist since `StudentLayout` and `AdminLayout` do not appear to have authentication checks explicitly shown at the router level.
- No Content Security Policy (CSP) defined.

## Performance
- All routes and components are bundled together. React Router's lazy loading (`React.lazy`) could be implemented to split the bundle and improve initial load time.

## Fragile Areas
- Prop drilling might become an issue without global state.
- Layouts acting as wrappers might re-render unnecessarily if not memoized.
