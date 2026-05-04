const fs = require('fs');
const crypto = require('crypto');

const data = JSON.parse(fs.readFileSync('g:/portal/student_rollno_email.json', 'utf8'));
let sql = `CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  prn_no TEXT UNIQUE,
  name TEXT,
  email TEXT UNIQUE,
  branch TEXT,
  college TEXT,
  role TEXT DEFAULT 'student',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

`;

for (const branch in data) {
  for (const s of data[branch]) {
    const prn = s.PRN_No;
    const name = s.Name.replace(/'/g, "''");
    const email = s.Email;
    const password = prn.slice(-6);
    const uuid = crypto.randomUUID();
    
    // Use proper quoting and formatting for SQL
    sql += `INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', '${uuid}', 'authenticated', 'authenticated', '${email}', crypt('${password}', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now()) ON CONFLICT (id) DO NOTHING;\n`;
    sql += `INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES ('${uuid}', '${prn}', '${name}', '${email}', '${branch}', 'MES Mukunddas College of Engineering') ON CONFLICT (email) DO NOTHING;\n`;
  }
}

fs.writeFileSync('g:/portal/scratch/import_users.sql', sql);
console.log('SQL generated successfully.');
