import React from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '../contexts/ThemeContext';
import { FavoritesProvider } from '@/contexts/FavoritesContext';
import '../styles/globals.css';
import { DynamicContextProvider } from '@dynamic-labs/sdk-react';
import { supabase } from '../lib/supabase';

const dynamicSettings = {
  environmentId: 'fc85dbee-20d0-4ac8-9b7f-2ad44c7087bd',
  walletConnectOptions: {
    requiredNamespaces: {
      eip155: {
        chains: [
          'eip155:1', // Ethereum Mainnet
          'eip155:137', // Polygon
          'eip155:5', // Goerli
          'eip155:11155111' // Sepolia
        ],
        methods: [
          'eth_sendTransaction',
          'personal_sign',
          'eth_signTypedData'
        ],
        events: [
          'chainChanged',
          'accountsChanged'
        ]
      }
    }
  }
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DynamicContextProvider settings={dynamicSettings}>
      <ThemeProvider>
        <FavoritesProvider>
          <Component {...pageProps} />
        </FavoritesProvider>
      </ThemeProvider>
    </DynamicContextProvider>
  );
}

export default MyApp; 