import React from 'react';
import { observer } from 'mobx-react-lite';
import IconButton from '@mui/material/IconButton';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useUIStore } from '../../shared/store';

export const ThemeSwitcher: React.FC = observer(() => {
  const uiStore = useUIStore();

  return (
    <IconButton
      onClick={() => uiStore.toggleThemeMode()}
      color="inherit"
      aria-label="Toggle theme mode"
      id="theme-switcher-button"
    >
      {uiStore.themeMode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
    </IconButton>
  );
});
