import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import PawPopover from '../components/PawPopover';
import NavBar from '../components/NavBar';
import Thermometer from '../components/Thermometer';
import FearGreedThermometer from '../components/FearGreedThermometer';
import BitcoinDominanceThermometer from '../components/BitcoinDominanceThermometer';
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
    <div className="relative min-h-screen w-full bg-[#0A0720] overflow-hidden">
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
      <Image
        src="/images/background.png"
        alt="Fundo com moedas e ossos"
        fill
        style={{ objectFit: 'cover', objectPosition: 'center' }}
        quality={100}
        priority
        className="z-0"
      />
      {/* Kyra no topo esquerdo */}
      <div className="absolute top-4 left-4 z-10">
        <Image src="/images/kyra.png" alt="Kyra" width={80} height={80} />
      </div>
      {/* Ícone de pata no lado esquerdo */}
      <div
        className="absolute top-28 left-8 z-20"
        onMouseEnter={handlePawEnter}
        onMouseLeave={handlePawLeave}
      >
        <button className="bg-transparent w-14 h-14 flex items-center justify-center">
          <Image src="/images/paw.png" alt="Pata" width={40} height={40} />
        </button>
        {showPawPopover && (
          <div
            onMouseEnter={handlePawEnter}
            onMouseLeave={handlePawLeave}
          >
            <PawPopover />
          </div>
        )}
      </div>
      {/* Barra de navegação principal */}
      <NavBar />
      {/* Texto institucional */}
      <div className="w-full flex flex-col items-center mt-8 z-20">
        <span className="text-white text-lg bg-black bg-opacity-60 px-6 py-2 rounded-lg shadow-lg border border-gray-700">
          Este site foi criado para passearmos em segurança e com sites verificados no Mundo CRIPTO
        </span>
      </div>
      {/* Indicadores globais (termômetros) */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 flex flex-col items-center gap-8">
        <div className="flex gap-8">
          <BitcoinDominanceThermometer />
          <FearGreedThermometer />
        </div>
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
      {/* Tabela das 500 principais moedas */}
      {/* <div className="flex justify-center w-full z-10">
        <TopCoinsTable />
      </div> */}
    </div>
  );
}
