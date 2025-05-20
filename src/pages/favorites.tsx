import React from 'react';
import Layout from '@/components/Layout';
import Head from 'next/head';
import { useFavorites } from '@/contexts/FavoritesContext';

// Definir o tipo Favorite localmente
interface Favorite {
  id: string;
  user_id: string;
  protocol_name: string;
  protocol_identifier: string;
  category_path: string;
  protocol_url?: string | null;
  protocol_icon_url?: string | null;
  created_at: string;
}

const FavoritesPage = () => {
  const { favorites, isLoading, error, removeFavorite } = useFavorites();

  if (isLoading) {
    return (
      <Layout>
        <div className="flex justify-center items-center min-h-screen">
          <p className="text-white text-xl">A carregar favoritos...</p>
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div className="text-red-400 bg-red-900 p-4 rounded-md max-w-md mx-auto mt-10">
          <p className="text-lg font-semibold">Erro ao carregar favoritos:</p>
          <p>{error}</p>
        </div>
      </Layout>
    );
  }

  // Agrupar favoritos por categoria (opcional)
  const groupedFavorites = favorites.reduce((acc: { [category: string]: Favorite[] }, favorite: Favorite) => {
    const group = favorite.category_path;
    if (!acc[group]) acc[group] = [];
    acc[group].push(favorite);
    return acc;
  }, {});

  return (
    <Layout>
      <Head>
        <title>Meus Favoritos - Kyra Crypto</title>
      </Head>
      <div className="container mx-auto px-4 py-8 text-white">
        <h1 className="text-4xl font-bold mb-8 text-center text-cyan-400">Meus Favoritos</h1>
        {favorites.length === 0 && (
          <p className="text-center text-xl text-gray-400">Ainda não adicionou nenhum favorito.</p>
        )}
        {Object.entries(groupedFavorites).map(([category, favs]) => (
          <div key={category} className="mb-10 p-6 rounded-xl shadow-xl bg-gray-800 border border-cyan-500">
            <h2 className="text-2xl font-semibold mb-6 text-cyan-300 border-b-2 border-cyan-700 pb-2">{category}</h2>
            <ul className="space-y-4">
              {(favs as Favorite[]).map((fav: Favorite) => (
                <li 
                  key={fav.id} 
                  className="p-4 bg-gray-700 rounded-lg shadow hover:bg-gray-600 transition-colors duration-150 flex justify-between items-center"
                >
                  <div>
                    {fav.protocol_icon_url && (
                      <img src={fav.protocol_icon_url} alt={fav.protocol_name} className="w-8 h-8 inline-block mr-3 rounded-full" />
                    )}
                    <span className="text-lg font-medium text-white">{fav.protocol_name}</span>
                    {fav.protocol_url && (
                      <a 
                        href={fav.protocol_url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="ml-3 text-sm text-blue-400 hover:text-blue-300 underline"
                      >
                        Visitar
                      </a>
                    )}
                  </div>
                  <button 
                    onClick={() => removeFavorite(fav.protocol_identifier, fav.category_path)}
                    className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold rounded-md transition-colors duration-150"
                  >
                    Remover
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default FavoritesPage; 