import { createClient, SupabaseClient } from "@supabase/supabase-js";

let instance: SupabaseClient | null = null;

function getSupabase(): SupabaseClient {
  if (!instance) {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    if (!url || !key) {
      throw new Error("NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY are required");
    }
    instance = createClient(url, key);
  }
  return instance;
}

/** Lazy-initialized Supabase client. Only created when first used (avoids build errors when env vars are not set). */
export const supabase = new Proxy({} as SupabaseClient, {
  get(_, prop) {
    return (getSupabase() as unknown as Record<string, unknown>)[prop as string];
  },
});

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
