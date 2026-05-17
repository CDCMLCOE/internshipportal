const PENDING_APPROVALS_KEY = 'portal.pendingApprovals.v1';
const PENDING_APPROVALS_EVENT = 'portal:pending-approvals-updated';

export const pendingApprovalsEventName = PENDING_APPROVALS_EVENT;

export const getPendingApprovals = () => {
  try {
    const parsed = JSON.parse(window.localStorage.getItem(PENDING_APPROVALS_KEY) || '[]');
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

export const setPendingApprovals = (approvals) => {
  window.localStorage.setItem(PENDING_APPROVALS_KEY, JSON.stringify(approvals));
  window.dispatchEvent(new Event(PENDING_APPROVALS_EVENT));
};

export const addPendingApproval = (approval) => {
  const current = getPendingApprovals();
  setPendingApprovals([...current, approval]);
};
