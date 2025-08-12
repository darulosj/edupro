/*
  # Fix RLS Policy for Client Form Submissions

  1. Security Changes
    - Drop existing INSERT policy that may be conflicting
    - Create new policy allowing anonymous users to insert client data
    - Ensure policy works for public form submissions

  2. Policy Details
    - Allows INSERT operations for 'anon' role (public users)
    - Uses simple 'true' condition to allow all inserts
    - Maintains existing SELECT/UPDATE restrictions for security
*/

-- Drop the existing INSERT policy if it exists
DROP POLICY IF EXISTS "Allow client form submissions" ON clients;
DROP POLICY IF EXISTS "Anyone can insert client data" ON clients;

-- Create a new, simple policy that allows anonymous users to insert client data
CREATE POLICY "Enable insert for anon users" ON clients
  FOR INSERT 
  TO anon 
  WITH CHECK (true);

-- Also allow authenticated users to insert (in case someone is logged in)
CREATE POLICY "Enable insert for authenticated users" ON clients
  FOR INSERT 
  TO authenticated 
  WITH CHECK (true);