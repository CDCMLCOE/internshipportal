DO $$
DECLARE
  new_id UUID;
BEGIN
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'kayandevedashree6@gmail.com', crypt('911001', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111911001', 'VEDASHREE KIRAN KAYANDE', 'kayandevedashree6@gmail.com', 'AI_ML', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'phadsakshi54@gmail.com', crypt('911002', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111911002', 'SAKSHI BALAJI PHAD', 'phadsakshi54@gmail.com', 'AI_ML', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'razadarekari25@gmail.com', crypt('911003', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111911003', 'RAZA WAHAB DAREKAR', 'razadarekari25@gmail.com', 'AI_ML', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'piyushmazire07@gmail.com', crypt('911004', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111911004', 'PIYUSH SHANKAR MAZIRE', 'piyushmazire07@gmail.com', 'AI_ML', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'amoghrodge@gmail.com', crypt('911005', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111911005', 'AMOGH PRABHAKAR RODGE', 'amoghrodge@gmail.com', 'AI_ML', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'gourishkatkar@gmail.com', crypt('911006', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111911006', 'GOURISH ATUL KATKAR', 'gourishkatkar@gmail.com', 'AI_ML', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'pran182006@gmail.com', crypt('911007', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111911007', 'PRANAV DHANANJAY KADAM', 'pran182006@gmail.com', 'AI_ML', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'naybalkaran07@gmail.com', crypt('911008', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111911008', 'KARAN CHANDRAKANT NAYBAL', 'naybalkaran07@gmail.com', 'AI_ML', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'ygujar631@gmail.com', crypt('911009', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111911009', 'YASH KAILAS GUJAR', 'ygujar631@gmail.com', 'AI_ML', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'samruddhipawar0214@gmail.com', crypt('911010', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111911010', 'SAMRUDDHI KISHOR PAWAR', 'samruddhipawar0214@gmail.com', 'AI_ML', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'namratachavan36524@gmail.com', crypt('911011', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111911011', 'NAMRATA SANTOSH CHAVAN', 'namratachavan36524@gmail.com', 'AI_ML', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'aryanatkore@gmail.com', crypt('911012', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111911012', 'ARYAN VIJAY ATKORE', 'aryanatkore@gmail.com', 'AI_ML', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'pranaypatil1724@gmail.com', crypt('911013', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111911013', 'PRANAY SUNIL PATIL', 'pranaypatil1724@gmail.com', 'AI_ML', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'pranavkd2007@gmail.com', crypt('911014', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111911014', 'PRANAV RAJENDRA KADAM', 'pranavkd2007@gmail.com', 'AI_ML', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'pawaraditya1505@gmail.com', crypt('911015', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111911015', 'ADITYA SANDIPAN PAWAR', 'pawaraditya1505@gmail.com', 'AI_ML', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'varadvinayakva2@gmail.com', crypt('911016', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111911016', 'VARAD VINAYAK ATHAVALE', 'varadvinayakva2@gmail.com', 'AI_ML', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'temghareaditee@gmail.com', crypt('911017', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111911017', 'ADITEE RAVINDRA TEMGHARE', 'temghareaditee@gmail.com', 'AI_ML', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'pranavsuryawanshi9765@gmail.com', crypt('911018', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111911018', 'PRANAV SHAHAJI SURYAWANSHI', 'pranavsuryawanshi9765@gmail.com', 'AI_ML', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'gunjankanade2@gmail.com', crypt('911019', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111911019', 'GUNJAN SUNIL KANADE', 'gunjankanade2@gmail.com', 'AI_ML', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'dhorepushpa171@gmail.com', crypt('911020', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111911020', 'SHRIKANT SHIVLAL DHORE', 'dhorepushpa171@gmail.com', 'AI_ML', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'gadeshruti2020@gmail.com', crypt('911021', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111911021', 'SHRAVANI ANAND GADE', 'gadeshruti2020@gmail.com', 'AI_ML', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'sahilkinikar7@gmail.com', crypt('911022', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111911022', 'SAHIL ROHIT KINIKAR', 'sahilkinikar7@gmail.com', 'AI_ML', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'mangalgadhave1985@gmail.com', crypt('911023', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111911023', 'ANJALI SANTOSH GADHAVE', 'mangalgadhave1985@gmail.com', 'AI_ML', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'tukotwal0806@gmail.com', crypt('911024', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111911024', 'TEJASWINI UMESH KOTWAL', 'tukotwal0806@gmail.com', 'AI_ML', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'varadchandras@gmail.com', crypt('911025', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111911025', 'VARAD SANJAY CHANDRAS', 'varadchandras@gmail.com', 'AI_ML', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'technicalpratham012@gmail.com', crypt('911026', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111911026', 'PRATHAMESH LOKESH GARODE', 'technicalpratham012@gmail.com', 'AI_ML', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'sarveshsanghai.1720006@gmail.com', crypt('911027', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111911027', 'SARVESH MAHAVIR SANGHAI', 'sarveshsanghai.1720006@gmail.com', 'AI_ML', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'nandinilandge79@gmail.com', crypt('911028', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111911028', 'NANDINI GOPAL LANDGE', 'nandinilandge79@gmail.com', 'AI_ML', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'riteshvalsange@gmail.com', crypt('911029', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111911029', 'RITESH BASAWARAJ VALSANGE', 'riteshvalsange@gmail.com', 'AI_ML', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'vedikadaundkar@gmail.com', crypt('911030', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111911030', 'VEDIKA RAVINDRA DAUNDKAR', 'vedikadaundkar@gmail.com', 'AI_ML', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'sujalgawade501@gmail.com', crypt('911031', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111911031', 'SUJAL LAXMAN GAWADE', 'sujalgawade501@gmail.com', 'AI_ML', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'manasidhupkar@gmail.com', crypt('911032', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111911032', 'MANASI SANJAY DHUPKAR', 'manasidhupkar@gmail.com', 'AI_ML', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'suryakarsrushti@gmail.com', crypt('911033', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111911033', 'SRUSHTI SANDIP SURYAKAR', 'suryakarsrushti@gmail.com', 'AI_ML', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'neevthakur18@gmail.com', crypt('911034', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111911034', 'NEEV LAXMAN THAKUR', 'neevthakur18@gmail.com', 'AI_ML', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'sanika.supekar07@gmail.com', crypt('911035', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111911035', 'SANIKA SACHIN SUPEKAR', 'sanika.supekar07@gmail.com', 'AI_ML', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'anushkasalve456@gmail.com', crypt('911036', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111911036', 'ANUSHKA VIJAY SALVE', 'anushkasalve456@gmail.com', 'AI_ML', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'ghugeroshani3@gmail.com', crypt('911037', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111911037', 'ROSHANI SUNIL GHUGE', 'ghugeroshani3@gmail.com', 'AI_ML', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'girija15022008@gmail.com', crypt('911038', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111911038', 'GIRIJA RAHUL KSHIRSAGAR', 'girija15022008@gmail.com', 'AI_ML', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'gaikwadhariom46@gmail.com', crypt('911039', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111911039', 'HARIOM ASHOK GAIKWAD', 'gaikwadhariom46@gmail.com', 'AI_ML', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'devyani286@gmail.com', crypt('911040', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111911040', 'DEVYANI NAGRAM JADHAV', 'devyani286@gmail.com', 'AI_ML', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'adityathube2299@gmail.com', crypt('911041', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111911041', 'ADITYA GIRISH THUBE', 'adityathube2299@gmail.com', 'AI_ML', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'govindugandhi@gmail.com', crypt('911042', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111911042', 'GOVIND UDAY GANDHI', 'govindugandhi@gmail.com', 'AI_ML', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'sinheprem1@gmail.com', crypt('911043', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111911043', 'PREM MOHAN SINHE', 'sinheprem1@gmail.com', 'AI_ML', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'anjalishinde2007@gmail.com', crypt('911044', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111911044', 'ANJALI MUKUND SHINDE', 'anjalishinde2007@gmail.com', 'AI_ML', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'riddhipimpale227@gmail.com', crypt('911045', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111911045', 'RIDDHI SHAILESH PIMPALE', 'riddhipimpale227@gmail.com', 'AI_ML', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'dnyanratnamathpati@gmail.com', crypt('911046', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111911046', 'DNYANRATNA CHANDRESHKHAR MATHPATI', 'dnyanratnamathpati@gmail.com', 'AI_ML', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'sakatvinit9823@gmail.com', crypt('911047', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111911047', 'VINEET NITIN SAKAT', 'sakatvinit9823@gmail.com', 'AI_ML', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'aniketpandharkar953@gmail.com', crypt('911048', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111911048', 'ANIKET RAJENDRA PANDHARKAR', 'aniketpandharkar953@gmail.com', 'AI_ML', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'aadityamohalkar@gmail.com', crypt('911049', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111911049', 'DATTATRAY LAXMAN MOHALKAR', 'aadityamohalkar@gmail.com', 'AI_ML', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'abhaywalke96@gmail.com', crypt('911050', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111911050', 'ABHAY ANKUSH WALKE', 'abhaywalke96@gmail.com', 'AI_ML', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'shrikantjadhav0702@gmail.com', crypt('911051', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111911051', 'SHRIKANT MAHADEV JADHAV', 'shrikantjadhav0702@gmail.com', 'AI_ML', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'samarthtakawale0@gmail.com', crypt('911052', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111911052', 'SAMARTH MAHESH TAKAWALE', 'samarthtakawale0@gmail.com', 'AI_ML', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'onkarikadam820@gmail.com', crypt('911053', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111911053', 'ONKAR RAVSO KADAM', 'onkarikadam820@gmail.com', 'AI_ML', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'jainabkazi575@gmail.com', crypt('911054', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111911054', 'JAINAB NAZIM KAZI', 'jainabkazi575@gmail.com', 'AI_ML', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'nimbhareayush123@gmail.com', crypt('911055', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111911055', 'AYUSH RAVINDRA NIMBHARE', 'nimbhareayush123@gmail.com', 'AI_ML', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'niranjantakalkar@gmail.com', crypt('911056', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111911056', 'NIRANJAN NANDU TAKALKAR', 'niranjantakalkar@gmail.com', 'AI_ML', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'nandinigurram211@gmail.com', crypt('911057', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111911057', 'NANDINI KRISHNA GURRAM', 'nandinigurram211@gmail.com', 'AI_ML', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'parischaudhari130@gmail.com', crypt('911058', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111911058', 'PARIS RAJENDRA CHAUDHARI', 'parischaudhari130@gmail.com', 'AI_ML', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'safinaansari710@gmail.com', crypt('911059', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111911059', 'SAFEENA SAHABJAN ANSARI', 'safinaansari710@gmail.com', 'AI_ML', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'rajputrahu18730@gmail.com', crypt('911060', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111911060', 'RAHUL KISAN BHENDARWAL', 'rajputrahu18730@gmail.com', 'AI_ML', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
END;
$$;