import React from 'react';
import Layout from '../../../components/Layout';

const analises = [
  {
    titulo: 'Métricas de Rede',
    descricao: 'Análise da saúde e atividade da rede Bitcoin',
    metricas: [
      {
        nome: 'Hash Rate',
        valor: '650 EH/s',
        variacao: '+2.5%',
        periodo: '24h',
        interpretacao: 'Alta'
      },
      {
        nome: 'Dificuldade',
        valor: '75.32T',
        variacao: '+3.2%',
        periodo: '14d',
        interpretacao: 'Alta'
      },
      {
        nome: 'Taxa Média',
        valor: '$2.50',
        variacao: '-15%',
        periodo: '24h',
        interpretacao: 'Baixa'
      }
    ],
    graficos: [
      {
        titulo: 'Hash Rate Histórico',
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
    titulo: 'Atividade de Endereços',
    descricao: 'Análise do comportamento dos endereços na rede',
    metricas: [
      {
        nome: 'Endereços Ativos',
        valor: '1.2M',
        variacao: '+5.3%',
        periodo: '24h',
        interpretacao: 'Alta'
      },
      {
        nome: 'Novos Endereços',
        valor: '450K',
        variacao: '+8.2%',
        periodo: '24h',
        interpretacao: 'Alta'
      },
      {
        nome: 'Zero Balance',
        valor: '2.8M',
        variacao: '+1.2%',
        periodo: '24h',
        interpretacao: 'Normal'
      }
    ],
    graficos: [
      {
        titulo: 'Atividade de Endereços',
        tipo: 'line',
        dados: 'dados_enderecos'
      },
      {
        titulo: 'Distribuição por Tamanho',
        tipo: 'pie',
        dados: 'dados_distribuicao_enderecos'
      }
    ]
  },
  {
    titulo: 'Métricas de Liquidez',
    descricao: 'Análise da liquidez e movimentação de capital',
    metricas: [
      {
        nome: 'Volume On-Chain',
        valor: '$12.5B',
        variacao: '+15.3%',
        periodo: '24h',
        interpretacao: 'Alta'
      },
      {
        nome: 'Exchange Flow',
        valor: '-$850M',
        variacao: '-12.5%',
        periodo: '24h',
        interpretacao: 'Positivo'
      },
      {
        nome: 'Liquidez DEX',
        valor: '$2.3B',
        variacao: '+5.2%',
        periodo: '24h',
        interpretacao: 'Alta'
      }
    ],
    graficos: [
      {
        titulo: 'Fluxo de Exchanges',
        tipo: 'line',
        dados: 'dados_exchange_flow'
      },
      {
        titulo: 'Distribuição de Liquidez',
        tipo: 'pie',
        dados: 'dados_liquidez'
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
            <li>• Hash rate em alta histórica indica forte segurança da rede</li>
            <li>• Aumento significativo em endereços ativos sugere maior adoção</li>
            <li>• Fluxo negativo de exchanges indica acúmulo de Bitcoin</li>
            <li>• Taxas de transação em queda apesar do aumento de atividade</li>
            <li>• Liquidez em DEXs aumenta, mostrando maior descentralização</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
} 