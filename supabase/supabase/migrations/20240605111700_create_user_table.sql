CREATE TABLE user_infos (
  id UUID PRIMARY KEY NOT NULL,
  name TEXT NOT NULL,
  icon_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);