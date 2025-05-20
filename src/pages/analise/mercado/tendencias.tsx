import React from 'react';
import Layout from '../../../components/Layout';

const analises = [
  {
    titulo: 'Métricas de Tendências',
    descricao: 'Análise das tendências de mercado',
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
    ],
    graficos: [
      {
        titulo: 'Evolução das Tendências',
        tipo: 'line',
        dados: 'dados_evolucao_tendencias'
      },
      {
        titulo: 'Força das Tendências',
        tipo: 'bar',
        dados: 'dados_forca_tendencias'
      }
    ]
  },
  {
    titulo: 'Métricas de Setores',
    descricao: 'Análise das tendências por setor',
    metricas: [
      {
        nome: 'NFTs',
        valor: 'Alta',
        variacao: 'Forte',
        periodo: '30d',
        interpretacao: 'Bullish'
      },
      {
        nome: 'Layer 1',
        valor: 'Alta',
        variacao: 'Forte',
        periodo: '30d',
        interpretacao: 'Bullish'
      },
      {
        nome: 'Stablecoins',
        valor: 'Lateral',
        variacao: 'Fraca',
        periodo: '30d',
        interpretacao: 'Neutro'
      }
    ],
    graficos: [
      {
        titulo: 'Tendências por Setor',
        tipo: 'bar',
        dados: 'dados_tendencias_setor'
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
    descricao: 'Análise das tendências comparativas',
    metricas: [
      {
        nome: 'S&P 500',
        valor: 'Alta',
        variacao: 'Média',
        periodo: '30d',
        interpretacao: 'Bullish'
      },
      {
        nome: 'Ouro',
        valor: 'Alta',
        variacao: 'Fraca',
        periodo: '30d',
        interpretacao: 'Bullish'
      },
      {
        nome: 'Dólar',
        valor: 'Baixa',
        variacao: 'Forte',
        periodo: '30d',
        interpretacao: 'Bearish'
      }
    ],
    graficos: [
      {
        titulo: 'Tendências Comparativas',
        tipo: 'bar',
        dados: 'dados_tendencias_comparativas'
      },
      {
        titulo: 'Evolução Comparativa',
        tipo: 'line',
        dados: 'dados_evolucao_comparativa'
      }
    ]
  }
];

export default function Tendencias() {
  return (
    <Layout>
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-cyan-400 mb-8">Análise de Tendências</h1>
        
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
                      <span className={`text-sm ${metrica.variacao.includes('Forte') ? 'text-green-400' : 'text-yellow-400'}`}>
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
                      {grafico.titulo.toLowerCase().includes('tendên') && (
                        <a href="https://www.tradingview.com/chart/?symbol=BINANCE:BTCUSDT&interval=D&indicator=EMA" target="_blank" rel="noopener noreferrer" className="text-cyan-300 underline">Ver gráfico de Tendências (TradingView)</a>
                      )}
                      {grafico.titulo.toLowerCase().includes('setor') && (
                        <a href="https://dune.com/queries/3076812/5168752" target="_blank" rel="noopener noreferrer" className="text-cyan-300 underline">Ver gráfico por Setor (Dune Analytics)</a>
                      )}
                      {grafico.titulo.toLowerCase().includes('comparativa') && (
                        <a href="https://www.tradingview.com/chart/?symbol=BINANCE:BTCUSDT&interval=D&indicator=MACD" target="_blank" rel="noopener noreferrer" className="text-cyan-300 underline">Ver gráfico comparativo (TradingView)</a>
                      )}
                      {grafico.titulo.toLowerCase().includes('evolução') && (
                        <a href="https://www.tradingview.com/chart/?symbol=BINANCE:BTCUSDT&interval=D&indicator=ADX" target="_blank" rel="noopener noreferrer" className="text-cyan-300 underline">Ver evolução das tendências (TradingView)</a>
                      )}
                      {!grafico.titulo.toLowerCase().includes('tendên') && !grafico.titulo.toLowerCase().includes('setor') && !grafico.titulo.toLowerCase().includes('comparativa') && !grafico.titulo.toLowerCase().includes('evolução') && (
                        <span className="text-gray-400">Gráfico {grafico.tipo} - {grafico.dados}</span>
                      )}
                    </div>
                    {/* Referências */}
                    <div className="mt-2">
                      <span className="text-xs text-gray-400">Fonte: </span>
                      {grafico.titulo.toLowerCase().includes('tendên') && (
                        <a href="https://www.tradingview.com/chart/?symbol=BINANCE:BTCUSDT&interval=D&indicator=EMA" target="_blank" rel="noopener noreferrer" className="text-xs text-cyan-300 underline">TradingView</a>
                      )}
                      {grafico.titulo.toLowerCase().includes('setor') && (
                        <a href="https://dune.com/queries/3076812/5168752" target="_blank" rel="noopener noreferrer" className="text-xs text-cyan-300 underline">Dune Analytics</a>
                      )}
                      {grafico.titulo.toLowerCase().includes('comparativa') && (
                        <a href="https://www.tradingview.com/chart/?symbol=BINANCE:BTCUSDT&interval=D&indicator=MACD" target="_blank" rel="noopener noreferrer" className="text-xs text-cyan-300 underline">TradingView</a>
                      )}
                      {grafico.titulo.toLowerCase().includes('evolução') && (
                        <a href="https://www.tradingview.com/chart/?symbol=BINANCE:BTCUSDT&interval=D&indicator=ADX" target="_blank" rel="noopener noreferrer" className="text-xs text-cyan-300 underline">TradingView</a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 p-4 bg-gray-800/50 rounded-lg border border-cyan-400/30">
          <h2 className="text-xl font-bold text-cyan-300 mb-4">Insights de Tendências</h2>
          <ul className="space-y-3 text-gray-300">
            <li>• Tendência de alta forte em BTC e ETH</li>
            <li>• Tendência de alta muito forte em DeFi</li>
            <li>• Tendência de alta forte em NFTs e Layer 1</li>
            <li>• Tendência lateral em stablecoins</li>
            <li>• Tendência de baixa forte em dólar</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
} 