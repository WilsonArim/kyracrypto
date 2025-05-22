import React from 'react';
import Layout from '../../components/Layout';
import FavoriteStar from '../../components/FavoriteStar';

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
    funcao: 'FIXED RATE LENDING / STAKING (NOTE Token)',
    icon: "/images/barra_de_navegacao/notional.jpg"
  },
  {
    nome: 'Pendle Finance',
    url: 'https://app.pendle.finance/trade/markets?utm_source=landing&utm_medium=landing',
    landing: 'https://www.pendle.finance/',
    twitter: 'https://twitter.com/pendle_fi',
    documentation: 'https://docs.pendle.finance/home?utm_source=landing&utm_medium=landing',
    github: 'https://github.com/pendle-finance',
    defillama: 'https://defillama.com/protocol/pendle',
    discord: 'https://discord.com/invite/EAujvncY2R',
    telegram: 'https://t.me/pendlefinance/',
    funcao: 'YIELD TRADING / STAKING (vePENDLE)',
    icon: "/images/barra_de_navegacao/pendle.jpg"
  },
  {
    nome: 'Spectra Finance',
    url: 'https://app.spectra.finance/fixed-rate',
    landing: 'https://www.spectra.finance/',
    twitter: 'https://x.com/spectra_finance',
    documentation: 'https://docs.spectra.finance/',
    github: 'https://github.com/perspectivefi',
    defillama: 'https://defillama.com/protocol/spectra',
    discord: 'https://discord.com/invite/e2PfbPenMB',
    telegram: 'https://t.me/APWineFinance',
    funcao: 'YIELD DERIVATIVES / EARN',
    icon: "/images/barra_de_navegacao/spectra.jpg"
  },
  {
    nome: 'Hyperliquid',
    url: 'https://app.hyperliquid.xyz/vaults',
    landing: 'https://app.hyperliquid.xyz/',
    twitter: 'https://twitter.com/HyperliquidX',
    documentation: 'https://hyperliquid.gitbook.io/hyperliquid-docs',
    github: null,
    defillama: 'https://defillama.com/protocol/hyperliquid',
    discord: 'https://discord.gg/hyperliquid',
    telegram: '',
    funcao: 'PERPETUALS DEX / STAKING (L1 Security)',
    icon: "/images/barra_de_navegacao/hyperliquid.png"
  },
  {
    nome: 'Aura Finance',
    url: 'https://app.aura.finance/',
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
  {
    nome: 'Lido DAO',
    url: 'https://stake.lido.fi/',
    landing: 'https://lido.fi/',
    twitter: 'https://twitter.com/LidoFinance',
    documentation: 'https://docs.lido.fi/',
    github: 'https://github.com/lidofinance',
    defillama: 'https://defillama.com/protocol/lido',
    discord: 'https://discord.gg/lido',
    telegram: 'https://t.me/lidofinance',
    funcao: 'LIQUID STAKING (ETH, MATIC, etc.)',
    icon: '/images/barra_de_navegacao/lido.jpg'
  },
  {
    nome: 'Rocket Pool',
    url: 'https://stake.rocketpool.net/',
    landing: 'https://rocketpool.net/',
    twitter: 'https://twitter.com/Rocket_Pool',
    documentation: 'https://docs.rocketpool.net/',
    github: 'https://github.com/rocket-pool',
    defillama: 'https://defillama.com/protocol/rocket-pool',
    discord: 'https://discord.gg/rocketpool',
    funcao: 'LIQUID STAKING (ETH)',
    icon: '/images/barra_de_navegacao/rocketpool.png'
  },
  {
    nome: 'Stader Labs (ETHx)',
    url: 'https://www.staderlabs.com/',
    landing: 'https://www.staderlabs.com/',
    twitter: 'https://twitter.com/staderlabs',
    documentation: 'https://docs.staderlabs.com/',
    github: 'https://github.com/stader-labs',
    defillama: 'https://defillama.com/protocol/stader',
    discord: 'https://discord.gg/stader',
    telegram: 'https://t.me/staderlabs',
    funcao: 'LIQUID STAKING (ETHx)',
    icon: '/images/barra_de_navegacao/stader.jpg'
  },
];

export default function StakeEvm() {
  return (
    <Layout>
      <div className="py-8">
        <h1 className="text-4xl font-bold text-white mb-10 text-center">Stake - EVM</h1>
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
                    <span className="text-xs text-gray-200 mt-1 tracking-wide uppercase">
                      {p.nome === 'Aave' ? (
                        'LENDING / STAKING (SAFETY MODULE)'
                      ) : p.nome === 'Notional Finance' ? (
                        'FIXED RATE LENDING / STAKING (NOTE Token)'
                      ) : p.nome === 'Pendle Finance' ? (
                        'YIELD TRADING / STAKING (vePENDLE)'
                      ) : p.nome === 'Aura Finance' ? (
                        'YIELD BOOSTER / STAKING'
                      ) : p.nome === 'Convex Finance' ? (
                        'YIELD BOOSTER / STAKING'
                      ) : p.nome === 'Lido DAO' ? (
                        'LIQUID STAKING'
                      ) : p.nome === 'Rocket Pool' ? (
                        'LIQUID STAKING'
                      ) : p.nome === 'Stader Labs (ETHx)' ? (
                        'LIQUID STAKING (ETHx)'
                      ) : p.nome === 'Hyperliquid' ? (
                        'PERPETUALS DEX / STAKING (L1 Security)'
                      ) : (
                        p.funcao
                      )}
                    </span>
                  </div>
                </div>
                <div className="flex items-center">
                  {p.documentation && (
                    <a href={p.documentation} target="_blank" rel="noopener noreferrer" className="ml-2 flex items-center justify-center w-8 h-8 rounded-full border border-cyan-400 hover:bg-cyan-900 transition" title={`Documentação de ${p.nome}`}>
                      <span className="text-xs text-cyan-400">{docLinkText}</span>
                    </a>
                  )}
                  {p.discord && p.nome !== 'Stader Labs (ETHx)' && (
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
                      key={p.nome + '-STAKE - EVM'}
                      protocolIdentifier={p.nome}
                      categoryPath={"STAKE - EVM"}
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