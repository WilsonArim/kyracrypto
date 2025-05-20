import React, { useState, useEffect } from 'react';
import { useFavorites } from '@/contexts/FavoritesContext'; // Importar o hook useFavorites

interface FavoriteStarProps {
  protocolIdentifier: string;
  categoryPath: string;
  protocolName: string;
  protocolUrl?: string;
  protocolIconUrl?: string;
  // initialIsFavorited e onToggleFavorite podem ser removidos se o contexto tratar tudo
}

// SVGs simples para estrelas (mantidos)
const StarIconFilled = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-yellow-400">
    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.116 3.986 1.241 5.378c.27 1.18-.996 2.132-2.065 1.56l-4.99-2.585-4.99 2.585c-1.07.572-2.335-.38-2.065-1.56l1.24-5.378-4.117-3.986c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
  </svg>
);

const StarIconOutline = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-400 hover:text-yellow-400">
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.619.049.865.829.419 1.285l-4.118 3.984a.563.563 0 00-.197.53l1.24 5.378a.563.563 0 01-.82.61l-4.99-2.585a.563.563 0 00-.586 0l-4.99 2.585a.563.563 0 01-.82-.61l1.24-5.378a.563.563 0 00-.197-.53L2.343 10.24a.563.563 0 01.42-1.285l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
  </svg>
);

const FavoriteStar: React.FC<FavoriteStarProps> = ({ 
  protocolIdentifier, 
  categoryPath, 
  protocolName,
  protocolUrl,
  protocolIconUrl,
}) => {
  // 1. Hooks essenciais e para controle de montagem no TOPO
  const [mounted, setMounted] = useState(false);
  const {
    addFavorite,
    removeFavorite,
    isProtocolFavorite,
    isLoading: favoritesLoading,
    error: favoritesError,
    isUserReadyForFavorites,
  } = useFavorites();
  const [isLocalLoading, setIsLocalLoading] = useState(false);

  useEffect(() => { // Hook para definir mounted
    setMounted(true); 
  }, []);

  // 2. LÓGICA CONDICIONAL PARA RENDERIZAÇÃO (APÓS OS HOOKS ESSENCIAIS)
  if (!mounted) {
    return null; 
  }

  // 3. LÓGICA E HOOKS ADICIONAIS QUE DEPENDEM DE `mounted` E DO ESTADO DO CONTEXTO
  //    SÓ SÃO EXECUTADOS QUANDO O COMPONENTE ESTÁ MONTADO.
  const isCurrentlyFavorite = isProtocolFavorite(protocolIdentifier, categoryPath);

  // Efeito para logar mudança no estado de favorito (REMOVIDO TEMPORARIAMENTE PARA DEBUG)
  /*
  useEffect(() => {
    console.log('[FavoriteStar] Estado de favoritos mudou (ou componente remontou CLIENTE):', { 
      protocolIdentifier, 
      categoryPath, 
      isCurrentlyFavorite 
    });
  }, [isCurrentlyFavorite, protocolIdentifier, categoryPath]);
  */

  // Debug: mostra sempre que renderiza (APÓS a lógica de mounted)
  console.log('[FavoriteStar] Renderizando (CLIENTE):', { 
    protocolIdentifier, 
    categoryPath, 
    isCurrentlyFavorite,
    isLocalLoading,
    favoritesLoading
  });

  const toggleFavoriteHandler = async () => {
    if (isLocalLoading || favoritesLoading) return;

    setIsLocalLoading(true);
    console.log('[FavoriteStar] Iniciando toggle:', { 
      protocolIdentifier, 
      categoryPath, 
      isCurrentlyFavorite 
    });

    try {
      if (isCurrentlyFavorite) {
        await removeFavorite(protocolIdentifier, categoryPath);
      } else {
        await addFavorite({
          protocol_identifier: protocolIdentifier,
          protocol_name: protocolName,
          category_path: categoryPath,
          protocol_url: protocolUrl,
          protocol_icon_url: protocolIconUrl,
        });
      }
      // O FavoritesProvider deve lidar com o refetch automaticamente após add/remove.
      // Se precisar de refetch manual, use a função do useFavorites aqui.
    } catch (err: any) {
      console.error('[FavoriteStar] Erro no toggle:', err);
      alert(`Erro ao atualizar favorito: ${err.message || 'Ocorreu um problema.'}`);
    } finally {
      setIsLocalLoading(false);
    }
  };

  // 4. JSX DO COMPONENTE (SÓ RENDERIZA SE mounted)
  return (
    <button 
      onClick={toggleFavoriteHandler} 
      disabled={isLocalLoading || favoritesLoading || !isUserReadyForFavorites}
      className={`focus:outline-none transition-all duration-150 ease-in-out ${
        isLocalLoading || favoritesLoading 
          ? 'opacity-50 cursor-wait animate-pulse' 
          : !isUserReadyForFavorites
          ? 'opacity-50 cursor-not-allowed'
          : 'hover:scale-110'
      }`}
      title={
        !isUserReadyForFavorites 
          ? 'Conecte sua carteira para gerenciar favoritos' 
          : isCurrentlyFavorite 
          ? 'Remover dos Favoritos' 
          : 'Adicionar aos Favoritos'
      }
    >
      {isCurrentlyFavorite ? <StarIconFilled /> : <StarIconOutline />}
      {favoritesError && (
        <span className="sr-only">Erro: {favoritesError}</span>
      )}
    </button>
  );
};

export default FavoriteStar; 