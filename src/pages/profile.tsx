import React from 'react';
import { useDynamicContext } from '@dynamic-labs/sdk-react';
import Head from 'next/head';
import Link from 'next/link';
import NavBar from '@/components/NavBar';

const ProfilePage = () => {
  const { user, isAuthenticated, handleLogOut } = useDynamicContext();

  if (!isAuthenticated || !user) {
    return (
      <>
        <NavBar />
        <div className="container mx-auto px-4 py-8 text-center text-white">
          <h1 className="text-2xl font-bold mb-4">Acesso Restrito</h1>
          <p className="mb-4">Você precisa estar logado para ver esta página.</p>
          <Link href="/login" legacyBehavior>
            <a className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded">
              Ir para Login
            </a>
          </Link>
        </div>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Perfil - {user?.wallet || 'Utilizador'} - Kyra Crypto</title>
      </Head>
      <NavBar />
      <div className="container mx-auto px-4 py-8 text-white">
        <h1 className="text-3xl font-bold text-cyan-400 mb-6">Seu Perfil</h1>
        <div className="bg-gray-800 shadow-xl rounded-lg p-6">
          <div className="mb-4">
            <strong className="text-gray-300">Endereço da Carteira:</strong>
            <p className="text-white break-all">{user?.wallet}</p>
          </div>
          {/* Adicione outros campos do usuário do Dynamic se desejar */}
          <button
            onClick={handleLogOut}
            className="mt-6 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-150"
          >
            Terminar Sessão
          </button>
        </div>
      </div>
    </>
  );
};

export default ProfilePage; 