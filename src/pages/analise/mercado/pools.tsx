import React from 'react';
import Layout from '../../../components/Layout';

const analises = [
  {
    titulo: 'Métricas de Pools',
    descricao: 'Análise de pools de liquidez',
    metricas: [
      {
        nome: 'TVL Total',
        valor: '$85B',
        variacao: '+5%',
        periodo: '30d',
        interpretacao: 'Alto'
      },
      {
        nome: 'Volume 24h',
        valor: '$25B',
        variacao: '+7%',
        periodo: '24h',
        interpretacao: 'Alto'
      },
      {
        nome: 'APY Médio',
        valor: '12%',
        variacao: '+2%',
        periodo: '30d',
        interpretacao: 'Alto'
      }
    ],
    graficos: [
      {
        titulo: 'Evolução do TVL',
        tipo: 'line',
        dados: 'dados_evolucao_tvl'
      },
      {
        titulo: 'Volume por Pool',
        tipo: 'bar',
        dados: 'dados_volume_pool'
      }
    ]
  },
  {
    titulo: 'Métricas de DEXs',
    descricao: 'Análise de pools por DEX',
    metricas: [
      {
        nome: 'Uniswap',
        valor: '$25B',
        variacao: '+5%',
        periodo: '30d',
        interpretacao: 'Alto'
      },
      {
        nome: 'SushiSwap',
        valor: '$15B',
        variacao: '+3%',
        periodo: '30d',
        interpretacao: 'Alto'
      },
      {
        nome: 'PancakeSwap',
        valor: '$10B',
        variacao: '+4%',
        periodo: '30d',
        interpretacao: 'Alto'
      }
    ],
    graficos: [
      {
        titulo: 'TVL por DEX',
        tipo: 'bar',
        dados: 'dados_tvl_dex'
      },
      {
        titulo: 'Volume por DEX',
        tipo: 'bar',
        dados: 'dados_volume_dex'
      }
    ]
  },
  {
    titulo: 'Métricas de Mercado',
    descricao: 'Análise de pools comparativas',
    metricas: [
      {
        nome: 'ETH',
        valor: '$45B',
        variacao: '+5%',
        periodo: '30d',
        interpretacao: 'Alto'
      },
      {
        nome: 'BSC',
        valor: '$20B',
        variacao: '+3%',
        periodo: '30d',
        interpretacao: 'Alto'
      },
      {
        nome: 'Polygon',
        valor: '$15B',
        variacao: '+4%',
        periodo: '30d',
        interpretacao: 'Alto'
      }
    ],
    graficos: [
      {
        titulo: 'TVL por Chain',
        tipo: 'bar',
        dados: 'dados_tvl_chain'
      },
      {
        titulo: 'Volume por Chain',
        tipo: 'bar',
        dados: 'dados_volume_chain'
      }
    ]
  }
];

export default function Pools() {
  return (
    <Layout>
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-cyan-400 mb-8">Análise de Pools</h1>
        
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
                      {grafico.titulo.toLowerCase().includes('tvl') && (
                        <a href="https://defillama.com/protocols" target="_blank" rel="noopener noreferrer" className="text-cyan-300 underline">Ver gráfico de TVL (DefiLlama)</a>
                      )}
                      {grafico.titulo.toLowerCase().includes('volume') && (
                        <a href="https://dune.com/queries/3076812/5168759" target="_blank" rel="noopener noreferrer" className="text-cyan-300 underline">Ver gráfico de Volume (Dune Analytics)</a>
                      )}
                      {grafico.titulo.toLowerCase().includes('dex') && (
                        <a href="https://www.tokenterminal.com/terminal/protocols" target="_blank" rel="noopener noreferrer" className="text-cyan-300 underline">Ver gráfico por DEX (Token Terminal)</a>
                      )}
                      {grafico.titulo.toLowerCase().includes('chain') && (
                        <a href="https://defillama.com/chains" target="_blank" rel="noopener noreferrer" className="text-cyan-300 underline">Ver gráfico por Chain (DefiLlama)</a>
                      )}
                      {!grafico.titulo.toLowerCase().includes('tvl') && !grafico.titulo.toLowerCase().includes('volume') && !grafico.titulo.toLowerCase().includes('dex') && !grafico.titulo.toLowerCase().includes('chain') && (
                        <span className="text-gray-400">Gráfico {grafico.tipo} - {grafico.dados}</span>
                      )}
                    </div>
                    {/* Referências */}
                    <div className="mt-2">
                      <span className="text-xs text-gray-400">Fonte: </span>
                      {grafico.titulo.toLowerCase().includes('tvl') && (
                        <a href="https://defillama.com/protocols" target="_blank" rel="noopener noreferrer" className="text-xs text-cyan-300 underline">DefiLlama</a>
                      )}
                      {grafico.titulo.toLowerCase().includes('volume') && (
                        <a href="https://dune.com/queries/3076812/5168759" target="_blank" rel="noopener noreferrer" className="text-xs text-cyan-300 underline">Dune Analytics</a>
                      )}
                      {grafico.titulo.toLowerCase().includes('dex') && (
                        <a href="https://www.tokenterminal.com/terminal/protocols" target="_blank" rel="noopener noreferrer" className="text-xs text-cyan-300 underline">Token Terminal</a>
                      )}
                      {grafico.titulo.toLowerCase().includes('chain') && (
                        <a href="https://defillama.com/chains" target="_blank" rel="noopener noreferrer" className="text-xs text-cyan-300 underline">DefiLlama</a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 p-4 bg-gray-800/50 rounded-lg border border-cyan-400/30">
          <h2 className="text-xl font-bold text-cyan-300 mb-4">Insights de Pools</h2>
          <ul className="space-y-3 text-gray-300">
            <li>• TVL total em $85B com crescimento de 5%</li>
            <li>• Volume 24h em $25B com crescimento de 7%</li>
            <li>• APY médio em 12% com crescimento de 2%</li>
            <li>• Uniswap lidera com $25B em TVL</li>
            <li>• ETH domina com $45B em TVL</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
} 