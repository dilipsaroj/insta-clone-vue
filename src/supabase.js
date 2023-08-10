import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://gsjttlubsuxeaimxdkgm.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdzanR0bHVic3V4ZWFpbXhka2dtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTE1ODUzNzIsImV4cCI6MjAwNzE2MTM3Mn0.d2qpSMu8mkHHYpRWTqq_8JEea1JJm7HQ5SVuwCrabnE"
export const supabase = createClient(supabaseUrl, supabaseKey)