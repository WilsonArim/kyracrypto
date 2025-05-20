import React from 'react';
import Layout from '../../../components/Layout';

const analises = [
  {
    titulo: 'Métricas de Níveis',
    descricao: 'Análise dos níveis de suporte e resistência',
    metricas: [
      {
        nome: 'Suporte Principal',
        valor: '$45,000',
        variacao: '+2.3%',
        periodo: '24h',
        interpretacao: 'Forte'
      },
      {
        nome: 'Resistência Principal',
        valor: '$48,500',
        variacao: '+1.8%',
        periodo: '24h',
        interpretacao: 'Forte'
      },
      {
        nome: 'Distância Atual',
        valor: '$1,500',
        variacao: '-0.5%',
        periodo: '24h',
        interpretacao: 'Média'
      }
    ],
    graficos: [
      {
        titulo: 'Níveis de Preço',
        tipo: 'line',
        dados: 'dados_niveis_preco'
      },
      {
        titulo: 'Força dos Níveis',
        tipo: 'bar',
        dados: 'dados_forca_niveis'
      }
    ]
  },
  {
    titulo: 'Métricas de Força',
    descricao: 'Análise da força dos níveis',
    metricas: [
      {
        nome: 'Força Suporte',
        valor: '85%',
        variacao: '+5%',
        periodo: '24h',
        interpretacao: 'Alta'
      },
      {
        nome: 'Força Resistência',
        valor: '75%',
        variacao: '+3%',
        periodo: '24h',
        interpretacao: 'Alta'
      },
      {
        nome: 'Testes Realizados',
        valor: '12',
        variacao: '+2',
        periodo: '24h',
        interpretacao: 'Alto'
      }
    ],
    graficos: [
      {
        titulo: 'Evolução da Força',
        tipo: 'line',
        dados: 'dados_evolucao_forca'
      },
      {
        titulo: 'Histórico de Testes',
        tipo: 'scatter',
        dados: 'dados_historico_testes'
      }
    ]
  },
  {
    titulo: 'Métricas de Mercado',
    descricao: 'Análise dos níveis por setor',
    metricas: [
      {
        nome: 'Suporte DeFi',
        valor: '$45,500',
        variacao: '+2.5%',
        periodo: '24h',
        interpretacao: 'Forte'
      },
      {
        nome: 'Suporte NFTs',
        valor: '$44,800',
        variacao: '+2.1%',
        periodo: '24h',
        interpretacao: 'Forte'
      },
      {
        nome: 'Suporte Layer 1',
        valor: '$45,200',
        variacao: '+2.3%',
        periodo: '24h',
        interpretacao: 'Forte'
      }
    ],
    graficos: [
      {
        titulo: 'Níveis por Setor',
        tipo: 'bar',
        dados: 'dados_niveis_setor'
      },
      {
        titulo: 'Evolução por Setor',
        tipo: 'line',
        dados: 'dados_evolucao_setor'
      }
    ]
  }
];

export default function SuporteResistencia() {
  return (
    <Layout>
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-cyan-400 mb-8">Análise de Suporte e Resistência</h1>
        
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
          <h2 className="text-xl font-bold text-cyan-300 mb-4">Insights de Suporte e Resistência</h2>
          <ul className="space-y-3 text-gray-300">
            <li>• Suporte principal em $45,000 com força de 85%</li>
            <li>• Resistência principal em $48,500 com força de 75%</li>
            <li>• 12 testes realizados nas últimas 24h</li>
            <li>• Setores mantêm níveis de suporte similares</li>
            <li>• Distância atual de $1,500 entre níveis</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
} 