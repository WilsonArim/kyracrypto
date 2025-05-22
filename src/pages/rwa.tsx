import React from 'react';
import Layout from '../components/Layout';
import FavoriteStar from '../components/FavoriteStar';

const protocolos = [
  {
    nome: 'Ondo Finance',
    url: 'https://ondo.finance/',
    landing: 'https://ondo.finance/',
    governance: 'https://www.tally.xyz/gov/ondo-dao',
    github: 'https://github.com/ondofinance',
    defillama: 'https://defillama.com/protocol/ondo-finance',
    discord: 'https://discord.gg/ondofinance',
    telegram: 'https://t.me/ondofinance',
    twitter: 'https://twitter.com/OndoFinance',
    funcao: 'TOKENIZAÇÃO DE ATIVOS DO MUNDO REAL (RWA) / DAO',
    icon: "/images/barra_de_navegacao/ondo.jpg"
  },
  {
    nome: 'Centrifuge',
    url: 'https://centrifuge.io/',
    landing: 'https://centrifuge.io/',
    governance: 'https://docs.centrifuge.io/user/governance/governance-process/',
    github: 'https://github.com/centrifuge',
    defillama: 'https://defillama.com/protocol/centrifuge',
    discord: 'https://discord.gg/centrifuge',
    telegram: 'https://t.me/centrifuge_chat',
    twitter: 'https://twitter.com/centrifuge',
    funcao: 'PLATAFORMA DE TOKENIZAÇÃO DE RWA / FINANÇAS ON-CHAIN',
    icon: "/images/barra_de_navegacao/centrifuge.jpg"
  },
  {
    nome: 'Maple Finance',
    url: 'https://maple.finance/',
    landing: 'https://maple.finance/',
    governance: 'https://community.maple.finance/',
    github: 'https://github.com/maple-labs',
    defillama: 'https://defillama.com/protocol/maple',
    discord: 'https://discord.com/invite/maplefinance',
    telegram: 'https://t.me/maplefinance',
    twitter: 'https://twitter.com/maplefinance',
    funcao: 'MERCADO DE CRÉDITO INSTITUCIONAL (EMPRÉSTIMOS RWA)',
    icon: "/images/barra_de_navegacao/maple.jpg"
  },
  {
    nome: 'Plume Network',
    url: 'https://www.plumenetwork.xyz/',
    landing: 'https://www.plumenetwork.xyz/',
    governance: 'https://plumenetwork.xyz/ecosystem',
    github: 'https://github.com/plumenetwork',
    defillama: 'https://defillama.com/chain/plume-mainnet',
    discord: 'https://discord.com/invite/plume-network',
    telegram: 'https://t.me/plumenetwork',
    twitter: 'https://twitter.com/plumenetwork',
    funcao: 'CAMADA MODULAR RWA LAYER 2 / L1',
    icon: "/images/barra_de_navegacao/plume.jpg"
  }
];

export default function RWA() {
  return (
    <Layout>
      <div className="container mx-auto py-8">
        <h1 className="text-4xl font-bold text-white mb-10 text-center">RWA - Real World Assets</h1>
        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {protocolos.map((p) => {
            const docLinkText = p.governance && p.governance.toLowerCase().includes("whitepaper")
              ? "WHITEPAPER"
              : p.governance && p.governance === p.landing
              ? "WEBSITE"
              : "GOV";
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
                  {p.governance && (
                    <a href={p.governance} target="_blank" rel="noopener noreferrer" className="ml-2 flex items-center justify-center w-8 h-8 rounded-full border border-cyan-400 hover:bg-cyan-900 transition" title={`Governança de ${p.nome}`}>
                      <span className="text-xs text-cyan-400">{docLinkText}</span>
                    </a>
                  )}
                  {p.discord && p.nome !== 'Centrifuge' && (
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
                      key={p.nome + '-RWA'}
                      protocolIdentifier={p.nome}
                      categoryPath={"RWA"}
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
        <div className="mt-12 text-center text-gray-400 text-lg">
          <p>Atualmente, os principais protocolos de RWA estão disponíveis apenas em redes EVM.<br/>Ainda não existem soluções relevantes de RWA em Solana ou SUI.</p>
        </div>
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