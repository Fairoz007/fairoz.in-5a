CREATE TABLE projects (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  title TEXT NOT NULL,
  subtitle TEXT,
  description TEXT NOT NULL,
  features TEXT[], -- Array of text for features
  tech_stack TEXT[], -- Array of text for tech stack
  architecture TEXT,
  challenges TEXT,
  image_url TEXT, -- URL to the project image
  category TEXT NOT NULL, -- e.g., 'web', 'cloud', 'security'
  github_link TEXT,
  live_link TEXT,
  published BOOLEAN DEFAULT TRUE
);

-- Optional: Add RLS policies for public read access
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Enable read access for all users" ON projects
FOR SELECT USING (TRUE);
