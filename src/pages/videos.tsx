import React from 'react';
import Layout from '../components/Layout';

export default function Videos() {
  return (
    <Layout>
      <div className="flex flex-col items-center min-h-screen pt-8 md:pt-12">
        <h1 className="text-4xl font-bold text-white mb-10">Vídeos Educativos</h1>
        <div className="w-full max-w-5xl px-4">
          <div className="card-glow flex flex-col items-center">
            <span className="text-white text-xl">Em breve</span>
          </div>
        </div>
      </div>
      <style jsx>{`
        .card-glow {
          background: transparent;
          border: 2px solid #3ecbff;
          border-radius: 18px;
          box-shadow: 0 0 16px 2px #3ecbff, 0 0 40px 4px #1a2b3c inset;
          padding: 32px 48px;
          margin: 0 0 18px 0;
        }
      `}</style>
    </Layout>
  );
} 