import React from 'react';
import Layout from '../../../components/Layout';

const analises = [
  {
    titulo: 'Métricas de Indicadores',
    descricao: 'Análise de indicadores técnicos',
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
    ],
    graficos: [
      {
        titulo: 'Evolução do RSI',
        tipo: 'line',
        dados: 'dados_rsi'
      },
      {
        titulo: 'Evolução do MACD',
        tipo: 'line',
        dados: 'dados_macd'
      }
    ]
  },
  {
    titulo: 'Métricas de Setores',
    descricao: 'Análise de indicadores por setor',
    metricas: [
      {
        nome: 'DeFi',
        valor: '70',
        variacao: '+8',
        periodo: '24h',
        interpretacao: 'Sobrecomprado'
      },
      {
        nome: 'NFTs',
        valor: '75',
        variacao: '+10',
        periodo: '24h',
        interpretacao: 'Sobrecomprado'
      },
      {
        nome: 'Layer 1',
        valor: '60',
        variacao: '+5',
        periodo: '24h',
        interpretacao: 'Neutro'
      }
    ],
    graficos: [
      {
        titulo: 'RSI por Setor',
        tipo: 'bar',
        dados: 'dados_rsi_setor'
      },
      {
        titulo: 'MACD por Setor',
        tipo: 'bar',
        dados: 'dados_macd_setor'
      }
    ]
  },
  {
    titulo: 'Métricas de Mercado',
    descricao: 'Análise de indicadores comparativos',
    metricas: [
      {
        nome: 'S&P 500',
        valor: '55',
        variacao: '+3',
        periodo: '24h',
        interpretacao: 'Neutro'
      },
      {
        nome: 'Ouro',
        valor: '50',
        variacao: '+2',
        periodo: '24h',
        interpretacao: 'Neutro'
      },
      {
        nome: 'Dólar',
        valor: '45',
        variacao: '-2',
        periodo: '24h',
        interpretacao: 'Sobrevendido'
      }
    ],
    graficos: [
      {
        titulo: 'RSI Comparativo',
        tipo: 'bar',
        dados: 'dados_rsi_comparativo'
      },
      {
        titulo: 'MACD Comparativo',
        tipo: 'bar',
        dados: 'dados_macd_comparativo'
      }
    ]
  }
];

export default function Indicadores() {
  return (
    <Layout>
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-cyan-400 mb-8">Análise de Indicadores</h1>
        
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
                      {grafico.titulo.toLowerCase().includes('rsi') && (
                        <a href="https://www.tradingview.com/chart/?symbol=BINANCE:BTCUSDT&interval=D&indicator=RSI" target="_blank" rel="noopener noreferrer" className="text-cyan-300 underline">Ver gráfico RSI (TradingView)</a>
                      )}
                      {grafico.titulo.toLowerCase().includes('macd') && (
                        <a href="https://www.tradingview.com/chart/?symbol=BINANCE:BTCUSDT&interval=D&indicator=MACD" target="_blank" rel="noopener noreferrer" className="text-cyan-300 underline">Ver gráfico MACD (TradingView)</a>
                      )}
                      {grafico.titulo.toLowerCase().includes('setor') && (
                        <a href="https://dune.com/queries/3076812/5168753" target="_blank" rel="noopener noreferrer" className="text-cyan-300 underline">Ver indicadores por Setor (Dune Analytics)</a>
                      )}
                      {grafico.titulo.toLowerCase().includes('comparativo') && (
                        <a href="https://www.tradingview.com/chart/?symbol=BINANCE:BTCUSDT&interval=D&indicator=STOCH" target="_blank" rel="noopener noreferrer" className="text-cyan-300 underline">Ver indicadores comparativos (TradingView)</a>
                      )}
                      {!grafico.titulo.toLowerCase().includes('rsi') && !grafico.titulo.toLowerCase().includes('macd') && (
                        <span className="text-gray-400">Gráfico {grafico.tipo} - {grafico.dados}</span>
                      )}
                    </div>
                    {/* Referências */}
                    <div className="mt-2">
                      <span className="text-xs text-gray-400">Fonte: </span>
                      {grafico.titulo.toLowerCase().includes('rsi') && (
                        <a href="https://www.tradingview.com/chart/?symbol=BINANCE:BTCUSDT&interval=D&indicator=RSI" target="_blank" rel="noopener noreferrer" className="text-xs text-cyan-300 underline">TradingView</a>
                      )}
                      {grafico.titulo.toLowerCase().includes('macd') && (
                        <a href="https://www.tradingview.com/chart/?symbol=BINANCE:BTCUSDT&interval=D&indicator=MACD" target="_blank" rel="noopener noreferrer" className="text-xs text-cyan-300 underline">TradingView</a>
                      )}
                      {grafico.titulo.toLowerCase().includes('setor') && (
                        <a href="https://dune.com/queries/3076812/5168753" target="_blank" rel="noopener noreferrer" className="text-xs text-cyan-300 underline">Dune Analytics</a>
                      )}
                      {grafico.titulo.toLowerCase().includes('comparativo') && (
                        <a href="https://www.tradingview.com/chart/?symbol=BINANCE:BTCUSDT&interval=D&indicator=STOCH" target="_blank" rel="noopener noreferrer" className="text-xs text-cyan-300 underline">TradingView</a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 p-4 bg-gray-800/50 rounded-lg border border-cyan-400/30">
          <h2 className="text-xl font-bold text-cyan-300 mb-4">Insights de Indicadores</h2>
          <ul className="space-y-3 text-gray-300">
            <li>• RSI em 65 indica sobrecompra</li>
            <li>• MACD positivo com tendência de alta</li>
            <li>• Médias móveis em alta forte</li>
            <li>• Setores DeFi e NFTs sobrecomprados</li>
            <li>• Layer 1 com indicadores neutros</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
} 