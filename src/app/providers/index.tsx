import React from 'react';
import { ThemeProvider } from './ThemeProvider';
import { QueryProvider } from './QueryProvider';
import { UIStoreProvider } from '../store/StoreProvider';

interface ProvidersProps {
  children: React.ReactNode;
}

export const AppProviders: React.FC<ProvidersProps> = ({ children }) => {
  return (
    <UIStoreProvider>
      <QueryProvider>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </QueryProvider>
    </UIStoreProvider>
  );
};

