import React from 'react';
import Layout from '../../../components/Layout';

const metricas = [
  { nome: 'APY Médio', valor: '6.2%', variacao: '+0.3%', periodo: '7d', interpretacao: 'Alto' },
  { nome: 'Tokens Staked', valor: '8M', variacao: '+1.5%', periodo: '7d', interpretacao: 'Alto' },
  { nome: 'Validadores', valor: '2K', variacao: '+0.5%', periodo: '7d', interpretacao: 'Alto' }
];

const graficos = [
  { titulo: 'Staking Solana', link: 'https://www.stakingrewards.com/', fonte: 'Staking Rewards' }
];

export default function StakeSol() {
  return (
    <Layout>
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-cyan-400 mb-8">Stake Solana</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {metricas.map((m) => (
            <div key={m.nome} className="bg-gray-700/50 rounded-lg p-4">
              <h3 className="text-sm text-gray-400 mb-1">{m.nome}</h3>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-cyan-300">{m.valor}</span>
                <span className={`text-sm ${m.variacao.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>{m.variacao}</span>
              </div>
              <div className="flex justify-between items-center mt-1">
                <span className="text-xs text-gray-500">{m.periodo}</span>
                <span className="text-xs text-cyan-300">{m.interpretacao}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {graficos.map((g) => (
            <div key={g.titulo} className="bg-gray-700/50 rounded-lg p-4">
              <h3 className="text-lg font-medium text-cyan-200 mb-4">{g.titulo}</h3>
              <div className="aspect-video bg-gray-800/50 rounded-lg flex items-center justify-center mb-2">
                <a href={g.link} target="_blank" rel="noopener noreferrer" className="text-cyan-300 underline">Ver gráfico</a>
              </div>
              <div className="mt-2 text-xs text-gray-400">Fonte: <a href={g.link} target="_blank" rel="noopener noreferrer" className="text-xs text-cyan-300 underline">{g.fonte}</a></div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
} 