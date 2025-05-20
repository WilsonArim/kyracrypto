import React from 'react';
import Layout from '../../../components/Layout';

const analises = [
  {
    titulo: 'Métricas de Fundamentos',
    descricao: 'Análise de fundamentos de mercado',
    metricas: [
      {
        nome: 'TVL DeFi',
        valor: '$85B',
        variacao: '+5%',
        periodo: '30d',
        interpretacao: 'Alto'
      },
      {
        nome: 'Volume DeFi',
        valor: '$25B',
        variacao: '+7%',
        periodo: '30d',
        interpretacao: 'Alto'
      },
      {
        nome: 'Usuários',
        valor: '2.5M',
        variacao: '+8%',
        periodo: '30d',
        interpretacao: 'Alto'
      }
    ],
    graficos: [
      {
        titulo: 'Evolução dos Fundamentos',
        tipo: 'line',
        dados: 'dados_evolucao_fundamentos'
      },
      {
        titulo: 'Força dos Fundamentos',
        tipo: 'bar',
        dados: 'dados_forca_fundamentos'
      }
    ]
  },
  {
    titulo: 'Métricas de Setores',
    descricao: 'Análise de fundamentos por setor',
    metricas: [
      {
        nome: 'NFTs',
        valor: '$10B',
        variacao: '+10%',
        periodo: '30d',
        interpretacao: 'Alto'
      },
      {
        nome: 'Layer 1',
        valor: '$50B',
        variacao: '+5%',
        periodo: '30d',
        interpretacao: 'Alto'
      },
      {
        nome: 'Stablecoins',
        valor: '$150B',
        variacao: '+3%',
        periodo: '30d',
        interpretacao: 'Muito Alto'
      }
    ],
    graficos: [
      {
        titulo: 'Fundamentos por Setor',
        tipo: 'bar',
        dados: 'dados_fundamentos_setor'
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
    descricao: 'Análise de fundamentos comparativos',
    metricas: [
      {
        nome: 'S&P 500',
        valor: '$40T',
        variacao: '+2%',
        periodo: '30d',
        interpretacao: 'Alto'
      },
      {
        nome: 'Ouro',
        valor: '$12T',
        variacao: '+1%',
        periodo: '30d',
        interpretacao: 'Alto'
      },
      {
        nome: 'Dólar',
        valor: '$100T',
        variacao: '+0.5%',
        periodo: '30d',
        interpretacao: 'Muito Alto'
      }
    ],
    graficos: [
      {
        titulo: 'Fundamentos Comparativos',
        tipo: 'bar',
        dados: 'dados_fundamentos_comparativos'
      },
      {
        titulo: 'Evolução Comparativa',
        tipo: 'line',
        dados: 'dados_evolucao_comparativa'
      }
    ]
  }
];

export default function Fundamentos() {
  return (
    <Layout>
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-cyan-400 mb-8">Análise de Fundamentos</h1>
        
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
                      {grafico.titulo.toLowerCase().includes('fundamentos') && (
                        <a href="https://defillama.com/chains" target="_blank" rel="noopener noreferrer" className="text-cyan-300 underline">Ver gráfico de Fundamentos (DefiLlama)</a>
                      )}
                      {grafico.titulo.toLowerCase().includes('setor') && (
                        <a href="https://dune.com/queries/3076812/5168758" target="_blank" rel="noopener noreferrer" className="text-cyan-300 underline">Ver gráfico por Setor (Dune Analytics)</a>
                      )}
                      {grafico.titulo.toLowerCase().includes('comparativa') && (
                        <a href="https://www.messari.io/asset/bitcoin/fundamentals" target="_blank" rel="noopener noreferrer" className="text-cyan-300 underline">Ver gráfico comparativo (Messari)</a>
                      )}
                      {grafico.titulo.toLowerCase().includes('evolução') && (
                        <a href="https://www.tokenterminal.com/terminal" target="_blank" rel="noopener noreferrer" className="text-cyan-300 underline">Ver evolução dos fundamentos (Token Terminal)</a>
                      )}
                      {!grafico.titulo.toLowerCase().includes('fundamentos') && !grafico.titulo.toLowerCase().includes('setor') && !grafico.titulo.toLowerCase().includes('comparativa') && !grafico.titulo.toLowerCase().includes('evolução') && (
                        <span className="text-gray-400">Gráfico {grafico.tipo} - {grafico.dados}</span>
                      )}
                    </div>
                    {/* Referências */}
                    <div className="mt-2">
                      <span className="text-xs text-gray-400">Fonte: </span>
                      {grafico.titulo.toLowerCase().includes('fundamentos') && (
                        <a href="https://defillama.com/chains" target="_blank" rel="noopener noreferrer" className="text-xs text-cyan-300 underline">DefiLlama</a>
                      )}
                      {grafico.titulo.toLowerCase().includes('setor') && (
                        <a href="https://dune.com/queries/3076812/5168758" target="_blank" rel="noopener noreferrer" className="text-xs text-cyan-300 underline">Dune Analytics</a>
                      )}
                      {grafico.titulo.toLowerCase().includes('comparativa') && (
                        <a href="https://www.messari.io/asset/bitcoin/fundamentals" target="_blank" rel="noopener noreferrer" className="text-xs text-cyan-300 underline">Messari</a>
                      )}
                      {grafico.titulo.toLowerCase().includes('evolução') && (
                        <a href="https://www.tokenterminal.com/terminal" target="_blank" rel="noopener noreferrer" className="text-xs text-cyan-300 underline">Token Terminal</a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 p-4 bg-gray-800/50 rounded-lg border border-cyan-400/30">
          <h2 className="text-xl font-bold text-cyan-300 mb-4">Insights de Fundamentos</h2>
          <ul className="space-y-3 text-gray-300">
            <li>• TVL DeFi em $85B com crescimento de 5%</li>
            <li>• Volume DeFi em $25B com crescimento de 7%</li>
            <li>• 2.5M usuários ativos com crescimento de 8%</li>
            <li>• TVL alto em NFTs ($10B) e Layer 1 ($50B)</li>
            <li>• TVL muito alto em stablecoins ($150B)</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
} 