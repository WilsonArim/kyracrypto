import React from 'react';
import Layout from '../../../components/Layout';
import Link from 'next/link';

const analises = [
  {
    titulo: 'Indicadores',
    descricao: 'Análise de indicadores técnicos',
    link: '/analise/mercado/indicadores',
    metricas: [
      {
        nome: 'RSI',
        valor: '65',
        variacao: '+5',
        periodo: '24h',
        interpretacao: 'Sobrecomprado'
      },
      {
        nome: 'MACD',
        valor: 'Positivo',
        variacao: 'Alta',
        periodo: '24h',
        interpretacao: 'Bullish'
      },
      {
        nome: 'Médias',
        valor: 'Alta',
        variacao: 'Forte',
        periodo: '24h',
        interpretacao: 'Bullish'
      }
    ]
  },
  {
    titulo: 'Ciclos',
    descricao: 'Análise de ciclos de mercado',
    link: '/analise/mercado/ciclos',
    metricas: [
      {
        nome: 'Fase',
        valor: 'Expansão',
        variacao: 'Forte',
        periodo: '30d',
        interpretacao: 'Bullish'
      },
      {
        nome: 'Duração',
        valor: '45 dias',
        variacao: '+5',
        periodo: '30d',
        interpretacao: 'Longo'
      },
      {
        nome: 'Força',
        valor: '85%',
        variacao: '+5%',
        periodo: '30d',
        interpretacao: 'Alta'
      }
    ]
  },
  {
    titulo: 'Ondas',
    descricao: 'Análise de ondas de Elliott',
    link: '/analise/mercado/ondas',
    metricas: [
      {
        nome: 'Onda',
        valor: '3',
        variacao: 'Forte',
        periodo: '30d',
        interpretacao: 'Bullish'
      },
      {
        nome: 'Duração',
        valor: '15 dias',
        variacao: '+2',
        periodo: '30d',
        interpretacao: 'Normal'
      },
      {
        nome: 'Força',
        valor: '85%',
        variacao: '+5%',
        periodo: '30d',
        interpretacao: 'Alta'
      }
    ]
  },
  {
    titulo: 'Correlações',
    descricao: 'Análise de correlações entre ativos',
    link: '/analise/mercado/correlacoes',
    metricas: [
      {
        nome: 'BTC/ETH',
        valor: '0.85',
        variacao: '+0.05',
        periodo: '30d',
        interpretacao: 'Alta'
      },
      {
        nome: 'BTC/DeFi',
        valor: '0.75',
        variacao: '+0.03',
        periodo: '30d',
        interpretacao: 'Média'
      },
      {
        nome: 'BTC/NFTs',
        valor: '0.65',
        variacao: '+0.02',
        periodo: '30d',
        interpretacao: 'Média'
      }
    ]
  },
  {
    titulo: 'Volatilidade',
    descricao: 'Análise de volatilidade de mercado',
    link: '/analise/mercado/volatilidade',
    metricas: [
      {
        nome: 'BTC',
        valor: '45%',
        variacao: '+5%',
        periodo: '30d',
        interpretacao: 'Alta'
      },
      {
        nome: 'ETH',
        valor: '55%',
        variacao: '+7%',
        periodo: '30d',
        interpretacao: 'Alta'
      },
      {
        nome: 'DeFi',
        valor: '65%',
        variacao: '+8%',
        periodo: '30d',
        interpretacao: 'Muito Alta'
      }
    ]
  },
  {
    titulo: 'Volume',
    descricao: 'Análise de volume de mercado',
    link: '/analise/mercado/volume',
    metricas: [
      {
        nome: 'BTC',
        valor: '$45B',
        variacao: '+5%',
        periodo: '24h',
        interpretacao: 'Alto'
      },
      {
        nome: 'ETH',
        valor: '$25B',
        variacao: '+7%',
        periodo: '24h',
        interpretacao: 'Alto'
      },
      {
        nome: 'DeFi',
        valor: '$15B',
        variacao: '+8%',
        periodo: '24h',
        interpretacao: 'Muito Alto'
      }
    ]
  },
  {
    titulo: 'Sentimento',
    descricao: 'Análise de sentimento de mercado',
    link: '/analise/mercado/sentimento',
    metricas: [
      {
        nome: 'Fear & Greed',
        valor: '75',
        variacao: '+5',
        periodo: '24h',
        interpretacao: 'Greed'
      },
      {
        nome: 'Social',
        valor: '65',
        variacao: '+7',
        periodo: '24h',
        interpretacao: 'Positivo'
      },
      {
        nome: 'News',
        valor: '70',
        variacao: '+8',
        periodo: '24h',
        interpretacao: 'Positivo'
      }
    ]
  },
  {
    titulo: 'Fundamentos',
    descricao: 'Análise de fundamentos de mercado',
    link: '/analise/mercado/fundamentos',
    metricas: [
      {
        nome: 'TVL DeFi',
        valor: '$85B',
        variacao: '+5%',
        periodo: '30d',
        interpretacao: 'Alto'
      },
      {
        nome: 'Volume DeFi',
        valor: '$25B',
        variacao: '+7%',
        periodo: '30d',
        interpretacao: 'Alto'
      },
      {
        nome: 'Usuários',
        valor: '2.5M',
        variacao: '+8%',
        periodo: '30d',
        interpretacao: 'Alto'
      }
    ]
  },
  {
    titulo: 'Risco',
    descricao: 'Análise de risco de mercado',
    link: '/analise/mercado/risco',
    metricas: [
      {
        nome: 'VaR',
        valor: '5.2%',
        variacao: '+0.5%',
        periodo: '24h',
        interpretacao: 'Alto'
      },
      {
        nome: 'Sharpe',
        valor: '1.2',
        variacao: '-0.1',
        periodo: '30d',
        interpretacao: 'Bom'
      },
      {
        nome: 'Sortino',
        valor: '0.8',
        variacao: '-0.2',
        periodo: '30d',
        interpretacao: 'Regular'
      }
    ]
  },
  {
    titulo: 'Tendências',
    descricao: 'Análise de tendências de mercado',
    link: '/analise/mercado/tendencias',
    metricas: [
      {
        nome: 'BTC',
        valor: 'Alta',
        variacao: 'Forte',
        periodo: '30d',
        interpretacao: 'Bullish'
      },
      {
        nome: 'ETH',
        valor: 'Alta',
        variacao: 'Forte',
        periodo: '30d',
        interpretacao: 'Bullish'
      },
      {
        nome: 'DeFi',
        valor: 'Alta',
        variacao: 'Muito Forte',
        periodo: '30d',
        interpretacao: 'Bullish'
      }
    ]
  }
];

const categorias = [
  {
    titulo: 'DeFi',
    descricao: 'Análise de protocolos e métricas DeFi',
    link: '/analise/mercado/defi',
    cor: 'cyan'
  },
  {
    titulo: 'NFTs',
    descricao: 'Análise de coleções e métricas de NFTs',
    link: '/analise/mercado/nfts',
    cor: 'purple'
  },
  {
    titulo: 'Stablecoins',
    descricao: 'Análise de stablecoins e seus pegs',
    link: '/analise/mercado/stablecoins',
    cor: 'green'
  },
  {
    titulo: 'Regulamentação',
    descricao: 'Análise do ambiente regulatório',
    link: '/analise/mercado/regulamentacao',
    cor: 'yellow'
  }
];

export default function Mercado() {
  return (
    <Layout>
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-cyan-400 mb-8">Análise de Mercado</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {analises.map((analise) => (
            <Link key={analise.titulo} href={analise.link}>
              <div className="bg-gray-800/50 rounded-lg p-6 border border-cyan-400/30 hover:border-cyan-400/50 transition-colors">
                <h2 className="text-xl font-bold text-cyan-300 mb-2">{analise.titulo}</h2>
                <p className="text-gray-400 mb-4">{analise.descricao}</p>
                
                <div className="grid gap-4">
                  {analise.metricas.map((metrica) => (
                    <div key={metrica.nome} className="bg-gray-700/50 rounded-lg p-4">
                      <h3 className="text-sm text-gray-400 mb-1">{metrica.nome}</h3>
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold text-cyan-300">{metrica.valor}</span>
                        <span className={`text-sm ${metrica.variacao.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                          {metrica.variacao}
                        </span>
                      </div>
                      <div className="flex justify-between items-center mt-1">
                        <span className="text-xs text-gray-500">{metrica.periodo}</span>
                        <span className="text-xs text-cyan-300">{metrica.interpretacao}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categorias.map((categoria) => (
            <Link key={categoria.titulo} href={categoria.link}>
              <div className={`bg-gray-800/50 rounded-lg p-6 border border-${categoria.cor}-400/30 hover:bg-gray-700/50 transition-colors`}>
                <h2 className={`text-xl font-bold text-${categoria.cor}-300 mb-2`}>{categoria.titulo}</h2>
                <p className="text-gray-400">{categoria.descricao}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 p-4 bg-gray-800/50 rounded-lg border border-cyan-400/30">
          <h2 className="text-xl font-bold text-cyan-300 mb-4">Insights de Mercado</h2>
          <ul className="space-y-3 text-gray-300">
            <li>• Market cap total atinge $2.5T com crescimento de 5.3%</li>
            <li>• Volume diário em $85.2B com alta de 12.3%</li>
            <li>• Sentimento do mercado em "Greed" com índice 65</li>
            <li>• Número de usuários ativos cresce para 350M</li>
            <li>• Correlação com Bitcoin permanece alta em 0.85</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
} 