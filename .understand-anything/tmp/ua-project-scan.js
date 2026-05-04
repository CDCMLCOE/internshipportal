import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const projectRoot = process.argv[2] || process.cwd();
const outputFile = process.argv[3] || 'scan-result.json';

const EXCLUSIONS = [
  'node_modules/', '.git/', 'dist/', 'build/', 'out/', 'coverage/', '.next/', '.cache/', '.turbo/', 'target/', 'obj/',
  '*.lock', 'package-lock.json', 'yarn.lock', 'pnpm-lock.yaml',
  '*.png', '*.jpg', '*.jpeg', '*.gif', '*.svg', '*.ico', '*.woff', '*.woff2', '*.ttf', '*.eot', '*.mp3', '*.mp4', '*.pdf', '*.zip', '*.tar', '*.gz',
  '*.min.js', '*.min.css', '*.map', '*.generated.*',
  '.idea/', '.vscode/',
  'LICENSE', '.gitignore', '.editorconfig', '.prettierrc', '.eslintrc*', '*.log'
];

const LANG_MAP = {
  '.ts': 'typescript', '.tsx': 'typescript',
  '.js': 'javascript', '.jsx': 'javascript',
  '.py': 'python',
  '.go': 'go',
  '.rs': 'rust',
  '.java': 'java',
  '.rb': 'ruby',
  '.cpp': 'cpp', '.cc': 'cpp', '.cxx': 'cpp', '.h': 'cpp', '.hpp': 'cpp',
  '.c': 'c',
  '.cs': 'csharp',
  '.swift': 'swift',
  '.kt': 'kotlin',
  '.php': 'php',
  '.vue': 'vue',
  '.svelte': 'svelte',
  '.sh': 'shell', '.bash': 'shell',
  '.md': 'markdown', '.rst': 'markdown',
  '.yaml': 'yaml', '.yml': 'yaml',
  '.json': 'json',
  '.toml': 'toml',
  '.sql': 'sql',
  '.graphql': 'graphql', '.gql': 'graphql',
  '.proto': 'protobuf',
  '.tf': 'terraform', '.tfvars': 'terraform',
  '.html': 'html', '.htm': 'html',
  '.css': 'css', '.scss': 'css', '.sass': 'css', '.less': 'css',
  '.xml': 'xml'
};

const CATEGORY_MAP = [
  { ext: ['.md', '.rst', '.txt'], cat: 'docs' },
  { ext: ['.yaml', '.yml', '.json', '.toml', '.xml', '.cfg', '.ini', '.env'], cat: 'config' },
  { names: ['Dockerfile', 'docker-compose.yml', 'docker-compose.yaml', 'Makefile', 'Jenkinsfile', 'Procfile', 'Vagrantfile'], cat: 'infra' },
  { ext: ['.sql', '.graphql', '.gql', '.proto', '.prisma', '.csv'], cat: 'data' },
  { ext: ['.sh', '.bash', '.ps1', '.bat'], cat: 'script' },
  { ext: ['.html', '.htm', '.css', '.scss', '.sass', '.less'], cat: 'markup' }
];

function getCategory(filePath) {
  const fileName = path.basename(filePath);
  const ext = path.extname(filePath).toLowerCase();
  
  for (const rule of CATEGORY_MAP) {
    if (rule.names && rule.names.includes(fileName)) return rule.cat;
    if (rule.ext && rule.ext.includes(ext)) return rule.cat;
  }
  
  if (filePath.includes('.github/workflows/')) return 'infra';
  if (filePath.includes('k8s/') || filePath.includes('kubernetes/')) return 'infra';
  
  return 'code';
}

function resolveImports(filePath, content, allFiles) {
  const imports = [];
  const ext = path.extname(filePath);
  const dir = path.dirname(filePath);
  
  if (ext === '.ts' || ext === '.tsx' || ext === '.js' || ext === '.jsx') {
    const regex = /import\s+.*?\s+from\s+['"](.*?)['"]|require\(['"](.*?)['"]\)/g;
    let match;
    while ((match = regex.exec(content)) !== null) {
      let impPath = match[1] || match[2];
      if (impPath.startsWith('.')) {
        let resolved = path.join(dir, impPath);
        // Try extensions
        const variants = ['', '.ts', '.tsx', '.js', '.jsx', '/index.ts', '/index.js', '/index.tsx', '/index.jsx'];
        for (const v of variants) {
          const p = (resolved + v).replace(/\\/g, '/').replace(/^\.\//, '');
          if (allFiles.has(p)) {
            imports.push(p);
            break;
          }
        }
      }
    }
  }
  return [...new Set(imports)];
}

try {
  process.chdir(projectRoot);
  const gitFiles = execSync('git ls-files', { encoding: 'utf8' }).split('\n').filter(Boolean);
  
  const files = [];
  const importMap = {};
  const allFilesSet = new Set(gitFiles.map(f => f.replace(/\\/g, '/')));

  for (const f of gitFiles) {
    const filePath = f.replace(/\\/g, '/');
    const category = getCategory(filePath);
    const lang = LANG_MAP[path.extname(filePath).toLowerCase()] || (path.basename(filePath) === 'Dockerfile' ? 'dockerfile' : 'unknown');
    
    // Basic filter
    if (EXCLUSIONS.some(pattern => {
      if (pattern.endsWith('/')) return filePath.startsWith(pattern) || filePath.includes('/' + pattern);
      if (pattern.startsWith('*.')) return filePath.endsWith(pattern.slice(1));
      return filePath === pattern || filePath.endsWith('/' + pattern);
    })) continue;

    const stats = fs.statSync(filePath);
    if (!stats.isFile()) continue;

    const content = fs.readFileSync(filePath, 'utf8');
    const sizeLines = content.split('\n').length;

    files.push({
      path: filePath,
      language: lang,
      sizeLines,
      fileCategory: category
    });

    if (category === 'code') {
      importMap[filePath] = resolveImports(filePath, content, allFilesSet);
    } else {
      importMap[filePath] = [];
    }
  }

  const result = {
    scriptCompleted: true,
    name: path.basename(projectRoot),
    rawDescription: '',
    readmeHead: '',
    languages: [...new Set(files.map(f => f.language))].sort(),
    frameworks: [], // Simplified for now
    files: files.sort((a, b) => a.path.localeCompare(b.path)),
    totalFiles: files.length,
    filteredByIgnore: 0,
    estimatedComplexity: files.length > 500 ? 'very-large' : files.length > 150 ? 'large' : files.length > 30 ? 'moderate' : 'small',
    importMap
  };

  // Try to get description from package.json
  if (fs.existsSync('package.json')) {
    const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    result.name = pkg.name || result.name;
    result.rawDescription = pkg.description || '';
  }

  // Try to get README head
  if (fs.existsSync('README.md')) {
    result.readmeHead = fs.readFileSync('README.md', 'utf8').split('\n').slice(0, 10).join('\n');
  }

  fs.writeFileSync(outputFile, JSON.stringify(result, null, 2));
  console.log(`Scan completed. Found ${files.length} files.`);
} catch (err) {
  console.error(err);
  process.exit(1);
}
