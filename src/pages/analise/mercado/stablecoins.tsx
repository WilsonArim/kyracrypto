import React from 'react';
import Layout from '../../../components/Layout';

const analises = [
  {
    titulo: 'Métricas de Volume',
    descricao: 'Análise do volume de negociação de stablecoins',
    metricas: [
      {
        nome: 'Volume 24h',
        valor: '$85.2B',
        variacao: '+12.3%',
        periodo: '24h',
        interpretacao: 'Alta'
      },
      {
        nome: 'Market Cap',
        valor: '$145.5B',
        variacao: '+2.5%',
        periodo: '24h',
        interpretacao: 'Alta'
      },
      {
        nome: 'Transações 24h',
        valor: '2.5M',
        variacao: '+8.2%',
        periodo: '24h',
        interpretacao: 'Alta'
      }
    ],
    graficos: [
      {
        titulo: 'Volume por Stablecoin',
        tipo: 'bar',
        dados: 'dados_volume_stablecoins'
      },
      {
        titulo: 'Distribuição de Market Cap',
        tipo: 'pie',
        dados: 'dados_marketcap'
      }
    ]
  },
  {
    titulo: 'Métricas de Peg',
    descricao: 'Análise da estabilidade das stablecoins',
    metricas: [
      {
        nome: 'USDT Peg',
        valor: '$1.00',
        variacao: '0.00%',
        periodo: '24h',
        interpretacao: 'Estável'
      },
      {
        nome: 'USDC Peg',
        valor: '$1.00',
        variacao: '0.00%',
        periodo: '24h',
        interpretacao: 'Estável'
      },
      {
        nome: 'DAI Peg',
        valor: '$1.00',
        variacao: '0.00%',
        periodo: '24h',
        interpretacao: 'Estável'
      }
    ],
    graficos: [
      {
        titulo: 'Evolução do Peg',
        tipo: 'line',
        dados: 'dados_peg'
      },
      {
        titulo: 'Volatilidade do Peg',
        tipo: 'line',
        dados: 'dados_volatilidade_peg'
      }
    ]
  },
  {
    titulo: 'Métricas de Reservas',
    descricao: 'Análise das reservas das stablecoins',
    metricas: [
      {
        nome: 'Reservas USDT',
        valor: '$85.2B',
        variacao: '+2.3%',
        periodo: '24h',
        interpretacao: 'Alta'
      },
      {
        nome: 'Reservas USDC',
        valor: '$45.5B',
        variacao: '+1.8%',
        periodo: '24h',
        interpretacao: 'Alta'
      },
      {
        nome: 'Reservas DAI',
        valor: '$5.2B',
        variacao: '+3.2%',
        periodo: '24h',
        interpretacao: 'Alta'
      }
    ],
    graficos: [
      {
        titulo: 'Composição das Reservas',
        tipo: 'pie',
        dados: 'dados_reservas'
      },
      {
        titulo: 'Evolução das Reservas',
        tipo: 'line',
        dados: 'dados_evolucao_reservas'
      }
    ]
  }
];

export default function Stablecoins() {
  return (
    <Layout>
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-cyan-400 mb-8">Análise de Stablecoins</h1>
        
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
                    <div className="aspect-video bg-gray-800/50 rounded-lg flex items-center justify-center">
                      <span className="text-gray-400">Grágico {grafico.tipo} - {grafico.dados}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 p-4 bg-gray-800/50 rounded-lg border border-cyan-400/30">
          <h2 className="text-xl font-bold text-cyan-300 mb-4">Insights de Stablecoins</h2>
          <ul className="space-y-3 text-gray-300">
            <li>• Volume total atinge $85.2B com crescimento de 12.3%</li>
            <li>• Market cap total em $145.5B com alta de 2.5%</li>
            <li>• Todas as principais stablecoins mantêm peg estável em $1.00</li>
            <li>• Reservas totais aumentam para $136.2B</li>
            <li>• Número de transações cresce para 2.5M em 24h</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
} 