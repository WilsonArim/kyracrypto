import React from 'react';
import Layout from '../components/Layout';
import InfoCard from '../components/InfoCard';

const cards = [
  {
    title: 'Educação',
    description: 'Aprende os conceitos essenciais de cripto com vídeos educativos em português.',
    slides: [],
    link: '/iniciante/educacao',
    button: true
  },
  {
    title: 'Explicando a barra de navegação',
    description: 'Entende para que serve cada item do menu principal do site KyraCrypto.',
    slides: [],
    link: '/iniciante/barra-navegacao'
  }
];

export default function Iniciante() {
  return (
    <Layout>
      <div className="flex flex-col items-center min-h-screen pt-8 md:pt-12">
        <h1 className="text-4xl font-bold text-white mb-10">Guia para Iniciantes</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
          {cards.map((card, idx) => (
            card.button ? (
              <div key={idx} className="flex flex-col items-center justify-center bg-gray-900/80 rounded-xl p-8 border border-cyan-400/30">
                <h2 className="text-2xl font-bold text-cyan-400 mb-4">{card.title}</h2>
                <p className="text-white mb-6 text-center">{card.description}</p>
                <a href={card.link} className="px-6 py-2 bg-cyan-400 text-gray-900 font-bold rounded-lg shadow hover:bg-cyan-300 transition">Acessar</a>
              </div>
            ) : (
              card.link ? (
                <a key={idx} href={card.link} className="hover:scale-105 transition-transform">
                  <InfoCard {...card} />
                </a>
              ) : (
                <InfoCard key={idx} {...card} />
              )
            )
          ))}
        </div>
      </div>
    </Layout>
  );
} 