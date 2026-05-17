CREATE EXTENSION IF NOT EXISTS "pgcrypto";

CREATE TYPE task_status AS ENUM (
  'wished',
  'applied',
  'in-progress',
  'rejected',
  'offer'
);

CREATE TABLE IF NOT EXISTS tasks (
  id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  company    TEXT NOT NULL,
  position   TEXT NOT NULL,
  link       TEXT NOT NULL,
  salary     NUMERIC,
  status     task_status NOT NULL DEFAULT 'wished',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
