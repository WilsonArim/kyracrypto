import React from 'react';
import Layout from '../../../components/Layout';

const analises = [
  {
    titulo: 'Métricas de Rede',
    descricao: 'Análise das métricas de rede Bitcoin',
    metricas: [
      {
        nome: 'Hash Rate',
        valor: '450 EH/s',
        variacao: '+5.3%',
        periodo: '24h',
        interpretacao: 'Alta'
      },
      {
        nome: 'Dificuldade',
        valor: '45.2T',
        variacao: '+2.5%',
        periodo: '24h',
        interpretacao: 'Alta'
      },
      {
        nome: 'Taxa Média',
        valor: '12.5 sat/vB',
        variacao: '-1.2%',
        periodo: '24h',
        interpretacao: 'Baixa'
      }
    ],
    graficos: [
      {
        titulo: 'Evolução do Hash Rate',
        tipo: 'line',
        dados: 'dados_hashrate'
      },
      {
        titulo: 'Distribuição de Taxas',
        tipo: 'bar',
        dados: 'dados_taxas'
      }
    ]
  },
  {
    titulo: 'Métricas de Mineração',
    descricao: 'Análise da mineração de Bitcoin',
    metricas: [
      {
        nome: 'Miners Revenue',
        valor: '$45.2M',
        variacao: '+8.5%',
        periodo: '24h',
        interpretacao: 'Alta'
      },
      {
        nome: 'Block Reward',
        valor: '6.25 BTC',
        variacao: '0%',
        periodo: '24h',
        interpretacao: 'Estável'
      },
      {
        nome: 'Taxa por Bloco',
        valor: '0.85 BTC',
        variacao: '+2.3%',
        periodo: '24h',
        interpretacao: 'Alta'
      }
    ],
    graficos: [
      {
        titulo: 'Receita por Fonte',
        tipo: 'pie',
        dados: 'dados_receita'
      },
      {
        titulo: 'Evolução da Receita',
        tipo: 'line',
        dados: 'dados_evolucao_receita'
      }
    ]
  },
  {
    titulo: 'Métricas de Atividade',
    descricao: 'Análise da atividade na rede',
    metricas: [
      {
        nome: 'Transações 24h',
        valor: '350K',
        variacao: '+5.2%',
        periodo: '24h',
        interpretacao: 'Alta'
      },
      {
        nome: 'Endereços Ativos',
        valor: '850K',
        variacao: '+3.5%',
        periodo: '24h',
        interpretacao: 'Alta'
      },
      {
        nome: 'UTXOs Criados',
        valor: '1.2M',
        variacao: '+2.8%',
        periodo: '24h',
        interpretacao: 'Alta'
      }
    ],
    graficos: [
      {
        titulo: 'Atividade por Hora',
        tipo: 'line',
        dados: 'dados_atividade'
      },
      {
        titulo: 'Distribuição de Valores',
        tipo: 'bar',
        dados: 'dados_valores'
      }
    ]
  }
];

export default function OnChain() {
  return (
    <Layout>
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-cyan-400 mb-8">Análise On-Chain</h1>
        
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
          <h2 className="text-xl font-bold text-cyan-300 mb-4">Insights On-Chain</h2>
          <ul className="space-y-3 text-gray-300">
            <li>• Hash rate atinge 450 EH/s com crescimento de 5.3%</li>
            <li>• Receita dos mineradores em $45.2M com alta de 8.5%</li>
            <li>• Número de transações aumenta para 350K em 24h</li>
            <li>• Taxa média cai para 12.5 sat/vB</li>
            <li>• Endereços ativos crescem para 850K</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
} 