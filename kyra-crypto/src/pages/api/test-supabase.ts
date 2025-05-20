import { NextApiRequest, NextApiResponse } from 'next';
import { createClient } from '@supabase/supabase-js';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !supabaseServiceKey) {
    return res.status(500).json({ error: 'Supabase URL or Service Key not configured.' });
  }

  try {
    console.log('Attempting to create Supabase client in test-supabase API...');
    const supabase = createClient(supabaseUrl, supabaseServiceKey);
    console.log('Supabase client created. Attempting to query users table...');

    const { data, error } = await supabase
      .from('users') // As tabelas do NextAuth são 'users', 'accounts', etc.
      .select('*')
      .limit(1);

    if (error) {
      console.error('Supabase query error in test-supabase API:', error);
      return res.status(500).json({ 
        message: 'Error querying Supabase.', 
        errorDetails: {
          message: error.message,
          details: error.details,
          hint: error.hint,
          code: error.code,
        }
      });
    }

    console.log('Supabase query successful in test-supabase API. Data:', data);
    return res.status(200).json({ message: 'Successfully queried Supabase!', data });

  } catch (e: any) {
    console.error('Catch block error in test-supabase API:', e);
    return res.status(500).json({ message: 'Internal server error.', error: e.message });
  }
} 