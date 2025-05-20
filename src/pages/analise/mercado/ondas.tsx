import React from 'react';
import Layout from '../../../components/Layout';

const analises = [
  {
    titulo: 'Métricas de Ondas',
    descricao: 'Análise de ondas de Elliott',
    metricas: [
      {
        nome: 'Onda',
        valor: '3',
        variacao: 'Forte',
        periodo: '30d',
        interpretacao: 'Bullish'
      },
      {
        nome: 'Duração',
        valor: '15 dias',
        variacao: '+2',
        periodo: '30d',
        interpretacao: 'Normal'
      },
      {
        nome: 'Força',
        valor: '85%',
        variacao: '+5%',
        periodo: '30d',
        interpretacao: 'Alta'
      }
    ],
    graficos: [
      {
        titulo: 'Evolução das Ondas',
        tipo: 'line',
        dados: 'dados_evolucao_ondas'
      },
      {
        titulo: 'Força das Ondas',
        tipo: 'bar',
        dados: 'dados_forca_ondas'
      }
    ]
  },
  {
    titulo: 'Métricas de Setores',
    descricao: 'Análise de ondas por setor',
    metricas: [
      {
        nome: 'DeFi',
        valor: '3',
        variacao: 'Muito Forte',
        periodo: '30d',
        interpretacao: 'Bullish'
      },
      {
        nome: 'NFTs',
        valor: '3',
        variacao: 'Forte',
        periodo: '30d',
        interpretacao: 'Bullish'
      },
      {
        nome: 'Layer 1',
        valor: '3',
        variacao: 'Forte',
        periodo: '30d',
        interpretacao: 'Bullish'
      }
    ],
    graficos: [
      {
        titulo: 'Ondas por Setor',
        tipo: 'bar',
        dados: 'dados_ondas_setor'
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
    descricao: 'Análise de ondas comparativas',
    metricas: [
      {
        nome: 'S&P 500',
        valor: '3',
        variacao: 'Média',
        periodo: '30d',
        interpretacao: 'Bullish'
      },
      {
        nome: 'Ouro',
        valor: '2',
        variacao: 'Fraca',
        periodo: '30d',
        interpretacao: 'Bullish'
      },
      {
        nome: 'Dólar',
        valor: '4',
        variacao: 'Forte',
        periodo: '30d',
        interpretacao: 'Bearish'
      }
    ],
    graficos: [
      {
        titulo: 'Ondas Comparativas',
        tipo: 'bar',
        dados: 'dados_ondas_comparativas'
      },
      {
        titulo: 'Evolução Comparativa',
        tipo: 'line',
        dados: 'dados_evolucao_comparativa'
      }
    ]
  }
];

export default function Ondas() {
  return (
    <Layout>
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-cyan-400 mb-8">Análise de Ondas</h1>
        
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
                      <span className={`text-sm ${metrica.variacao.includes('Forte') ? 'text-green-400' : 'text-yellow-400'}`}>
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
          <h2 className="text-xl font-bold text-cyan-300 mb-4">Insights de Ondas</h2>
          <ul className="space-y-3 text-gray-300">
            <li>• Onda 3 em andamento com força de 85%</li>
            <li>• Duração de 15 dias na onda atual</li>
            <li>• Setores DeFi e NFTs em onda 3 forte</li>
            <li>• Layer 1 em onda 3 forte</li>
            <li>• Dólar em onda 4 de correção</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
} 