import React from 'react';
import Layout from '../../../components/Layout';

const analises = [
  {
    titulo: 'Métricas de Risco',
    descricao: 'Análise do risco de mercado',
    metricas: [
      {
        nome: 'Value at Risk',
        valor: '5.2%',
        variacao: '+0.5%',
        periodo: '24h',
        interpretacao: 'Alto'
      },
      {
        nome: 'Sharpe Ratio',
        valor: '1.2',
        variacao: '-0.1',
        periodo: '30d',
        interpretacao: 'Bom'
      },
      {
        nome: 'Sortino Ratio',
        valor: '0.8',
        variacao: '-0.2',
        periodo: '30d',
        interpretacao: 'Regular'
      }
    ],
    graficos: [
      {
        titulo: 'Evolução do Risco',
        tipo: 'line',
        dados: 'dados_evolucao_risco'
      },
      {
        titulo: 'Força do Risco',
        tipo: 'bar',
        dados: 'dados_forca_risco'
      }
    ]
  },
  {
    titulo: 'Métricas de Setores',
    descricao: 'Análise do risco por setor',
    metricas: [
      {
        nome: 'DeFi',
        valor: '6.5%',
        variacao: '+0.8%',
        periodo: '24h',
        interpretacao: 'Alto'
      },
      {
        nome: 'NFTs',
        valor: '7.2%',
        variacao: '+1.2%',
        periodo: '24h',
        interpretacao: 'Alto'
      },
      {
        nome: 'Layer 1',
        valor: '4.8%',
        variacao: '+0.5%',
        periodo: '24h',
        interpretacao: 'Médio'
      }
    ],
    graficos: [
      {
        titulo: 'Risco por Setor',
        tipo: 'bar',
        dados: 'dados_risco_setor'
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
    descricao: 'Análise do risco comparativo',
    metricas: [
      {
        nome: 'S&P 500',
        valor: '2.5%',
        variacao: '+0.2%',
        periodo: '24h',
        interpretacao: 'Baixo'
      },
      {
        nome: 'Ouro',
        valor: '1.8%',
        variacao: '+0.1%',
        periodo: '24h',
        interpretacao: 'Baixo'
      },
      {
        nome: 'Dólar',
        valor: '1.2%',
        variacao: '+0.1%',
        periodo: '24h',
        interpretacao: 'Baixo'
      }
    ],
    graficos: [
      {
        titulo: 'Risco Comparativo',
        tipo: 'bar',
        dados: 'dados_risco_comparativo'
      },
      {
        titulo: 'Evolução Comparativa',
        tipo: 'line',
        dados: 'dados_evolucao_comparativa'
      }
    ]
  }
];

export default function Risco() {
  return (
    <Layout>
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-cyan-400 mb-8">Análise de Risco</h1>
        
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
                      <span className={`text-sm ${metrica.variacao.startsWith('+') ? 'text-red-400' : 'text-green-400'}`}>
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
                      {grafico.titulo.toLowerCase().includes('risco') && (
                        <a href="https://www.tradingview.com/chart/?symbol=BINANCE:BTCUSDT&interval=D&indicator=RSI" target="_blank" rel="noopener noreferrer" className="text-cyan-300 underline">Ver gráfico de Risco (TradingView)</a>
                      )}
                      {grafico.titulo.toLowerCase().includes('setor') && (
                        <a href="https://dune.com/queries/3076812/5168751" target="_blank" rel="noopener noreferrer" className="text-cyan-300 underline">Ver gráfico por Setor (Dune Analytics)</a>
                      )}
                      {grafico.titulo.toLowerCase().includes('comparativo') && (
                        <a href="https://www.coinglass.com/risk" target="_blank" rel="noopener noreferrer" className="text-cyan-300 underline">Ver gráfico comparativo (Coinglass)</a>
                      )}
                      {grafico.titulo.toLowerCase().includes('evolução') && (
                        <a href="https://www.tradingview.com/chart/?symbol=BINANCE:BTCUSDT&interval=D&indicator=ATR" target="_blank" rel="noopener noreferrer" className="text-cyan-300 underline">Ver evolução do risco (TradingView)</a>
                      )}
                      {!grafico.titulo.toLowerCase().includes('risco') && !grafico.titulo.toLowerCase().includes('setor') && !grafico.titulo.toLowerCase().includes('comparativo') && !grafico.titulo.toLowerCase().includes('evolução') && (
                        <span className="text-gray-400">Gráfico {grafico.tipo} - {grafico.dados}</span>
                      )}
                    </div>
                    {/* Referências */}
                    <div className="mt-2">
                      <span className="text-xs text-gray-400">Fonte: </span>
                      {grafico.titulo.toLowerCase().includes('risco') && (
                        <a href="https://www.tradingview.com/chart/?symbol=BINANCE:BTCUSDT&interval=D&indicator=RSI" target="_blank" rel="noopener noreferrer" className="text-xs text-cyan-300 underline">TradingView</a>
                      )}
                      {grafico.titulo.toLowerCase().includes('setor') && (
                        <a href="https://dune.com/queries/3076812/5168751" target="_blank" rel="noopener noreferrer" className="text-xs text-cyan-300 underline">Dune Analytics</a>
                      )}
                      {grafico.titulo.toLowerCase().includes('comparativo') && (
                        <a href="https://www.coinglass.com/risk" target="_blank" rel="noopener noreferrer" className="text-xs text-cyan-300 underline">Coinglass</a>
                      )}
                      {grafico.titulo.toLowerCase().includes('evolução') && (
                        <a href="https://www.tradingview.com/chart/?symbol=BINANCE:BTCUSDT&interval=D&indicator=ATR" target="_blank" rel="noopener noreferrer" className="text-xs text-cyan-300 underline">TradingView</a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 p-4 bg-gray-800/50 rounded-lg border border-cyan-400/30">
          <h2 className="text-xl font-bold text-cyan-300 mb-4">Insights de Risco</h2>
          <ul className="space-y-3 text-gray-300">
            <li>• VaR em 5.2% indica risco elevado</li>
            <li>• Sharpe Ratio de 1.2 mantém bom retorno/risco</li>
            <li>• Setor NFTs apresenta maior risco (7.2%)</li>
            <li>• Risco médio em Layer 1 (4.8%)</li>
            <li>• Risco baixo em mercado tradicional</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
} 