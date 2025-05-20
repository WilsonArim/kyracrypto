import React from 'react';
import Layout from '../../../components/Layout';

const analises = [
  {
    titulo: 'Métricas de Stake',
    descricao: 'Análise de staking',
    metricas: [
      {
        nome: 'Total Staked',
        valor: '$120B',
        variacao: '+8%',
        periodo: '30d',
        interpretacao: 'Alto'
      },
      {
        nome: 'APY Médio',
        valor: '8%',
        variacao: '+1%',
        periodo: '30d',
        interpretacao: 'Médio'
      },
      {
        nome: 'Validadores',
        valor: '850K',
        variacao: '+5%',
        periodo: '30d',
        interpretacao: 'Alto'
      }
    ],
    graficos: [
      {
        titulo: 'Evolução do Stake',
        tipo: 'line',
        dados: 'dados_evolucao_stake'
      },
      {
        titulo: 'Distribuição',
        tipo: 'pie',
        dados: 'dados_distribuicao'
      }
    ]
  },
  {
    titulo: 'Métricas por Chain',
    descricao: 'Análise de stake por blockchain',
    metricas: [
      {
        nome: 'ETH',
        valor: '$45B',
        variacao: '+5%',
        periodo: '30d',
        interpretacao: 'Alto'
      },
      {
        nome: 'SOL',
        valor: '$25B',
        variacao: '+7%',
        periodo: '30d',
        interpretacao: 'Alto'
      },
      {
        nome: 'ADA',
        valor: '$15B',
        variacao: '+3%',
        periodo: '30d',
        interpretacao: 'Médio'
      }
    ],
    graficos: [
      {
        titulo: 'Stake por Chain',
        tipo: 'bar',
        dados: 'dados_stake_chain'
      },
      {
        titulo: 'APY por Chain',
        tipo: 'bar',
        dados: 'dados_apy_chain'
      }
    ]
  },
  {
    titulo: 'Métricas de Validadores',
    descricao: 'Análise de validadores',
    metricas: [
      {
        nome: 'Ativos',
        valor: '850K',
        variacao: '+5%',
        periodo: '30d',
        interpretacao: 'Alto'
      },
      {
        nome: 'Inativos',
        valor: '50K',
        variacao: '-2%',
        periodo: '30d',
        interpretacao: 'Baixo'
      },
      {
        nome: 'Slashing',
        valor: '0.1%',
        variacao: '-0.1%',
        periodo: '30d',
        interpretacao: 'Baixo'
      }
    ],
    graficos: [
      {
        titulo: 'Status dos Validadores',
        tipo: 'pie',
        dados: 'dados_status_validadores'
      },
      {
        titulo: 'Distribuição de Stake',
        tipo: 'bar',
        dados: 'dados_distribuicao_stake'
      }
    ]
  }
];

export default function Stake() {
  return (
    <Layout>
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-cyan-400 mb-8">Análise de Stake</h1>
        
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
                        <a href="https://www.stakingrewards.com/earn" target="_blank" rel="noopener noreferrer" className="text-cyan-300 underline">Ver gráfico de Evolução (Staking Rewards)</a>
                      )}
                      {grafico.titulo.toLowerCase().includes('distribuição') && (
                        <a href="https://dune.com/queries/3076812/5168760" target="_blank" rel="noopener noreferrer" className="text-cyan-300 underline">Ver gráfico de Distribuição (Dune Analytics)</a>
                      )}
                      {grafico.titulo.toLowerCase().includes('chain') && (
                        <a href="https://www.stakingrewards.com/earn" target="_blank" rel="noopener noreferrer" className="text-cyan-300 underline">Ver gráfico por Chain (Staking Rewards)</a>
                      )}
                      {grafico.titulo.toLowerCase().includes('apy') && (
                        <a href="https://www.stakingrewards.com/earn" target="_blank" rel="noopener noreferrer" className="text-cyan-300 underline">Ver gráfico de APY (Staking Rewards)</a>
                      )}
                      {grafico.titulo.toLowerCase().includes('status') && (
                        <a href="https://beaconcha.in/validators" target="_blank" rel="noopener noreferrer" className="text-cyan-300 underline">Ver Status dos Validadores (Beaconcha.in)</a>
                      )}
                      {!grafico.titulo.toLowerCase().includes('evolução') && !grafico.titulo.toLowerCase().includes('distribuição') && !grafico.titulo.toLowerCase().includes('chain') && !grafico.titulo.toLowerCase().includes('apy') && !grafico.titulo.toLowerCase().includes('status') && (
                        <span className="text-gray-400">Gráfico {grafico.tipo} - {grafico.dados}</span>
                      )}
                    </div>
                    {/* Referências */}
                    <div className="mt-2">
                      <span className="text-xs text-gray-400">Fonte: </span>
                      {grafico.titulo.toLowerCase().includes('evolução') && (
                        <a href="https://www.stakingrewards.com/earn" target="_blank" rel="noopener noreferrer" className="text-xs text-cyan-300 underline">Staking Rewards</a>
                      )}
                      {grafico.titulo.toLowerCase().includes('distribuição') && (
                        <a href="https://dune.com/queries/3076812/5168760" target="_blank" rel="noopener noreferrer" className="text-xs text-cyan-300 underline">Dune Analytics</a>
                      )}
                      {grafico.titulo.toLowerCase().includes('chain') && (
                        <a href="https://www.stakingrewards.com/earn" target="_blank" rel="noopener noreferrer" className="text-xs text-cyan-300 underline">Staking Rewards</a>
                      )}
                      {grafico.titulo.toLowerCase().includes('apy') && (
                        <a href="https://www.stakingrewards.com/earn" target="_blank" rel="noopener noreferrer" className="text-xs text-cyan-300 underline">Staking Rewards</a>
                      )}
                      {grafico.titulo.toLowerCase().includes('status') && (
                        <a href="https://beaconcha.in/validators" target="_blank" rel="noopener noreferrer" className="text-xs text-cyan-300 underline">Beaconcha.in</a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 p-4 bg-gray-800/50 rounded-lg border border-cyan-400/30">
          <h2 className="text-xl font-bold text-cyan-300 mb-4">Insights de Stake</h2>
          <ul className="space-y-3 text-gray-300">
            <li>• Total staked em $120B com crescimento de 8%</li>
            <li>• APY médio em 8% com crescimento de 1%</li>
            <li>• 850K validadores ativos com crescimento de 5%</li>
            <li>• ETH lidera com $45B em stake</li>
            <li>• Baixa taxa de slashing em 0.1%</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
} 