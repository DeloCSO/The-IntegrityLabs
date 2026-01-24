import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

<<<<<<< HEAD
=======
if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    'Missing Supabase environment variables. Check REACT_APP_SUPABASE_URL and REACT_APP_SUPABASE_ANON_KEY.'
  );
}

>>>>>>> b0b2f02 (Update Supabase client config for auth)
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
  },
<<<<<<< HEAD
});
=======
});
>>>>>>> b0b2f02 (Update Supabase client config for auth)
