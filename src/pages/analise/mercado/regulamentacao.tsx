import React from 'react';
import Layout from '../../../components/Layout';

const analises = [
  {
    titulo: 'Métricas de Regulamentação',
    descricao: 'Análise de regulamentação global',
    metricas: [
      {
        nome: 'Países Regulados',
        valor: '85',
        variacao: '+5',
        periodo: '30d',
        interpretacao: 'Alto'
      },
      {
        nome: 'Leis Aprovadas',
        valor: '120',
        variacao: '+8',
        periodo: '30d',
        interpretacao: 'Alto'
      },
      {
        nome: 'Licenças Emitidas',
        valor: '250',
        variacao: '+12',
        periodo: '30d',
        interpretacao: 'Alto'
      }
    ],
    graficos: [
      {
        titulo: 'Evolução da Regulamentação',
        tipo: 'line',
        dados: 'dados_evolucao_regulamentacao'
      },
      {
        titulo: 'Distribuição por Região',
        tipo: 'pie',
        dados: 'dados_distribuicao_regiao'
      }
    ]
  },
  {
    titulo: 'Métricas por Região',
    descricao: 'Análise de regulamentação por região',
    metricas: [
      {
        nome: 'América do Norte',
        valor: '25',
        variacao: '+3',
        periodo: '30d',
        interpretacao: 'Alto'
      },
      {
        nome: 'Europa',
        valor: '30',
        variacao: '+5',
        periodo: '30d',
        interpretacao: 'Alto'
      },
      {
        nome: 'Ásia',
        valor: '20',
        variacao: '+4',
        periodo: '30d',
        interpretacao: 'Alto'
      }
    ],
    graficos: [
      {
        titulo: 'Leis por Região',
        tipo: 'bar',
        dados: 'dados_leis_regiao'
      },
      {
        titulo: 'Licenças por Região',
        tipo: 'bar',
        dados: 'dados_licencas_regiao'
      }
    ]
  },
  {
    titulo: 'Métricas de Mercado',
    descricao: 'Análise de regulamentação comparativa',
    metricas: [
      {
        nome: 'Exchanges',
        valor: '150',
        variacao: '+8',
        periodo: '30d',
        interpretacao: 'Alto'
      },
      {
        nome: 'DeFi',
        valor: '85',
        variacao: '+5',
        periodo: '30d',
        interpretacao: 'Alto'
      },
      {
        nome: 'NFTs',
        valor: '45',
        variacao: '+3',
        periodo: '30d',
        interpretacao: 'Médio'
      }
    ],
    graficos: [
      {
        titulo: 'Regulamentação por Setor',
        tipo: 'bar',
        dados: 'dados_regulamentacao_setor'
      },
      {
        titulo: 'Licenças por Setor',
        tipo: 'bar',
        dados: 'dados_licencas_setor'
      }
    ]
  }
];

export default function Regulamentacao() {
  return (
    <Layout>
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-cyan-400 mb-8">Análise de Regulamentação</h1>
        
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
                        <a href="https://www.messari.io/report/state-of-crypto-regulation" target="_blank" rel="noopener noreferrer" className="text-cyan-300 underline">Ver gráfico de Evolução (Messari)</a>
                      )}
                      {grafico.titulo.toLowerCase().includes('distribuição') && (
                        <a href="https://dune.com/queries/3076812/5168764" target="_blank" rel="noopener noreferrer" className="text-cyan-300 underline">Ver gráfico de Distribuição (Dune Analytics)</a>
                      )}
                      {grafico.titulo.toLowerCase().includes('região') && (
                        <a href="https://www.messari.io/report/state-of-crypto-regulation" target="_blank" rel="noopener noreferrer" className="text-cyan-300 underline">Ver gráfico por Região (Messari)</a>
                      )}
                      {grafico.titulo.toLowerCase().includes('setor') && (
                        <a href="https://www.messari.io/report/state-of-crypto-regulation" target="_blank" rel="noopener noreferrer" className="text-cyan-300 underline">Ver gráfico por Setor (Messari)</a>
                      )}
                      {!grafico.titulo.toLowerCase().includes('evolução') && !grafico.titulo.toLowerCase().includes('distribuição') && !grafico.titulo.toLowerCase().includes('região') && !grafico.titulo.toLowerCase().includes('setor') && (
                        <span className="text-gray-400">Gráfico {grafico.tipo} - {grafico.dados}</span>
                      )}
                    </div>
                    {/* Referências */}
                    <div className="mt-2">
                      <span className="text-xs text-gray-400">Fonte: </span>
                      {grafico.titulo.toLowerCase().includes('evolução') && (
                        <a href="https://www.messari.io/report/state-of-crypto-regulation" target="_blank" rel="noopener noreferrer" className="text-xs text-cyan-300 underline">Messari</a>
                      )}
                      {grafico.titulo.toLowerCase().includes('distribuição') && (
                        <a href="https://dune.com/queries/3076812/5168764" target="_blank" rel="noopener noreferrer" className="text-xs text-cyan-300 underline">Dune Analytics</a>
                      )}
                      {grafico.titulo.toLowerCase().includes('região') && (
                        <a href="https://www.messari.io/report/state-of-crypto-regulation" target="_blank" rel="noopener noreferrer" className="text-xs text-cyan-300 underline">Messari</a>
                      )}
                      {grafico.titulo.toLowerCase().includes('setor') && (
                        <a href="https://www.messari.io/report/state-of-crypto-regulation" target="_blank" rel="noopener noreferrer" className="text-xs text-cyan-300 underline">Messari</a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 p-4 bg-gray-800/50 rounded-lg border border-cyan-400/30">
          <h2 className="text-xl font-bold text-cyan-300 mb-4">Insights de Regulamentação</h2>
          <ul className="space-y-3 text-gray-300">
            <li>• 85 países regulados com crescimento de 5</li>
            <li>• 120 leis aprovadas com crescimento de 8</li>
            <li>• 250 licenças emitidas com crescimento de 12</li>
            <li>• Europa lidera com 30 países regulados</li>
            <li>• Exchanges lideram com 150 licenças</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
} 