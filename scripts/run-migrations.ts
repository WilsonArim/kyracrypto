import { config } from 'dotenv';
config(); // Carrega o arquivo .env padrão

import { createClient } from '@supabase/supabase-js';
import { readFileSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('Variáveis de ambiente Supabase não configuradas.');
  console.error('NEXT_PUBLIC_SUPABASE_URL:', supabaseUrl);
  console.error('SUPABASE_SERVICE_ROLE_KEY:', supabaseServiceKey ? 'Definida' : 'Não definida');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function runMigrations() {
  try {
    // Lê o arquivo de migração
    const migrationPath = join(__dirname, '..', 'supabase', 'migrations', '20240318000000_create_auth_tables.sql');
    const migrationSQL = readFileSync(migrationPath, 'utf8');

    // Executa a migração
    const { error } = await supabase.rpc('execute_sql', {
      sql: migrationSQL
    });

    if (error) {
      console.error('Erro ao executar migração:', error);
      process.exit(1);
    }

    console.log('Migração executada com sucesso!');
  } catch (error) {
    console.error('Erro ao executar migração:', error);
    process.exit(1);
  }
}

runMigrations(); 