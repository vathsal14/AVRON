/*
  # Create contact inquiries table

  1. New Tables
    - `contact_inquiries`
      - `id` (uuid, primary key)
      - `name` (text, required)
      - `email` (text, required)
      - `role` (text, required)
      - `company_name` (text, required)
      - `company_website` (text, optional)
      - `company_size` (text, required)
      - `annual_revenue` (text, optional)
      - `message` (text, optional)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on `contact_inquiries` table
    - Add policy for public insert access (form submissions)
    - Add policy for authenticated users to read data
*/

CREATE TABLE IF NOT EXISTS contact_inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  role text NOT NULL,
  company_name text NOT NULL,
  company_website text,
  company_size text NOT NULL,
  annual_revenue text,
  message text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_inquiries ENABLE ROW LEVEL SECURITY;

-- Allow public to insert contact inquiries (form submissions)
CREATE POLICY "Anyone can submit contact inquiries"
  ON contact_inquiries
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Allow authenticated users to read contact inquiries
CREATE POLICY "Authenticated users can read contact inquiries"
  ON contact_inquiries
  FOR SELECT
  TO authenticated
  USING (true);