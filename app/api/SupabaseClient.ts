import { createClient } from '@supabase/supabase-js';

const SupabaseClient = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_KEY
);

export default SupabaseClient;
