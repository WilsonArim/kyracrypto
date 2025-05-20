import React from 'react';
import Layout from '../../../components/Layout';

const analises = [
  {
    titulo: 'Métricas de Correlação',
    descricao: 'Análise da correlação entre criptomoedas',
    metricas: [
      {
        nome: 'Correlação BTC/ETH',
        valor: '0.85',
        variacao: '+0.05',
        periodo: '30d',
        interpretacao: 'Alta'
      },
      {
        nome: 'Correlação BTC/Altcoins',
        valor: '0.75',
        variacao: '+0.02',
        periodo: '30d',
        interpretacao: 'Alta'
      },
      {
        nome: 'Correlação ETH/Altcoins',
        valor: '0.65',
        variacao: '+0.03',
        periodo: '30d',
        interpretacao: 'Média'
      }
    ],
    graficos: [
      {
        titulo: 'Matriz de Correlação',
        tipo: 'heatmap',
        dados: 'dados_correlacao'
      },
      {
        titulo: 'Evolução da Correlação',
        tipo: 'line',
        dados: 'dados_evolucao_correlacao'
      }
    ]
  },
  {
    titulo: 'Métricas de Mercados Tradicionais',
    descricao: 'Análise da correlação com mercados tradicionais',
    metricas: [
      {
        nome: 'Correlação S&P 500',
        valor: '0.45',
        variacao: '+0.05',
        periodo: '30d',
        interpretacao: 'Média'
      },
      {
        nome: 'Correlação Ouro',
        valor: '0.35',
        variacao: '+0.02',
        periodo: '30d',
        interpretacao: 'Baixa'
      },
      {
        nome: 'Correlação Dólar',
        valor: '-0.25',
        variacao: '-0.03',
        periodo: '30d',
        interpretacao: 'Inversa'
      }
    ],
    graficos: [
      {
        titulo: 'Correlação por Ativo',
        tipo: 'bar',
        dados: 'dados_correlacao_ativos'
      },
      {
        titulo: 'Evolução da Correlação',
        tipo: 'line',
        dados: 'dados_evolucao_correlacao_ativos'
      }
    ]
  },
  {
    titulo: 'Métricas de Setores',
    descricao: 'Análise da correlação entre setores',
    metricas: [
      {
        nome: 'Correlação DeFi',
        valor: '0.85',
        variacao: '+0.05',
        periodo: '30d',
        interpretacao: 'Alta'
      },
      {
        nome: 'Correlação NFTs',
        valor: '0.65',
        variacao: '+0.02',
        periodo: '30d',
        interpretacao: 'Média'
      },
      {
        nome: 'Correlação Layer 1',
        valor: '0.75',
        variacao: '+0.03',
        periodo: '30d',
        interpretacao: 'Alta'
      }
    ],
    graficos: [
      {
        titulo: 'Correlação por Setor',
        tipo: 'bar',
        dados: 'dados_correlacao_setores'
      },
      {
        titulo: 'Evolução da Correlação',
        tipo: 'line',
        dados: 'dados_evolucao_correlacao_setores'
      }
    ]
  }
];

export default function Correlacao() {
  return (
    <Layout>
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-cyan-400 mb-8">Análise de Correlação</h1>
        
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
          <h2 className="text-xl font-bold text-cyan-300 mb-4">Insights de Correlação</h2>
          <ul className="space-y-3 text-gray-300">
            <li>• Correlação BTC/ETH atinge 0.85 com tendência de alta</li>
            <li>• Correlação com S&P 500 aumenta para 0.45</li>
            <li>• Correlação inversa com dólar em -0.25</li>
            <li>• Setor DeFi mantém alta correlação de 0.85</li>
            <li>• Correlação entre altcoins aumenta para 0.75</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
} 