import React from 'react';
import Layout from '../components/Layout';
import InfoCard from '../components/InfoCard';

const cards = [
  {
    title: 'O que é uma DEX?',
    description: 'Uma DEX (Exchange Descentralizada) é uma plataforma onde podes trocar criptomoedas diretamente com outras pessoas, sem intermediários. Exemplos: Uniswap, PancakeSwap.',
    slides: [
      { image: '/images/icons/uniswap.png', alt: 'Uniswap', caption: 'Exemplo: Uniswap' },
      { image: '/images/icons/pancakeswap.jpg', alt: 'PancakeSwap', caption: 'Exemplo: PancakeSwap' },
      { image: '🔄', caption: 'Troca direta entre utilizadores' }
    ]
  },
  {
    title: 'O que é uma CEX?',
    description: 'Uma CEX (Exchange Centralizada) é uma plataforma onde compras e vendes criptomoedas através de uma empresa intermediária. Exemplos: Binance, Coinbase.',
    slides: [
      { image: '/images/icons/binance.png', alt: 'Binance', caption: 'Exemplo: Binance' },
      { image: '/images/icons/coinbase.png', alt: 'Coinbase', caption: 'Exemplo: Coinbase' },
      { image: '🏦', caption: 'Empresa gere as tuas moedas' }
    ]
  },
  {
    title: 'O que é Stake?',
    description: 'Fazer stake é "trancar" as tuas criptomoedas para ajudar a rede e, em troca, receberes recompensas. É como um depósito a prazo, mas em cripto.',
    slides: [
      { image: '🔒', caption: 'Trancas as tuas moedas' },
      { image: '💰', caption: 'Recebes recompensas' }
    ]
  },
  {
    title: 'O que são Pools?',
    description: 'Pools são conjuntos de fundos de vários utilizadores, usados para facilitar trocas ou gerar rendimentos. Exemplo: Pool de liquidez numa DEX.',
    slides: [
      { image: '🏊‍♂️', caption: 'Vários utilizadores juntam fundos' },
      { image: '💧', caption: 'Facilita trocas e gera rendimentos' }
    ]
  },
  {
    title: 'O que é uma DAO?',
    description: 'Uma DAO (Organização Autónoma Descentralizada) é uma comunidade online que toma decisões em conjunto, normalmente usando votos com tokens.',
    slides: [
      { image: '🤝', caption: 'Decisões em grupo' },
      { image: '🗳️', caption: 'Votação com tokens' }
    ]
  },
  {
    title: 'O que é RWA?',
    description: 'RWA (Real World Assets) são ativos do mundo real, como imóveis ou ouro, representados na blockchain através de tokens.',
    slides: [
      { image: '🏠', caption: 'Imóveis' },
      { image: '🏦', caption: 'Ativos financeiros' },
      { image: '🪙', caption: 'Tokenizados na blockchain' }
    ]
  },
  {
    title: 'Como financiar a carteira?',
    description: 'Para financiar a tua carteira, compras criptomoedas numa CEX e depois transferes para a tua carteira digital (ex: MetaMask).',
    slides: [
      { image: '/images/icons/coinbase.png', alt: 'Coinbase', caption: 'Compra numa CEX' },
      { image: '/images/icons/metamask.png', alt: 'MetaMask', caption: 'Transfere para a carteira' },
      { image: '➡️', caption: 'Transferência' }
    ]
  },
  {
    title: 'Como conectar a carteira?',
    description: 'Para usar apps de cripto, precisas ligar a tua carteira (ex: MetaMask) ao site. Normalmente há um botão "Conectar Carteira".',
    slides: [
      { image: '/images/icons/metamask.png', alt: 'MetaMask', caption: 'Exemplo: MetaMask' },
      { image: '🔗', caption: 'Botão "Conectar Carteira"' }
    ]
  }
];

export default function Iniciante() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-bold text-white mb-6">Guia para Iniciantes</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
          {cards.map((card, idx) => (
            <InfoCard key={idx} {...card} />
          ))}
        </div>
      </div>
    </Layout>
  );
} 