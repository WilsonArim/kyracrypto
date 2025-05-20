import React from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '../contexts/ThemeContext';
import { FavoritesProvider } from '@/contexts/FavoritesContext';
import '../styles/globals.css';
import { DynamicContextProvider } from '@dynamic-labs/sdk-react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DynamicContextProvider settings={{ environmentId: 'fc85dbee-20d0-4ac8-9b7f-2ad44c7087bd' }}>
      <ThemeProvider>
        <FavoritesProvider>
            <Component {...pageProps} />
        </FavoritesProvider>
      </ThemeProvider>
    </DynamicContextProvider>
  );
}

export default MyApp; 