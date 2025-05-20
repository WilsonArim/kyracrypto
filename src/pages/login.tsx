import React from 'react';
import { useDynamicContext, DynamicWidget } from '@dynamic-labs/sdk-react';
import { useRouter } from 'next/router';
import Head from 'next/head';
// Importe o seu componente NavBar se quiser usá-lo aqui, ou um layout mais simples
// import NavBar from '@/components/NavBar'; 

const LoginPage = () => {
  const { user, isAuthenticated, setShowAuthFlow } = useDynamicContext();
  const router = useRouter();

  React.useEffect(() => {
    if (isAuthenticated) {
      router.push('/');
    }
  }, [isAuthenticated, router]);

  return (
    <>
      <Head>
        <title>Login - Kyra Crypto</title>
      </Head>
      {/* <NavBar /> Se quiser a NavBar completa aqui */}
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
        <div className="bg-gray-800 p-8 rounded-lg shadow-xl w-full max-w-md text-center">
          <img src="/images/kyra.png" alt="Kyra Crypto" className="w-20 h-20 mx-auto mb-6" />
          <h1 className="text-3xl font-bold mb-6 text-cyan-400">Login</h1>

          <p className="mb-6 text-gray-300">
            Conecte a sua carteira Ethereum para aceder à sua conta.
          </p>
          
          <DynamicWidget />

          {/* Futuramente, adicionar links para outros provedores: Google, etc. */}
          {/* <div className="mt-6 text-sm">
            <p className="text-gray-400">Ou faça login com:</p>
            // Botões para Google, Apple, etc.
          </div> */}
        </div>
      </div>
    </>
  );
};

export default LoginPage; 