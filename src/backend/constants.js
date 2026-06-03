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
};

export const getBranchLabel = (branch) => BRANCH_LABELS[branch] || branch || 'N/A';
