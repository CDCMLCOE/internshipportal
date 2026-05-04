DO $$
DECLARE
  new_id UUID;
BEGIN
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'nagavenikhil@gmail.com', crypt('372048', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111372048', 'NIKHIL LALASO NAGAVE', 'nagavenikhil@gmail.com', 'Electronics_and_Telecommunication_Engineering', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'kartikkatkar4@gmail.com', crypt('372049', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111372049', 'KARTIK RAJESH KATKAR', 'kartikkatkar4@gmail.com', 'Electronics_and_Telecommunication_Engineering', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'thakurshreyaprd@gmail.com', crypt('372050', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111372050', 'SHREYA SACHINSINGH THAKUR', 'thakurshreyaprd@gmail.com', 'Electronics_and_Telecommunication_Engineering', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'sayalichoudhari83@gmail.com', crypt('372051', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111372051', 'SAYALI DILIP CHOUDHARI', 'sayalichoudhari83@gmail.com', 'Electronics_and_Telecommunication_Engineering', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'kunalmandale007@gmail.com', crypt('372052', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111372052', 'KUNAL SUNIL MANDALE', 'kunalmandale007@gmail.com', 'Electronics_and_Telecommunication_Engineering', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'bidvevedika@gmail.com', crypt('372053', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111372053', 'VEDIKA VAMAN BIDVE', 'bidvevedika@gmail.com', 'Electronics_and_Telecommunication_Engineering', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'vaishnavisultane68@gmail.com', crypt('372054', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111372054', 'VAISHNAVI SOMINATH SULTANE', 'vaishnavisultane68@gmail.com', 'Electronics_and_Telecommunication_Engineering', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'pawarvishwajeet3883@gmail.com', crypt('372055', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111372055', 'VISHWAJEET SANJAY PAWAR', 'pawarvishwajeet3883@gmail.com', 'Electronics_and_Telecommunication_Engineering', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'rajurkarkshitija587@gmail.com', crypt('372056', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111372056', 'KSHITIJA VINOD RAJURKAR', 'rajurkarkshitija587@gmail.com', 'Electronics_and_Telecommunication_Engineering', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'dhawal.v.raut@gmail.com', crypt('372057', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111372057', 'DHAWAL VINAYAK RAUT', 'dhawal.v.raut@gmail.com', 'Electronics_and_Telecommunication_Engineering', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'spkulkarni2009@gmail.com', crypt('246001', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111246001', 'SHREYAS PRAVIN HARAL', 'spkulkarni2009@gmail.com', 'Information_Technology', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'yashrajrandhave82@gmail.com', crypt('246002', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111246002', 'YASHRAJ ARJUN RANDHAVE', 'yashrajrandhave82@gmail.com', 'Information_Technology', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'pandilwadmamta23@gmail.com', crypt('246003', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111246003', 'MAMTA YADAV PANDILWAD', 'pandilwadmamta23@gmail.com', 'Information_Technology', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'prajwalbiradar1114@gmail.com', crypt('246004', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111246004', 'PRAJWAL BASAVRAJ BIRADAR', 'prajwalbiradar1114@gmail.com', 'Information_Technology', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'pruthampatil@gmail.com', crypt('246005', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111246005', 'PRUTHA MANGESH PATIL', 'pruthampatil@gmail.com', 'Information_Technology', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'yashrajd13307@gmail.com', crypt('246006', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111246006', 'YASHRAJ MEGHASHYAM DESHMUKH', 'yashrajd13307@gmail.com', 'Information_Technology', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'piyushvaje.88@gmail.com', crypt('246007', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111246007', 'PIYUSH ANIL VAJE', 'piyushvaje.88@gmail.com', 'Information_Technology', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'archileegiri1605@gmail.com', crypt('246008', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111246008', 'ARCHILEE RAJENDRA GIRI', 'archileegiri1605@gmail.com', 'Information_Technology', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'sakshijawalkar765@gmail.com', crypt('246009', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111246009', 'SAKSHI VISHWANATH JAWALKAR', 'sakshijawalkar765@gmail.com', 'Information_Technology', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'shreyashkhopade05@gmail.com', crypt('246010', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111246010', 'SHREYASH VIJAY KHOPADE', 'shreyashkhopade05@gmail.com', 'Information_Technology', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'omaske014@gmail.com', crypt('246011', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111246011', 'OM KISHOR MASKE', 'omaske014@gmail.com', 'Information_Technology', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'akshainee2008@gmail.com', crypt('246012', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111246012', 'AKSHAINEE VIKRANT MANE', 'akshainee2008@gmail.com', 'Information_Technology', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'sarveshkolhe14@gmail.com', crypt('246013', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111246013', 'SARVESH PRAVIN KOLHE', 'sarveshkolhe14@gmail.com', 'Information_Technology', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'ankitaghag994@gmail.com', crypt('246014', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111246014', 'ANKITA ANANTA GHAG', 'ankitaghag994@gmail.com', 'Information_Technology', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'chilkavani@gmail.com', crypt('246015', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111246015', 'AVANI VINAYAK CHILKA', 'chilkavani@gmail.com', 'Information_Technology', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'shrutikapisarwekar@gmail.com', crypt('246016', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111246016', 'SHRUTIKA SHRIKANT PISARWEKAR', 'shrutikapisarwekar@gmail.com', 'Information_Technology', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'pranjalsuryawanshi1324@gmail.com', crypt('246017', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111246017', 'PRANJAL SANJAYKUMAR SURYAWANSHI', 'pranjalsuryawanshi1324@gmail.com', 'Information_Technology', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'samiksha.maloo24@gmail.com', crypt('246018', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111246018', 'SAMIKSHA PAVAN MALOO', 'samiksha.maloo24@gmail.com', 'Information_Technology', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'manastonde2007@gmail.com', crypt('246019', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111246019', 'MANAS BHAGWAN TONDE', 'manastonde2007@gmail.com', 'Information_Technology', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'shreyapharate44@gmail.com', crypt('246020', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111246020', 'SHREYA MANOJ PHARATE', 'shreyapharate44@gmail.com', 'Information_Technology', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'tanayarathi06@gmail.com', crypt('246021', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111246021', 'TANAYA SHRIKANT RATHI', 'tanayarathi06@gmail.com', 'Information_Technology', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'anmolv.kamble07@gmail.com', crypt('246022', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111246022', 'ANMOL VINAY KAMBLE', 'anmolv.kamble07@gmail.com', 'Information_Technology', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'aryanpimpalkar006@gmail.com', crypt('246023', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111246023', 'ARYAN MANGESH PIMPALKAR', 'aryanpimpalkar006@gmail.com', 'Information_Technology', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'patalyantrindrayani@gmail.com', crypt('246024', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111246024', 'INDRAYANI ANIL PATALYANTRI', 'patalyantrindrayani@gmail.com', 'Information_Technology', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'nehakalse88@gmail.com', crypt('246025', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111246025', 'NEHA DHANAJI KALSE', 'nehakalse88@gmail.com', 'Information_Technology', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'adityakhade542@gmail.com', crypt('246026', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111246026', 'ADITYA SHRIMANT KHADE', 'adityakhade542@gmail.com', 'Information_Technology', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'samruddhisawant024@gmail.com', crypt('246027', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111246027', 'SAMRUDDHI SANJAY SAWANT', 'samruddhisawant024@gmail.com', 'Information_Technology', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'jadhavsg621@gmail.com', crypt('246028', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111246028', 'ROHINI SANJAY JADHAV', 'jadhavsg621@gmail.com', 'Information_Technology', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'prasoonlad36@gmail.com', crypt('246029', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111246029', 'PRASOON SANDIP LAD', 'prasoonlad36@gmail.com', 'Information_Technology', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'himakshigorakhnathshinde@gmail.com', crypt('246030', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111246030', 'HIMAKSHI GORAKHNATH SHINDE', 'himakshigorakhnathshinde@gmail.com', 'Information_Technology', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'sumitrajole125@gmail.com', crypt('246031', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111246031', 'SHRUTESH MARUTI RAJOLE', 'sumitrajole125@gmail.com', 'Information_Technology', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'anaykulkarni673@gmail.com', crypt('246032', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111246032', 'ANAY UMESH KULKARNI', 'anaykulkarni673@gmail.com', 'Information_Technology', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'atharvmore991@gmail.com', crypt('246033', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111246033', 'ATHARV KALYAN MORE', 'atharvmore991@gmail.com', 'Information_Technology', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'mayureshbhandare1387@gmail.com', crypt('246034', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111246034', 'MAYURESH VINAYAK BHANDARE', 'mayureshbhandare1387@gmail.com', 'Information_Technology', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'pawarnilesh882@gmail.com', crypt('246035', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111246035', 'NITESH SHAM PAWAR', 'pawarnilesh882@gmail.com', 'Information_Technology', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'yc324382@gmail.com', crypt('246036', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111246036', 'YASH DEVIDAS CHAVAN', 'yc324382@gmail.com', 'Information_Technology', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'dhirajdevare4546@gmail.com', crypt('246037', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111246037', 'DHIRAJ MANGESH DEVARE', 'dhirajdevare4546@gmail.com', 'Information_Technology', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'pritipawase025@gmail.com', crypt('246038', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111246038', 'PRITI RAJARAM PAWASE', 'pritipawase025@gmail.com', 'Information_Technology', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'kalshettyrakshita25@gmail.com', crypt('246039', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111246039', 'RAKSHATA NAGARAJ KALSHETTY', 'kalshettyrakshita25@gmail.com', 'Information_Technology', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'aditya.s.varpe@gmail.com', crypt('246040', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111246040', 'ADITYA SACHIN VARPE', 'aditya.s.varpe@gmail.com', 'Information_Technology', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'srushitipati233@gmail.com', crypt('246041', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111246041', 'SRUSHTI DILIP PATIL', 'srushitipati233@gmail.com', 'Information_Technology', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'jadhavtanay927@gmail.com', crypt('246042', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111246042', 'TANAY RUPESH JADHAV', 'jadhavtanay927@gmail.com', 'Information_Technology', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'tanhk631@gmail.com', crypt('246043', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111246043', 'HARSH VIPUL TANK', 'tanhk631@gmail.com', 'Information_Technology', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'harshadnagave96@gmail.com', crypt('246044', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111246044', 'HARSHAD SANDIP NAGAVE', 'harshadnagave96@gmail.com', 'Information_Technology', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'patilananya353@gmail.com', crypt('246045', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111246045', 'ANANNYA ANIRUDHA PATIL', 'patilananya353@gmail.com', 'Information_Technology', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'Varunihuddar@gmail.com', crypt('246046', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111246046', 'VARUNI VISHAL HUDDAR', 'Varunihuddar@gmail.com', 'Information_Technology', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'kanadeyuvraj40@gmail.com', crypt('246047', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111246047', 'YUVRAJ KAILAS KANADE', 'kanadeyuvraj40@gmail.com', 'Information_Technology', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'omkarnikam794@gmail.com', crypt('246048', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111246048', 'OMKAR KISHOR RAWAL', 'omkarnikam794@gmail.com', 'Information_Technology', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'prashantbitake12@gmail.com', crypt('246049', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111246049', 'PRASHANT BHARAT BITAKE', 'prashantbitake12@gmail.com', 'Information_Technology', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'harshagharu108@gmail.com', crypt('246050', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111246050', 'HARSHA SANJEEV GHARU', 'harshagharu108@gmail.com', 'Information_Technology', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
END;
$$;