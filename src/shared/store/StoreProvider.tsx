import React, { createContext, useContext } from 'react';
import { UIStore, uiStore } from './uiStore';

const UIStoreContext = createContext<UIStore | null>(null);

export const UIStoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <UIStoreContext.Provider value={uiStore}>
      {children}
    </UIStoreContext.Provider>
  );
};

export const useUIStore = (): UIStore => {
  const store = useContext(UIStoreContext);
  if (!store) {
    throw new Error('useUIStore must be used within a UIStoreProvider');
  }
  return store;
};
