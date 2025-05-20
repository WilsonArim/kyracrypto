import React from 'react';
import Layout from '../../../components/Layout';

const analises = [
  {
    titulo: 'Métricas de Hash Rate',
    descricao: 'Análise do hash rate dos mineradores',
    metricas: [
      {
        nome: 'Hash Rate Total',
        valor: '450 EH/s',
        variacao: '+5.3%',
        periodo: '24h',
        interpretacao: 'Alta'
      },
      {
        nome: 'Hash Rate ETH',
        valor: '850 TH/s',
        variacao: '+2.5%',
        periodo: '24h',
        interpretacao: 'Alta'
      },
      {
        nome: 'Hash Rate BCH',
        valor: '2.5 EH/s',
        variacao: '+1.2%',
        periodo: '24h',
        interpretacao: 'Alta'
      }
    ],
    graficos: [
      {
        titulo: 'Hash Rate por Moeda',
        tipo: 'bar',
        dados: 'dados_hashrate_moeda'
      },
      {
        titulo: 'Evolução do Hash Rate',
        tipo: 'line',
        dados: 'dados_evolucao_hashrate'
      }
    ]
  },
  {
    titulo: 'Métricas de Receita',
    descricao: 'Análise da receita dos mineradores',
    metricas: [
      {
        nome: 'Receita Total',
        valor: '$45.2M',
        variacao: '+8.5%',
        periodo: '24h',
        interpretacao: 'Alta'
      },
      {
        nome: 'Receita BTC',
        valor: '$35.5M',
        variacao: '+5.2%',
        periodo: '24h',
        interpretacao: 'Alta'
      },
      {
        nome: 'Receita ETH',
        valor: '$8.5M',
        variacao: '+3.2%',
        periodo: '24h',
        interpretacao: 'Alta'
      }
    ],
    graficos: [
      {
        titulo: 'Receita por Fonte',
        tipo: 'pie',
        dados: 'dados_receita_fonte'
      },
      {
        titulo: 'Evolução da Receita',
        tipo: 'line',
        dados: 'dados_evolucao_receita'
      }
    ]
  },
  {
    titulo: 'Métricas de Eficiência',
    descricao: 'Análise da eficiência dos mineradores',
    metricas: [
      {
        nome: 'Custo por TH/s',
        valor: '$0.05',
        variacao: '-2.3%',
        periodo: '24h',
        interpretacao: 'Baixo'
      },
      {
        nome: 'Eficiência Energética',
        valor: '35 J/TH',
        variacao: '-1.5%',
        periodo: '24h',
        interpretacao: 'Alta'
      },
      {
        nome: 'Margem de Lucro',
        valor: '45%',
        variacao: '+2.5%',
        periodo: '24h',
        interpretacao: 'Alta'
      }
    ],
    graficos: [
      {
        titulo: 'Custo por Região',
        tipo: 'bar',
        dados: 'dados_custo_regiao'
      },
      {
        titulo: 'Evolução da Eficiência',
        tipo: 'line',
        dados: 'dados_evolucao_eficiencia'
      }
    ]
  }
];

export default function Mineradores() {
  return (
    <Layout>
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-cyan-400 mb-8">Análise de Mineradores</h1>
        
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
          <h2 className="text-xl font-bold text-cyan-300 mb-4">Insights de Mineradores</h2>
          <ul className="space-y-3 text-gray-300">
            <li>• Hash rate total atinge 450 EH/s com crescimento de 5.3%</li>
            <li>• Receita total em $45.2M com alta de 8.5%</li>
            <li>• Custo por TH/s cai para $0.05</li>
            <li>• Eficiência energética melhora para 35 J/TH</li>
            <li>• Margem de lucro aumenta para 45%</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
} 