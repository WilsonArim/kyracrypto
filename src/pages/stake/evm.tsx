import React from 'react';
import Layout from '../../components/Layout';

const protocolos = [
  {
    nome: 'Aave',
    url: 'https://app.aave.com/staking/',
    landing: 'https://aave.com/',
    twitter: 'https://twitter.com/aave',
    documentation: 'https://docs.aave.com/hub/guides/staking-aave',
    github: 'https://github.com/aave',
    defillama: 'https://defillama.com/protocol/aave',
    discord: 'https://aave.com/discord',
    telegram: '',
    funcao: 'LENDING / STAKING (Safety Module)',
    icon: "/images/barra_de_navegacao/aave.png"
  },
  {
    nome: 'Notional Finance',
    url: 'https://notional.finance/',
    landing: 'https://notional.finance/',
    twitter: 'https://twitter.com/NotionalFinance',
    documentation: 'https://docs.notional.finance/',
    github: 'https://github.com/notional-finance',
    defillama: 'https://defillama.com/protocol/notional',
    discord: 'https://discord.notional.finance/',
    telegram: 'https://t.me/notionalfinance',
    funcao: 'FIXED RATE LENDING / STAKING (NOTE Token)',
    icon: "/images/barra_de_navegacao/notional.jpg"
  },
  {
    nome: 'Pendle Finance',
    url: 'https://app.pendle.finance/stake',
    landing: 'https://www.pendle.finance/',
    twitter: 'https://twitter.com/pendle_fi',
    documentation: 'https://docs.pendle.finance/protocole/vependle',
    github: 'https://github.com/pendle-finance',
    defillama: 'https://defillama.com/protocol/pendle',
    discord: 'https://discord.gg/pendlefinance',
    telegram: 'https://t.me/pendlefinance',
    funcao: 'YIELD TRADING / STAKING (vePENDLE)',
    icon: "/images/barra_de_navegacao/pendle.jpg"
  },
  {
    nome: 'Spectra Finance',
    url: 'https://www.spectra.finance/',
    landing: 'https://www.spectra.finance/',
    twitter: 'https://x.com/spectra_finance',
    documentation: 'https://docs.spectra.finance/',
    github: null,
    defillama: 'https://defillama.com/protocol/spectra',
    discord: 'https://discord.gg/FXh99F2M8x',
    telegram: 'https://t.me/+fMpgR8S1H9pjYmU0',
    funcao: 'YIELD DERIVATIVES / EARN',
    icon: "/images/barra_de_navegacao/spectra.jpg"
  },
  {
    nome: 'Hyperliquid',
    url: 'https://app.hyperliquid.xyz/',
    landing: 'https://app.hyperliquid.xyz/',
    twitter: 'https://twitter.com/HyperliquidX',
    documentation: 'https://docs.hyperliquid.xyz/hyperliquid-l1/staking-and-delegation',
    github: null,
    defillama: 'https://defillama.com/protocol/hyperliquid',
    discord: 'https://discord.gg/hyperliquid',
    telegram: '',
    funcao: 'PERPETUALS DEX / STAKING (L1 Security)',
    icon: "/images/barra_de_navegacao/hyperliquid.png"
  },
  {
    nome: 'Aura Finance',
    url: 'https://aura.finance/',
    landing: 'https://aura.finance/',
    twitter: 'https://twitter.com/AuraFinance',
    documentation: 'https://docs.aura.finance/',
    github: null,
    defillama: 'https://defillama.com/protocol/aura',
    discord: 'https://discord.gg/aurafinance',
    telegram: 'https://t.me/AuraFinance',
    funcao: 'YIELD BOOSTER (Balancer/Curve) / STAKING',
    icon: "/images/barra_de_navegacao/aura.jpg"
  },
  {
    nome: 'Convex Finance',
    url: 'https://www.convexfinance.com/',
    landing: 'https://www.convexfinance.com/',
    twitter: 'https://twitter.com/ConvexFinance',
    documentation: 'https://docs.convexfinance.com/convexfinance/',
    github: null,
    defillama: 'https://defillama.com/protocol/convex-finance',
    discord: 'https://discord.com/invite/TTEVTqY488',
    telegram: 'https://t.me/convexEth',
    funcao: 'YIELD BOOSTER (Curve) / STAKING',
    icon: "/images/barra_de_navegacao/convex.jpg"
  },
];

export default function StakeEvm() {
  return (
    <Layout>
      <div className="py-8">
        <h1 className="text-2xl font-bold mb-4">STAKE - EVM</h1>
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
                  {p.landing && p.landing !== p.url && (
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