import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';
import { useDynamicContext } from '@dynamic-labs/sdk-react';

// Definir a interface Favorite localmente
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

interface FavoritesContextType {
  favorites: Favorite[];
  isLoading: boolean;
  error: string | null;
  addFavorite: (item: Omit<Favorite, 'id' | 'user_id' | 'created_at'>) => Promise<void>;
  removeFavorite: (protocolIdentifier: string, categoryPath: string) => Promise<void>;
  isProtocolFavorite: (protocolIdentifier: string, categoryPath: string) => boolean;
  refetchFavorites: () => Promise<void>;
  isUserReadyForFavorites: boolean;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const FavoritesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // 1. TODOS OS HOOKS DEVEM ESTAR AQUI, ANTES DE QUALQUER LÓGICA CONDICIONAL
  const { user, isAuthenticated } = useDynamicContext(); // isAuthenticated não está sendo usado, mas pode ser útil
  const userAddress = user?.wallet;

  const [favorites, setFavorites] = useState<Favorite[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  // Adicionando o console.log para depuração (agora com mounted declarado)
  // console.log('[FavoritesContext] DynamicContext State:', { user, isAuthenticated, userAddress, mounted });

  const isUserReadyForFavorites = mounted && !!userAddress;

  // Funções de callback (useCallback)
  const fetchFavorites = useCallback(async () => {
    if (!isUserReadyForFavorites) {
      setFavorites([]);
      if (mounted) setIsLoading(false);
      return;
    }
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(`/api/favorites?user_id=${encodeURIComponent(userAddress)}`, {
        cache: 'no-store',
        headers: {
          'Cache-Control': 'no-cache, no-store, must-revalidate',
          'Pragma': 'no-cache'
        }
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Falha ao buscar favoritos do contexto');
      }
      const data: Favorite[] = await response.json();
      setFavorites([...data]);
    } catch (err: any) {
      setError(err.message || 'Ocorreu um erro desconhecido ao buscar favoritos.');
      setFavorites([]); // Limpa favoritos em caso de erro
    } finally {
      setIsLoading(false);
    }
  }, [mounted, userAddress]);

  const addFavorite = useCallback(async (itemToAdd: Omit<Favorite, 'id' | 'user_id' | 'created_at'>) => {
    if (!isUserReadyForFavorites) {
      console.warn('Tentativa de adicionar favorito sem usuário logado ou componente montado.');
      throw new Error('Conecte a carteira e aguarde para usar favoritos');
    }
    setIsLoading(true); // Indica que uma operação está em progresso
    let responseData: any;
    try {
      const response = await fetch('/api/favorites', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...itemToAdd, user_id: userAddress }),
      });
      responseData = await response.json(); // Tenta ler o JSON mesmo em caso de erro para obter a mensagem
      if (!response.ok) {
        throw new Error(responseData.message || 'Falha ao adicionar favorito');
      }
      setError(null); // Limpa erro anterior em caso de sucesso
      await fetchFavorites(); // Rebusca para atualizar a lista
    } catch (err: any) {
      const errorMessage = err.message || (responseData && responseData.message) || 'Erro desconhecido ao adicionar favorito';
      setError(errorMessage);
      // Não precisa do fetchFavorites() aqui pois já está no finally do try principal do addFavorite
      throw new Error(errorMessage); // Re-throw para o componente que chamou poder tratar
    } finally {
        setIsLoading(false); // Garante que isLoading é resetado
    }
  }, [mounted, userAddress, fetchFavorites]);

  const removeFavorite = useCallback(async (protocolIdentifier: string, categoryPath: string) => {
    if (!isUserReadyForFavorites) {
      console.warn('Tentativa de remover favorito sem usuário logado ou componente montado.');
      throw new Error('Conecte a carteira e aguarde para usar favoritos');
    }
    setIsLoading(true);
    // Otimisticamente remove da UI antes de chamar a API
    // setFavorites((prev) => prev.filter(fav =>
    //   !(fav.protocol_identifier === protocolIdentifier && fav.category_path === categoryPath)
    // ));
    try {
      const response = await fetch(
        `/api/favorites?user_id=${encodeURIComponent(userAddress)}&protocol_identifier=${encodeURIComponent(protocolIdentifier)}&category_path=${encodeURIComponent(categoryPath)}`,
        { 
          method: 'DELETE',
          cache: 'no-store', // Garante que não usa cache para DELETE
          headers: {
            'Cache-Control': 'no-cache, no-store, must-revalidate',
            'Pragma': 'no-cache'
          }
        }
      );
      const responseData = await response.json();
      if (!response.ok) {
        // await fetchFavorites(); // Se falhou, rebuscar para restaurar o estado otimista se necessário
        throw new Error(responseData.message || 'Falha ao remover favorito');
      }
      setError(null);
      await fetchFavorites(); // Rebusca para confirmar a remoção
    } catch (err: any) {
      setError(err.message);
      await fetchFavorites(); // Em caso de erro, rebuscar para sincronizar com o backend
      throw err; // Re-throw para o componente que chamou poder tratar
    } finally {
      setIsLoading(false);
    }
  }, [mounted, userAddress, fetchFavorites]);

  const isProtocolFavorite = useCallback((protocolIdentifier: string, categoryPath: string): boolean => {
    // if (!mounted) return false; // Não precisa mais disso se o valor do contexto é controlado
    return favorites.some(fav =>
      fav.protocol_identifier === protocolIdentifier && fav.category_path === categoryPath
    );
  }, [favorites]); // Removido mounted daqui, pois `favorites` será vazio se não montado

  // Efeitos (useEffect)
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      fetchFavorites();
    }
  }, [mounted, userAddress, fetchFavorites]); // fetchFavorites já tem mounted como dependência

  // 2. LÓGICA CONDICIONAL PARA O VALOR DO PROVIDER (APÓS TODOS OS HOOKS)
  // Define um valor de contexto "seguro" para quando não estiver montado ou logado
  const initialContextValue: FavoritesContextType = {
    favorites: [],
    isLoading: !mounted, // isLoading é true se não estiver montado
    error: null,
    addFavorite: async () => { console.warn("FavoritesProvider não montado ou usuário não logado."); throw new Error("Aguarde a inicialização."); },
    removeFavorite: async () => { console.warn("FavoritesProvider não montado ou usuário não logado."); throw new Error("Aguarde a inicialização."); },
    isProtocolFavorite: () => false,
    refetchFavorites: async () => { console.warn("FavoritesProvider não montado ou usuário não logado."); },
    isUserReadyForFavorites: false,
  };

  const contextValue = mounted ? {
    favorites,
    isLoading,
    error,
    addFavorite,
    removeFavorite,
    isProtocolFavorite,
    refetchFavorites: fetchFavorites,
    isUserReadyForFavorites,
  } : initialContextValue;

  return (
    <FavoritesContext.Provider value={contextValue}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = (): FavoritesContextType => {
  const context = useContext(FavoritesContext);
  if (context === undefined) {
    throw new Error('useFavorites deve ser usado dentro de um FavoritesProvider');
  }
  return context;
}; 