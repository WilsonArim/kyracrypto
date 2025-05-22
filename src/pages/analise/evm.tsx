import Layout from '../../components/Layout';

export default function AnaliseEVM() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <h1 className="text-4xl font-bold text-white mb-10 text-center">Análise EVM</h1>
        <p className="text-lg text-gray-300">Conteúdo EVM da Análise será exibido aqui.</p>
      </div>
      <div className="bg-gray-800/50 rounded-2xl p-4 border border-cyan-400/30 hover:border-cyan-400/50 transition-all flex flex-row items-center gap-6 shadow-lg mt-6">
        <img src="/images/barra_de_navegacao/tally.jpg" alt="Tally" className="w-12 h-12 rounded-full object-cover border-2 border-cyan-400/50" />
        <div className="flex flex-col justify-center min-w-[140px]">
          <a href="https://www.tally.xyz/" target="_blank" rel="noopener noreferrer" className="text-cyan-300 font-bold text-lg hover:underline">Tally</a>
          <span className="text-xs text-gray-300 font-semibold mt-1">Agregador de DAOs EVM</span>
        </div>
        <div className="flex flex-row gap-3 ml-auto">
          <a href="https://www.tally.xyz/" target="_blank" rel="noopener noreferrer" className="icon-circle" title="Site">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="10" cy="10" r="8" stroke="#3ecbff" strokeWidth="2" fill="none"/>
              <path d="M2 10h16M10 2a16 16 0 0 1 0 16M10 2a16 16 0 0 0 0 16" stroke="#3ecbff" strokeWidth="1.5" fill="none"/>
            </svg>
          </a>
        </div>
      </div>
    </Layout>
  );
} 