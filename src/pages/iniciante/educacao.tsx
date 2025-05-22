import React from 'react';
import Layout from '../../components/Layout';

const videos = [
  {
    title: 'Por que o Bitcoin importa?',
    youtube: 'https://www.youtube.com/embed/x6EepO1c84Q',
    bullets: [
      'Como a inflação corrói o poder de compra (Real e Dólar)',
      'Por que o Bitcoin surge como alternativa descentralizada',
      'Importância da auto custódia (evitar exchanges centralizadas)',
      'Demonstração de como criar uma carteira Phantom'
    ]
  },
  {
    title: 'O que é Blockchain e Criptomoedas?',
    youtube: 'https://www.youtube.com/embed/zsp-sRsUDFI',
    bullets: [
      'Diferença entre moeda estatal e criptomoedas',
      'O que é blockchain e por que é disruptivo',
      'Papel da confiança, transparência e segurança na tecnologia'
    ]
  },
  {
    title: 'Para que serve o Bitcoin?',
    youtube: 'https://www.youtube.com/embed/YGULFi2Sb7Y',
    bullets: [
      'A missão do Bitcoin como proteção contra manipulação monetária',
      'Reserva de valor, soberania financeira e descentralização',
      'Reflexão sobre liberdade financeira em cenários de censura ou crise'
    ]
  }
];

export default function Educacao() {
  return (
    <Layout>
      <div className="flex flex-col items-center min-h-screen pt-8 md:pt-12">
        <h1 className="text-4xl font-bold text-white mb-10">Educação em Cripto</h1>
        <p className="text-gray-300 mb-10 max-w-2xl text-center">
          Seleção de vídeos educativos do canal de Rogério Menezes, com explicações acessíveis para iniciantes. Apesar do conteúdo ser feito no Brasil, os conceitos são universais e aplicam-se também ao público português.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl px-4">
          {videos.map((video, idx) => (
            <section key={idx} className="bg-gray-800/80 rounded-xl shadow-lg p-6 flex flex-col items-center">
              <h2 className="text-xl font-bold text-cyan-300 mb-4 flex items-center gap-2">
                <span role="img" aria-label="video">▶️</span> {video.title}
              </h2>
              <div className="w-full aspect-video mb-4 rounded-lg overflow-hidden shadow">
                <iframe
                  src={video.youtube}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              </div>
              <ul className="text-gray-200 mb-4 list-disc pl-5 space-y-1">
                {video.bullets.map((b, i) => (
                  <li key={i} className="font-medium">{b}</li>
                ))}
              </ul>
              <p className="text-xs text-cyan-200 bg-gray-900/60 rounded px-2 py-1 mt-auto">
                🎓 Este conteúdo é de um educador brasileiro, mas os conceitos abordados são universais e aplicam-se também à realidade portuguesa. Recomenda-se para iniciantes.
              </p>
            </section>
          ))}
        </div>
      </div>
    </Layout>
  );
} 