import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import ThemeToggle from '../components/ThemeToggle';

const TOPICOS = [
  'DeFi',
  'NFTs',
  'Bitcoin',
  'Ethereum',
  'Altcoins',
  'Trading',
];

export default function Definicoes() {
  // Estados com valores padrão
  const [notificacoes, setNotificacoes] = useState(false);
  const [preferencias, setPreferencias] = useState<string[]>([]);
  const [fonte, setFonte] = useState('md');
  const [contraste, setContraste] = useState(false);
  const [cookies, setCookies] = useState('aceito');

  // Carregar valores do localStorage apenas no cliente
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setNotificacoes(localStorage.getItem('notificacoes') === 'true');
      const saved = localStorage.getItem('preferencias');
      setPreferencias(saved ? JSON.parse(saved) : []);
      setFonte(localStorage.getItem('fonte') || 'md');
      setContraste(localStorage.getItem('contraste') === 'true');
      setCookies(localStorage.getItem('cookies') || 'aceito');
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('notificacoes', notificacoes ? 'true' : 'false');
    }
  }, [notificacoes]);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('preferencias', JSON.stringify(preferencias));
    }
  }, [preferencias]);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('fonte', fonte);
      document.documentElement.classList.remove('font-size-sm', 'font-size-md', 'font-size-lg');
      document.documentElement.classList.add(`font-size-${fonte}`);
    }
  }, [fonte]);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('contraste', contraste ? 'true' : 'false');
    }
  }, [contraste]);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('cookies', cookies);
    }
  }, [cookies]);

  // Funções auxiliares
  const togglePreferencia = (topico: string) => {
    setPreferencias((prev: string[]) =>
      prev.includes(topico)
        ? prev.filter((t) => t !== topico)
        : [...prev, topico]
    );
  };

  const rejeitarCookies = () => {
    setCookies('rejeitado');
    // Aqui você pode adicionar lógica para desativar cookies opcionais
  };

  return (
    <Layout>
      <div className="flex flex-col items-center min-h-screen pt-8 md:pt-12">
        <h1 className="text-4xl font-bold text-white mb-10">Definições</h1>
        <div className="w-full max-w-5xl px-4">
          <div className={`card-glow w-full bg-black bg-opacity-70 rounded-lg shadow-lg p-8 space-y-8 ${contraste ? 'bg-black text-yellow-200' : ''} ${fonte === 'sm' ? 'text-sm' : fonte === 'lg' ? 'text-xl' : 'text-base'}`}>
            {/* Notificações */}
            <div>
              <h2 className="text-xl font-bold text-cyan-400 mb-2">Notificações personalizadas</h2>
              <label className="flex items-center gap-2 text-white cursor-pointer">
                <input
                  type="checkbox"
                  checked={notificacoes}
                  onChange={() => setNotificacoes((v) => !v)}
                  className="accent-yellow-400 w-5 h-5"
                />
                Receber notificações sobre novidades, alertas e conteúdos
              </label>
            </div>

            {/* Acessibilidade */}
            <div>
              <h2 className="text-xl font-bold text-cyan-400 mb-2">Acessibilidade</h2>
              <div className="flex flex-col gap-2">
                <div>
                  <span className="text-white mr-2">Tamanho da fonte:</span>
                  <button onClick={() => setFonte('sm')} className={`px-3 py-1 rounded-l border ${fonte === 'sm' ? 'bg-blue-400 text-white' : 'bg-gray-700 text-white'}`}>Pequeno</button>
                  <button onClick={() => setFonte('md')} className={`px-3 py-1 border ${fonte === 'md' ? 'bg-blue-400 text-white' : 'bg-gray-700 text-white'}`}>Médio</button>
                  <button onClick={() => setFonte('lg')} className={`px-3 py-1 rounded-r border ${fonte === 'lg' ? 'bg-blue-400 text-white' : 'bg-gray-700 text-white'}`}>Grande</button>
                </div>
              </div>
            </div>

            {/* Privacidade e cookies */}
            <div>
              <h2 className="text-xl font-bold text-cyan-400 mb-2">Privacidade e consentimento de cookies</h2>
              <p className="text-white mb-2">Gerir o consentimento de cookies e dados pessoais.</p>
              <div className="flex gap-4">
                <button
                  onClick={rejeitarCookies}
                  className="px-4 py-2 rounded bg-red-500 text-white font-bold shadow hover:bg-red-600 transition"
                >
                  Rejeitar tudo (opcional)
                </button>
                <span className={`text-white font-semibold ${cookies === 'rejeitado' ? 'text-red-400' : 'text-green-400'}`}>
                  {cookies === 'rejeitado' ? 'Cookies opcionais rejeitados' : 'Cookies aceitos'}
                </span>
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
          margin: 0 0 18px 0;
        }
      `}</style>
    </Layout>
  );
}