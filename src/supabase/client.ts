import { createClient } from '@supabase/supabase-js';

const client = createClient(
  import.meta.env.VITE_SUPABASE_URL as string,
  import.meta.env.VITE_SUPABASE_ANON_KEY as string
);

console.log('Supabase client initialized:', client);

export { client };
