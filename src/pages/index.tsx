import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import PawPopover from '../components/PawPopover';
import Thermometer from '../components/Thermometer';
import FearGreedThermometer from '../components/FearGreedThermometer';
import BitcoinDominanceThermometer from '../components/BitcoinDominanceThermometer';
import Layout from '../components/Layout';
// import TopCoinsTable from '../components/TopCoinsTable';

export default function Home() {
  const [showPawPopover, setShowPawPopover] = useState(false);
  let pawPopoverTimeout: NodeJS.Timeout;
  const [showWelcomePopup, setShowWelcomePopup] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hidePopup = localStorage.getItem('hideWelcomePopup');
      if (!hidePopup) {
        setShowWelcomePopup(true);
      }
    }
    setMounted(true);
  }, []);

  const handleNeverShow = () => {
    localStorage.setItem('hideWelcomePopup', 'true');
    setShowWelcomePopup(false);
  };

  const handlePawEnter = () => {
    clearTimeout(pawPopoverTimeout);
    setShowPawPopover(true);
  };
  const handlePawLeave = () => {
    pawPopoverTimeout = setTimeout(() => setShowPawPopover(false), 200);
  };

  if (!mounted) return null;

  return (
    <Layout>
      <div className="relative min-h-screen w-full overflow-hidden">
        {/* POP-UP CENTRALIZADO */}
        {showWelcomePopup && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-60">
            <div className="bg-white rounded-2xl shadow-2xl flex flex-col items-center justify-center p-10" style={{ width: '40vw', minWidth: 320, maxWidth: 600 }}>
              <span className="text-2xl font-bold text-[#0A0720] mb-8 text-center">És novo/a no mundo das criptomoedas?</span>
              <div className="flex flex-row gap-8 mt-4">
                <a href="/iniciante" className="px-8 py-3 rounded-lg bg-[#F7B92A] text-[#0A0720] font-bold text-lg shadow hover:bg-[#e0a81a] transition">SIM!</a>
                <button onClick={() => setShowWelcomePopup(false)} className="px-8 py-3 rounded-lg bg-gray-300 text-[#0A0720] font-bold text-lg shadow hover:bg-gray-400 transition">Não!</button>
              </div>
              <button onClick={handleNeverShow} className="mt-6 px-6 py-2 rounded bg-red-200 text-red-800 font-semibold hover:bg-red-300 transition">Não voltar a mostrar</button>
            </div>
          </div>
        )}
        {/* Fundo com pilha de moedas e ossos */}
        {/* Remover o <Image src="/images/background.png" ... /> */}
        {/* Título principal */}
        <div className="flex flex-col items-center min-h-screen pt-8 md:pt-12">
          <h1 className="text-4xl font-bold text-white mb-10">Bem-vindo ao Kyra Crypto</h1>
          {/* Texto institucional */}
          <div className="w-full flex flex-col items-center z-20">
            <span className="text-white text-lg bg-black bg-opacity-60 px-6 py-2 rounded-lg shadow-lg border border-gray-700">
              Este site foi criado para passearmos em segurança e com sites verificados no Mundo CRIPTO
            </span>
          </div>
          {/* Indicadores globais (termômetros) */}
          <div className="flex flex-col items-center gap-8 mt-8">
            <div className="flex gap-8">
              <div className="protocolo-card flex flex-col items-center px-6 py-3">
                <span className="text-cyan-300 font-bold text-lg mb-1">BITCOIN DOMINANCE</span>
                <BitcoinDominanceThermometer />
              </div>
              <div className="protocolo-card flex flex-col items-center px-6 py-3">
                <span className="text-cyan-300 font-bold text-lg mb-1">FEAR & GREED</span>
                <FearGreedThermometer />
              </div>
            </div>
            <style jsx>{`
              .protocolo-card {
                background: transparent;
                border: 2px solid #3ecbff;
                border-radius: 16px;
                box-shadow: 0 0 16px 2px #3ecbff, 0 0 40px 4px #1a2b3c inset;
                margin: 12px 0;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: box-shadow 0.2s;
              }
              .protocolo-card:hover {
                box-shadow: 0 0 32px 6px #3ecbff, 0 0 60px 8px #1a2b3c inset;
              }
            `}</style>
            {/* Caixa de texto institucional */}
            <div className="bg-[#F7B92A] rounded-lg shadow-lg border border-gray-300 px-6 py-3 mt-6 flex flex-col items-center">
              <span className="text-[#05001A] text-lg font-semibold">
                Este site foi criado para passearmos em segurança e com sites verificados no Mundo CRIPTO
              </span>
            </div>
            {/* Ícones com tooltip */}
            <div className="flex flex-row gap-6 mt-6">
              {/* Coingecko */}
              <div className="flex flex-col items-center relative">
                {/* Tooltip Coingecko */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                  <span className="group cursor-pointer relative">
                    <span className="bg-[#232136] text-white rounded-full w-5 h-5 flex items-center justify-center font-bold border border-white">?</span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity absolute left-1/2 -translate-x-1/2 mt-2 w-48 bg-[#232136] text-white text-xs rounded-lg px-3 py-2 z-50 shadow-lg text-center pointer-events-none">
                      Plataforma para consultar preços, gráficos e dados de criptomoedas em tempo real.
                    </span>
                  </span>
                </div>
                <a href="https://www.coingecko.com/" target="_blank" rel="noopener noreferrer">
                  <img src="/images/coingecko.png" alt="Coingecko" className="w-56 h-24 object-contain rounded-lg shadow-lg transition-all" />
                </a>
                <span className="text-white text-sm mt-2">Coingecko</span>
              </div>
              {/* CoinMarketCap */}
              <div className="flex flex-col items-center relative">
                {/* Tooltip CoinMarketCap */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                  <span className="group cursor-pointer relative">
                    <span className="bg-[#232136] text-white rounded-full w-5 h-5 flex items-center justify-center font-bold border border-white">?</span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity absolute left-1/2 -translate-x-1/2 mt-2 w-48 bg-[#232136] text-white text-xs rounded-lg px-3 py-2 z-50 shadow-lg text-center pointer-events-none">
                      Um dos maiores agregadores de dados de criptomoedas, com rankings, preços e capitalização de mercado.
                    </span>
                  </span>
                </div>
                <a href="https://coinmarketcap.com/" target="_blank" rel="noopener noreferrer">
                  <img src="/images/coinmarketcap.jpg" alt="CoinMarketCap" className="w-56 h-24 object-contain rounded-lg shadow-lg transition-all" />
                </a>
                <span className="text-white text-sm mt-2">CoinMarketCap</span>
              </div>
            </div>
            <div className="flex flex-row gap-6 mt-6">
              {/* DeFiLlama */}
              <div className="flex flex-col items-center relative">
                {/* Tooltip DeFiLlama */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                  <span className="group cursor-pointer relative">
                    <span className="bg-[#232136] text-white rounded-full w-5 h-5 flex items-center justify-center font-bold border border-white">?</span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity absolute left-1/2 -translate-x-1/2 mt-2 w-48 bg-[#232136] text-white text-xs rounded-lg px-3 py-2 z-50 shadow-lg text-center pointer-events-none">
                      Plataforma para análise de dados de DeFi.
                    </span>
                  </span>
                </div>
                <a href="https://defillama.com/" target="_blank" rel="noopener noreferrer">
                  <img src="/images/defillama.png" alt="DeFiLlama" className="w-56 h-24 object-contain rounded-lg shadow-lg transition-all" />
                </a>
                <span className="text-white text-sm mt-2">DeFiLlama</span>
              </div>
              {/* DexScreener */}
              <div className="flex flex-col items-center relative">
                {/* Tooltip DexScreener */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                  <span className="group cursor-pointer relative">
                    <span className="bg-[#232136] text-white rounded-full w-5 h-5 flex items-center justify-center font-bold border border-white">?</span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity absolute left-1/2 -translate-x-1/2 mt-2 w-48 bg-[#232136] text-white text-xs rounded-lg px-3 py-2 z-50 shadow-lg text-center pointer-events-none">
                      Ferramenta para análise de gráficos e liquidez de tokens em DEXs (exchanges descentralizadas).
                    </span>
                  </span>
                </div>
                <a href="https://dexscreener.com/" target="_blank" rel="noopener noreferrer">
                  <img src="/images/dexscreener.jpg" alt="DexScreener" className="w-56 h-24 object-contain rounded-lg shadow-lg transition-all" />
                </a>
                <span className="text-white text-sm mt-2">DexScreener</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
