import React from 'react';
import Layout from '../../../components/Layout';

const analises = [
  {
    titulo: 'Métricas de Correlações',
    descricao: 'Análise de correlações entre ativos',
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
    ],
    graficos: [
      {
        titulo: 'Evolução das Correlações',
        tipo: 'line',
        dados: 'dados_evolucao_correlacoes'
      },
      {
        titulo: 'Força das Correlações',
        tipo: 'bar',
        dados: 'dados_forca_correlacoes'
      }
    ]
  },
  {
    titulo: 'Métricas de Setores',
    descricao: 'Análise de correlações por setor',
    metricas: [
      {
        nome: 'DeFi/ETH',
        valor: '0.80',
        variacao: '+0.04',
        periodo: '30d',
        interpretacao: 'Alta'
      },
      {
        nome: 'NFTs/ETH',
        valor: '0.70',
        variacao: '+0.03',
        periodo: '30d',
        interpretacao: 'Média'
      },
      {
        nome: 'Layer 1/ETH',
        valor: '0.75',
        variacao: '+0.02',
        periodo: '30d',
        interpretacao: 'Média'
      }
    ],
    graficos: [
      {
        titulo: 'Correlações por Setor',
        tipo: 'bar',
        dados: 'dados_correlacoes_setor'
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
    descricao: 'Análise de correlações comparativas',
    metricas: [
      {
        nome: 'BTC/S&P 500',
        valor: '0.45',
        variacao: '+0.02',
        periodo: '30d',
        interpretacao: 'Baixa'
      },
      {
        nome: 'BTC/Ouro',
        valor: '0.35',
        variacao: '+0.01',
        periodo: '30d',
        interpretacao: 'Baixa'
      },
      {
        nome: 'BTC/Dólar',
        valor: '-0.55',
        variacao: '-0.03',
        periodo: '30d',
        interpretacao: 'Negativa'
      }
    ],
    graficos: [
      {
        titulo: 'Correlações Comparativas',
        tipo: 'bar',
        dados: 'dados_correlacoes_comparativas'
      },
      {
        titulo: 'Evolução Comparativa',
        tipo: 'line',
        dados: 'dados_evolucao_comparativa'
      }
    ]
  }
];

export default function Correlacoes() {
  return (
    <Layout>
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-cyan-400 mb-8">Análise de Correlações</h1>
        
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
                      {grafico.titulo.toLowerCase().includes('correla') && (
                        <a href="https://www.tradingview.com/chart/?symbol=BINANCE:BTCUSDT&interval=D&indicator=CORREL" target="_blank" rel="noopener noreferrer" className="text-cyan-300 underline">Ver gráfico de Correlação (TradingView)</a>
                      )}
                      {grafico.titulo.toLowerCase().includes('setor') && (
                        <a href="https://dune.com/queries/3076812/5168755" target="_blank" rel="noopener noreferrer" className="text-cyan-300 underline">Ver gráfico por Setor (Dune Analytics)</a>
                      )}
                      {grafico.titulo.toLowerCase().includes('comparativa') && (
                        <a href="https://www.tradingview.com/chart/?symbol=BINANCE:BTCUSDT&interval=D&indicator=CORREL" target="_blank" rel="noopener noreferrer" className="text-cyan-300 underline">Ver gráfico comparativo (TradingView)</a>
                      )}
                      {grafico.titulo.toLowerCase().includes('evolução') && (
                        <a href="https://www.tradingview.com/chart/?symbol=BINANCE:BTCUSDT&interval=D&indicator=CORREL" target="_blank" rel="noopener noreferrer" className="text-cyan-300 underline">Ver evolução das correlações (TradingView)</a>
                      )}
                      {!grafico.titulo.toLowerCase().includes('correla') && !grafico.titulo.toLowerCase().includes('setor') && !grafico.titulo.toLowerCase().includes('comparativa') && !grafico.titulo.toLowerCase().includes('evolução') && (
                        <span className="text-gray-400">Gráfico {grafico.tipo} - {grafico.dados}</span>
                      )}
                    </div>
                    {/* Referências */}
                    <div className="mt-2">
                      <span className="text-xs text-gray-400">Fonte: </span>
                      {grafico.titulo.toLowerCase().includes('correla') && (
                        <a href="https://www.tradingview.com/chart/?symbol=BINANCE:BTCUSDT&interval=D&indicator=CORREL" target="_blank" rel="noopener noreferrer" className="text-xs text-cyan-300 underline">TradingView</a>
                      )}
                      {grafico.titulo.toLowerCase().includes('setor') && (
                        <a href="https://dune.com/queries/3076812/5168755" target="_blank" rel="noopener noreferrer" className="text-xs text-cyan-300 underline">Dune Analytics</a>
                      )}
                      {grafico.titulo.toLowerCase().includes('comparativa') && (
                        <a href="https://www.tradingview.com/chart/?symbol=BINANCE:BTCUSDT&interval=D&indicator=CORREL" target="_blank" rel="noopener noreferrer" className="text-xs text-cyan-300 underline">TradingView</a>
                      )}
                      {grafico.titulo.toLowerCase().includes('evolução') && (
                        <a href="https://www.tradingview.com/chart/?symbol=BINANCE:BTCUSDT&interval=D&indicator=CORREL" target="_blank" rel="noopener noreferrer" className="text-xs text-cyan-300 underline">TradingView</a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 p-4 bg-gray-800/50 rounded-lg border border-cyan-400/30">
          <h2 className="text-xl font-bold text-cyan-300 mb-4">Insights de Correlações</h2>
          <ul className="space-y-3 text-gray-300">
            <li>• Alta correlação entre BTC e ETH (0.85)</li>
            <li>• Correlação média entre BTC e DeFi (0.75)</li>
            <li>• Correlação média entre BTC e NFTs (0.65)</li>
            <li>• Baixa correlação com mercado tradicional</li>
            <li>• Correlação negativa com dólar (-0.55)</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
} 