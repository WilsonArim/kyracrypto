import React from 'react';
import Layout from '../../components/Layout';

const protocolosCEX = [
  {
    nome: 'Binance',
    url: 'https://www.binance.com/',
    landing: 'https://www.binance.com/',
    twitter: 'https://twitter.com/binance',
    documentation: 'https://www.binance.com/en/support',
    telegram: 'https://t.me/binanceexchange',
    github: 'https://github.com/binance',
    defillama: 'https://defillama.com/cex/binance-cex',
    funcao: 'EXCHANGE CENTRALIZADA (CEX) / LAUNCHPAD / EARN',
    icon: '/images/barra_de_navegacao/binance.jpg'
  },
  {
    nome: 'KuCoin',
    url: 'https://www.kucoin.com/',
    landing: 'https://www.kucoin.com/',
    twitter: 'https://twitter.com/kucoincom',
    documentation: 'https://www.kucoin.com/support',
    discord: 'https://discord.gg/kucoin',
    telegram: 'https://t.me/Kucoin_Exchange',
    github: 'https://github.com/kucoin',
    defillama: 'https://defillama.com/cex/kucoin',
    funcao: 'EXCHANGE CENTRALIZADA (CEX) / LAUNCHPAD / EARN / TRADING BOT',
    icon: '/images/barra_de_navegacao/kucoin.jpg'
  },
  {
    nome: 'OKX',
    url: 'https://www.okx.com/',
    landing: 'https://www.okx.com/',
    twitter: 'https://twitter.com/okx',
    documentation: 'https://www.okx.com/support-center.html',
    discord: 'https://discord.gg/okx',
    telegram: 'https://t.me/OKXOfficial_English',
    github: 'https://github.com/okx',
    defillama: 'https://defillama.com/cex/okx',
    funcao: 'EXCHANGE CENTRALIZADA (CEX) / WALLET WEB3 / JUMPSTART',
    icon: '/images/barra_de_navegacao/okx.jpg'
  },
  {
    nome: 'Bybit',
    url: 'https://www.bybit.com/',
    landing: 'https://www.bybit.com/',
    twitter: 'https://twitter.com/Bybit_Official',
    documentation: 'https://help.bybit.com/',
    discord: 'https://discord.gg/bybit',
    telegram: 'https://t.me/BybitEnglish',
    github: 'https://github.com/bybit-exchange',
    defillama: 'https://defillama.com/cex/bybit',
    funcao: 'EXCHANGE CENTRALIZADA (CEX) / LAUNCHPAD / EARN',
    icon: '/images/barra_de_navegacao/bybit.jpg'
  },
  {
    nome: 'Kraken',
    url: 'https://www.kraken.com/',
    landing: 'https://www.kraken.com/',
    twitter: 'https://twitter.com/krakenfx',
    documentation: 'https://support.kraken.com/',
    telegram: 'https://t.me/krakenofficial',
    github: 'https://github.com/krakenfx',
    defillama: 'https://defillama.com/cex/kraken',
    funcao: 'EXCHANGE CENTRALIZADA (CEX) / STAKING / DERIVATIVOS',
    icon: '/images/barra_de_navegacao/kraken.jpg'
  },
  {
    nome: 'Coinbase',
    url: 'https://www.coinbase.com/',
    landing: 'https://www.coinbase.com/',
    twitter: 'https://twitter.com/coinbase',
    documentation: 'https://help.coinbase.com/',
    telegram: 'https://t.me/CoinbaseNews',
    github: 'https://github.com/coinbase',
    defillama: 'https://defillama.com/protocol/coinbase-wallet',
    funcao: 'EXCHANGE CENTRALIZADA (CEX) / WALLET / EARN',
    icon: '/images/barra_de_navegacao/coinbase.png'
  }
];

export default function CexPage() {
  return (
    <Layout>
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-cyan-400 mb-8">Plataformas CEX (Exchanges Centralizadas)</h1>
        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {protocolosCEX.map((p) => {
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
                <div className="flex items-center mt-2">
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
            flex-direction: column;
            transition: box-shadow 0.2s;
          }
          .protocolo-card:hover {
            box-shadow: 0 0 32px 6px #3ecbff, 0 0 60px 8px #1a2b3c inset;
          }
          .container {
            max-width: 1200px;
          }
        `}</style>
      </div>
    </Layout>
  );
}
