const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const root = 'g:/portal';
const dest = path.join(root, '.understand-anything/knowledge-graph.json');

const files = [
  'src/main.jsx', 'src/App.jsx', 'src/App.css', 'src/index.css',
  'src/layouts/AdminLayout.jsx', 'src/layouts/StudentLayout.jsx',
  'src/pages/Home.jsx', 'src/pages/About.jsx', 'src/pages/Help.jsx', 'src/pages/LegalPrivacy.jsx', 'src/pages/LegalTerms.jsx', 'src/pages/PrincipalMessage.jsx',
  'src/pages/admin/Applicants.jsx', 'src/pages/admin/Dashboard.jsx', 'src/pages/admin/InternshipAccess.jsx', 'src/pages/admin/Internships.jsx', 'src/pages/admin/StudentsData.jsx', 'src/pages/admin/Users.jsx',
  'src/pages/student/Application.jsx', 'src/pages/student/Dashboard.jsx', 'src/pages/student/Profile.jsx',
  'src/components/Footer.jsx', 'src/components/InternshipDetailModal.jsx', 'src/components/LoginModal.jsx', 'src/components/Navbar.jsx',
  'package.json', 'vite.config.js', 'tailwind.config.js', 'postcss.config.js', 'index.html', 'README.md'
];

const nodes = files.map(file => {
  let type = 'file';
  if (file.endsWith('.json') || file.endsWith('.config.js')) type = 'config';
  else if (file.endsWith('.md')) type = 'document';
  
  let name = path.basename(file);
  let summary = `Source file ${name}`;
  if (name === 'main.jsx') summary = 'Application entry point';
  if (name === 'App.jsx') summary = 'Main React component and Router configuration';
  if (file.includes('pages/admin')) summary = `Admin interface page for ${name.replace('.jsx', '')}`;
  if (file.includes('pages/student')) summary = `Student interface page for ${name.replace('.jsx', '')}`;
  if (file.includes('layouts')) summary = `Layout component for ${name.replace('Layout.jsx', '')} sections`;
  if (file.includes('components')) summary = `Reusable UI component: ${name.replace('.jsx', '')}`;

  return {
    id: `file:${file}`,
    type,
    name,
    filePath: file,
    summary,
    tags: [type, file.split('.').pop()]
  };
});

const edges = [];
// App imports
edges.push({ source: 'file:src/main.jsx', target: 'file:src/App.jsx', type: 'imports' });
edges.push({ source: 'file:src/main.jsx', target: 'file:src/index.css', type: 'imports' });
edges.push({ source: 'file:src/App.jsx', target: 'file:src/layouts/AdminLayout.jsx', type: 'imports' });
edges.push({ source: 'file:src/App.jsx', target: 'file:src/layouts/StudentLayout.jsx', type: 'imports' });
edges.push({ source: 'file:src/App.jsx', target: 'file:src/pages/Home.jsx', type: 'imports' });

const layers = [
  {
    id: 'layer:core',
    name: 'Core / Config',
    description: 'Configuration and core entry points',
    nodeIds: ['file:package.json', 'file:vite.config.js', 'file:tailwind.config.js', 'file:postcss.config.js', 'file:index.html', 'file:src/main.jsx']
  },
  {
    id: 'layer:routing-layouts',
    name: 'Routing & Layouts',
    description: 'App routing and main layout wrappers',
    nodeIds: ['file:src/App.jsx', 'file:src/layouts/AdminLayout.jsx', 'file:src/layouts/StudentLayout.jsx']
  },
  {
    id: 'layer:pages-admin',
    name: 'Admin Pages',
    description: 'Admin interface pages',
    nodeIds: files.filter(f => f.includes('pages/admin')).map(f => `file:${f}`)
  },
  {
    id: 'layer:pages-student',
    name: 'Student Pages',
    description: 'Student interface pages',
    nodeIds: files.filter(f => f.includes('pages/student')).map(f => `file:${f}`)
  },
  {
    id: 'layer:pages-public',
    name: 'Public Pages',
    description: 'Publicly accessible pages',
    nodeIds: files.filter(f => f.includes('pages/') && !f.includes('admin') && !f.includes('student')).map(f => `file:${f}`)
  },
  {
    id: 'layer:components',
    name: 'Components',
    description: 'Reusable UI components',
    nodeIds: files.filter(f => f.includes('components')).map(f => `file:${f}`)
  },
  {
    id: 'layer:styles-docs',
    name: 'Styles & Docs',
    description: 'Global styles and documentation',
    nodeIds: ['file:src/App.css', 'file:src/index.css', 'file:README.md']
  }
];

const tour = [
  {
    order: 1,
    title: 'Project Setup',
    description: 'Vite and Tailwind configuration for the React application.',
    nodeIds: ['file:vite.config.js', 'file:tailwind.config.js', 'file:package.json']
  },
  {
    order: 2,
    title: 'Entry Point',
    description: 'The React application mounts here and loads global styles.',
    nodeIds: ['file:index.html', 'file:src/main.jsx', 'file:src/index.css']
  },
  {
    order: 3,
    title: 'Routing & Layouts',
    description: 'App.jsx defines the routes, while AdminLayout and StudentLayout wrap the respective sections with navigation.',
    nodeIds: ['file:src/App.jsx', 'file:src/layouts/AdminLayout.jsx', 'file:src/layouts/StudentLayout.jsx']
  },
  {
    order: 4,
    title: 'Shared Components',
    description: 'Reusable elements like Navbar, Footer, and Modals.',
    nodeIds: ['file:src/components/Navbar.jsx', 'file:src/components/Footer.jsx', 'file:src/components/LoginModal.jsx']
  }
];

const graph = {
  version: '1.0.0',
  project: {
    name: 'portal',
    languages: ['javascript', 'css', 'html'],
    frameworks: ['react', 'vite', 'tailwindcss'],
    description: 'ML CoE Internship Portal',
    analyzedAt: new Date().toISOString(),
    gitCommitHash: execSync('git rev-parse HEAD').toString().trim()
  },
  nodes,
  edges,
  layers,
  tour
};

fs.writeFileSync(dest, JSON.stringify(graph, null, 2));
console.log('Graph generated successfully.');
