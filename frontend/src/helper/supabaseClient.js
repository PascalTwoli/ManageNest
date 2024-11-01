import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
// export const Supabase = createClient(
// 	process.env.REACT_APP_SUPABASE_URL,
// 	process.env.REACT_APP_SUPABASE_ANON_KEY
// );

// REACT_APP_SUPABASE_URL =https://xwvdipwvwqcihearmcww.supabase.co;
// REACT_APP_SUPABASE_ANON_KEY = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh3dmRpcHd2d3FjaWhlYXJtY3d3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk5NTMxNjMsImV4cCI6MjA0NTUyOTE2M30.uQn3Hd6SwYSdhzG7cHMt6kz4XdML47UlSBGFEP-oxwc


const supabaseUrl = 'https://xwvdipwvwqcihearmcww.supabase.co'; // Replace with your Supabase URL
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh3dmRpcHd2d3FjaWhlYXJtY3d3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk5NTMxNjMsImV4cCI6MjA0NTUyOTE2M30.uQn3Hd6SwYSdhzG7cHMt6kz4XdML47UlSBGFEP-oxwc'; // Replace with your Supabase public API key

export const Supabase = createClient(supabaseUrl, supabaseKey);