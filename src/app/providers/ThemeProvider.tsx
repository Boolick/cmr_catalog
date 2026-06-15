import React, { useEffect } from 'react';
import { ThemeProvider as MuiThemeProvider, useColorScheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from '../../shared/theme';
import { observer } from 'mobx-react-lite';
import { useUIStore } from '../../shared/store';

const ThemeColorSchemeSync = observer(() => {
  const { setMode } = useColorScheme();
  const uiStore = useUIStore();
  
  useEffect(() => {
    if (uiStore.themeMode) {
      setMode(uiStore.themeMode);
    }
  }, [uiStore.themeMode, setMode]);
  
  return null;
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <MuiThemeProvider theme={theme}>
      <ThemeColorSchemeSync />
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};

