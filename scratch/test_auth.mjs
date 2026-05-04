import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://uzmfxxfbphfzdtspflro.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV6bWZ4eGZicGhmemR0c3BmbHJvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc0NTI1NDEsImV4cCI6MjA5MzAyODU0MX0.VXjmxN4JISnpsbtdc7TyHNmlnGZuLx5LLvBjAEshIqY';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function testLogin() {
  console.log('Attempting login with bavdhankarsrushti@gmail.com / 246051');
  const { data, error } = await supabase.auth.signInWithPassword({
    email: 'bavdhankarsrushti@gmail.com',
    password: '246051'
  });
  
  if (error) {
    console.error('Login Error:', error.message);
  } else {
    console.log('Login Success! User ID:', data.user.id);
  }
}

testLogin();
