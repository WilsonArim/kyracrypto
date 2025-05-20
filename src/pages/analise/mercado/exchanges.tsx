import React from 'react';
import Layout from '../../../components/Layout';

const analises = [
  {
    titulo: 'Métricas de Volume',
    descricao: 'Análise do volume de negociação em exchanges',
    metricas: [
      {
        nome: 'Volume 24h',
        valor: '$85.2B',
        variacao: '+12.3%',
        periodo: '24h',
        interpretacao: 'Alta'
      },
      {
        nome: 'Volume Spot',
        valor: '$45.5B',
        variacao: '+8.2%',
        periodo: '24h',
        interpretacao: 'Alta'
      },
      {
        nome: 'Volume DEX',
        valor: '$12.5B',
        variacao: '+5.3%',
        periodo: '24h',
        interpretacao: 'Alta'
      }
    ],
    graficos: [
      {
        titulo: 'Volume por Exchange',
        tipo: 'bar',
        dados: 'dados_volume_exchange'
      },
      {
        titulo: 'Evolução do Volume',
        tipo: 'line',
        dados: 'dados_evolucao_volume'
      }
    ]
  },
  {
    titulo: 'Métricas de Liquidez',
    descricao: 'Análise da liquidez em exchanges',
    metricas: [
      {
        nome: 'Liquidez Total',
        valor: '$45.2B',
        variacao: '+5.3%',
        periodo: '24h',
        interpretacao: 'Alta'
      },
      {
        nome: 'Spread Médio',
        valor: '0.05%',
        variacao: '-0.01%',
        periodo: '24h',
        interpretacao: 'Baixo'
      },
      {
        nome: 'Profundidade',
        valor: '$2.5M',
        variacao: '+15%',
        periodo: '24h',
        interpretacao: 'Alta'
      }
    ],
    graficos: [
      {
        titulo: 'Liquidez por Par',
        tipo: 'bar',
        dados: 'dados_liquidez_par'
      },
      {
        titulo: 'Evolução da Liquidez',
        tipo: 'line',
        dados: 'dados_evolucao_liquidez'
      }
    ]
  },
  {
    titulo: 'Métricas de Usuários',
    descricao: 'Análise da base de usuários',
    metricas: [
      {
        nome: 'Usuários Ativos',
        valor: '2.5M',
        variacao: '+5.2%',
        periodo: '30d',
        interpretacao: 'Alto'
      },
      {
        nome: 'Novos Usuários',
        valor: '150K',
        variacao: '+8.5%',
        periodo: '30d',
        interpretacao: 'Alto'
      },
      {
        nome: 'Retenção',
        valor: '85%',
        variacao: '+2.3%',
        periodo: '30d',
        interpretacao: 'Alta'
      }
    ],
    graficos: [
      {
        titulo: 'Crescimento de Usuários',
        tipo: 'line',
        dados: 'dados_usuarios'
      },
      {
        titulo: 'Distribuição por Região',
        tipo: 'pie',
        dados: 'dados_regiao'
      }
    ]
  }
];

export default function Exchanges() {
  return (
    <Layout>
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-cyan-400 mb-8">Análise de Exchanges</h1>
        
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
          <h2 className="text-xl font-bold text-cyan-300 mb-4">Insights de Exchanges</h2>
          <ul className="space-y-3 text-gray-300">
            <li>• Volume total atinge $85.2B com crescimento de 12.3%</li>
            <li>• Volume em DEXs aumenta para $12.5B</li>
            <li>• Liquidez total em $45.2B com alta de 5.3%</li>
            <li>• Número de usuários ativos cresce para 2.5M</li>
            <li>• Taxa de retenção atinge 85%</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
} 