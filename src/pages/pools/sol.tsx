import React from 'react';
import Layout from '../../components/Layout';
import FavoriteStar from '../../components/FavoriteStar';

const protocolos = [
  {
    nome: 'Orca',
    url: 'https://www.orca.so/pools',
    landing: 'https://www.orca.so/',
    twitter: 'https://twitter.com/orca_so',
    documentation: 'https://docs.orca.so/',
    defillama: 'https://defillama.com/protocol/orca',
    funcao: 'DEX / LIQUIDITY POOLS',
    icon: "/images/barra_de_navegacao/orca.png"
  },
  {
    nome: 'Raydium',
    url: 'https://raydium.io/liquidity-pools/',
    landing: 'https://raydium.io/',
    twitter: 'https://twitter.com/RaydiumProtocol',
    documentation: 'https://docs.raydium.io/',
    discord: 'https://discord.gg/raydium',
    telegram: 'https://t.me/raydiumprotocol',
    defillama: 'https://defillama.com/protocol/raydium',
    funcao: 'DEX / LIQUIDITY POOLS / FARMS',
    icon: "/images/barra_de_navegacao/raydium.jpg"
  },
  {
    nome: 'Meteora',
    url: 'https://meteora.ag/pools',
    landing: 'https://meteora.ag/',
    twitter: 'https://twitter.com/MeteoraAG',
    documentation: 'https://docs.meteora.ag/',
    discord: 'https://discord.gg/meteora',
    defillama: 'https://defillama.com/protocol/meteora-dlmm',
    funcao: 'DEX / DYNAMIC LIQUIDITY POOLS (DLMM)',
    icon: "/images/barra_de_navegacao/meteora.jpg"
  },
  {
    nome: 'Kamino Finance',
    url: 'https://app.kamino.finance/',
    landing: 'https://kamino.finance/',
    twitter: 'https://twitter.com/KaminoFinance',
    documentation: 'https://docs.kamino.finance/',
    discord: 'https://discord.gg/kaminofinance',
    telegram: 'https://t.me/KaminoFinance',
    defillama: 'https://defillama.com/protocol/kamino-lend',
    funcao: 'AUTOMATED LIQUIDITY / LENDING / LEVERAGE',
    icon: "/images/barra_de_navegacao/kamino.jpg"
  }
];

export default function PoolsSOL() {
  return (
    <Layout>
      <div className="container mx-auto py-8">
        <h1 className="text-4xl font-bold text-white mb-10 text-center">Pools - SOL</h1>
        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {protocolos.map((p) => {
            const docLinkText = p.documentation && p.documentation.toLowerCase().includes("whitepaper")
              ? "WHITEPAPER"
              : p.documentation && p.documentation === p.landing
              ? "WEBSITE"
              : "DOCS";
            return (
              <li key={p.nome} className="protocolo-card">
                <div className="flex items-center gap-3">
                  <img src={p.icon} alt={p.nome + ' icon'} className="w-7 h-7 rounded-full bg-white/10" />
                  <div className="flex flex-col">
                    <a href={p.url} target="_blank" rel="noopener noreferrer" className="text-cyan-300 font-bold text-lg hover:underline">
                      {p.nome}
                    </a>
                    <span className="text-xs text-gray-200 mt-1 tracking-wide uppercase">{p.funcao}</span>
                  </div>
                </div>
                <div className="flex items-center">
                  {p.documentation && (
                    <a href={p.documentation} target="_blank" rel="noopener noreferrer" className="ml-2 flex items-center justify-center w-8 h-8 rounded-full border border-cyan-400 hover:bg-cyan-900 transition" title={`Documentação de ${p.nome}`}>
                      <span className="text-xs text-cyan-400">{docLinkText}</span>
                    </a>
                  )}
                  {p.discord && (
                    <a href={p.discord} target="_blank" rel="noopener noreferrer" className="ml-2 flex items-center justify-center w-8 h-8 rounded-full border border-cyan-400 hover:bg-cyan-900 transition" title={`Discord de ${p.nome}`}>
                      <img src="/images/icons/discord.jpg" alt="Discord" className="w-5 h-5 object-contain" />
                    </a>
                  )}
                  {p.telegram && (
                    <a href={p.telegram} target="_blank" rel="noopener noreferrer" className="ml-2 flex items-center justify-center w-8 h-8 rounded-full border border-cyan-400 hover:bg-cyan-900 transition" title={`Telegram de ${p.nome}`}>
                      <img src="/images/icons/telegram.jpg" alt="Telegram" className="w-5 h-5 object-contain" />
                    </a>
                  )}
                  {p.twitter && (
                    <a href={p.twitter} target="_blank" rel="noopener noreferrer" className="ml-2 flex items-center justify-center w-8 h-8 rounded-full border border-cyan-400 hover:bg-cyan-900 transition" title={`Twitter de ${p.nome}`}>
                      <svg width="18" height="18" viewBox="0 0 1200 1227" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="1200" height="1227" rx="200" fill="none"/>
                        <path d="M908.5 320H741.5L600 529.5L458.5 320H291.5L540.5 677.5L291.5 1007H458.5L600 797.5L741.5 1007H908.5L659.5 677.5L908.5 320Z" fill="#22d3ee"/>
                      </svg>
                    </a>
                  )}
                  {p.defillama && (
                    <a href={p.defillama} target="_blank" rel="noopener noreferrer" className="ml-2 flex items-center justify-center w-8 h-8 rounded-full border border-cyan-400 hover:bg-cyan-900 transition" title={`DefiLlama de ${p.nome}`}>
                      <img src="/images/barra_de_navegacao/defillama.png" alt="DefiLlama" className="w-5 h-5 object-contain" />
                    </a>
                  )}
                  <div className="ml-2 flex items-center justify-center w-8 h-8">
                    <FavoriteStar 
                      key={p.nome + '-POOLS - SOL'}
                      protocolIdentifier={p.nome}
                      categoryPath={"POOLS - SOL"}
                      protocolName={p.nome}
                      protocolUrl={p.url}
                      protocolIconUrl={p.icon}
                    />
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
        <style jsx>{`
          .protocolo-card {
            background: transparent;
            border: 2px solid #3ecbff;
            border-radius: 16px;
            box-shadow: 0 0 16px 2px #3ecbff, 0 0 40px 4px #1a2b3c inset;
            padding: 18px 24px;
            margin: 12px 0;
            display: flex;
            align-items: center;
            justify-content: space-between;
            transition: box-shadow 0.2s;
          }
          .protocolo-card:hover {
            box-shadow: 0 0 32px 6px #3ecbff, 0 0 60px 8px #1a2b3c inset;
          }
        `}</style>
      </div>
    </Layout>
  );
} 