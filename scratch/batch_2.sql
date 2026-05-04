DO $$
DECLARE
  new_id UUID;
BEGIN
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'nikhilshinde5471@gmail.com', crypt('245052', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111245052', 'NIKHIL SUDHAKAR SHINDE', 'nikhilshinde5471@gmail.com', 'Computer_Engineering', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'tanishkagupte06@gmail.com', crypt('245053', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111245053', 'TANISHKA ROHIDAS GUPTE', 'tanishkagupte06@gmail.com', 'Computer_Engineering', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'yash1001p@gmail.com', crypt('245054', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111245054', 'YASH SANDIP PAWAR', 'yash1001p@gmail.com', 'Computer_Engineering', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'watkarsanika43@gmail.com', crypt('245055', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111245055', 'SANIKA SAMBHAJI WATKAR', 'watkarsanika43@gmail.com', 'Computer_Engineering', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'mitkarwa21@gmail.com', crypt('245056', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111245056', 'MIT SHRIKANT KARWA', 'mitkarwa21@gmail.com', 'Computer_Engineering', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'katodomoon69@gmail.com', crypt('245057', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111245057', 'ANUSHKA GANESH RAUT', 'katodomoon69@gmail.com', 'Computer_Engineering', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'sarthakpaul397@gmail.com', crypt('245058', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111245058', 'SARTHAK HARIBHAU PAUL', 'sarthakpaul397@gmail.com', 'Computer_Engineering', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'ruchabhalerao@gmail.com', crypt('245059', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111245059', 'RUCHA SACHIN BHALERAO', 'ruchabhalerao@gmail.com', 'Computer_Engineering', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'vanitabhagat750@gmail.com', crypt('245060', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111245060', 'SAKSHI SHANKAR BHAGAT', 'vanitabhagat750@gmail.com', 'Computer_Engineering', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'shubhamrajput67413@gmail.com', crypt('245061', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111245061', 'SHUBHAM DIPAK CHUNGADE', 'shubhamrajput67413@gmail.com', 'Computer_Engineering', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'karunasairi@gmail.com', crypt('245062', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111245062', 'KARUNASHREE RAMPRASAD SAIRI', 'karunasairi@gmail.com', 'Computer_Engineering', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'mohitkhandelwal2007@gmail.com', crypt('245063', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111245063', 'MOHIT AMIT KHANDELWAL', 'mohitkhandelwal2007@gmail.com', 'Computer_Engineering', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'chavanumakant63@gmail.com', crypt('245064', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111245064', 'UMAKANT ARJUN CHAVAN', 'chavanumakant63@gmail.com', 'Computer_Engineering', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'anushka2042@gmail.com', crypt('372001', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111372001', 'ANUSHKA ANAND KULKARNI', 'anushka2042@gmail.com', 'Electronics_and_Telecommunication_Engineering', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'manasvigaiwad0598@gmail.com', crypt('372002', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111372002', 'MANASVI PRAFUL GAIKWAD', 'manasvigaiwad0598@gmail.com', 'Electronics_and_Telecommunication_Engineering', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'choudharylaxmi924@gmail.com', crypt('372003', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111372003', 'LAXMI KANARAM CHOUDHARY', 'choudharylaxmi924@gmail.com', 'Electronics_and_Telecommunication_Engineering', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'malharkhadikar@gmail.com', crypt('372004', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111372004', 'MALHAR SAMEER KHADKIKAR', 'malharkhadikar@gmail.com', 'Electronics_and_Telecommunication_Engineering', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'prashanthadpad233@gmail.com', crypt('372005', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111372005', 'PRASHANT GAJANAN HADPAD', 'prashanthadpad233@gmail.com', 'Electronics_and_Telecommunication_Engineering', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'kshitijpradhan248@gmail.com', crypt('372006', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111372006', 'KSHITIJ ABHIMANYU PRADHAN', 'kshitijpradhan248@gmail.com', 'Electronics_and_Telecommunication_Engineering', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'dhruvodedara2007@gmail.com', crypt('372007', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111372007', 'ODEDARA DHRUV GOVINDBHAI', 'dhruvodedara2007@gmail.com', 'Electronics_and_Telecommunication_Engineering', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'ninaleniranjan0177@gmail.com', crypt('372008', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111372008', 'NIRANJAN ASHRUBA NINALE', 'ninaleniranjan0177@gmail.com', 'Electronics_and_Telecommunication_Engineering', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'mohilimkamble@gmail.com', crypt('372009', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111372009', 'MOHIL MAHENDRA KAMBLE', 'mohilimkamble@gmail.com', 'Electronics_and_Telecommunication_Engineering', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'Madanbhati2050@gmail.com', crypt('372010', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111372010', 'MADAN RAMESH BHATI', 'Madanbhati2050@gmail.com', 'Electronics_and_Telecommunication_Engineering', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'ritikakelgandre@gmail.com', crypt('372011', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111372011', 'RITIKA NANASAHEB KELGANDRE', 'ritikakelgandre@gmail.com', 'Electronics_and_Telecommunication_Engineering', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'sarthakiborkar727@gmail.com', crypt('372012', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111372012', 'SARTHAKI SAMEER BORKAR', 'sarthakiborkar727@gmail.com', 'Electronics_and_Telecommunication_Engineering', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'shubhrakshirsagar2@gmail.com', crypt('372013', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111372013', 'SHUBHRA SANTOSH KSHIRSAGAR', 'shubhrakshirsagar2@gmail.com', 'Electronics_and_Telecommunication_Engineering', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'ranveermarane@gmail.com', crypt('372014', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111372014', 'RANVEER RAJESH MARNE', 'ranveermarane@gmail.com', 'Electronics_and_Telecommunication_Engineering', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'revti.sarde@gmail.com', crypt('372015', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111372015', 'REVATI PADMAKAR KAPSE', 'revti.sarde@gmail.com', 'Electronics_and_Telecommunication_Engineering', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'shantanunavale73@gmail.com', crypt('372016', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111372016', 'SHANTANU SANDEEP NAVALE', 'shantanunavale73@gmail.com', 'Electronics_and_Telecommunication_Engineering', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'kadamdnyaneshwari25@gmail.com', crypt('372017', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111372017', 'DNYANESHWARI UMESH KADAM', 'kadamdnyaneshwari25@gmail.com', 'Electronics_and_Telecommunication_Engineering', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'radhikajoshi.0807@gmail.com', crypt('372018', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111372018', 'RADHIKA SUHAS JOSHI', 'radhikajoshi.0807@gmail.com', 'Electronics_and_Telecommunication_Engineering', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'survekomal6478@gmail.com', crypt('372019', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111372019', 'KOMAL PRAKASH SURVE', 'survekomal6478@gmail.com', 'Electronics_and_Telecommunication_Engineering', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'shraddhadpkaraijagi17@gmail.com', crypt('372020', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111372020', 'SHRADDHA DAYANAND KARAJAGI', 'shraddhadpkaraijagi17@gmail.com', 'Electronics_and_Telecommunication_Engineering', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'rushikeshbbujale10@gmail.com', crypt('372021', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111372021', 'RUSHIKESH BALAJI BHUJBALE', 'rushikeshbbujale10@gmail.com', 'Electronics_and_Telecommunication_Engineering', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'samarthmurgulwar546@gmail.com', crypt('372022', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111372022', 'SAMARTH JITENDRA MURGULWAR', 'samarthmurgulwar546@gmail.com', 'Electronics_and_Telecommunication_Engineering', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'nalawadebapu823@gmail.com', crypt('372023', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111372023', 'OMKAR BAPU NALAWADE', 'nalawadebapu823@gmail.com', 'Electronics_and_Telecommunication_Engineering', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'kaustubhdisale21@gmail.com', crypt('372024', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111372024', 'KAUSTUBH BHARAT DISALE', 'kaustubhdisale21@gmail.com', 'Electronics_and_Telecommunication_Engineering', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'aaryan.salunke3907@gmail.com', crypt('372025', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111372025', 'AARYAN ASHOK SALUNKE', 'aaryan.salunke3907@gmail.com', 'Electronics_and_Telecommunication_Engineering', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'rahulshinde4807@gmail.com', crypt('372026', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111372026', 'RAHUL RAMDAS SHINDE', 'rahulshinde4807@gmail.com', 'Electronics_and_Telecommunication_Engineering', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'sohamgore2007@gmail.com', crypt('372027', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111372027', 'SOHAM RAJKUMAR GORE', 'sohamgore2007@gmail.com', 'Electronics_and_Telecommunication_Engineering', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'yashchandelkar1@gmail.com', crypt('372028', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111372028', 'YASH NITIN CHANDELKAR', 'yashchandelkar1@gmail.com', 'Electronics_and_Telecommunication_Engineering', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'kalearya9763@gmail.com', crypt('372029', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111372029', 'AARYA SACHIN KALE', 'kalearya9763@gmail.com', 'Electronics_and_Telecommunication_Engineering', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'sangitachalake420@gmail.com', crypt('372030', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111372030', 'SANGITA GANPAT CHALAKE', 'sangitachalake420@gmail.com', 'Electronics_and_Telecommunication_Engineering', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'vajesoham1@gmail.com', crypt('372031', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111372031', 'SOHAM RAJENDRA VAJE', 'vajesoham1@gmail.com', 'Electronics_and_Telecommunication_Engineering', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'prasadchavan1448@gmail.com', crypt('372032', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111372032', 'PRASAD SACHIN CHAVAN', 'prasadchavan1448@gmail.com', 'Electronics_and_Telecommunication_Engineering', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'gawadeuttu43@gmail.com', crypt('372033', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111372033', 'UTKARSHA BALASAHEB GAWADE', 'gawadeuttu43@gmail.com', 'Electronics_and_Telecommunication_Engineering', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'yashnalawade0007@gmail.com', crypt('372034', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111372034', 'YASH SANTOSH NALAWADE', 'yashnalawade0007@gmail.com', 'Electronics_and_Telecommunication_Engineering', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'neelaherrao@gmail.com', crypt('372035', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111372035', 'NEEL RAVINDRA AHERRAO', 'neelaherrao@gmail.com', 'Electronics_and_Telecommunication_Engineering', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'roshanmanolkar7@gmail.com', crypt('372036', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111372036', 'MANOLKAR ROSHAN ABHAY', 'roshanmanolkar7@gmail.com', 'Electronics_and_Telecommunication_Engineering', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'janavichikane2007@gmail.com', crypt('372037', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111372037', 'JANAVI UTTAM CHIKANE', 'janavichikane2007@gmail.com', 'Electronics_and_Telecommunication_Engineering', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'shreyasbhavar2007@gmail.com', crypt('372038', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111372038', 'SHREYAS RAJARAM BHAVAR', 'shreyasbhavar2007@gmail.com', 'Electronics_and_Telecommunication_Engineering', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'tanishquayeole1@gmail.com', crypt('372039', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111372039', 'TANISHQUA NILESH YEOLE', 'tanishquayeole1@gmail.com', 'Electronics_and_Telecommunication_Engineering', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'dhruvpawar879@gmail.com', crypt('372040', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111372040', 'DHRUV PANKAJ PAWAR', 'dhruvpawar879@gmail.com', 'Electronics_and_Telecommunication_Engineering', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'vedantingale247@gmail.com', crypt('372041', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111372041', 'VEDANT DEVDAS INGALE', 'vedantingale247@gmail.com', 'Electronics_and_Telecommunication_Engineering', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'sakshi21032007@gmail.com', crypt('372042', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111372042', 'SAKSHI RAMCHANDRA SHINDE', 'sakshi21032007@gmail.com', 'Electronics_and_Telecommunication_Engineering', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'gawaipiyush44@gmail.com', crypt('372043', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111372043', 'PIYUSH KAILAS GAWAI', 'gawaipiyush44@gmail.com', 'Electronics_and_Telecommunication_Engineering', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'adityakarande215@gmail.com', crypt('372044', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111372044', 'ADITYA ANANDA KARANDE', 'adityakarande215@gmail.com', 'Electronics_and_Telecommunication_Engineering', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'piyushsonar1821@gmail.com', crypt('372045', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111372045', 'PIYUSH ANAND SONAR', 'piyushsonar1821@gmail.com', 'Electronics_and_Telecommunication_Engineering', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'abhimanshinde506@gmail.com', crypt('372046', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111372046', 'ABHIMAN PRADEEP SHINDE', 'abhimanshinde506@gmail.com', 'Electronics_and_Telecommunication_Engineering', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'dnair087@gmail.com', crypt('372047', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111372047', 'DHRUVA MANOJ NAIR', 'dnair087@gmail.com', 'Electronics_and_Telecommunication_Engineering', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
END;
$$;