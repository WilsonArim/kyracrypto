import React from 'react';
import Layout from '../../components/Layout';
import FavoriteStar from '../../components/FavoriteStar';

const protocolos = [
  {
    "nome": "Marinade Finance DAO",
    "url": "https://marinade.finance/app/staking/",
    "landing": "https://marinade.finance/",
    "twitter": "https://twitter.com/MarinadeFinance",
    "github": "https://github.com/marinade-finance",
    "documentation": "https://docs.marinade.finance/",
    "discord": "https://discord.gg/yTdH8YkYKg",
    "defillama": "https://defillama.com/protocol/marinade",
    "funcao": "DAO / Liquid Staking",
    "icon": "/images/barra_de_navegacao/marinade.png"
  },
  {
    "nome": "Mango DAO",
  "url": "https://app.mango.markets/dao/mainnet/metadata",
  "landing": "https://mango.markets/",
  "twitter": "https://twitter.com/mangomarkets",
  "github": "https://github.com/blockworks-foundation",
  "documentation": "https://docs.mango.markets/",
  "discord": "https://discord.gg/rvnx-mango",
  "defillama": "https://defillama.com/protocol/mango-markets",
  "funcao": "DAO / Trading & Lending",
  "icon": "/images/barra_de_navegacao/mango.png"
  },
  {
    "nome": "UXD Protocol DAO",
    "url": "https://dao.uxd.fi/",
    "landing": "https://uxd.fi/",
    "twitter": "https://twitter.com/UXDProtocol",
    "github": "https://github.com/UXDProtocol",
    "documentation": "https://docs.uxd.fi/",
    "discord": "https://discord.com/invite/BHfpYmjsBM",
    "defillama": "https://defillama.com/protocol/uxd",
    "funcao": "DAO / Stablecoin Protocol",
    "icon": "/images/barra_de_navegacao/uxd.png"
  },
  {
    "nome": "Realms DAO (SPL Governance)",
    "url": "https://app.realms.today/",
    "landing": "https://realms.today/",
    "twitter": "https://twitter.com/Realms_DAOs",
    "github": "https://github.com/solana-labs/governance-ui",
    "documentation": "https://docs.realms.today/",
    "discord": "https://discord.gg/VsPbrK2hJk",
    "funcao": "DAO Platform / Tooling",
    "icon": "/images/barra_de_navegacao/realms.png"
  }
];

const CATEGORY_PATH = "DAO - SOL";

export default function DaoSOL() {
  return (
    <Layout>
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-cyan-400 mb-8">DAO - SOL</h1>
        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {protocolos.map((p: any) => {
            const docLinkText = p.documentation
              ? p.documentation.toLowerCase().includes("whitepaper")
                ? "WHITEPAPER"
                : p.documentation === p.landing
                ? "WEBSITE"
                : "DOCS"
              : "";

            return (
              <li key={p.nome} className="protocolo-card">
                <div className="flex-grow">
                  <div className="flex items-center gap-3">
                    <img src={p.icon} alt={p.nome + ' icon'} className="w-7 h-7 rounded-full bg-white/10" />
                    <div className="flex flex-col">
                      <a href={p.url} target="_blank" rel="noopener noreferrer" className="text-cyan-300 font-bold text-lg hover:underline">
                        {p.nome}
                      </a>
                      <span className="text-xs text-gray-200 mt-1 tracking-wide uppercase">{p.funcao}</span>
                    </div>
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
                      <img src="/images/icons/github.png" alt="GitHub" className="w-5 h-5 object-contain" />
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
