-- Create users table
CREATE TABLE IF NOT EXISTS public.users (
    id uuid NOT NULL DEFAULT gen_random_uuid(),
    name text,
    email text,
    email_verified timestamp with time zone,
    image text,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now(),
    CONSTRAINT users_pkey PRIMARY KEY (id)
);

-- Create accounts table
CREATE TABLE IF NOT EXISTS public.accounts (
    id uuid NOT NULL DEFAULT gen_random_uuid(),
    user_id uuid NOT NULL,
    type text NOT NULL,
    provider text NOT NULL,
    provider_account_id text NOT NULL,
    refresh_token text,
    access_token text,
    expires_at bigint,
    token_type text,
    scope text,
    id_token text,
    session_state text,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now(),
    CONSTRAINT accounts_pkey PRIMARY KEY (id),
    CONSTRAINT accounts_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE CASCADE
);

-- Create sessions table
CREATE TABLE IF NOT EXISTS public.sessions (
    id uuid NOT NULL DEFAULT gen_random_uuid(),
    user_id uuid NOT NULL,
    session_token text NOT NULL,
    expires timestamp with time zone NOT NULL,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now(),
    CONSTRAINT sessions_pkey PRIMARY KEY (id),
    CONSTRAINT sessions_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE CASCADE
);

-- Create verification_tokens table
CREATE TABLE IF NOT EXISTS public.verification_tokens (
    identifier text NOT NULL,
    token text NOT NULL,
    expires timestamp with time zone NOT NULL,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now(),
    CONSTRAINT verification_tokens_pkey PRIMARY KEY (identifier, token)
);

-- Create indexes
CREATE INDEX IF NOT EXISTS accounts_user_id_idx ON public.accounts(user_id);
CREATE INDEX IF NOT EXISTS sessions_user_id_idx ON public.sessions(user_id);
CREATE UNIQUE INDEX IF NOT EXISTS accounts_provider_provider_account_id_key ON public.accounts(provider, provider_account_id);
CREATE UNIQUE INDEX IF NOT EXISTS sessions_session_token_key ON public.sessions(session_token);
CREATE UNIQUE INDEX IF NOT EXISTS users_email_key ON public.users(email);

-- Enable Row Level Security
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.accounts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.verification_tokens ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users are viewable by themselves" ON public.users
    FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update their own data" ON public.users
    FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Accounts are viewable by the user" ON public.accounts
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Sessions are viewable by the user" ON public.sessions
    FOR SELECT USING (auth.uid() = user_id);

-- Grant permissions
GRANT ALL ON public.users TO supabase_admin;
GRANT ALL ON public.accounts TO supabase_admin;
GRANT ALL ON public.sessions TO supabase_admin;
GRANT ALL ON public.verification_tokens TO supabase_admin;

GRANT SELECT ON public.users TO anon, authenticated;
GRANT SELECT ON public.accounts TO anon, authenticated;
GRANT SELECT ON public.sessions TO anon, authenticated;
GRANT SELECT ON public.verification_tokens TO anon, authenticated; 