export const BRANCHES = [
  'Computer Engineering',
  'Information Technology',
  'E&TC',
  'CSE - ai&ml',
];

export const BRANCH_LABELS = {
  'Computer Engineering': 'Computer Engineering',
  'Information Technology': 'Information Technology',
  'E&TC': 'E&TC',
  'CSE - ai&ml': 'CSE - AI & ML',
  'AI & ML': 'AI & ML',
  'Electronics & Telecommunication': 'E&TC',
};

export const getBranchLabel = (branch) => BRANCH_LABELS[branch] || branch || 'N/A';

const BRANCH_ALIASES = {
  'Electronics & Telecommunication': 'E&TC',
  'AI & ML': 'CSE - ai&ml',
};

export const normalizeBranch = (branch) => BRANCH_ALIASES[branch] || branch || 'N/A';
