import { createPagesBrowserClient } from '@supabase/auth-helpers-nextjs';

// Crie um cliente Supabase para o navegador,
// que gerenciará automaticamente a sessão do usuário.
// As variáveis de ambiente são lidas automaticamente pelo Next.js
// se estiverem prefixadas com NEXT_PUBLIC_.
export const supabase = createPagesBrowserClient({
  supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL!,
  supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
}); 