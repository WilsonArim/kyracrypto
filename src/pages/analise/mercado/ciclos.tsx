import React from 'react';
import Layout from '../../../components/Layout';

const analises = [
  {
    titulo: 'Métricas de Ciclos',
    descricao: 'Análise de ciclos de mercado',
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
    ],
    graficos: [
      {
        titulo: 'Evolução do Ciclo',
        tipo: 'line',
        dados: 'dados_evolucao_ciclo'
      },
      {
        titulo: 'Força do Ciclo',
        tipo: 'bar',
        dados: 'dados_forca_ciclo'
      }
    ]
  },
  {
    titulo: 'Métricas de Setores',
    descricao: 'Análise de ciclos por setor',
    metricas: [
      {
        nome: 'DeFi',
        valor: 'Expansão',
        variacao: 'Muito Forte',
        periodo: '30d',
        interpretacao: 'Bullish'
      },
      {
        nome: 'NFTs',
        valor: 'Expansão',
        variacao: 'Forte',
        periodo: '30d',
        interpretacao: 'Bullish'
      },
      {
        nome: 'Layer 1',
        valor: 'Expansão',
        variacao: 'Forte',
        periodo: '30d',
        interpretacao: 'Bullish'
      }
    ],
    graficos: [
      {
        titulo: 'Ciclos por Setor',
        tipo: 'bar',
        dados: 'dados_ciclos_setor'
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
    descricao: 'Análise de ciclos comparativos',
    metricas: [
      {
        nome: 'S&P 500',
        valor: 'Expansão',
        variacao: 'Média',
        periodo: '30d',
        interpretacao: 'Bullish'
      },
      {
        nome: 'Ouro',
        valor: 'Expansão',
        variacao: 'Fraca',
        periodo: '30d',
        interpretacao: 'Bullish'
      },
      {
        nome: 'Dólar',
        valor: 'Contração',
        variacao: 'Forte',
        periodo: '30d',
        interpretacao: 'Bearish'
      }
    ],
    graficos: [
      {
        titulo: 'Ciclos Comparativos',
        tipo: 'bar',
        dados: 'dados_ciclos_comparativos'
      },
      {
        titulo: 'Evolução Comparativa',
        tipo: 'line',
        dados: 'dados_evolucao_comparativa'
      }
    ]
  }
];

export default function Ciclos() {
  return (
    <Layout>
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-cyan-400 mb-8">Análise de Ciclos</h1>
        
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
                      {grafico.titulo.toLowerCase().includes('ciclo') && (
                        <a href="https://www.tradingview.com/chart/?symbol=BINANCE:BTCUSDT&interval=D&indicator=WAVE" target="_blank" rel="noopener noreferrer" className="text-cyan-300 underline">Ver gráfico de Ciclos (TradingView)</a>
                      )}
                      {grafico.titulo.toLowerCase().includes('setor') && (
                        <a href="https://dune.com/queries/3076812/5168754" target="_blank" rel="noopener noreferrer" className="text-cyan-300 underline">Ver gráfico por Setor (Dune Analytics)</a>
                      )}
                      {grafico.titulo.toLowerCase().includes('comparativo') && (
                        <a href="https://www.tradingview.com/chart/?symbol=BINANCE:BTCUSDT&interval=D&indicator=ELLIOTT" target="_blank" rel="noopener noreferrer" className="text-cyan-300 underline">Ver gráfico comparativo (TradingView)</a>
                      )}
                      {grafico.titulo.toLowerCase().includes('evolução') && (
                        <a href="https://www.tradingview.com/chart/?symbol=BINANCE:BTCUSDT&interval=D&indicator=WAVE" target="_blank" rel="noopener noreferrer" className="text-cyan-300 underline">Ver evolução dos ciclos (TradingView)</a>
                      )}
                      {!grafico.titulo.toLowerCase().includes('ciclo') && !grafico.titulo.toLowerCase().includes('setor') && !grafico.titulo.toLowerCase().includes('comparativo') && !grafico.titulo.toLowerCase().includes('evolução') && (
                        <span className="text-gray-400">Gráfico {grafico.tipo} - {grafico.dados}</span>
                      )}
                    </div>
                    {/* Referências */}
                    <div className="mt-2">
                      <span className="text-xs text-gray-400">Fonte: </span>
                      {grafico.titulo.toLowerCase().includes('ciclo') && (
                        <a href="https://www.tradingview.com/chart/?symbol=BINANCE:BTCUSDT&interval=D&indicator=WAVE" target="_blank" rel="noopener noreferrer" className="text-xs text-cyan-300 underline">TradingView</a>
                      )}
                      {grafico.titulo.toLowerCase().includes('setor') && (
                        <a href="https://dune.com/queries/3076812/5168754" target="_blank" rel="noopener noreferrer" className="text-xs text-cyan-300 underline">Dune Analytics</a>
                      )}
                      {grafico.titulo.toLowerCase().includes('comparativo') && (
                        <a href="https://www.tradingview.com/chart/?symbol=BINANCE:BTCUSDT&interval=D&indicator=ELLIOTT" target="_blank" rel="noopener noreferrer" className="text-xs text-cyan-300 underline">TradingView</a>
                      )}
                      {grafico.titulo.toLowerCase().includes('evolução') && (
                        <a href="https://www.tradingview.com/chart/?symbol=BINANCE:BTCUSDT&interval=D&indicator=WAVE" target="_blank" rel="noopener noreferrer" className="text-xs text-cyan-300 underline">TradingView</a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 p-4 bg-gray-800/50 rounded-lg border border-cyan-400/30">
          <h2 className="text-xl font-bold text-cyan-300 mb-4">Insights de Ciclos</h2>
          <ul className="space-y-3 text-gray-300">
            <li>• Fase de expansão forte em 45 dias</li>
            <li>• Força do ciclo em 85%</li>
            <li>• Setores DeFi e NFTs em expansão forte</li>
            <li>• Layer 1 em expansão forte</li>
            <li>• Dólar em fase de contração</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
} 