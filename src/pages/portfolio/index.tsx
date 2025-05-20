import Layout from '../../components/Layout';

export default function Portfolio() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-[60vh] mt-8">
        <div className="flex flex-row gap-4 mb-4 justify-center mt-4 border border-red-500">
          <button className="text-white bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600 transition">EVM</button>
          <button className="text-white bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600 transition">SOL</button>
          <button className="text-white bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600 transition">SUI</button>
          <button className="text-white bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600 transition">BTC</button>
        </div>
        <div className="card-glow flex flex-col items-center">
          <h1 className="text-4xl font-bold text-white mb-4">PORTFOLIO</h1>
          <p className="text-lg text-gray-300">Em breve!</p>
          <div className="flex flex-row gap-6 mt-6">
            {/* Protocolo 1 */}
            <div className="flex flex-col items-center relative">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src="/images/protocolo1.png" alt="Protocolo 1" className="w-56 h-24 object-contain rounded-lg shadow-lg transition-all" />
              </a>
              <span className="text-white text-sm mt-2">Protocolo 1</span>
            </div>
            {/* Protocolo 2 */}
            <div className="flex flex-col items-center relative">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src="/images/protocolo2.png" alt="Protocolo 2" className="w-56 h-24 object-contain rounded-lg shadow-lg transition-all" />
              </a>
              <span className="text-white text-sm mt-2">Protocolo 2</span>
            </div>
            {/* Ícone do X */}
            <div className="flex flex-col items-center relative">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src="/images/x-icon.png" alt="Twitter" className="w-10 h-10 object-contain rounded-full shadow-lg transition-all" />
              </a>
            </div>
            {/* Landing Page */}
            <div className="flex flex-col items-center relative">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src="/images/globe-icon.png" alt="Landing Page" className="w-10 h-10 object-contain rounded-full shadow-lg transition-all" />
              </a>
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
      `}</style>
    </Layout>
  );
} 