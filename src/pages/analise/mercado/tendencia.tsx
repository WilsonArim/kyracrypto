import React from 'react';
import Layout from '../../../components/Layout';

const analises = [
  {
    titulo: 'Métricas de Tendência',
    descricao: 'Análise da tendência do mercado',
    metricas: [
      {
        nome: 'Tendência 24h',
        valor: 'Alta',
        variacao: 'Forte',
        periodo: '24h',
        interpretacao: 'Bullish'
      },
      {
        nome: 'Tendência 7d',
        valor: 'Alta',
        variacao: 'Média',
        periodo: '7d',
        interpretacao: 'Bullish'
      },
      {
        nome: 'Tendência 30d',
        valor: 'Alta',
        variacao: 'Fraca',
        periodo: '30d',
        interpretacao: 'Bullish'
      }
    ],
    graficos: [
      {
        titulo: 'Evolução da Tendência',
        tipo: 'line',
        dados: 'dados_evolucao_tendencia'
      },
      {
        titulo: 'Força da Tendência',
        tipo: 'bar',
        dados: 'dados_forca_tendencia'
      }
    ]
  },
  {
    titulo: 'Métricas de Momentum',
    descricao: 'Análise do momentum do mercado',
    metricas: [
      {
        nome: 'RSI',
        valor: '65',
        variacao: '+5',
        periodo: '24h',
        interpretacao: 'Sobrecomprado'
      },
      {
        nome: 'MACD',
        valor: 'Positivo',
        variacao: 'Alta',
        periodo: '24h',
        interpretacao: 'Bullish'
      },
      {
        nome: 'Stochastic',
        valor: '75',
        variacao: '+8',
        periodo: '24h',
        interpretacao: 'Sobrecomprado'
      }
    ],
    graficos: [
      {
        titulo: 'Evolução dos Indicadores',
        tipo: 'line',
        dados: 'dados_evolucao_indicadores'
      },
      {
        titulo: 'Divergências',
        tipo: 'scatter',
        dados: 'dados_divergencias'
      }
    ]
  },
  {
    titulo: 'Métricas de Mercado',
    descricao: 'Análise da tendência por setor',
    metricas: [
      {
        nome: 'Tendência DeFi',
        valor: 'Alta',
        variacao: 'Forte',
        periodo: '24h',
        interpretacao: 'Bullish'
      },
      {
        nome: 'Tendência NFTs',
        valor: 'Alta',
        variacao: 'Média',
        periodo: '24h',
        interpretacao: 'Bullish'
      },
      {
        nome: 'Tendência Layer 1',
        valor: 'Alta',
        variacao: 'Forte',
        periodo: '24h',
        interpretacao: 'Bullish'
      }
    ],
    graficos: [
      {
        titulo: 'Tendência por Setor',
        tipo: 'bar',
        dados: 'dados_tendencia_setor'
      },
      {
        titulo: 'Evolução por Setor',
        tipo: 'line',
        dados: 'dados_evolucao_setor'
      }
    ]
  }
];

export default function Tendencia() {
  return (
    <Layout>
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-cyan-400 mb-8">Análise de Tendência</h1>
        
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
          <h2 className="text-xl font-bold text-cyan-300 mb-4">Insights de Tendência</h2>
          <ul className="space-y-3 text-gray-300">
            <li>• Tendência geral mantém força alta</li>
            <li>• RSI em 65 indica sobrecompra</li>
            <li>• MACD mantém sinal positivo</li>
            <li>• Setores DeFi e Layer 1 com tendência forte</li>
            <li>• Momentum geral mantém força</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
} 