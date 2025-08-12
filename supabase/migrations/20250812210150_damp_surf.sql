/*
  # Fix Client Insert Policy

  1. Security Updates
    - Drop existing insert policy that may be conflicting
    - Create new comprehensive insert policy for anonymous users
    - Ensure anonymous users can submit contact forms and quote requests

  2. Changes
    - Allow anonymous (anon) users to insert client data
    - Allow authenticated users to insert client data
    - Maintain existing read/update restrictions for service role only
*/

-- Drop existing insert policy if it exists
DROP POLICY IF EXISTS "Anyone can insert client data" ON clients;

-- Create new insert policy for anonymous and authenticated users
CREATE POLICY "Allow client form submissions"
  ON clients
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Ensure RLS is enabled
ALTER TABLE clients ENABLE ROW LEVEL SECURITY;