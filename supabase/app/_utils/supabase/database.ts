import { createClient } from '@supabase/supabase-js'
import { Database } from '@/app/_types/supabase/supabase';

export function createDatabaseClient() {
  return createClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
}