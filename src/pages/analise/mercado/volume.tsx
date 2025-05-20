import React from 'react';
import Layout from '../../../components/Layout';

const analises = [
  {
    titulo: 'Métricas de Volume',
    descricao: 'Análise de volume de mercado',
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
    ],
    graficos: [
      {
        titulo: 'Evolução do Volume',
        tipo: 'line',
        dados: 'dados_evolucao_volume'
      },
      {
        titulo: 'Força do Volume',
        tipo: 'bar',
        dados: 'dados_forca_volume'
      }
    ]
  },
  {
    titulo: 'Métricas de Setores',
    descricao: 'Análise de volume por setor',
    metricas: [
      {
        nome: 'NFTs',
        valor: '$5B',
        variacao: '+10%',
        periodo: '24h',
        interpretacao: 'Alto'
      },
      {
        nome: 'Layer 1',
        valor: '$10B',
        variacao: '+5%',
        periodo: '24h',
        interpretacao: 'Alto'
      },
      {
        nome: 'Stablecoins',
        valor: '$50B',
        variacao: '+3%',
        periodo: '24h',
        interpretacao: 'Muito Alto'
      }
    ],
    graficos: [
      {
        titulo: 'Volume por Setor',
        tipo: 'bar',
        dados: 'dados_volume_setor'
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
    descricao: 'Análise de volume comparativo',
    metricas: [
      {
        nome: 'S&P 500',
        valor: '$100B',
        variacao: '+2%',
        periodo: '24h',
        interpretacao: 'Alto'
      },
      {
        nome: 'Ouro',
        valor: '$20B',
        variacao: '+1%',
        periodo: '24h',
        interpretacao: 'Médio'
      },
      {
        nome: 'Dólar',
        valor: '$500B',
        variacao: '+0.5%',
        periodo: '24h',
        interpretacao: 'Muito Alto'
      }
    ],
    graficos: [
      {
        titulo: 'Volume Comparativo',
        tipo: 'bar',
        dados: 'dados_volume_comparativo'
      },
      {
        titulo: 'Evolução Comparativa',
        tipo: 'line',
        dados: 'dados_evolucao_comparativa'
      }
    ]
  }
];

export default function Volume() {
  return (
    <Layout>
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-cyan-400 mb-8">Análise de Volume</h1>
        
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
                      {grafico.titulo.toLowerCase().includes('volume') && (
                        <a href="https://www.tradingview.com/chart/?symbol=BINANCE:BTCUSDT&interval=D&indicator=VOLUME" target="_blank" rel="noopener noreferrer" className="text-cyan-300 underline">Ver gráfico de Volume (TradingView)</a>
                      )}
                      {grafico.titulo.toLowerCase().includes('setor') && (
                        <a href="https://dune.com/queries/3076812/5168756" target="_blank" rel="noopener noreferrer" className="text-cyan-300 underline">Ver gráfico por Setor (Dune Analytics)</a>
                      )}
                      {grafico.titulo.toLowerCase().includes('comparativo') && (
                        <a href="https://www.tradingview.com/chart/?symbol=BINANCE:BTCUSDT&interval=D&indicator=VOLUME" target="_blank" rel="noopener noreferrer" className="text-cyan-300 underline">Ver gráfico comparativo (TradingView)</a>
                      )}
                      {grafico.titulo.toLowerCase().includes('evolução') && (
                        <a href="https://www.tradingview.com/chart/?symbol=BINANCE:BTCUSDT&interval=D&indicator=VOLUME" target="_blank" rel="noopener noreferrer" className="text-cyan-300 underline">Ver evolução do volume (TradingView)</a>
                      )}
                      {!grafico.titulo.toLowerCase().includes('volume') && !grafico.titulo.toLowerCase().includes('setor') && !grafico.titulo.toLowerCase().includes('comparativo') && !grafico.titulo.toLowerCase().includes('evolução') && (
                        <span className="text-gray-400">Gráfico {grafico.tipo} - {grafico.dados}</span>
                      )}
                    </div>
                    {/* Referências */}
                    <div className="mt-2">
                      <span className="text-xs text-gray-400">Fonte: </span>
                      {grafico.titulo.toLowerCase().includes('volume') && (
                        <a href="https://www.tradingview.com/chart/?symbol=BINANCE:BTCUSDT&interval=D&indicator=VOLUME" target="_blank" rel="noopener noreferrer" className="text-xs text-cyan-300 underline">TradingView</a>
                      )}
                      {grafico.titulo.toLowerCase().includes('setor') && (
                        <a href="https://dune.com/queries/3076812/5168756" target="_blank" rel="noopener noreferrer" className="text-xs text-cyan-300 underline">Dune Analytics</a>
                      )}
                      {grafico.titulo.toLowerCase().includes('comparativo') && (
                        <a href="https://www.tradingview.com/chart/?symbol=BINANCE:BTCUSDT&interval=D&indicator=VOLUME" target="_blank" rel="noopener noreferrer" className="text-xs text-cyan-300 underline">TradingView</a>
                      )}
                      {grafico.titulo.toLowerCase().includes('evolução') && (
                        <a href="https://www.tradingview.com/chart/?symbol=BINANCE:BTCUSDT&interval=D&indicator=VOLUME" target="_blank" rel="noopener noreferrer" className="text-xs text-cyan-300 underline">TradingView</a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 p-4 bg-gray-800/50 rounded-lg border border-cyan-400/30">
          <h2 className="text-xl font-bold text-cyan-300 mb-4">Insights de Volume</h2>
          <ul className="space-y-3 text-gray-300">
            <li>• Volume alto em BTC ($45B) e ETH ($25B)</li>
            <li>• Volume muito alto em DeFi ($15B)</li>
            <li>• Volume alto em NFTs ($5B) e Layer 1 ($10B)</li>
            <li>• Volume muito alto em stablecoins ($50B)</li>
            <li>• Volume muito alto em dólar ($500B)</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
} 