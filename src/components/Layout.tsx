import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PawPopover from './PawPopover';
import NavBar from './NavBar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [showPopover, setShowPopover] = useState(false);

  return (
    <div className="relative min-h-screen w-full bg-[#0A0720] overflow-x-hidden overflow-y-auto">
      {/* Fundo fixo com pilha de moedas e ossos */}
      <div
        className="fixed top-0 left-0 w-screen h-screen z-0"
        style={{
          backgroundImage: 'url(/images/background.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
        }}
      />
      {/* Kyra no topo esquerdo */}
      <div className="fixed top-4 left-4 z-10 logo-glow">
        <Image src="/images/kyra.png" alt="Kyra" width={80} height={80} style={{ height: 'auto' }} />
      </div>
      {/* Ícone de pata no lado esquerdo */}
      <div className="fixed top-28 left-8 z-20 paw-glow" onMouseEnter={() => setShowPopover(true)} onMouseLeave={() => setShowPopover(false)}>
        <button className="bg-transparent w-14 h-14 flex items-center justify-center">
          <Image src="/images/paw.png" alt="Pata" width={40} height={40} />
        </button>
        {showPopover && <PawPopover />}
      </div>
      {/* Conteúdo da página */}
      <div className="relative z-10 pt-24">
        <div className="fixed top-0 left-0 w-full z-30">
          <NavBar />
        </div>
        <div className="max-w-full">
          {children}
        </div>
      </div>
      <style jsx>{`
        .logo-glow {
          background: transparent;
          border: 2px solid #3ecbff;
          border-radius: 18px;
          box-shadow: 0 0 16px 2px #3ecbff, 0 0 40px 4px #1a2b3c inset;
          padding: 8px;
        }
        .paw-glow {
          background: transparent;
          border: 2px solid #3ecbff;
          border-radius: 18px;
          box-shadow: 0 0 16px 2px #3ecbff, 0 0 40px 4px #1a2b3c inset;
          padding: 6px;
        }
        @media (max-width: 768px) {
          .logo-glow {
            width: 56px;
            height: 56px;
            padding: 4px;
          }
          .paw-glow {
            width: 48px;
            height: 48px;
            padding: 2px;
          }
          .fixed.top-4.left-4 {
            top: 8px !important;
            left: 8px !important;
          }
          .fixed.top-28.left-8 {
            top: 64px !important;
            left: 8px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Layout; 