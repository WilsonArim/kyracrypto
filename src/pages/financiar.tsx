import React from 'react';
import Layout from '../components/Layout';

const plataformas = [
  {
    nome: 'Mercado Bitcoin Portugal',
    url: 'https://mercadobitcoin.pt/',
    landing: 'https://mercadobitcoin.pt/',
    twitter: 'https://twitter.com/mb_portugal',
    icon: '/images/barra_de_navegacao/mercado-bitcoinpt.jpg',
    funcao: 'Guia para financiar carteira via Mercado Bitcoin em Portugal.'
  },
  {
    nome: 'Mercado Bitcoin (Brasil)',
    url: 'https://www.mercadobitcoin.com.br/',
    landing: 'https://www.mercadobitcoin.com.br/',
    twitter: 'https://twitter.com/MercadoBitcoin',
    telegram: 'https://t.me/MercadoBitcoin',
    documentation: 'https://www.mercadobitcoin.com.br/wp-content/uploads/2023/02/whitepaper-v1_pt.pdf',
    icon: '/images/barra_de_navegacao/mercado-bitcoin.jpg',
    funcao: 'Guia para financiar carteira via Mercado Bitcoin no Brasil.'
  }
];

export default function FinanciarCarteiraPage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-white text-center">Como Financiar a Sua Carteira</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {plataformas.map((p) => {
            const docLinkText = p.documentation ? 
              (p.documentation.toLowerCase().includes('whitepaper') ? 'WHITEPAPER' :
              (p.documentation === p.landing ? 'WEBSITE' : 'DOCS')) 
              : '';

            return (
              <div key={p.nome} className="protocol-card bg-[#100f18] bg-opacity-80 border border-cyan-400 rounded-xl p-6 shadow-xl hover:shadow-cyan-500/50 transition-shadow duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex items-center mb-4">
                    {p.icon && <img src={p.icon} alt={`${p.nome} icon`} className="w-10 h-10 rounded-full mr-3" />}
                    <h2 className="text-2xl font-semibold text-white">{p.nome}</h2>
                  </div>
                  <p className="text-gray-300 mb-4 text-sm">{p.funcao}</p>
                </div>
                
                <div className="mt-auto">
                  {p.url && (
                    <a href={p.url} target="_blank" rel="noopener noreferrer" className="block w-full bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded text-center transition-colors duration-300 mb-3">
                      Aceder à Plataforma
                    </a>
                  )}
                  <div className="flex items-center justify-center space-x-3">
                    {p.twitter && (
                      <a href={p.twitter} target="_blank" rel="noopener noreferrer" title="Twitter / X" className="social-link">
                        <svg width="24" height="24" viewBox="0 0 1200 1227" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M908.5 320H741.5L600 529.5L458.5 320H291.5L540.5 677.5L291.5 1007H458.5L600 797.5L741.5 1007H908.5L659.5 677.5L908.5 320Z" fill="#22d3ee"/></svg>
                      </a>
                    )}
                    {docLinkText && p.documentation && (
                      <a href={p.documentation} target="_blank" rel="noopener noreferrer" title={docLinkText} className="social-link-text">
                        <span className="text-xs text-cyan-400 hover:text-cyan-200 font-semibold tracking-wider">{docLinkText}</span>
                      </a>
                    )}
                    {p.telegram && (
                      <a href={p.telegram} target="_blank" rel="noopener noreferrer" title="Telegram" className="social-link">
                        <img src="/images/icons/telegram.jpg" alt="Telegram" className="w-6 h-6" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <style jsx>{`
        .protocol-card {
          /* Pode adicionar estilos específicos aqui se necessário */
        }
        .social-link img,
        .social-link svg {
          transition: transform 0.2s ease-in-out;
        }
        .social-link:hover img,
        .social-link:hover svg {
          transform: scale(1.15);
        }
        .social-link-text span {
            border: 1px solid transparent;
            padding: 5px 8px;
            border-radius: 15px;
            transition: all 0.2s ease-in-out;
        }
        .social-link-text:hover span {
            border-color: #22d3ee; 
            background-color: rgba(34, 211, 238, 0.1);
        }
      `}</style>
    </Layout>
  );
} 
