// @ts-ignore
import MenuAim from 'react-menu-aim';
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useDynamicContext } from '@dynamic-labs/sdk-react';

type MenuLink = {
  label: string;
  url?: string;
  path?: string;
  external?: boolean;
  funcao?: string;
  // Campos adicionados para permitir ícones nos submenus de guias
  twitter?: string;
  telegram?: string;
  discord?: string;
  documentation?: string;
  icon?: string; 
};

type MenuItem = {
  label: string;
  path?: string;
  url?: string;
  external?: boolean;
  submenu?: MenuItem[]; // MenuItem pode agora conter todos os campos de MenuLink para os ícones
  funcao?: string;
  // Campos adicionados para permitir ícones nos submenus de guias
  twitter?: string;
  telegram?: string;
  discord?: string;
  documentation?: string;
  icon?: string;
};

const MENU: MenuItem[] = [
  { label: 'PORTFÓLIO', path: '/portfolio' },
  { label: 'ANÁLISE', path: '/analise' },
  {
    label: 'SWAP',
    path: '/dex', // Path para o "Ir para página" azul do DEX
    submenu: [
      { label: 'EVM', path: '/swap/evm' },
      { label: 'SOL', path: '/swap/sol' },
      { label: 'SUI', path: '/swap/sui' },
    ],
  },
  {
    label: 'CEX',
    path: '/cex' 
  },
  {
    label: 'STAKE',
    path: '/stake', // Path para o "Ir para página" azul do STAKE
    submenu: [
      { label: 'EVM', path: '/stake/evm' },
      { label: 'SOL', path: '/stake/sol' },
      { label: 'SUI', path: '/stake/sui' },
    ],
  },
  {
    label: 'POOLS',
    path: '/pools', // Path para o "Ir para página" azul do POOLS
    submenu: [
      { label: 'EVM', path: '/pools/evm' },
      { label: 'SOL', path: '/pools/sol' },
      { label: 'SUI', path: '/pools/sui' },
    ],
  },
  {
    label: 'DAO',
    path: '/dao', // Path para o "Ir para página" azul do DAO
    submenu: [
      { label: 'EVM', path: '/dao/evm' }, // Assumindo que existe ou será criado
      { label: 'SOL', path: '/dao/sol' },
      { label: 'SUI', path: '/dao/sui' },
    ],
  },
  { label: 'RWA', path: '/rwa' },
  {
    label: 'FINANCIAR CARTEIRA',
    path: '/financiar' 
  },
];

const USER_MENU_DELAY = 300; // ms

export default function NavBar() {
  // 1. TODOS OS HOOKS DEVEM ESTAR AQUI, ANTES DE QUALQUER LÓGICA CONDICIONAL
  const [mounted, setMounted] = useState(false);
  
  const [open, setOpen] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const userMenuTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const router = useRouter();
  const { user, isAuthenticated, handleLogOut, setShowAuthFlow } = useDynamicContext();

  // Efeitos (useEffect)
  useEffect(() => {
    setMounted(true); // Define mounted como true após a montagem inicial
  }, []);

  useEffect(() => {
    // Limpar timeouts quando o componente é desmontado
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      if (userMenuTimeoutRef.current) {
        clearTimeout(userMenuTimeoutRef.current);
      }
    };
  }, []); // Este useEffect de limpeza não depende de 'mounted'
  
  // Funções de handler (não são hooks, podem ficar aqui)
  const handleLogoutClick = async () => {
    setIsUserMenuOpen(false);
    await handleLogOut();
  };

  const handleUserMenuMouseEnter = () => {
    if (userMenuTimeoutRef.current) {
      clearTimeout(userMenuTimeoutRef.current);
      userMenuTimeoutRef.current = null;
    }
    setIsUserMenuOpen(true);
  };

  const handleUserMenuMouseLeave = () => {
    userMenuTimeoutRef.current = setTimeout(() => {
      setIsUserMenuOpen(false);
    }, 300); // Ajuste o delay se necessário
  };
  
  const handleMainMenuEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(label);
  };

  const handleMainMenuLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpen(null);
    }, USER_MENU_DELAY);
  };

  // 2. LÓGICA CONDICIONAL PARA RENDERIZAÇÃO (APÓS TODOS OS HOOKS)
  if (!mounted) {
    return null; // Ou um placeholder/spinner se preferir, mas null é seguro para SSR
  }

  // 3. RETURN DO COMPONENTE COMPLETO
  return (
    <nav className="navbar-glow flex items-center justify-center gap-8 pt-6 pb-2 relative z-50">
      {MENU.map((item) => (
        <div
          key={item.label}
          className={`relative${item.submenu ? ' has-submenu' : ''}`}
          data-label={item.label}
          onMouseEnter={() => handleMainMenuEnter(item.label)}
          onMouseLeave={handleMainMenuLeave}
        >
          {item.submenu ? (
            <span className="text-white font-bold tracking-wide text-base px-2 cursor-pointer hover:text-[#00BFFF] select-none">
              {item.label}
            </span>
          ) : (
            <Link href={item.path || ''} legacyBehavior>
              <a className="text-white font-bold tracking-wide text-base px-2 cursor-pointer hover:text-[#00BFFF] select-none">
                {item.label}
              </a>
            </Link>
          )}
          {open === item.label && item.submenu && (
            <div
              className="submenu-glow absolute left-1/2 -translate-x-1/2 mt-2 min-w-[200px] flex flex-col items-center z-50"
              onMouseEnter={() => handleMainMenuEnter(item.label)} // Manter aberto se entrar no submenu
              onMouseLeave={handleMainMenuLeave} // Fechar com delay se sair do submenu
            >
              <div className="submenu-content bg-transparent rounded-xl shadow-lg py-2 px-4 border border-cyan-400">
                {item.submenu.map((sub) => (
                  sub.external ? (
                    <a key={sub.label} href={sub.url} target="_blank" rel="noopener noreferrer" className="text-blue-400 font-bold tracking-wide text-base py-1 px-2 rounded w-full text-left cursor-pointer hover:bg-[#232136] transition underline flex items-center justify-between">
                      <div>
                        {sub.icon && <img src={sub.icon} alt={sub.label} className="inline-block w-5 h-5 mr-2 align-middle rounded-full" />}
                        {sub.label}
                        {sub.funcao && <span className="text-xs text-white/70 ml-1">({sub.funcao})</span>}
                      </div>
                      <div className="flex items-center">
                        {sub.documentation && (
                           <a href={sub.documentation} target="_blank" rel="noopener noreferrer" className="ml-2 flex items-center justify-center w-7 h-7 rounded-full border border-cyan-400 hover:bg-cyan-900 transition" title={`Documentação de ${sub.label}`}>
                            <span className="text-xs text-cyan-400">DOCS</span>
                          </a>
                        )}
                        {sub.discord && (
                          <a href={sub.discord} target="_blank" rel="noopener noreferrer" className="ml-2 flex items-center justify-center w-7 h-7 rounded-full border border-cyan-400 hover:bg-cyan-900 transition" title={`Discord de ${sub.label}`}>
                            <img src="/images/icons/discord.jpg" alt="Discord" className="w-4 h-4 object-contain" />
                          </a>
                        )}
                        {sub.telegram && (
                          <a href={sub.telegram} target="_blank" rel="noopener noreferrer" className="ml-2 flex items-center justify-center w-7 h-7 rounded-full border border-cyan-400 hover:bg-cyan-900 transition" title={`Telegram de ${sub.label}`}>
                            <img src="/images/icons/telegram.jpg" alt="Telegram" className="w-4 h-4 object-contain" />
                          </a>
                        )}
                        {sub.twitter && (
                          <a href={sub.twitter} target="_blank" rel="noopener noreferrer" className="ml-2 flex items-center justify-center w-7 h-7 rounded-full border border-cyan-400 hover:bg-cyan-900 transition" title={`Twitter de ${sub.label}`}>
                             <svg width="16" height="16" viewBox="0 0 1200 1227" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M908.5 320H741.5L600 529.5L458.5 320H291.5L540.5 677.5L291.5 1007H458.5L600 797.5L741.5 1007H908.5L659.5 677.5L908.5 320Z" fill="#22d3ee"/></svg>
                          </a>
                        )}
                      </div>
                    </a>
                  ) : sub.submenu ? (
                    <div key={sub.label} className="relative group w-full">
                      <span className="text-white font-bold tracking-wide text-base py-1 px-2 rounded w-full text-left cursor-pointer hover:bg-[#232136] transition flex items-center justify-between">
                        {sub.label}
                        <span className="ml-2">▶</span>
                      </span>
                      <div className="submenu-glow absolute left-full top-0 mt-0 ml-2 min-w-[200px] flex flex-col items-center z-50 hidden group-hover:flex">
                        <div className="submenu-content bg-transparent rounded-xl shadow-lg py-2 px-4 border border-cyan-400">
                          {sub.submenu.map((link) => (
                            link.external ? (
                              <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer" className="text-blue-400 font-bold tracking-wide text-base py-1 px-2 rounded w-full text-left cursor-pointer hover:bg-[#232136] transition underline flex items-center">
                                {link.icon && <img src={link.icon} alt={link.label} className="inline-block w-5 h-5 mr-2 align-middle rounded-full" />}
                                {link.label}
                                {link.funcao && <span className="text-xs text-white/70 ml-1">({link.funcao})</span>}
                              </a>
                            ) : (
                              <Link href={link.url || link.path || ''} key={link.label} legacyBehavior>
                                <a className="text-white font-bold tracking-wide text-base py-1 px-2 rounded w-full text-left cursor-pointer hover:bg-[#232136] transition">
                                  {link.label}
                                </a>
                              </Link>
                            )
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link href={sub.url || sub.path || ''} key={sub.label} legacyBehavior>
                      <a className="text-white font-bold tracking-wide text-base py-1 px-2 rounded w-full text-left cursor-pointer hover:bg-[#232136] transition flex items-center justify-between">
                        <div>
                          {sub.icon && <img src={sub.icon} alt={sub.label} className="inline-block w-5 h-5 mr-2 align-middle rounded-full" />}
                          {sub.label}
                        </div>
                        {(sub.twitter || sub.telegram || sub.discord || sub.documentation) && (
                          <div className="flex items-center">
                            {sub.documentation && (
                              <a href={sub.documentation} target="_blank" rel="noopener noreferrer" className="ml-2 flex items-center justify-center w-7 h-7 rounded-full border border-cyan-400 hover:bg-cyan-900 transition" title={`Documentação de ${sub.label}`}>
                                <span className="text-xs text-cyan-400">DOCS</span>
                              </a>
                            )}
                            {sub.discord && (
                              <a href={sub.discord} target="_blank" rel="noopener noreferrer" className="ml-2 flex items-center justify-center w-7 h-7 rounded-full border border-cyan-400 hover:bg-cyan-900 transition" title={`Discord de ${sub.label}`}>
                                <img src="/images/icons/discord.jpg" alt="Discord" className="w-4 h-4 object-contain" />
                              </a>
                            )}
                            {sub.telegram && (
                              <a href={sub.telegram} target="_blank" rel="noopener noreferrer" className="ml-2 flex items-center justify-center w-7 h-7 rounded-full border border-cyan-400 hover:bg-cyan-900 transition" title={`Telegram de ${sub.label}`}>
                                <img src="/images/icons/telegram.jpg" alt="Telegram" className="w-4 h-4 object-contain" />
                              </a>
                            )}
                            {sub.twitter && (
                              <a href={sub.twitter} target="_blank" rel="noopener noreferrer" className="ml-2 flex items-center justify-center w-7 h-7 rounded-full border border-cyan-400 hover:bg-cyan-900 transition" title={`Twitter de ${sub.label}`}>
                                <svg width="16" height="16" viewBox="0 0 1200 1227" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M908.5 320H741.5L600 529.5L458.5 320H291.5L540.5 677.5L291.5 1007H458.5L600 797.5L741.5 1007H908.5L659.5 677.5L908.5 320Z" fill="#22d3ee"/></svg>
                              </a>
                            )}
                          </div>
                        )}
                      </a>
                    </Link>
                  )
                ))}
                {(item.path || item.submenu?.length === 0) && (
                  <>
                    <div className="border-t border-white/10 my-2 w-full" />
                    <Link href={item.path || ''} legacyBehavior>
                      <a className="text-[#00BFFF] text-sm py-1 px-2 rounded hover:bg-[#232136] w-full text-left cursor-pointer font-bold transition">
                        Ir para página
                      </a>
                    </Link>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      ))}

      <div className="ml-auto flex items-center">
        {isAuthenticated && user ? (
          <div 
            className="relative"
            onMouseEnter={handleUserMenuMouseEnter}
            onMouseLeave={handleUserMenuMouseLeave}
          >
            <button className="text-white font-bold tracking-wide text-base px-3 py-2 rounded-lg border border-cyan-400 hover:bg-cyan-700 transition select-none">
              {user?.wallet?.slice(0, 6)}...{user?.wallet?.slice(-4) || 'Perfil'}
            </button>
            {isUserMenuOpen && (
              <div 
                className="absolute right-0 mt-2 w-48 bg-gray-800 border border-cyan-500 rounded-md shadow-lg py-1 z-50 transition-opacity duration-300 opacity-100 visible"
              >
                <Link href="/profile" legacyBehavior>
                  <a className="block px-4 py-2 text-sm text-white hover:bg-cyan-700">Perfil</a>
                </Link>
                <Link href="/favorites" legacyBehavior>
                  <a className="block px-4 py-2 text-sm text-white hover:bg-cyan-700">Meus Favoritos</a>
                </Link>
                <button
                  onClick={handleLogoutClick}
                  className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-red-600"
                >
                  Sair
                </button>
              </div>
            )}
          </div>
        ) : (
          <button
            onClick={() => setShowAuthFlow(true)}
            className="text-white font-bold tracking-wide text-base px-3 py-2 rounded-lg border border-cyan-400 hover:bg-cyan-700 transition select-none"
          >
            CONECTAR
          </button>
        )}
      </div>
      {/* Exibir mensagens de status ou erro globalmente se desejar */}
      {/* {statusMessage && <div className="absolute bottom-0 left-0 p-2 bg-green-500 text-white text-xs">{statusMessage}</div>}
      {errorMessage && <div className="absolute bottom-0 left-0 p-2 bg-red-500 text-white text-xs">{errorMessage}</div>} */}
      <style jsx>{`
        .navbar-glow {
          background: transparent;
          border: 2px solid #3ecbff;
          border-radius: 18px;
          box-shadow: 0 0 16px 2px #3ecbff, 0 0 40px 4px #1a2b3c inset;
          padding: 10px 32px;
          margin: 0 0 18px 0;
        }
        .submenu-glow {
          background: transparent;
          border: 2px solid #3ecbff;
          border-radius: 16px;
          box-shadow: 0 0 16px 2px #3ecbff, 0 0 40px 4px #1a2b3c inset;
          padding: 0;
        }
        .submenu-content {
          background: transparent;
          border-radius: 16px;
        }
      `}</style>
    </nav>
  );
} 