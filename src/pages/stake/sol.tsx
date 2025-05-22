import React from 'react';
import Layout from '../../components/Layout';
import FavoriteStar from '../../components/FavoriteStar';

const protocolos = [
  {
    nome: "Kamino",
    url: "https://app.kamino.finance/",
    landing: "https://kamino.finance/",
    twitter: "https://twitter.com/KaminoFinance",
    documentation: "https://docs.kamino.finance/",
    github: "https://github.com/Kamino-Finance",
    discord: "https://discord.com/invite/kaminofinance",
    telegram: "https://t.me/+z4XqPSCki-hhMDc0",
    defillama: 'https://defillama.com/protocol/kamino',
    funcao: "YIELD / EMPRÉSTIMOS",
    icon: "/images/barra_de_navegacao/kamino.jpg"
  },
  {
    nome: "Jito",
    url: "https://jito.network/",
    landing: "https://jito.network/",
    twitter: "https://x.com/jito_sol",
    documentation: "https://docs.jito.wtf/",
    discord: "https://discord.com/invite/jitocommunity",
    telegram: "https://t.me/+csIgnEQMCHhiYjVh",
    defillama: 'https://defillama.com/protocol/jito',
    funcao: "STAKING LÍQUIDO",
    icon: "/images/barra_de_navegacao/jito.png"
  },
  {
    nome: "Marinade",
    url: "https://marinade.finance/",
    landing: "https://marinade.finance/",
    twitter: "https://twitter.com/MarinadeFinance",
    documentation: "https://docs.marinade.finance/",
    discord: "https://discord.gg/yTdH8YkYKg",
    defillama: 'https://defillama.com/protocol/marinade',
    funcao: "STAKING LÍQUIDO",
    icon: "/images/barra_de_navegacao/marinade.jpg"
  },
  {
    nome: "Drift",
    url: "https://app.drift.trade/",
    landing: "https://drift.trade/",
    twitter: "https://twitter.com/DriftProtocol",
    documentation: "https://docs.drift.trade/",
    github: "https://github.com/drift-labs",
    discord: "https://discord.com/invite/fMcZBH8ErM",
    telegram: "https://t.me/+G4i0AZcHf6cxNDll",
    defillama: 'https://defillama.com/protocol/drift',
    funcao: "DERIVATIVOS",
    icon: "/images/barra_de_navegacao/drift.png"
  },
  {
    nome: "Sanctum",
    url: "https://sanctum.so/",
    landing: "https://sanctum.so/",
    twitter: "https://twitter.com/Sanctumso",
    documentation: "https://learn.sanctum.so/docs",
    github: null,
    discord: "https://discord.com/invite/sanctumso",
    telegram: null,
    defillama: 'https://defillama.com/protocol/sanctum',
    funcao: "STAKING LÍQUIDO",
    icon: "/images/barra_de_navegacao/sanctum.jpg"
  },
  {
    nome: "MarginFi",
    url: "https://app.marginfi.com/",
    landing: "https://marginfi.com/",
    twitter: "https://twitter.com/marginfi",
    documentation: "https://docs.marginfi.com/",
    github: null,
    discord: "https://discord.gg/marginfi",
    telegram: null,
    defillama: 'https://defillama.com/protocol/marginfi',
    funcao: "EMPRÉSTIMOS",
    icon: "/images/barra_de_navegacao/marginfi.jpg"
  },
  {
    nome: "Save",
    url: "https://save.finance/",
    landing: "https://save.org/",
    twitter: "https://x.com/save_finance",
    documentation: "https://docs.save.finance/",
    discord: "https://discord.com/invite/J7m48UUPkJ",
    funcao: "EMPRÉSTIMOS",
    icon: "/images/barra_de_navegacao/save.jpg"
  }
];

export default function StakeSol() {
  return (
    <Layout>
      <div className="py-8">
        <h1 className="text-4xl font-bold text-white mb-10 text-center">Stake - SOL</h1>
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
                  {p.discord && p.nome !== 'MarginFi' && (
                    <a href={p.discord} target="_blank" rel="noopener noreferrer" className="ml-2 flex items-center justify-center w-8 h-8 rounded-full border border-cyan-400 hover:bg-cyan-900 transition" title={`Discord de ${p.nome}`}>
                      <img src="/images/icons/discord.jpg" alt="Discord" className="w-5 h-5 object-contain" />
                    </a>
                  )}
                  {p.telegram && p.nome !== 'Kamino' && p.nome !== 'Drift' && (
                    <a href={p.telegram} target="_blank" rel="noopener noreferrer" className="ml-2 flex items-center justify-center w-8 h-8 rounded-full border border-cyan-400 hover:bg-cyan-900 transition" title={`Telegram de ${p.nome}`}>
                      <img src="/images/icons/telegram.jpg" alt="Telegram" className="w-5 h-5 object-contain" />
                    </a>
                  )}
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noopener noreferrer" className="ml-2 flex items-center justify-center w-8 h-8 rounded-full border border-cyan-400 hover:bg-cyan-900 transition" title={`GitHub de ${p.nome}`}>
                      <img src="/images/barra_de_navegacao/github.png" alt="GitHub" className="w-5 h-5 object-contain" />
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
                      key={p.nome + '-STAKE - SOL'}
                      protocolIdentifier={p.nome}
                      categoryPath={"STAKE - SOL"}
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