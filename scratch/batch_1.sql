DO $$
DECLARE
  new_id UUID;
BEGIN
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'jayantmishra808@gmail.com', crypt('911061', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111911061', 'JAYANT RAKESH MANI MISHRA', 'jayantmishra808@gmail.com', 'AI_ML', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'bhargavchavan325@gmail.com', crypt('911062', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111911062', 'BHARGAV BAPU CHAVAN', 'bhargavchavan325@gmail.com', 'AI_ML', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'attalvidhi@gmail.com', crypt('911063', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111911063', 'VIDHI RAJKUMAR ATTAL', 'attalvidhi@gmail.com', 'AI_ML', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'palakkathar@gmail.com', crypt('911064', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111911064', 'PALAK VINOD KATHAR', 'palakkathar@gmail.com', 'AI_ML', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'tanishqa150307@gmail.com', crypt('911065', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111911065', 'TANISHQA SUNIL MODHAVE', 'tanishqa150307@gmail.com', 'AI_ML', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'nikhilkaliya17@gmail.com', crypt('911066', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111911066', 'NIKHIL SHRIKISHAN KALIYA', 'nikhilkaliya17@gmail.com', 'AI_ML', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'gaurivyavahare18@gmail.com', crypt('911067', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111911067', 'GAURI SHASHIKANT VYAVAHARE', 'gaurivyavahare18@gmail.com', 'AI_ML', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'aaryagirme42@gmail.com', crypt('911068', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111911068', 'AARYA ABHIJEET GIRME', 'aaryagirme42@gmail.com', 'AI_ML', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'ruchi252007@gmail.com', crypt('911069', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111911069', 'RUCHIRA RAMESH YEMUL', 'ruchi252007@gmail.com', 'AI_ML', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'aryadhavane@gmail.com', crypt('245001', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111245001', 'ARYA KIRAN DHAVANE', 'aryadhavane@gmail.com', 'Computer_Engineering', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'ishandalvi834@gmail.com', crypt('245002', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111245002', 'ISHAN PRANAY DALVI', 'ishandalvi834@gmail.com', 'Computer_Engineering', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'kalyanidokhe11.1@gmail.com', crypt('245003', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111245003', 'KALYANI RAMESHWAR DOKHE', 'kalyanidokhe11.1@gmail.com', 'Computer_Engineering', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'zinjadeanupras@gmail.com', crypt('245004', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111245004', 'ANUPRAS SACHIN ZINJADE', 'zinjadeanupras@gmail.com', 'Computer_Engineering', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'sayalighaytadkar@gmail.com', crypt('245005', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111245005', 'SAYALI VIJAY GHAYTADAKAR', 'sayalighaytadkar@gmail.com', 'Computer_Engineering', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'adityawarkar18@gmail.com', crypt('245006', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111245006', 'ADITYA SAINATH WARKAR', 'adityawarkar18@gmail.com', 'Computer_Engineering', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'utkarshaniprul@gmail.com', crypt('245007', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111245007', 'UTKARSHA CHANDRKANT NIPRUL', 'utkarshaniprul@gmail.com', 'Computer_Engineering', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'chirayulunawat7@gmail.com', crypt('245008', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111245008', 'CHIRAYU SACHIN LUNAWAT', 'chirayulunawat7@gmail.com', 'Computer_Engineering', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'shreyashinde8815@gmail.com', crypt('245009', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111245009', 'SHREYA ARUN SHINDE', 'shreyashinde8815@gmail.com', 'Computer_Engineering', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'bhosalesandhya2623@gmail.com', crypt('245010', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111245010', 'SANDHYA TANAJI BHOSALE', 'bhosalesandhya2623@gmail.com', 'Computer_Engineering', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'prachipanchpor03@gmail.com', crypt('245011', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111245011', 'PRACHI DATTATRAY PANCHPOR', 'prachipanchpor03@gmail.com', 'Computer_Engineering', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'anweshagaikwad6@gmail.com', crypt('245012', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111245012', 'ANWESHA JAILESH GAIKWAD', 'anweshagaikwad6@gmail.com', 'Computer_Engineering', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'rehanshaikh111906@gmail.com', crypt('245013', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111245013', 'REHAN KAMRUDDIN SHAIKH', 'rehanshaikh111906@gmail.com', 'Computer_Engineering', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'shubhambmore23@gmail.com', crypt('245014', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111245014', 'SHUBHAM BAPUSAHEB MORE', 'shubhambmore23@gmail.com', 'Computer_Engineering', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'sanchitsatale07@gmail.com', crypt('245015', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111245015', 'SANCHIT SANTOSH SATALE', 'sanchitsatale07@gmail.com', 'Computer_Engineering', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'harshalkarchkhed2007@gmail.com', crypt('245016', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111245016', 'HARSHAL SHANKAR KARCHKHED', 'harshalkarchkhed2007@gmail.com', 'Computer_Engineering', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'swapnilsalve821@gmail.com', crypt('245017', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111245017', 'SWAPNIL ASHOK SALVE', 'swapnilsalve821@gmail.com', 'Computer_Engineering', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'srushtisrushti147@gmail.com', crypt('245018', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111245018', 'SRUSHTI SUNIL SHINDE', 'srushtisrushti147@gmail.com', 'Computer_Engineering', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'srushtikatkar552@gmail.com', crypt('245019', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111245019', 'SRUSHTI SHASHIKANT KATKAR', 'srushtikatkar552@gmail.com', 'Computer_Engineering', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'gargi0422@gmail.com', crypt('245020', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111245020', 'GARGI SACHIN MARKALE', 'gargi0422@gmail.com', 'Computer_Engineering', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'pm17.more@gmail.com', crypt('245021', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111245021', 'PRATIK NAMDEV MORE', 'pm17.more@gmail.com', 'Computer_Engineering', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'bhoomiheda94@gmail.com', crypt('245022', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111245022', 'BHOOMI SACHIN HEDA', 'bhoomiheda94@gmail.com', 'Computer_Engineering', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'yashrajj7575@gmail.com', crypt('245023', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111245023', 'YASHRAJ BHAUSAHEB JANJIRE', 'yashrajj7575@gmail.com', 'Computer_Engineering', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'swamivaishnavi2007@gmail.com', crypt('245024', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111245024', 'VAISHNAVI VIVEKANAND SWAMI', 'swamivaishnavi2007@gmail.com', 'Computer_Engineering', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'piyushkumat0718@gmail.com', crypt('245025', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111245025', 'PIYUSH SANJAY KUMAT', 'piyushkumat0718@gmail.com', 'Computer_Engineering', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'abhiguhe1610@gmail.com', crypt('245026', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111245026', 'ABHISHEK EKNATH GHULE', 'abhiguhe1610@gmail.com', 'Computer_Engineering', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'pushpahasgore@gmail.com', crypt('245027', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111245027', 'GORE PUSHPAHAS PRAKASH', 'pushpahasgore@gmail.com', 'Computer_Engineering', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'jaylalithbole@gmail.com', crypt('245028', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111245028', 'JAY LALIT BHOLE', 'jaylalithbole@gmail.com', 'Computer_Engineering', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'atharvchougule212007@gmail.com', crypt('245029', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111245029', 'ATHARV RAJARAM CHOUGULE', 'atharvchougule212007@gmail.com', 'Computer_Engineering', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'prathameshbhujbal2007@gmail.com', crypt('245030', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111245030', 'PRATHAMESH SANJAY BHUJBAL', 'prathameshbhujbal2007@gmail.com', 'Computer_Engineering', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'mhaskenikita484@gmail.com', crypt('245031', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111245031', 'NIKITA RAMESH MHASKE', 'mhaskenikita484@gmail.com', 'Computer_Engineering', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'sneharp1707@gmail.com', crypt('245032', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111245032', 'SNEHA RAVINDRA PATIL', 'sneharp1707@gmail.com', 'Computer_Engineering', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'pujarisarthako3@gmail.com', crypt('245033', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111245033', 'PUJARI SARTHAK SUNIL', 'pujarisarthako3@gmail.com', 'Computer_Engineering', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'sayalipaygude2007@gmail.com', crypt('245034', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111245034', 'SAYALI PRAVIN PAYGUDE', 'sayalipaygude2007@gmail.com', 'Computer_Engineering', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'kasarpratham08@gmail.com', crypt('245035', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111245035', 'PRATHAMESH KASHINATH KASAR', 'kasarpratham08@gmail.com', 'Computer_Engineering', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'biradarharsh48@gmail.com', crypt('245036', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111245036', 'HARSH RAMRAO BIRADAR', 'biradarharsh48@gmail.com', 'Computer_Engineering', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'rajdeepb2007@gmail.com', crypt('245037', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111245037', 'RAJDEEP RAHUL BHOSALE', 'rajdeepb2007@gmail.com', 'Computer_Engineering', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'rishikayadav0103@gmail.com', crypt('245038', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111245038', 'RISHIKA RAJU YADAV', 'rishikayadav0103@gmail.com', 'Computer_Engineering', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'krushnmahajan@gmail.com', crypt('245039', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111245039', 'KRISHNA CHANDRAKANT MAHAJAN', 'krushnmahajan@gmail.com', 'Computer_Engineering', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'rutujadare@gmail.com', crypt('245040', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111245040', 'RUTUJA PRASHANT DARE', 'rutujadare@gmail.com', 'Computer_Engineering', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'rohit1757thakur@gmail.com', crypt('245041', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111245041', 'ROHIT DIPAKSINGH THAKUR', 'rohit1757thakur@gmail.com', 'Computer_Engineering', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'atharva123dhile@gmail.com', crypt('245042', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111245042', 'ATHARVA MANOJ DHILE', 'atharva123dhile@gmail.com', 'Computer_Engineering', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'jogalesahil88@gmail.com', crypt('245043', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111245043', 'SAHIL BALU JOGALE', 'jogalesahil88@gmail.com', 'Computer_Engineering', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'navyahadole@gmail.com', crypt('245044', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111245044', 'NAVYA HEMANT HADOLE', 'navyahadole@gmail.com', 'Computer_Engineering', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'dnyandababar09@gmail.com', crypt('245045', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111245045', 'DNYANDA SHAILESH BABAR', 'dnyandababar09@gmail.com', 'Computer_Engineering', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'nishadhangar715@gmail.com', crypt('245046', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111245046', 'NISHA GOTU DHANGAR', 'nishadhangar715@gmail.com', 'Computer_Engineering', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'ruchamp12@gmail.com', crypt('245047', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111245047', 'RUCHA PRASAD PARANJAPE', 'ruchamp12@gmail.com', 'Computer_Engineering', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'samarthbhutekar17@gmail.com', crypt('245048', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111245048', 'SAMARTH TRIMBAK BHUTEKAR', 'samarthbhutekar17@gmail.com', 'Computer_Engineering', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'madhuksagar28@gmail.com', crypt('245049', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111245049', 'MADHURA MUKESH KSHIRSAGAR', 'madhuksagar28@gmail.com', 'Computer_Engineering', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'aniketkolse07@gmail.com', crypt('245050', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111245050', 'ANIKET KAILAS KOLSEPATIL', 'aniketkolse07@gmail.com', 'Computer_Engineering', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
  BEGIN
    new_id := gen_random_uuid();
    INSERT INTO auth.users (instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at) VALUES ('00000000-0000-0000-0000-000000000000', new_id, 'authenticated', 'authenticated', 'aayushkandhare07@gmail.com', crypt('245051', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now());
    INSERT INTO public.profiles (id, prn_no, name, email, branch, college) VALUES (new_id, '2516357111245051', 'AAYUSH GANESH KANDHARE', 'aayushkandhare07@gmail.com', 'Computer_Engineering', 'MES Mukunddas College of Engineering');
  EXCEPTION WHEN unique_violation THEN
    -- Ignore if user already exists
  END;
END;
$$;