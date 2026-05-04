import React from 'react';

const AdminUsers = () => {
  const users = [
    { id: 1, name: 'Admin User', email: 'admin@mlcoe.in', role: 'Super Admin', status: 'Active' },
    { id: 2, name: 'John Doe', email: 'john@mespune.in', role: 'Student', status: 'Active' },
    { id: 3, name: 'Jane Smith', email: 'jane@mespune.in', role: 'Student', status: 'Active' },
    { id: 4, name: 'Staff Member', email: 'staff@mlcoe.in', role: 'Staff', status: 'Inactive' },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-heading font-bold uppercase tracking-tight">User Management</h2>
        <p className="text-mistral-black/60 font-medium">Manage system users, permissions, and account status.</p>
      </div>

      <div className="bg-brand-ivory border border-mistral-black/10 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-mistral-black/5 bg-mistral-black/5 flex justify-between items-center">
          <span className="text-[10px] uppercase font-bold tracking-widest text-mistral-black/40">Registered Users</span>
          <button className="text-[10px] uppercase font-bold tracking-widest text-mistral-orange hover:underline">Add User</button>
        </div>
        <div className="divide-y divide-mistral-black/5">
          {users.map((user) => (
            <div key={user.id} className="p-4 flex items-center justify-between hover:bg-mistral-orange/5 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-mistral-black/10 rounded-full flex items-center justify-center font-bold text-sm text-mistral-black/60">
                  {user.name[0]}
                </div>
                <div>
                  <p className="font-bold text-sm uppercase tracking-tight">{user.name}</p>
                  <p className="text-xs text-mistral-black/60">{user.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-8">
                <div className="hidden md:block">
                  <p className="text-[10px] uppercase font-bold text-mistral-black/40 mb-1">Role</p>
                  <p className="text-xs font-bold">{user.role}</p>
                </div>
                <div className="hidden md:block">
                  <p className="text-[10px] uppercase font-bold text-mistral-black/40 mb-1">Status</p>
                  <span className={`text-[10px] uppercase font-bold ${user.status === 'Active' ? 'text-green-600' : 'text-red-600'}`}>
                    {user.status}
                  </span>
                </div>
                <button className="p-2 hover:bg-mistral-black hover:text-white transition-colors border border-mistral-black/5">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminUsers;
