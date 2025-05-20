import React from 'react';
import Layout from '../../../components/Layout';

const analises = [
  {
    titulo: 'Métricas de Padrões',
    descricao: 'Análise dos padrões técnicos',
    metricas: [
      {
        nome: 'Padrões Ativos',
        valor: '8',
        variacao: '+2',
        periodo: '24h',
        interpretacao: 'Alto'
      },
      {
        nome: 'Confirmação',
        valor: '85%',
        variacao: '+5%',
        periodo: '24h',
        interpretacao: 'Alta'
      },
      {
        nome: 'Alvos',
        valor: '$52,000',
        variacao: '+2.5%',
        periodo: '24h',
        interpretacao: 'Alto'
      }
    ],
    graficos: [
      {
        titulo: 'Padrões por Tipo',
        tipo: 'bar',
        dados: 'dados_padroes_tipo'
      },
      {
        titulo: 'Evolução dos Padrões',
        tipo: 'line',
        dados: 'dados_evolucao_padroes'
      }
    ]
  },
  {
    titulo: 'Métricas de Formações',
    descricao: 'Análise das formações de preço',
    metricas: [
      {
        nome: 'Formações Ativas',
        valor: '5',
        variacao: '+1',
        periodo: '24h',
        interpretacao: 'Alto'
      },
      {
        nome: 'Confirmação',
        valor: '75%',
        variacao: '+3%',
        periodo: '24h',
        interpretacao: 'Alta'
      },
      {
        nome: 'Alvos',
        valor: '$50,500',
        variacao: '+2.2%',
        periodo: '24h',
        interpretacao: 'Alto'
      }
    ],
    graficos: [
      {
        titulo: 'Formações por Tipo',
        tipo: 'bar',
        dados: 'dados_formacoes_tipo'
      },
      {
        titulo: 'Evolução das Formações',
        tipo: 'line',
        dados: 'dados_evolucao_formacoes'
      }
    ]
  },
  {
    titulo: 'Métricas de Mercado',
    descricao: 'Análise dos padrões por setor',
    metricas: [
      {
        nome: 'Padrões DeFi',
        valor: '3',
        variacao: '+1',
        periodo: '24h',
        interpretacao: 'Alto'
      },
      {
        nome: 'Padrões NFTs',
        valor: '2',
        variacao: '+1',
        periodo: '24h',
        interpretacao: 'Médio'
      },
      {
        nome: 'Padrões Layer 1',
        valor: '3',
        variacao: '+1',
        periodo: '24h',
        interpretacao: 'Alto'
      }
    ],
    graficos: [
      {
        titulo: 'Padrões por Setor',
        tipo: 'bar',
        dados: 'dados_padroes_setor'
      },
      {
        titulo: 'Evolução por Setor',
        tipo: 'line',
        dados: 'dados_evolucao_setor'
      }
    ]
  }
];

export default function Padroes() {
  return (
    <Layout>
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-cyan-400 mb-8">Análise de Padrões</h1>
        
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
          <h2 className="text-xl font-bold text-cyan-300 mb-4">Insights de Padrões</h2>
          <ul className="space-y-3 text-gray-300">
            <li>• 8 padrões técnicos ativos com 85% de confirmação</li>
            <li>• 5 formações de preço ativas com 75% de confirmação</li>
            <li>• Alvos principais em $52,000 e $50,500</li>
            <li>• Setores DeFi e Layer 1 com mais padrões ativos</li>
            <li>• Tendência de alta nos padrões identificados</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
} 