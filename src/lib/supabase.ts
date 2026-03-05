import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Lead = {
  id?: string;
  name: string;
  phone: string;
  email: string;
  service_needed: string;
  city: string;
  preferred_time: string;
  message?: string;
  created_at?: string;
};
