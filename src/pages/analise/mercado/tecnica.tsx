import React from 'react';
import Layout from '../../../components/Layout';

const analises = [
  {
    titulo: 'Indicadores Técnicos',
    descricao: 'Análise dos principais indicadores técnicos do mercado',
    metricas: [
      {
        nome: 'RSI (14)',
        valor: '65.4',
        variacao: '+2.3',
        periodo: '24h',
        interpretacao: 'Sobrecomprado'
      },
      {
        nome: 'MACD',
        valor: '1.2',
        variacao: '+0.3',
        periodo: '24h',
        interpretacao: 'Tendência de Alta'
      },
      {
        nome: 'Bollinger Bands',
        valor: '68.2K',
        variacao: '+1.2%',
        periodo: '24h',
        interpretacao: 'Próximo ao Topo'
      }
    ],
    graficos: [
      {
        titulo: 'RSI Histórico',
        tipo: 'line',
        dados: 'dados_rsi'
      },
      {
        titulo: 'MACD e Sinal',
        tipo: 'line',
        dados: 'dados_macd'
      }
    ]
  },
  {
    titulo: 'Suporte e Resistência',
    descricao: 'Níveis críticos de suporte e resistência',
    metricas: [
      {
        nome: 'Resistência 1',
        valor: '$72.5K',
        variacao: '0%',
        periodo: 'Atual',
        interpretacao: 'Forte'
      },
      {
        nome: 'Suporte 1',
        valor: '$65.8K',
        variacao: '0%',
        periodo: 'Atual',
        interpretacao: 'Forte'
      },
      {
        nome: 'Suporte 2',
        valor: '$62.3K',
        variacao: '0%',
        periodo: 'Atual',
        interpretacao: 'Médio'
      }
    ],
    graficos: [
      {
        titulo: 'Níveis de Preço',
        tipo: 'line',
        dados: 'dados_niveis'
      },
      {
        titulo: 'Volume por Nível',
        tipo: 'bar',
        dados: 'dados_volume_niveis'
      }
    ]
  },
  {
    titulo: 'Padrões de Mercado',
    descricao: 'Identificação de padrões técnicos',
    metricas: [
      {
        nome: 'Padrões de Candlestick',
        valor: '3',
        variacao: '+1',
        periodo: '24h',
        interpretacao: 'Bullish'
      },
      {
        nome: 'Formações de Preço',
        valor: '2',
        variacao: '0',
        periodo: '24h',
        interpretacao: 'Neutro'
      },
      {
        nome: 'Divergências',
        valor: '1',
        variacao: '-1',
        periodo: '24h',
        interpretacao: 'Bearish'
      }
    ],
    graficos: [
      {
        titulo: 'Padrões Atuais',
        tipo: 'candlestick',
        dados: 'dados_padroes'
      },
      {
        titulo: 'Divergências',
        tipo: 'line',
        dados: 'dados_divergencias'
      }
    ]
  }
];

export default function Tecnica() {
  return (
    <Layout>
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-cyan-400 mb-8">Análise Técnica</h1>
        
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
                        <a href="https://www.tradingview.com/chart/?symbol=BINANCE:BTCUSDT" target="_blank" rel="noopener noreferrer" className="text-cyan-300 underline">Ver gráfico RSI (TradingView)</a>
                      )}
                      {grafico.titulo.toLowerCase().includes('macd') && (
                        <a href="https://www.tradingview.com/chart/?symbol=BINANCE:BTCUSDT" target="_blank" rel="noopener noreferrer" className="text-cyan-300 underline">Ver gráfico MACD (TradingView)</a>
                      )}
                      {grafico.titulo.toLowerCase().includes('níveis') && (
                        <a href="https://www.tradingview.com/chart/?symbol=BINANCE:BTCUSDT" target="_blank" rel="noopener noreferrer" className="text-cyan-300 underline">Ver gráfico de Níveis (TradingView)</a>
                      )}
                      {grafico.titulo.toLowerCase().includes('padrões') && (
                        <a href="https://www.tradingview.com/chart/?symbol=BINANCE:BTCUSDT" target="_blank" rel="noopener noreferrer" className="text-cyan-300 underline">Ver gráfico de Padrões (TradingView)</a>
                      )}
                      {grafico.titulo.toLowerCase().includes('divergências') && (
                        <a href="https://www.tradingview.com/chart/?symbol=BINANCE:BTCUSDT" target="_blank" rel="noopener noreferrer" className="text-cyan-300 underline">Ver gráfico de Divergências (TradingView)</a>
                      )}
                      {!grafico.titulo.toLowerCase().includes('rsi') && !grafico.titulo.toLowerCase().includes('macd') && !grafico.titulo.toLowerCase().includes('níveis') && !grafico.titulo.toLowerCase().includes('padrões') && !grafico.titulo.toLowerCase().includes('divergências') && (
                        <span className="text-gray-400">Gráfico {grafico.tipo} - {grafico.dados}</span>
                      )}
                    </div>
                    {/* Referências */}
                    <div className="mt-2">
                      <span className="text-xs text-gray-400">Fonte: </span>
                      {(grafico.titulo.toLowerCase().includes('rsi') || grafico.titulo.toLowerCase().includes('macd') || grafico.titulo.toLowerCase().includes('níveis') || grafico.titulo.toLowerCase().includes('padrões') || grafico.titulo.toLowerCase().includes('divergências')) && (
                        <a href="https://www.tradingview.com/chart/?symbol=BINANCE:BTCUSDT" target="_blank" rel="noopener noreferrer" className="text-xs text-cyan-300 underline">TradingView</a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 p-4 bg-gray-800/50 rounded-lg border border-cyan-400/30">
          <h2 className="text-xl font-bold text-cyan-300 mb-4">Insights Técnicos</h2>
          <ul className="space-y-3 text-gray-300">
            <li>• RSI em 65.4 indica possível sobrecompra, mas ainda há espaço para alta</li>
            <li>• MACD positivo e em expansão sugere força na tendência de alta</li>
            <li>• Preço próximo à resistência de $72.5K, volume aumenta no nível</li>
            <li>• Padrões de candlestick bullish nas últimas 24h</li>
            <li>• Divergência bearish no RSI pode indicar possível reversão</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
} 