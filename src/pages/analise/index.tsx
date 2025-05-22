import React from 'react';
import Layout from '../../components/Layout';

export default function Analise() {
  return (
    <Layout>
      <div className="container mx-auto py-8">
        <h1 className="text-4xl font-bold text-white mb-10 text-center">Análise</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card BTC */}
          <div className="bg-gray-800/50 rounded-lg p-6 border border-cyan-400/30 hover:border-cyan-400/50 transition-all">
            <h2 className="text-xl font-bold text-cyan-300 mb-2">Bitcoin ETF Flow</h2>
            <a 
              href="https://farside.co.uk/btc/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              https://farside.co.uk/btc/
            </a>
          </div>

          {/* Card ETH */}
          <div className="bg-gray-800/50 rounded-lg p-6 border border-cyan-400/30 hover:border-cyan-400/50 transition-all">
            <h2 className="text-xl font-bold text-cyan-300 mb-2">Ethereum ETF Flow</h2>
            <a 
              href="https://farside.co.uk/eth/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              https://farside.co.uk/eth/
            </a>
          </div>

          {/* Card DeFi Station */}
          <div className="bg-gray-800/50 rounded-lg p-6 border border-cyan-400/30 hover:border-cyan-400/50 transition-all">
            <h2 className="text-xl font-bold text-cyan-300 mb-2">DeFi Station Pools</h2>
            <a 
              href="https://www.defistation.xyz/pools"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              https://www.defistation.xyz/pools
            </a>
          </div>

          {/* Card Revert Finance */}
          <div className="bg-gray-800/50 rounded-lg p-6 border border-cyan-400/30 hover:border-cyan-400/50 transition-all">
            <h2 className="text-xl font-bold text-cyan-300 mb-2">Revert Finance</h2>
            <a 
              href="https://revert.finance/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              https://revert.finance/
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
} 