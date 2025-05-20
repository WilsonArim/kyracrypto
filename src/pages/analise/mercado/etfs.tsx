import React from 'react';
import Layout from '../../../components/Layout';

const analises = [
  {
    titulo: 'Métricas de ETFs',
    descricao: 'Análise de ETFs de criptomoedas',
    metricas: [
      {
        nome: 'AUM Total',
        valor: '$85B',
        variacao: '+15%',
        periodo: '30d',
        interpretacao: 'Alto'
      },
      {
        nome: 'Volume 24h',
        valor: '$25B',
        variacao: '+12%',
        periodo: '24h',
        interpretacao: 'Alto'
      },
      {
        nome: 'ETFs Ativos',
        valor: '45',
        variacao: '+5',
        periodo: '30d',
        interpretacao: 'Alto'
      }
    ],
    graficos: [
      {
        titulo: 'Evolução do AUM',
        tipo: 'line',
        dados: 'dados_evolucao_aum'
      },
      {
        titulo: 'Volume por ETF',
        tipo: 'bar',
        dados: 'dados_volume_etf'
      }
    ]
  },
  {
    titulo: 'Métricas por ETF',
    descricao: 'Análise de ETFs individuais',
    metricas: [
      {
        nome: 'GBTC',
        valor: '$25B',
        variacao: '+8%',
        periodo: '30d',
        interpretacao: 'Alto'
      },
      {
        nome: 'BITO',
        valor: '$15B',
        variacao: '+12%',
        periodo: '30d',
        interpretacao: 'Alto'
      },
      {
        nome: 'ETHE',
        valor: '$10B',
        variacao: '+10%',
        periodo: '30d',
        interpretacao: 'Alto'
      }
    ],
    graficos: [
      {
        titulo: 'AUM por ETF',
        tipo: 'bar',
        dados: 'dados_aum_etf'
      },
      {
        titulo: 'Volume por ETF',
        tipo: 'bar',
        dados: 'dados_volume_etf'
      }
    ]
  },
  {
    titulo: 'Métricas de Mercado',
    descricao: 'Análise de ETFs comparativa',
    metricas: [
      {
        nome: 'Spot',
        valor: '$45B',
        variacao: '+15%',
        periodo: '30d',
        interpretacao: 'Alto'
      },
      {
        nome: 'Futuros',
        valor: '$25B',
        variacao: '+10%',
        periodo: '30d',
        interpretacao: 'Alto'
      },
      {
        nome: 'Leveraged',
        valor: '$15B',
        variacao: '+8%',
        periodo: '30d',
        interpretacao: 'Alto'
      }
    ],
    graficos: [
      {
        titulo: 'AUM por Tipo',
        tipo: 'bar',
        dados: 'dados_aum_tipo'
      },
      {
        titulo: 'Volume por Tipo',
        tipo: 'bar',
        dados: 'dados_volume_tipo'
      }
    ]
  }
];

export default function ETFs() {
  return (
    <Layout>
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-cyan-400 mb-8">Análise de ETFs</h1>
        
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
                        <a href="https://www.messari.io/report/state-of-crypto-etfs" target="_blank" rel="noopener noreferrer" className="text-cyan-300 underline">Ver gráfico de Evolução (Messari)</a>
                      )}
                      {grafico.titulo.toLowerCase().includes('volume') && (
                        <a href="https://dune.com/queries/3076812/5168765" target="_blank" rel="noopener noreferrer" className="text-cyan-300 underline">Ver gráfico de Volume (Dune Analytics)</a>
                      )}
                      {grafico.titulo.toLowerCase().includes('etf') && (
                        <a href="https://www.messari.io/report/state-of-crypto-etfs" target="_blank" rel="noopener noreferrer" className="text-cyan-300 underline">Ver gráfico por ETF (Messari)</a>
                      )}
                      {grafico.titulo.toLowerCase().includes('tipo') && (
                        <a href="https://www.messari.io/report/state-of-crypto-etfs" target="_blank" rel="noopener noreferrer" className="text-cyan-300 underline">Ver gráfico por Tipo (Messari)</a>
                      )}
                      {!grafico.titulo.toLowerCase().includes('evolução') && !grafico.titulo.toLowerCase().includes('volume') && !grafico.titulo.toLowerCase().includes('etf') && !grafico.titulo.toLowerCase().includes('tipo') && (
                        <span className="text-gray-400">Gráfico {grafico.tipo} - {grafico.dados}</span>
                      )}
                    </div>
                    {/* Referências */}
                    <div className="mt-2">
                      <span className="text-xs text-gray-400">Fonte: </span>
                      {grafico.titulo.toLowerCase().includes('evolução') && (
                        <a href="https://www.messari.io/report/state-of-crypto-etfs" target="_blank" rel="noopener noreferrer" className="text-xs text-cyan-300 underline">Messari</a>
                      )}
                      {grafico.titulo.toLowerCase().includes('volume') && (
                        <a href="https://dune.com/queries/3076812/5168765" target="_blank" rel="noopener noreferrer" className="text-xs text-cyan-300 underline">Dune Analytics</a>
                      )}
                      {grafico.titulo.toLowerCase().includes('etf') && (
                        <a href="https://www.messari.io/report/state-of-crypto-etfs" target="_blank" rel="noopener noreferrer" className="text-xs text-cyan-300 underline">Messari</a>
                      )}
                      {grafico.titulo.toLowerCase().includes('tipo') && (
                        <a href="https://www.messari.io/report/state-of-crypto-etfs" target="_blank" rel="noopener noreferrer" className="text-xs text-cyan-300 underline">Messari</a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 p-4 bg-gray-800/50 rounded-lg border border-cyan-400/30">
          <h2 className="text-xl font-bold text-cyan-300 mb-4">Insights de ETFs</h2>
          <ul className="space-y-3 text-gray-300">
            <li>• AUM total em $85B com crescimento de 15%</li>
            <li>• Volume 24h em $25B com crescimento de 12%</li>
            <li>• 45 ETFs ativos com crescimento de 5</li>
            <li>• GBTC lidera com $25B em AUM</li>
            <li>• Spot ETFs dominam com $45B em AUM</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
} 