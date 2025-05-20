import React from 'react';
import Layout from '../../../components/Layout';

const analises = [
  {
    titulo: 'Métricas de Sentimento',
    descricao: 'Análise de sentimento de mercado',
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
    ],
    graficos: [
      {
        titulo: 'Evolução do Sentimento',
        tipo: 'line',
        dados: 'dados_evolucao_sentimento'
      },
      {
        titulo: 'Força do Sentimento',
        tipo: 'bar',
        dados: 'dados_forca_sentimento'
      }
    ]
  },
  {
    titulo: 'Métricas de Setores',
    descricao: 'Análise de sentimento por setor',
    metricas: [
      {
        nome: 'DeFi',
        valor: '80',
        variacao: '+10',
        periodo: '24h',
        interpretacao: 'Muito Positivo'
      },
      {
        nome: 'NFTs',
        valor: '75',
        variacao: '+8',
        periodo: '24h',
        interpretacao: 'Positivo'
      },
      {
        nome: 'Layer 1',
        valor: '70',
        variacao: '+5',
        periodo: '24h',
        interpretacao: 'Positivo'
      }
    ],
    graficos: [
      {
        titulo: 'Sentimento por Setor',
        tipo: 'bar',
        dados: 'dados_sentimento_setor'
      },
      {
        titulo: 'Evolução por Setor',
        tipo: 'line',
        dados: 'dados_evolucao_setor'
      }
    ]
  },
  {
    titulo: 'Métricas de Mercado',
    descricao: 'Análise de sentimento comparativo',
    metricas: [
      {
        nome: 'S&P 500',
        valor: '60',
        variacao: '+3',
        periodo: '24h',
        interpretacao: 'Positivo'
      },
      {
        nome: 'Ouro',
        valor: '55',
        variacao: '+2',
        periodo: '24h',
        interpretacao: 'Neutro'
      },
      {
        nome: 'Dólar',
        valor: '45',
        variacao: '-2',
        periodo: '24h',
        interpretacao: 'Negativo'
      }
    ],
    graficos: [
      {
        titulo: 'Sentimento Comparativo',
        tipo: 'bar',
        dados: 'dados_sentimento_comparativo'
      },
      {
        titulo: 'Evolução Comparativa',
        tipo: 'line',
        dados: 'dados_evolucao_comparativa'
      }
    ]
  }
];

export default function Sentimento() {
  return (
    <Layout>
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-cyan-400 mb-8">Análise de Sentimento</h1>
        
        <div className="grid gap-8">
          {analises.map((analise) => (
            <div key={analise.titulo} className="bg-gray-800/50 rounded-lg p-6 border border-cyan-400/30">
              <h2 className="text-xl font-bold text-cyan-300 mb-2">{analise.titulo}</h2>
              <p className="text-gray-400 mb-4">{analise.descricao}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {analise.graficos.map((grafico) => (
                  <div key={grafico.titulo} className="bg-gray-700/50 rounded-lg p-4">
                    <h3 className="text-lg font-medium text-cyan-200 mb-4">{grafico.titulo}</h3>
                    <div className="aspect-video bg-gray-800/50 rounded-lg flex items-center justify-center mb-2">
                      {/* Embeds reais ou links para gráficos */}
                      {grafico.titulo.toLowerCase().includes('fear') && (
                        <a href="https://alternative.me/crypto/fear-and-greed-index/" target="_blank" rel="noopener noreferrer" className="text-cyan-300 underline">Ver gráfico Fear & Greed (Alternative.me)</a>
                      )}
                      {grafico.titulo.toLowerCase().includes('sentimento') && !grafico.titulo.toLowerCase().includes('fear') && (
                        <a href="https://dune.com/queries/3076812/5168757" target="_blank" rel="noopener noreferrer" className="text-cyan-300 underline">Ver gráfico de Sentimento (Dune Analytics)</a>
                      )}
                      {grafico.titulo.toLowerCase().includes('comparativo') && (
                        <a href="https://www.lunarcrush.com/markets" target="_blank" rel="noopener noreferrer" className="text-cyan-300 underline">Ver gráfico comparativo (LunarCrush)</a>
                      )}
                      {grafico.titulo.toLowerCase().includes('evolução') && (
                        <a href="https://www.santiment.net/social-trends" target="_blank" rel="noopener noreferrer" className="text-cyan-300 underline">Ver evolução do sentimento (Santiment)</a>
                      )}
                      {/* Placeholder caso não haja embed/link */}
                      {!grafico.titulo.toLowerCase().includes('fear') && !grafico.titulo.toLowerCase().includes('sentimento') && !grafico.titulo.toLowerCase().includes('comparativo') && !grafico.titulo.toLowerCase().includes('evolução') && (
                        <span className="text-gray-400">Gráfico {grafico.tipo} - {grafico.dados}</span>
                      )}
                    </div>
                    {/* Referências */}
                    <div className="mt-2">
                      <span className="text-xs text-gray-400">Fonte: </span>
                      {grafico.titulo.toLowerCase().includes('fear') && (
                        <a href="https://alternative.me/crypto/fear-and-greed-index/" target="_blank" rel="noopener noreferrer" className="text-xs text-cyan-300 underline">alternative.me</a>
                      )}
                      {grafico.titulo.toLowerCase().includes('sentimento') && !grafico.titulo.toLowerCase().includes('fear') && (
                        <a href="https://dune.com/queries/3076812/5168757" target="_blank" rel="noopener noreferrer" className="text-xs text-cyan-300 underline">Dune Analytics</a>
                      )}
                      {grafico.titulo.toLowerCase().includes('comparativo') && (
                        <a href="https://www.lunarcrush.com/markets" target="_blank" rel="noopener noreferrer" className="text-xs text-cyan-300 underline">LunarCrush</a>
                      )}
                      {grafico.titulo.toLowerCase().includes('evolução') && (
                        <a href="https://www.santiment.net/social-trends" target="_blank" rel="noopener noreferrer" className="text-xs text-cyan-300 underline">Santiment</a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 p-4 bg-gray-800/50 rounded-lg border border-cyan-400/30">
          <h2 className="text-xl font-bold text-cyan-300 mb-4">Insights de Sentimento</h2>
          <ul className="space-y-3 text-gray-300">
            <li>• Fear & Greed em 75 (Greed)</li>
            <li>• Sentimento social positivo (65)</li>
            <li>• Sentimento de notícias positivo (70)</li>
            <li>• Sentimento muito positivo em DeFi (80)</li>
            <li>• Sentimento negativo em dólar (45)</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
} 