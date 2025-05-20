import React from 'react';
import Layout from '../../../components/Layout';

const analises = [
  {
    titulo: 'Métricas de Derivativos',
    descricao: 'Análise de mercado de derivativos',
    metricas: [
      {
        nome: 'Volume 24h',
        valor: '$150B',
        variacao: '+20%',
        periodo: '24h',
        interpretacao: 'Alto'
      },
      {
        nome: 'Open Interest',
        valor: '$85B',
        variacao: '+15%',
        periodo: '24h',
        interpretacao: 'Alto'
      },
      {
        nome: 'Liquidações',
        valor: '$2.5B',
        variacao: '+25%',
        periodo: '24h',
        interpretacao: 'Alto'
      }
    ],
    graficos: [
      {
        titulo: 'Evolução do Volume',
        tipo: 'line',
        dados: 'dados_evolucao_volume'
      },
      {
        titulo: 'Volume por Tipo',
        tipo: 'bar',
        dados: 'dados_volume_tipo'
      }
    ]
  },
  {
    titulo: 'Métricas por Exchange',
    descricao: 'Análise de derivativos por exchange',
    metricas: [
      {
        nome: 'Binance',
        valor: '$45B',
        variacao: '+18%',
        periodo: '24h',
        interpretacao: 'Alto'
      },
      {
        nome: 'OKX',
        valor: '$25B',
        variacao: '+15%',
        periodo: '24h',
        interpretacao: 'Alto'
      },
      {
        nome: 'Bybit',
        valor: '$20B',
        variacao: '+12%',
        periodo: '24h',
        interpretacao: 'Alto'
      }
    ],
    graficos: [
      {
        titulo: 'Volume por Exchange',
        tipo: 'bar',
        dados: 'dados_volume_exchange'
      },
      {
        titulo: 'Open Interest por Exchange',
        tipo: 'bar',
        dados: 'dados_oi_exchange'
      }
    ]
  },
  {
    titulo: 'Métricas de Mercado',
    descricao: 'Análise de derivativos comparativa',
    metricas: [
      {
        nome: 'Futuros',
        valor: '$85B',
        variacao: '+18%',
        periodo: '24h',
        interpretacao: 'Alto'
      },
      {
        nome: 'Opções',
        valor: '$35B',
        variacao: '+15%',
        periodo: '24h',
        interpretacao: 'Alto'
      },
      {
        nome: 'Perpétuos',
        valor: '$30B',
        variacao: '+12%',
        periodo: '24h',
        interpretacao: 'Alto'
      }
    ],
    graficos: [
      {
        titulo: 'Volume por Instrumento',
        tipo: 'bar',
        dados: 'dados_volume_instrumento'
      },
      {
        titulo: 'Open Interest por Instrumento',
        tipo: 'bar',
        dados: 'dados_oi_instrumento'
      }
    ]
  }
];

export default function Derivativos() {
  return (
    <Layout>
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-cyan-400 mb-8">Análise de Derivativos</h1>
        
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
                      {grafico.titulo.toLowerCase().includes('evolução') && (
                        <a href="https://www.coinglass.com/derivatives" target="_blank" rel="noopener noreferrer" className="text-cyan-300 underline">Ver gráfico de Evolução (Coinglass)</a>
                      )}
                      {grafico.titulo.toLowerCase().includes('volume') && (
                        <a href="https://dune.com/queries/3076812/5168766" target="_blank" rel="noopener noreferrer" className="text-cyan-300 underline">Ver gráfico de Volume (Dune Analytics)</a>
                      )}
                      {grafico.titulo.toLowerCase().includes('exchange') && (
                        <a href="https://www.coinglass.com/derivatives" target="_blank" rel="noopener noreferrer" className="text-cyan-300 underline">Ver gráfico por Exchange (Coinglass)</a>
                      )}
                      {grafico.titulo.toLowerCase().includes('instrumento') && (
                        <a href="https://www.coinglass.com/derivatives" target="_blank" rel="noopener noreferrer" className="text-cyan-300 underline">Ver gráfico por Instrumento (Coinglass)</a>
                      )}
                      {!grafico.titulo.toLowerCase().includes('evolução') && !grafico.titulo.toLowerCase().includes('volume') && !grafico.titulo.toLowerCase().includes('exchange') && !grafico.titulo.toLowerCase().includes('instrumento') && (
                        <span className="text-gray-400">Gráfico {grafico.tipo} - {grafico.dados}</span>
                      )}
                    </div>
                    {/* Referências */}
                    <div className="mt-2">
                      <span className="text-xs text-gray-400">Fonte: </span>
                      {grafico.titulo.toLowerCase().includes('evolução') && (
                        <a href="https://www.coinglass.com/derivatives" target="_blank" rel="noopener noreferrer" className="text-xs text-cyan-300 underline">Coinglass</a>
                      )}
                      {grafico.titulo.toLowerCase().includes('volume') && (
                        <a href="https://dune.com/queries/3076812/5168766" target="_blank" rel="noopener noreferrer" className="text-xs text-cyan-300 underline">Dune Analytics</a>
                      )}
                      {grafico.titulo.toLowerCase().includes('exchange') && (
                        <a href="https://www.coinglass.com/derivatives" target="_blank" rel="noopener noreferrer" className="text-xs text-cyan-300 underline">Coinglass</a>
                      )}
                      {grafico.titulo.toLowerCase().includes('instrumento') && (
                        <a href="https://www.coinglass.com/derivatives" target="_blank" rel="noopener noreferrer" className="text-xs text-cyan-300 underline">Coinglass</a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 p-4 bg-gray-800/50 rounded-lg border border-cyan-400/30">
          <h2 className="text-xl font-bold text-cyan-300 mb-4">Insights de Derivativos</h2>
          <ul className="space-y-3 text-gray-300">
            <li>• Volume 24h em $150B com crescimento de 20%</li>
            <li>• Open Interest em $85B com crescimento de 15%</li>
            <li>• Liquidações em $2.5B com crescimento de 25%</li>
            <li>• Binance lidera com $45B em volume</li>
            <li>• Futuros dominam com $85B em volume</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
} 