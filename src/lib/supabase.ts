import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

// Create a mock client if environment variables are missing
const createSupabaseClient = () => {
  if (!supabaseUrl || !supabaseAnonKey) {
    console.warn('Supabase environment variables not found. Using mock client.');
    return null;
  }
  return createClient(supabaseUrl, supabaseAnonKey);
};

export const supabase = createSupabaseClient();

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
  // If Supabase is not configured, simulate success for demo purposes
  if (!supabase) {
    console.log('Demo mode: Form data would be saved:', clientData);
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    return [{ id: 'demo-' + Date.now(), ...clientData }];
  }

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
  if (!supabase) {
    console.log('Demo mode: No clients to fetch');
    return [];
  }

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
  if (!supabase) {
    console.log('Demo mode: No client found for email:', email);
    return null;
  }

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