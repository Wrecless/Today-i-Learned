import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://mhfmnvvracejequwhael.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1oZm1udnZyYWNlamVxdXdoYWVsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzY0NzUxMjIsImV4cCI6MTk5MjA1MTEyMn0.6POVTH54BhJ8-NIca5Ml4U_dKO171uQF_Xua9wAWAA0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
