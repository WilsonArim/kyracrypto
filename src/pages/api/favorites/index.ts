import type { NextApiRequest, NextApiResponse } from 'next';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

// Função para criar um cliente Supabase com a service role key
const getSupabaseAdminClient = (): SupabaseClient => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !supabaseServiceKey) {
    throw new Error('Variáveis de ambiente Supabase (URL ou Service Key) não configuradas para admin client.');
  }
  return createClient(supabaseUrl, supabaseServiceKey);
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const supabaseAdmin = getSupabaseAdminClient();

  let userId: string | undefined;
  if (req.method === 'GET' || req.method === 'DELETE') {
    userId = typeof req.query.user_id === 'string' ? req.query.user_id : Array.isArray(req.query.user_id) ? req.query.user_id[0] : undefined;
  } else if (req.method === 'POST') {
    userId = req.body.user_id;
  }

  if (!userId) {
    return res.status(400).json({ message: 'Parâmetro user_id (endereço da carteira) é obrigatório.' });
  }

  if (req.method === 'GET') {
    try {
      const { data, error } = await supabaseAdmin
        .from('user_favorites')
        .select('*')
        .eq('user_id', userId)
        .order('category_path', { ascending: true })
        .order('protocol_name', { ascending: true });

      if (error) {
        console.error('Erro ao buscar favoritos:', error);
        return res.status(500).json({ message: 'Erro ao buscar favoritos.', details: error.message });
      }

      return res.status(200).json(data);
    } catch (error: any) {
      console.error('Exceção ao buscar favoritos:', error);
      return res.status(500).json({ message: 'Exceção no servidor ao buscar favoritos.', details: error.message });
    }
  } else if (req.method === 'POST') {
    const { protocol_name, protocol_identifier, category_path, protocol_url, protocol_icon_url } = req.body;

    if (!protocol_name || !protocol_identifier || !category_path) {
      return res.status(400).json({ message: 'Campos obrigatórios em falta (protocol_name, protocol_identifier, category_path).' });
    }

    try {
      const { data, error } = await supabaseAdmin
        .from('user_favorites')
        .insert([
          {
            user_id: userId,
            protocol_name,
            protocol_identifier,
            category_path,
            protocol_url,
            protocol_icon_url,
          },
        ])
        .select()
        .single();

      if (error) {
        if (error.code === '23505') {
          const { data: existingFavorite, error: fetchError } = await supabaseAdmin
            .from('user_favorites')
            .select('*')
            .eq('user_id', userId)
            .eq('protocol_identifier', protocol_identifier)
            .eq('category_path', category_path)
            .single();
          if (fetchError) {
            return res.status(500).json({ message: 'Favorito já existe, mas falha ao recuperar o registo existente.', details: fetchError.message });
          }
          if (existingFavorite) {
            return res.status(200).json({ message: 'Favorito já existe.', favorite: existingFavorite });
          }
          return res.status(409).json({ message: 'Este item já foi favoritado.', details: error.message });
        }
        console.error('Erro ao adicionar favorito:', error);
        return res.status(500).json({ message: 'Erro ao adicionar favorito.', details: error.message });
      }

      return res.status(201).json(data);
    } catch (error: any) {
      console.error('Exceção ao adicionar favorito:', error);
      return res.status(500).json({ message: 'Exceção no servidor ao adicionar favorito.', details: error.message });
    }
  } else if (req.method === 'DELETE') {
    const protocol_identifier = typeof req.query.protocol_identifier === 'string' ? req.query.protocol_identifier : Array.isArray(req.query.protocol_identifier) ? req.query.protocol_identifier[0] : undefined;
    const category_path = typeof req.query.category_path === 'string' ? req.query.category_path : Array.isArray(req.query.category_path) ? req.query.category_path[0] : undefined;

    if (!protocol_identifier || !category_path) {
      return res.status(400).json({ message: 'Parâmetros obrigatórios em falta na query string (protocol_identifier, category_path).' });
    }

    try {
      const { data: existingFavorite, error: checkError } = await supabaseAdmin
        .from('user_favorites')
        .select('*')
        .eq('user_id', userId)
        .eq('protocol_identifier', protocol_identifier)
        .eq('category_path', category_path)
        .single();

      if (checkError) {
        return res.status(500).json({ message: 'Erro ao verificar favorito existente.', details: checkError.message });
      }

      const { error, count } = await supabaseAdmin
        .from('user_favorites')
        .delete({ count: 'exact' })
        .eq('user_id', userId)
        .eq('protocol_identifier', protocol_identifier)
        .eq('category_path', category_path);

      if (error) {
        return res.status(500).json({ message: 'Erro ao remover favorito.', details: error.message });
      }

      if (count === 0) {
        return res.status(404).json({ message: 'Favorito não encontrado para este utilizador com os identificadores fornecidos.' });
      }

      return res.status(200).json({ message: 'Favorito removido com sucesso.', count });
    } catch (error: any) {
      return res.status(500).json({ message: 'Exceção no servidor ao remover favorito.', details: error.message });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST', 'DELETE']);
    res.status(405).end(`Método ${req.method} não permitido`);
  }
} 