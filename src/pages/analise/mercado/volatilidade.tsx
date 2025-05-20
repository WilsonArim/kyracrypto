import React from 'react';
import Layout from '../../../components/Layout';

const analises = [
  {
    titulo: 'Métricas de Volatilidade',
    descricao: 'Análise de volatilidade de mercado',
    metricas: [
      {
        nome: 'BTC',
        valor: '45%',
        variacao: '+5%',
        periodo: '30d',
        interpretacao: 'Alta'
      },
      {
        nome: 'ETH',
        valor: '55%',
        variacao: '+7%',
        periodo: '30d',
        interpretacao: 'Alta'
      },
      {
        nome: 'DeFi',
        valor: '65%',
        variacao: '+8%',
        periodo: '30d',
        interpretacao: 'Muito Alta'
      }
    ],
    graficos: [
      {
        titulo: 'Evolução da Volatilidade',
        tipo: 'line',
        dados: 'dados_evolucao_volatilidade'
      },
      {
        titulo: 'Força da Volatilidade',
        tipo: 'bar',
        dados: 'dados_forca_volatilidade'
      }
    ]
  },
  {
    titulo: 'Métricas de Setores',
    descricao: 'Análise de volatilidade por setor',
    metricas: [
      {
        nome: 'NFTs',
        valor: '75%',
        variacao: '+10%',
        periodo: '30d',
        interpretacao: 'Muito Alta'
      },
      {
        nome: 'Layer 1',
        valor: '50%',
        variacao: '+5%',
        periodo: '30d',
        interpretacao: 'Alta'
      },
      {
        nome: 'Stablecoins',
        valor: '5%',
        variacao: '+1%',
        periodo: '30d',
        interpretacao: 'Baixa'
      }
    ],
    graficos: [
      {
        titulo: 'Volatilidade por Setor',
        tipo: 'bar',
        dados: 'dados_volatilidade_setor'
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
    descricao: 'Análise de volatilidade comparativa',
    metricas: [
      {
        nome: 'S&P 500',
        valor: '15%',
        variacao: '+2%',
        periodo: '30d',
        interpretacao: 'Média'
      },
      {
        nome: 'Ouro',
        valor: '10%',
        variacao: '+1%',
        periodo: '30d',
        interpretacao: 'Baixa'
      },
      {
        nome: 'Dólar',
        valor: '5%',
        variacao: '+0.5%',
        periodo: '30d',
        interpretacao: 'Baixa'
      }
    ],
    graficos: [
      {
        titulo: 'Volatilidade Comparativa',
        tipo: 'bar',
        dados: 'dados_volatilidade_comparativa'
      },
      {
        titulo: 'Evolução Comparativa',
        tipo: 'line',
        dados: 'dados_evolucao_comparativa'
      }
    ]
  }
];

export default function Volatilidade() {
  return (
    <Layout>
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-cyan-400 mb-8">Análise de Volatilidade</h1>
        
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
                      {grafico.titulo.toLowerCase().includes('volatilidade') && (
                        <a href="https://dune.com/queries/3076812" target="_blank" rel="noopener noreferrer" className="text-cyan-300 underline">Ver gráfico de Volatilidade (Dune Analytics)</a>
                      )}
                      {grafico.titulo.toLowerCase().includes('setor') && (
                        <a href="https://dune.com/queries/3076812" target="_blank" rel="noopener noreferrer" className="text-cyan-300 underline">Ver gráfico por Setor (Dune Analytics)</a>
                      )}
                      {grafico.titulo.toLowerCase().includes('comparativa') && (
                        <a href="https://dune.com/queries/3076812" target="_blank" rel="noopener noreferrer" className="text-cyan-300 underline">Ver gráfico comparativo (Dune Analytics)</a>
                      )}
                      {grafico.titulo.toLowerCase().includes('evolução') && (
                        <a href="https://dune.com/queries/3076812" target="_blank" rel="noopener noreferrer" className="text-cyan-300 underline">Ver evolução da volatilidade (Dune Analytics)</a>
                      )}
                      {!grafico.titulo.toLowerCase().includes('volatilidade') && !grafico.titulo.toLowerCase().includes('setor') && !grafico.titulo.toLowerCase().includes('comparativa') && !grafico.titulo.toLowerCase().includes('evolução') && (
                        <span className="text-gray-400">Gráfico {grafico.tipo} - {grafico.dados}</span>
                      )}
                    </div>
                    {/* Referências */}
                    <div className="mt-2">
                      <span className="text-xs text-gray-400">Fonte: </span>
                      {grafico.titulo.toLowerCase().includes('volatilidade') && (
                        <a href="https://dune.com/queries/3076812" target="_blank" rel="noopener noreferrer" className="text-xs text-cyan-300 underline">Dune Analytics</a>
                      )}
                      {grafico.titulo.toLowerCase().includes('setor') && (
                        <a href="https://dune.com/queries/3076812" target="_blank" rel="noopener noreferrer" className="text-xs text-cyan-300 underline">Dune Analytics</a>
                      )}
                      {grafico.titulo.toLowerCase().includes('comparativa') && (
                        <a href="https://dune.com/queries/3076812" target="_blank" rel="noopener noreferrer" className="text-xs text-cyan-300 underline">Dune Analytics</a>
                      )}
                      {grafico.titulo.toLowerCase().includes('evolução') && (
                        <a href="https://dune.com/queries/3076812" target="_blank" rel="noopener noreferrer" className="text-xs text-cyan-300 underline">Dune Analytics</a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 p-4 bg-gray-800/50 rounded-lg border border-cyan-400/30">
          <h2 className="text-xl font-bold text-cyan-300 mb-4">Insights de Volatilidade</h2>
          <ul className="space-y-3 text-gray-300">
            <li>• Volatilidade alta em BTC (45%) e ETH (55%)</li>
            <li>• Volatilidade muito alta em DeFi (65%)</li>
            <li>• Volatilidade muito alta em NFTs (75%)</li>
            <li>• Volatilidade baixa em stablecoins (5%)</li>
            <li>• Volatilidade baixa em mercado tradicional</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
} 