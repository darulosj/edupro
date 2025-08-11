/*
  # Create clients table for storing client information

  1. New Tables
    - `clients`
      - `id` (uuid, primary key)
      - `name` (text, required)
      - `email` (text, unique, required)
      - `phone` (text, optional)
      - `subject` (text, optional)
      - `academic_level` (text, optional)
      - `deadline` (text, optional)
      - `message` (text, optional)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on `clients` table
    - Add policy for authenticated users to insert their own data
    - Add policy for service role to read all data
*/

CREATE TABLE IF NOT EXISTS clients (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text UNIQUE NOT NULL,
  phone text,
  subject text,
  academic_level text,
  deadline text,
  message text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE clients ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert client data (for contact forms)
CREATE POLICY "Anyone can insert client data"
  ON clients
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Allow service role to read all client data (for admin access)
CREATE POLICY "Service role can read all client data"
  ON clients
  FOR SELECT
  TO service_role
  USING (true);

-- Allow service role to update client data
CREATE POLICY "Service role can update client data"
  ON clients
  FOR UPDATE
  TO service_role
  USING (true);

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_clients_updated_at
  BEFORE UPDATE ON clients
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();