import React from 'react';
import Layout from '../../components/Layout';

interface Protocolo {
  nome: string;
  url: string;
  landing: string;
  twitter: string;
  documentation: string;
  defillama?: string | null;
  github?: string | null;
  discord?: string;
  telegram?: string | null;
  funcao: string;
  icon: string;
}

const protocolos: Protocolo[] = [
  {
    nome: 'Suilend',
    url: 'https://suilend.fi/', // App link for supply/borrow
    landing: 'https://suilend.fi/',
    twitter: 'https://twitter.com/suilendprotocol',
    documentation: 'https://docs.suilend.fi/',
    defillama: 'https://defillama.com/protocol/suilend',
    discord: 'https://discord.gg/suilend',
    funcao: 'LENDING / BORROWING',
    icon: "/images/barra_de_navegacao/suilend.png" // Placeholder, update if specific logo found
  },
  {
    nome: 'Navi Protocol',
    url: 'https://www.naviprotocol.io/', // App link
    landing: 'https://www.naviprotocol.io/',
    twitter: 'https://twitter.com/navi_protocol',
    documentation: 'https://naviprotocol.gitbook.io/navi-protocol-docs/',
    discord: 'https://discord.gg/naviprotocol',
    telegram: 'https://t.me/navi_protocol',
    funcao: 'LENDING / LIQUID STAKING / DAO',
    icon: "/images/barra_de_navegacao/navi.jpg" // Placeholder
  },
  {
    nome: 'Haedal Protocol',
    url: 'https://haedal.xyz/', // App for staking SUI
    landing: 'https://haedal.xyz/',
    twitter: 'https://twitter.com/HaedalProtocol',
    documentation: 'https://haedal-protocol.gitbook.io/haedal-protocol-docs/',
    defillama: 'https://defillama.com/protocol/haedal-protocol',
    discord: 'https://discord.gg/haedalprotocol',
    telegram: 'https://t.me/haedalprotocol',
    funcao: 'LIQUID STAKING (haSUI)',
    icon: "/images/barra_de_navegacao/haedal.jpg" // Placeholder
  },
  {
    nome: 'Aftermath Finance',
    url: 'https://aftermath.finance/earn/liquid-staking', // Direct link to liquid staking
    landing: 'https://aftermath.finance/',
    twitter: 'https://twitter.com/aftermathfi',
    documentation: 'https://docs.aftermath.finance/',
    discord: 'https://discord.gg/aftermathfi',
    telegram: 'https://t.me/aftermath_finance',
    funcao: 'LIQUID STAKING / AGREGADOR DEX',
    icon: "/images/barra_de_navegacao/aftermath.jpg"
  },
  {
    nome: 'Bluefin', // Already in dex/sui, listed here for stake context (sUI)
    url: 'https://bluefin.io/', // App, sUI can be used as collateral
    landing: 'https://bluefin.io/',
    twitter: 'https://twitter.com/bluefinapp',
    documentation: 'https://docs.bluefin.io/bluefin/technical-deep-dive/liquid-staking-sui-lsui',
    discord: 'https://discord.gg/bluefin',

    funcao: 'DERIVATIVOS / sUI COLLATERAL',
    icon: "/images/barra_de_navegacao/bluefin.jpg"
  },
  {
    nome: 'Cetus', // Already in dex/sui, listed here for stake/farm context
    url: 'https://www.cetus.zone/farms', // Direct link to farms
    landing: 'https://www.cetus.zone/',
    twitter: 'https://twitter.com/CetusProtocol',
    documentation: 'https://cetus-protocol.gitbook.io/cetus-protocol/',
    defillama: null,
    github: null,
    discord: 'https://discord.gg/cetusprotocol',
    telegram: 'https://t.me/cetusprotocol',
    funcao: 'DEX / YIELD FARMING',
    icon: "/images/barra_de_navegacao/cetus.jpg"
  },
  {
    nome: 'Turbos', // Already in dex/sui, listed here for stake/farm context
    url: 'https://turbos.finance/farm', // Direct link to farms
    landing: 'https://turbos.finance/',
    twitter: 'https://twitter.com/Turbos_finance',
    documentation: 'https://docs.turbos.finance/',
    discord: 'https://discord.gg/turbosfinance',
    telegram: 'https://t.me/turbosfinance_EN',
    funcao: 'DEX / YIELD FARMING',
    icon: "/images/barra_de_navegacao/turbos.jpg"
  },
];

export default function StakeSui() {
  return (
    <Layout>
      <div className="py-8">
        <h1 className="text-2xl font-bold mb-4">STAKE - SUI</h1>
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
                <div className="flex items-center"> {/* Wrapper for social icons */}
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
                  {p.landing && p.landing !== p.url && /* Only show landing if different from app url */ (
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
                  {/* Placeholder for new links - add your own rendering logic and icons */}
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