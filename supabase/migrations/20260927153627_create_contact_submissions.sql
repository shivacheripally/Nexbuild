/*
# Create contact_submissions table

1. New Tables
- `contact_submissions`
  - `id` (uuid, primary key, auto-generated)
  - `name` (text, not null) — the submitter's full name
  - `email` (text, not null) — the submitter's email address
  - `company` (text, nullable) — optional company name
  - `budget` (text, nullable) — selected budget range
  - `service` (text, nullable) — selected service of interest
  - `message` (text, not null) — the project description / inquiry
  - `status` (text, default 'new') — tracking status for internal use
  - `created_at` (timestamptz, default now()) — submission timestamp

2. Security
- Enable RLS on `contact_submissions`.
- This is a no-auth public contact form, so anon-key inserts are required.
- INSERT policy: allow anon + authenticated to insert (anyone can submit the form).
- SELECT/UPDATE/DELETE: no policies for anon — submissions are private to the studio.
  Only the Supabase dashboard (service role) can read or manage submissions.
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  company text,
  budget text,
  service text,
  message text NOT NULL,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_contact" ON contact_submissions;
CREATE POLICY "anon_insert_contact"
ON contact_submissions FOR INSERT
TO anon, authenticated
WITH CHECK (true);
