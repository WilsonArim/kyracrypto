import Layout from '../../components/Layout';

export default function Portfolio() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-[60vh] mt-8">
        <div className="card-glow flex flex-col items-center w-full max-w-3xl">
          <h1 className="text-4xl font-bold text-white mb-10 text-center">Portfolio</h1>
          <div className="flex flex-col gap-6 w-full">
            {/* Card Mempool.space (BITCOIN) */}
            <div className="bg-gray-800/50 rounded-2xl p-4 border border-cyan-400/30 hover:border-cyan-400/50 transition-all flex flex-row items-center gap-6 shadow-lg">
              <img src="/images/barra_de_navegacao/mempool.jpg" alt="mempool.space" className="w-12 h-12 rounded-full object-cover border-2 border-cyan-400/50" />
              <div className="flex flex-col justify-center min-w-[140px]">
                <a href="https://mempool.space/pt/" target="_blank" rel="noopener noreferrer" className="text-cyan-300 font-bold text-lg hover:underline">mempool.space</a>
                <span className="text-xs text-gray-300 font-semibold mt-1">Explorador de blocos Bitcoin</span>
              </div>
              <div className="flex flex-row gap-3 ml-auto">
                <a href="https://mempool.space/" target="_blank" rel="noopener noreferrer" className="icon-circle" title="Site">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="10" cy="10" r="8" stroke="#3ecbff" strokeWidth="2" fill="none"/>
                    <path d="M2 10h16M10 2a16 16 0 0 1 0 16M10 2a16 16 0 0 0 0 16" stroke="#3ecbff" strokeWidth="1.5" fill="none"/>
                  </svg>
                </a>
                <a href="https://github.com/mempool" target="_blank" rel="noopener noreferrer" className="icon-circle" title="GitHub"><img src="/images/barra_de_navegacao/github.png" alt="GitHub" className="w-5 h-5" /></a>
                <a href="https://x.com/mempool" target="_blank" rel="noopener noreferrer" className="icon-circle" title="X">
                  <span className="text-cyan-300 font-bold text-base">X</span>
                </a>
                <a href="https://mempool.space/pt/docs/faq" target="_blank" rel="noopener noreferrer" className="icon-circle" title="DOCS">
                  <span className="text-cyan-300 font-bold text-xs">DOCS</span>
                </a>
              </div>
            </div>
            {/* Card DeBank */}
            <div className="bg-gray-800/50 rounded-2xl p-4 border border-cyan-400/30 hover:border-cyan-400/50 transition-all flex flex-row items-center gap-6 shadow-lg">
              <img src="/images/barra_de_navegacao/debank.jpg" alt="DeBank" className="w-12 h-12 rounded-full object-cover border-2 border-cyan-400/50" />
              <div className="flex flex-col justify-center min-w-[140px]">
                <a href="https://debank.com/" target="_blank" rel="noopener noreferrer" className="text-cyan-300 font-bold text-lg hover:underline">DeBank</a>
                <span className="text-xs text-gray-300 font-semibold mt-1">Portfolio multi-chain e dashboard DeFi</span>
              </div>
              <div className="flex flex-row gap-3 ml-auto">
                <a href="https://debank.com/" target="_blank" rel="noopener noreferrer" className="icon-circle" title="Site">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="10" cy="10" r="8" stroke="#3ecbff" strokeWidth="2" fill="none"/>
                    <path d="M2 10h16M10 2a16 16 0 0 1 0 16M10 2a16 16 0 0 0 0 16" stroke="#3ecbff" strokeWidth="1.5" fill="none"/>
                  </svg>
                </a>
                <a href="https://x.com/DeBankDeFi" target="_blank" rel="noopener noreferrer" className="icon-circle" title="X">
                  <span className="text-cyan-300 font-bold text-base">X</span>
                </a>
                <a href="https://t.me/DeBankEN" target="_blank" rel="noopener noreferrer" className="icon-circle" title="Telegram"><img src="/images/icons/telegram.jpg" alt="Telegram" className="w-5 h-5" /></a>
                <a href="https://github.com/DebankDeFi" target="_blank" rel="noopener noreferrer" className="icon-circle" title="GitHub"><img src="/images/barra_de_navegacao/github.png" alt="GitHub" className="w-5 h-5" /></a>
                <a href="https://defillama.com/protocol/debank-cloud" target="_blank" rel="noopener noreferrer" className="icon-circle" title="DefiLlama"><img src="/images/barra_de_navegacao/defillama.png" alt="DefiLlama" className="w-5 h-5" /></a>
                <a href="https://official.debank.com/" target="_blank" rel="noopener noreferrer" className="icon-circle" title="Whitepaper">
                  <span className="text-cyan-300 font-bold text-xs">DOCS</span>
                </a>
              </div>
            </div>
            {/* Card Step Finance */}
            <div className="bg-gray-800/50 rounded-2xl p-4 border border-cyan-400/30 hover:border-cyan-400/50 transition-all flex flex-row items-center gap-6 shadow-lg">
              <img src="/images/barra_de_navegacao/step-finance.jpg" alt="Step Finance" className="w-12 h-12 rounded-full object-cover border-2 border-cyan-400/50" />
              <div className="flex flex-col justify-center min-w-[140px]">
                <a href="https://step.finance/" target="_blank" rel="noopener noreferrer" className="text-cyan-300 font-bold text-lg hover:underline">Step Finance</a>
                <span className="text-xs text-gray-300 font-semibold mt-1">Dashboard e gestão de portfólio Solana</span>
              </div>
              <div className="flex flex-row gap-3 ml-auto">
                <a href="https://step.finance/" target="_blank" rel="noopener noreferrer" className="icon-circle" title="Site">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="10" cy="10" r="8" stroke="#3ecbff" strokeWidth="2" fill="none"/>
                    <path d="M2 10h16M10 2a16 16 0 0 1 0 16M10 2a16 16 0 0 0 0 16" stroke="#3ecbff" strokeWidth="1.5" fill="none"/>
                  </svg>
                </a>
                <a href="https://twitter.com/stepfinance_" target="_blank" rel="noopener noreferrer" className="icon-circle" title="X">
                  <span className="text-cyan-300 font-bold text-base">X</span>
                </a>
                <a href="https://discord.com/invite/step" target="_blank" rel="noopener noreferrer" className="icon-circle" title="Discord"><img src="/images/icons/discord.jpg" alt="Discord" className="w-5 h-5" /></a>
                <a href="https://t.me/stepfinance" target="_blank" rel="noopener noreferrer" className="icon-circle" title="Telegram"><img src="/images/icons/telegram.jpg" alt="Telegram" className="w-5 h-5" /></a>
                <a href="https://github.com/step-finance" target="_blank" rel="noopener noreferrer" className="icon-circle" title="GitHub"><img src="/images/barra_de_navegacao/github.png" alt="GitHub" className="w-5 h-5" /></a>
                <a href="https://defillama.com/protocol/step-finance" target="_blank" rel="noopener noreferrer" className="icon-circle" title="DefiLlama"><img src="/images/barra_de_navegacao/defillama.png" alt="DefiLlama" className="w-5 h-5" /></a>
                <a href="https://docs.step.finance/" target="_blank" rel="noopener noreferrer" className="icon-circle" title="Whitepaper">
                  <span className="text-cyan-300 font-bold text-xs">DOCS</span>
                </a>
              </div>
            </div>
            {/* Card SUIVision */}
            <div className="bg-gray-800/50 rounded-2xl p-4 border border-cyan-400/30 hover:border-cyan-400/50 transition-all flex flex-row items-center gap-6 shadow-lg">
              <img src="/images/barra_de_navegacao/suivision.jpg" alt="SUIVision" className="w-12 h-12 rounded-full object-cover border-2 border-cyan-400/50" />
              <div className="flex flex-col justify-center min-w-[140px]">
                <a href="https://suivision.xyz/" target="_blank" rel="noopener noreferrer" className="text-cyan-300 font-bold text-lg hover:underline">SUIVision</a>
                <span className="text-xs text-gray-300 font-semibold mt-1">Explorador e dashboard para SUI</span>
              </div>
              <div className="flex flex-row gap-3 ml-auto">
                <a href="https://suivision.xyz/" target="_blank" rel="noopener noreferrer" className="icon-circle" title="Site">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="10" cy="10" r="8" stroke="#3ecbff" strokeWidth="2" fill="none"/>
                    <path d="M2 10h16M10 2a16 16 0 0 1 0 16M10 2a16 16 0 0 0 0 16" stroke="#3ecbff" strokeWidth="1.5" fill="none"/>
                  </svg>
                </a>
                <a href="https://discord.com/invite/fEnqBT98XJ" target="_blank" rel="noopener noreferrer" className="icon-circle" title="Discord"><img src="/images/icons/discord.jpg" alt="Discord" className="w-5 h-5" /></a>
                <a href="https://t.me/SuiGlobalOfficial" target="_blank" rel="noopener noreferrer" className="icon-circle" title="Telegram"><img src="/images/icons/telegram.jpg" alt="Telegram" className="w-5 h-5" /></a>
                <a href="https://x.com/StepFinance_" target="_blank" rel="noopener noreferrer" className="icon-circle" title="X">
                  <span className="text-cyan-300 font-bold text-base">X</span>
                </a>
                <a href="https://defillama.com/protocol/step-finance" target="_blank" rel="noopener noreferrer" className="icon-circle" title="DefiLlama"><img src="/images/barra_de_navegacao/defillama.png" alt="DefiLlama" className="w-5 h-5" /></a>
              </div>
            </div>
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
        .icon-circle {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border: 2px solid #3ecbff;
          border-radius: 50%;
          background: transparent;
          transition: border 0.2s, background 0.2s;
        }
        .icon-circle:hover {
          border: 2px solid #fff;
          background: #1a2b3c44;
        }
      `}</style>
    </Layout>
  );
} 