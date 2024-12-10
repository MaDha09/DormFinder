// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://rxfnqkdxgulbzswoaqhs.supabase.co'; // Replace with your Supabase URL
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ4Zm5xa2R4Z3VsYnpzd29hcWhzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM1Nzk2MjAsImV4cCI6MjA0OTE1NTYyMH0.QQr9UQrq1qp7EtSaMsEHTgXYqAEbpWW5B06rrpW6qyE'; // Replace with your public API key

export const supabase = createClient(supabaseUrl, supabaseKey);
