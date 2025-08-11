import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Types for our database
export interface Client {
  id?: string;
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  academic_level?: string;
  deadline?: string;
  message?: string;
  created_at?: string;
  updated_at?: string;
}

// Database functions
export const insertClient = async (clientData: Omit<Client, 'id' | 'created_at' | 'updated_at'>) => {
  const { data, error } = await supabase
    .from('clients')
    .insert([clientData])
    .select();

  if (error) {
    console.error('Error inserting client:', error);
    throw error;
  }

  return data;
};

export const getClients = async () => {
  const { data, error } = await supabase
    .from('clients')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching clients:', error);
    throw error;
  }

  return data;
};

export const getClientByEmail = async (email: string) => {
  const { data, error } = await supabase
    .from('clients')
    .select('*')
    .eq('email', email)
    .single();

  if (error && error.code !== 'PGRST116') {
    console.error('Error fetching client:', error);
    throw error;
  }

  return data;
};