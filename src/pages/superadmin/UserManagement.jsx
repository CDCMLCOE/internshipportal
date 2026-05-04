import React from 'react';
import { motion } from 'framer-motion';

const UserManagement = () => {
  const users = [
    { id: 1, name: 'Main Superadmin', email: 'superadmin@mlcoe.in', role: 'Super Admin', status: 'Active' },
    { id: 4, name: 'System Admin', email: 'sysadmin@mlcoe.in', role: 'Super Admin', status: 'Active' },
  ];

  return (
    <div className="space-y-10">
      <div className="border-b border-mistral-black/10 pb-8">
        <h3 className="font-portal font-bold text-lg tracking-tight text-mistral-orange italic mb-2">
          # User Management
        </h3>
        <h2 className="text-4xl font-heading font-bold uppercase tracking-tighter text-mistral-black">System Access</h2>
        <p className="text-mistral-black/60 font-medium font-sans mt-2">Manage system users, permissions, and account status across the entire portal.</p>
      </div>

      <div className="bg-brand-ivory border border-mistral-black/10 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-mistral-black/5 bg-mistral-black/5 flex justify-between items-center">
          <span className="text-[10px] uppercase font-bold tracking-widest text-mistral-black/40">Registered Users</span>
          <button className="text-[10px] uppercase font-bold tracking-widest text-mistral-orange hover:underline font-heading">Add User</button>
        </div>
        <div className="divide-y divide-mistral-black/5">
          {users.map((user) => (
            <div key={user.id} className="p-4 flex items-center justify-between hover:bg-mistral-orange/5 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-mistral-black rounded-full flex items-center justify-center font-bold text-sm text-white">
                  {user.name[0]}
                </div>
                <div>
                  <p className="font-bold text-sm uppercase tracking-tight text-mistral-black">{user.name}</p>
                  <p className="text-xs text-mistral-black/60 font-sans">{user.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-8">
                <div className="hidden md:block">
                  <p className="text-[10px] uppercase font-bold text-mistral-black/40 mb-1 tracking-widest">Role</p>
                  <p className="text-xs font-bold text-mistral-black">{user.role}</p>
                </div>
                <div className="hidden md:block">
                  <p className="text-[10px] uppercase font-bold text-mistral-black/40 mb-1 tracking-widest">Status</p>
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

export default UserManagement;
