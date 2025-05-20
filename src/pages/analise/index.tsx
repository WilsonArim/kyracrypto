import React from 'react';
import Layout from '../../components/Layout';
import Link from 'next/link';

const categorias = [
  {
    nome: 'Mercado',
    descricao: 'Análises gerais de mercado, ETFs, e movimentações institucionais',
    subcategorias: [
      {
        nome: 'ETFs e Institucional',
        path: '/analise/mercado/etfs',
        descricao: 'Fluxo de ETFs de BTC, movimentações institucionais e correlações'
      },
      {
        nome: 'Análise Técnica',
        path: '/analise/mercado/tecnica',
        descricao: 'Indicadores técnicos, suporte/resistência e padrões de mercado'
      },
      {
        nome: 'Sentimento',
        path: '/analise/mercado/sentimento',
        descricao: 'Medidores de sentimento, medo e ganância, e análise social'
      }
    ]
  },
  {
    nome: 'Fluxo de Capital',
    descricao: 'Análise de movimentações de capital entre redes e protocolos',
    subcategorias: [
      {
        nome: 'Fluxo entre Redes',
        path: '/analise/fluxo/redes',
        descricao: 'Movimentações de capital entre EVM, Solana, SUI e outras redes'
      },
      {
        nome: 'Fluxo CEX/DEX',
        path: '/analise/fluxo/cex-dex',
        descricao: 'Movimentações entre exchanges centralizadas e descentralizadas'
      },
      {
        nome: 'Liquidez',
        path: '/analise/fluxo/liquidez',
        descricao: 'Análise de profundidade de mercado e liquidez'
      }
    ]
  },
  {
    nome: 'Pools',
    descricao: 'Análises detalhadas de pools de liquidez',
    subcategorias: [
      {
        nome: 'EVM',
        path: '/analise/pools/evm',
        descricao: 'Análise de pools em redes EVM (Ethereum, BSC, etc)'
      },
      {
        nome: 'Solana',
        path: '/analise/pools/sol',
        descricao: 'Análise de pools em Solana'
      },
      {
        nome: 'SUI',
        path: '/analise/pools/sui',
        descricao: 'Análise de pools em SUI'
      }
    ]
  },
  {
    nome: 'Stake',
    descricao: 'Análises de staking e yield',
    subcategorias: [
      {
        nome: 'EVM',
        path: '/analise/stake/evm',
        descricao: 'Análise de staking em redes EVM'
      },
      {
        nome: 'Solana',
        path: '/analise/stake/sol',
        descricao: 'Análise de staking em Solana'
      },
      {
        nome: 'SUI',
        path: '/analise/stake/sui',
        descricao: 'Análise de staking em SUI'
      }
    ]
  },
  {
    nome: 'DeFi',
    descricao: 'Análises específicas de protocolos DeFi',
    subcategorias: [
      {
        nome: 'Lending',
        path: '/analise/defi/lending',
        descricao: 'Análise de protocolos de empréstimo'
      },
      {
        nome: 'RWA',
        path: '/analise/defi/rwa',
        descricao: 'Análise de ativos do mundo real tokenizados'
      },
      {
        nome: 'Derivativos',
        path: '/analise/defi/derivativos',
        descricao: 'Análise de protocolos de derivativos'
      }
    ]
  }
];

export default function Analise() {
  return (
    <Layout>
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-cyan-400 mb-8">Análises</h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {categorias.map((categoria) => (
            <div key={categoria.nome} className="bg-gray-800/50 rounded-lg p-6 border border-cyan-400/30">
              <h2 className="text-xl font-bold text-cyan-300 mb-2">{categoria.nome}</h2>
              <p className="text-gray-400 mb-4">{categoria.descricao}</p>
              <div className="space-y-3">
                {categoria.subcategorias.map((sub) => (
                  <Link
                    key={sub.path}
                    href={sub.path}
                    className="block p-3 rounded-lg bg-gray-700/50 hover:bg-gray-700 transition"
                  >
                    <h3 className="text-cyan-200 font-medium">{sub.nome}</h3>
                    <p className="text-sm text-gray-400">{sub.descricao}</p>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
} 