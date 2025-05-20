import React, { useState } from 'react';
import Layout from '../components/Layout';

export default function DicasRapidas() {
  const [busca, setBusca] = useState('');

  return (
    <Layout>
      <div className="px-4 py-8">
        <div className="max-w-5xl mx-auto">
          {/* Barra de pesquisa */}
          <div className="flex items-center gap-4 mb-8">
            <input
              type="text"
              placeholder="Pesquisar artigo, vídeo, autor..."
              value={busca}
              onChange={e => setBusca(e.target.value)}
              className="flex-1 px-4 py-2 rounded bg-[#232136] text-white border border-[#333] focus:outline-none"
            />
            <button className="px-6 py-2 rounded bg-[#00BFFF] text-white font-bold">Pesquisar</button>
          </div>
          {/* Grid de cards vazios */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card grande de destaque */}
            <div className="relative rounded-xl shadow-lg border border-[#00BFFF] bg-[#232136] overflow-hidden flex flex-col md:col-span-2 row-span-2 min-h-[320px]">
              <div className="flex-1 flex items-center justify-center text-gray-500 text-xl">Card de destaque</div>
            </div>
            {/* Cards menores */}
            <div className="relative rounded-xl shadow-lg border border-[#00BFFF] bg-[#232136] overflow-hidden flex flex-col min-h-[200px]">
              <div className="flex-1 flex items-center justify-center text-gray-500">Card</div>
            </div>
            <div className="relative rounded-xl shadow-lg border border-[#00BFFF] bg-[#232136] overflow-hidden flex flex-col min-h-[200px]">
              <div className="flex-1 flex items-center justify-center text-gray-500">Card</div>
            </div>
            <div className="relative rounded-xl shadow-lg border border-[#00BFFF] bg-[#232136] overflow-hidden flex flex-col min-h-[200px]">
              <div className="flex-1 flex items-center justify-center text-gray-500">Card</div>
            </div>
            <div className="relative rounded-xl shadow-lg border border-[#00BFFF] bg-[#232136] overflow-hidden flex flex-col min-h-[200px]">
              <div className="flex-1 flex items-center justify-center text-gray-500">Card</div>
            </div>
            <div className="relative rounded-xl shadow-lg border border-[#00BFFF] bg-[#232136] overflow-hidden flex flex-col min-h-[200px]">
              <div className="flex-1 flex items-center justify-center text-gray-500">Card</div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 