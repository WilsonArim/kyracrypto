import React from 'react';
import Layout from '../../../components/Layout';

const analises = [
  {
    titulo: 'Métricas de NFTs',
    descricao: 'Análise de mercado NFT',
    metricas: [
      {
        nome: 'Volume 24h',
        valor: '$25M',
        variacao: '+15%',
        periodo: '24h',
        interpretacao: 'Alto'
      },
      {
        nome: 'Vendas',
        valor: '12K',
        variacao: '+8%',
        periodo: '24h',
        interpretacao: 'Alto'
      },
      {
        nome: 'Preço Médio',
        valor: '$2.1K',
        variacao: '+5%',
        periodo: '24h',
        interpretacao: 'Alto'
      }
    ],
    graficos: [
      {
        titulo: 'Evolução do Volume',
        tipo: 'line',
        dados: 'dados_evolucao_volume'
      },
      {
        titulo: 'Vendas por Coleção',
        tipo: 'bar',
        dados: 'dados_vendas_colecao'
      }
    ]
  },
  {
    titulo: 'Métricas por Coleção',
    descricao: 'Análise de NFTs por coleção',
    metricas: [
      {
        nome: 'Bored Ape',
        valor: '$5M',
        variacao: '+10%',
        periodo: '24h',
        interpretacao: 'Alto'
      },
      {
        nome: 'CryptoPunks',
        valor: '$4M',
        variacao: '+8%',
        periodo: '24h',
        interpretacao: 'Alto'
      },
      {
        nome: 'Azuki',
        valor: '$3M',
        variacao: '+12%',
        periodo: '24h',
        interpretacao: 'Alto'
      }
    ],
    graficos: [
      {
        titulo: 'Volume por Coleção',
        tipo: 'bar',
        dados: 'dados_volume_colecao'
      },
      {
        titulo: 'Preço Médio por Coleção',
        tipo: 'bar',
        dados: 'dados_preco_colecao'
      }
    ]
  },
  {
    titulo: 'Métricas de Mercado',
    descricao: 'Análise de NFTs comparativa',
    metricas: [
      {
        nome: 'ETH',
        valor: '$15M',
        variacao: '+12%',
        periodo: '24h',
        interpretacao: 'Alto'
      },
      {
        nome: 'SOL',
        valor: '$5M',
        variacao: '+8%',
        periodo: '24h',
        interpretacao: 'Alto'
      },
      {
        nome: 'Polygon',
        valor: '$3M',
        variacao: '+15%',
        periodo: '24h',
        interpretacao: 'Alto'
      }
    ],
    graficos: [
      {
        titulo: 'Volume por Chain',
        tipo: 'bar',
        dados: 'dados_volume_chain'
      },
      {
        titulo: 'Vendas por Chain',
        tipo: 'bar',
        dados: 'dados_vendas_chain'
      }
    ]
  }
];

export default function NFTs() {
  return (
    <Layout>
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-cyan-400 mb-8">Análise de NFTs</h1>
        
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
                      {grafico.titulo.toLowerCase().includes('evolução') && (
                        <a href="https://nftgo.io/analytics/market-overview" target="_blank" rel="noopener noreferrer" className="text-cyan-300 underline">Ver gráfico de Evolução (NFTGo)</a>
                      )}
                      {grafico.titulo.toLowerCase().includes('vendas') && (
                        <a href="https://dune.com/queries/3076812/5168762" target="_blank" rel="noopener noreferrer" className="text-cyan-300 underline">Ver gráfico de Vendas (Dune Analytics)</a>
                      )}
                      {grafico.titulo.toLowerCase().includes('coleção') && (
                        <a href="https://nftgo.io/analytics/collections" target="_blank" rel="noopener noreferrer" className="text-cyan-300 underline">Ver gráfico por Coleção (NFTGo)</a>
                      )}
                      {grafico.titulo.toLowerCase().includes('chain') && (
                        <a href="https://nftgo.io/analytics/market-overview" target="_blank" rel="noopener noreferrer" className="text-cyan-300 underline">Ver gráfico por Chain (NFTGo)</a>
                      )}
                      {!grafico.titulo.toLowerCase().includes('evolução') && !grafico.titulo.toLowerCase().includes('vendas') && !grafico.titulo.toLowerCase().includes('coleção') && !grafico.titulo.toLowerCase().includes('chain') && (
                        <span className="text-gray-400">Gráfico {grafico.tipo} - {grafico.dados}</span>
                      )}
                    </div>
                    {/* Referências */}
                    <div className="mt-2">
                      <span className="text-xs text-gray-400">Fonte: </span>
                      {grafico.titulo.toLowerCase().includes('evolução') && (
                        <a href="https://nftgo.io/analytics/market-overview" target="_blank" rel="noopener noreferrer" className="text-xs text-cyan-300 underline">NFTGo</a>
                      )}
                      {grafico.titulo.toLowerCase().includes('vendas') && (
                        <a href="https://dune.com/queries/3076812/5168762" target="_blank" rel="noopener noreferrer" className="text-xs text-cyan-300 underline">Dune Analytics</a>
                      )}
                      {grafico.titulo.toLowerCase().includes('coleção') && (
                        <a href="https://nftgo.io/analytics/collections" target="_blank" rel="noopener noreferrer" className="text-xs text-cyan-300 underline">NFTGo</a>
                      )}
                      {grafico.titulo.toLowerCase().includes('chain') && (
                        <a href="https://nftgo.io/analytics/market-overview" target="_blank" rel="noopener noreferrer" className="text-xs text-cyan-300 underline">NFTGo</a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 p-4 bg-gray-800/50 rounded-lg border border-cyan-400/30">
          <h2 className="text-xl font-bold text-cyan-300 mb-4">Insights de NFTs</h2>
          <ul className="space-y-3 text-gray-300">
            <li>• Volume 24h em $25M com crescimento de 15%</li>
            <li>• 12K vendas com crescimento de 8%</li>
            <li>• Preço médio em $2.1K com crescimento de 5%</li>
            <li>• Bored Ape lidera com $5M em volume</li>
            <li>• ETH domina com $15M em volume</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
} 