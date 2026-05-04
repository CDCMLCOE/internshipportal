const fs = require('fs');
const crypto = require('crypto');

const data = JSON.parse(fs.readFileSync('g:/portal/student_rollno_email.json', 'utf8'));
let all = [];
for (const branch in data) {
  for (const s of data[branch]) {
    all.push({ ...s, branch });
  }
}

const batchSize = 60;
for (let i = 0; i < all.length; i += batchSize) {
  const batch = all.slice(i, i + batchSize);
  let sql = 'DO $$\nDECLARE\n  new_id UUID;\nBEGIN\n';
  
  for (const s of batch) {
    const prn = s.PRN_No;
    const name = s.Name.replace(/'/g, "''");
    const email = s.Email;
    const password = prn.slice(-6);
    
    sql += `  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', '${email}', crypt('${password}', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '${prn}', '${name}', '${email}', '${s.branch}', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;\n`;
  }
  
  sql += 'END;\n$$;';
  fs.writeFileSync(`g:/portal/scratch/batch_${i / batchSize}.sql`, sql);
}
console.log('Batches generated.');
