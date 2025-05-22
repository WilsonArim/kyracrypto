import React from 'react';
import Layout from '../../components/Layout';
import FavoriteStar from '../../components/FavoriteStar';

const protocolos = [
  {
    nome: 'Uniswap',
    nomeVisual: <span style={{textDecoration: 'underline', color: '#22d3ee'}}>Uniswap</span>,
    url: 'https://app.uniswap.org/explore/pools',
    landing: 'https://uniswap.org/',
    twitter: 'https://twitter.com/Uniswap',
    documentation: 'https://docs.uniswap.org/',
    defillama: 'https://defillama.com/protocol/uniswap',
    github: 'https://github.com/Uniswap',
    discord: 'https://discord.com/invite/FCfyBSbCU5',
    funcao: 'DEX / LIQUIDITY POOLS',
    icon: "/images/barra_de_navegacao/uniswap.jpg",
    graficos: {
      tvl: 'https://defillama.com/protocol/uniswap/tvl',
      volume: 'https://dune.com/queries/1847607',
      preco: 'https://www.tradingview.com/chart/?symbol=BINANCE:UNIUSDT',
      pools: 'https://info.uniswap.org/#/pools'
    }
  },
  {
    nome: 'SushiSwap',
    url: 'https://app.sushi.com/pools',
    landing: 'https://sushi.com/',
    twitter: 'https://twitter.com/SushiSwap',
    documentation: 'https://docs.sushi.com/',
    defillama: 'https://defillama.com/protocol/sushiswap',
    github: 'https://github.com/sushiswap',
    discord: 'https://discord.gg/NVPXN4e',
    telegram: 'https://t.me/sushiswap',
    funcao: 'DEX / LIQUIDITY POOLS',
    icon: "/images/barra_de_navegacao/sushiswap.jpg",
    graficos: {
      tvl: 'https://defillama.com/protocol/sushiswap/tvl',
      volume: 'https://dune.com/queries/393895',
      preco: 'https://www.tradingview.com/chart/?symbol=BINANCE:SUSHIUSDT',
      pools: 'https://www.sushi.com/pools'
    }
  },
  {
    nome: 'PancakeSwap',
    url: 'https://pancakeswap.finance/liquidity/pools',
    landing: 'https://pancakeswap.finance/',
    twitter: 'https://twitter.com/PancakeSwap',
    documentation: 'https://docs.pancakeswap.finance/',
    defillama: 'https://defillama.com/protocol/pancakeswap',
    github: 'https://github.com/pancakeswap',
    discord: 'https://discord.com/invite/pancakeswap',
    telegram: 'https://t.me/pancakeswap',
    funcao: 'DEX / LIQUIDITY POOLS',
    icon: "/images/barra_de_navegacao/pancakeswap.jpg",
    graficos: {
      tvl: 'https://defillama.com/protocol/pancakeswap/tvl',
      volume: 'https://dune.com/queries/2281815',
      preco: 'https://www.tradingview.com/chart/?symbol=BINANCE:CAKEUSDT',
      pools: 'https://pancakeswap.finance/info/pools'
    }
  }
];

export default function PoolsEVM() {
  return (
    <Layout>
      <div className="container mx-auto py-8">
        <h1 className="text-4xl font-bold text-white mb-10 text-center">Pools - EVM</h1>
        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {protocolos.map((p) => {
            const docLinkText = p.documentation && p.documentation.toLowerCase().includes("whitepaper")
              ? "WHITEPAPER"
              : p.documentation && p.documentation === p.landing
              ? "WEBSITE"
              : "DOCS";
            return (
              <li key={p.nome} className="protocolo-card">
                <div className="flex flex-col w-full">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img src={p.icon} alt={p.nome + ' icon'} className="w-7 h-7 rounded-full bg-white/10" />
                      <div className="flex flex-col">
                        <a href={p.url} target="_blank" rel="noopener noreferrer" className="text-cyan-300 font-bold text-lg hover:underline">
                          {p.nomeVisual ? p.nomeVisual : p.nome}
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
                      {p.nome !== 'Uniswap' && p.telegram && (
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
                          key={p.nome + '-POOLS - EVM'}
                          protocolIdentifier={p.nome}
                          categoryPath={"POOLS - EVM"}
                          protocolName={p.nome}
                          protocolUrl={p.url}
                          protocolIconUrl={p.icon}
                        />
                      </div>
                    </div>
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