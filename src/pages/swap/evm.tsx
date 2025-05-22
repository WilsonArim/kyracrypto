import React from 'react';
import Layout from '../../components/Layout';
import FavoriteStar from '../../components/FavoriteStar';

const protocolos = [
  {
    nome: "Uniswap",
    url: "https://app.uniswap.org/",
    landing: "https://uniswap.org/",
    twitter: "https://twitter.com/Uniswap",
    documentation: "https://docs.uniswap.org/",
    defillama: "https://defillama.com/protocol/uniswap",
    github: "https://github.com/uniswap",
    discord: "https://discord.gg/FCfyBSbCU5",
    funcao: "SWAP / POOLS",
    icon: "/images/barra_de_navegacao/uniswap.jpg"
  },
  {
    nome: "PancakeSwap",
    url: "https://pancakeswap.finance/",
    landing: "https://pancakeswap.finance/",
    twitter: "https://twitter.com/PancakeSwap",
    documentation: "https://docs.pancakeswap.finance/",
    defillama: "https://defillama.com/protocol/pancakeswap",
    github: "https://github.com/pancakeswap",
    discord: "https://discord.gg/pancakeswap",
    telegram: "https://t.me/PancakeSwap",
    funcao: "SWAP / POOLS / STAKE",
    icon: "/images/barra_de_navegacao/PancakeSwap.jpg"
  },
  {
    nome: "Balancer",
    url: "https://app.balancer.fi/",
    landing: "https://balancer.fi/",
    twitter: "https://twitter.com/Balancer",
    documentation: "https://docs.balancer.fi/",
    defillama: "https://defillama.com/protocol/balancer",
    github: "https://github.com/balancer",
    discord: "https://discord.gg/balancer",
    telegram: "https://t.me/balancer_official",
    funcao: "SWAP / POOLS (Weighted/Managed)",
    icon: "/images/barra_de_navegacao/balancer.png"
  },
];

const CATEGORY_PATH = "SWAP - EVM";

export default function SwapEvm() {
  return (
    <Layout>
      <div className="py-8">
        <h1 className="text-4xl font-bold text-white mb-10 text-center">Swap - EVM</h1>
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
                  {p.landing && p.landing !== p.url && p.nome !== 'Uniswap' && (
                    <a href={p.landing} target="_blank" rel="noopener noreferrer" className="ml-2 flex items-center justify-center w-8 h-8 rounded-full border border-cyan-400 hover:bg-cyan-900 transition" title={`Landing page de ${p.nome}`}>
                      <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="10" cy="10" r="8" stroke="#22d3ee" strokeWidth="2" fill="none"/>
                        <path d="M2 10h16M10 2a16 16 0 0 1 0 16M10 2a16 16 0 0 0 0 16" stroke="#22d3ee" strokeWidth="1.5" fill="none"/>
                      </svg>
                    </a>
                  )}
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noopener noreferrer" className="ml-2 flex items-center justify-center w-8 h-8 rounded-full border border-cyan-400 hover:bg-cyan-900 transition" title={`GitHub de ${p.nome}`}>
                      <img src="/images/barra_de_navegacao/github.png" alt="GitHub" className="w-5 h-5 object-contain" />
                    </a>
                  )}
                  {p.defillama && (
                    <a href={p.defillama} target="_blank" rel="noopener noreferrer" className="ml-2 flex items-center justify-center w-8 h-8 rounded-full border border-cyan-400 hover:bg-cyan-900 transition" title={`DefiLlama de ${p.nome}`}>
                      <img src="/images/barra_de_navegacao/defillama.png" alt="DefiLlama" className="w-5 h-5 object-contain" />
                    </a>
                  )}
                  <div className="ml-2 flex items-center justify-center w-8 h-8">
                    <FavoriteStar 
                      key={p.nome + '-' + CATEGORY_PATH}
                      protocolIdentifier={p.nome}
                      categoryPath={CATEGORY_PATH}
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