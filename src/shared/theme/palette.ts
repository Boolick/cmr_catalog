import { PaletteOptions } from '@mui/material/styles';

export const lightPalette: PaletteOptions = {
  mode: 'light',
  primary: {
    main: '#1677ff',
    light: '#40a9ff',
    dark: '#096dd9',
    contrastText: '#ffffff',
  },
  text: {
    primary: 'rgba(0, 0, 0, 0.88)',
    secondary: 'rgba(0, 0, 0, 0.45)',
    disabled: 'rgba(0, 0, 0, 0.25)',
  },
  background: {
    default: '#f5f5f5',
    paper: '#ffffff',
  },
  divider: '#d9d9d9',
  error: {
    main: '#ff4d4f',
  },
};

export const darkPalette: PaletteOptions = {
  mode: 'dark',
  primary: {
    main: '#177ddc',
    light: '#177ddc',
    dark: '#115393',
    contrastText: 'rgba(255, 255, 255, 0.85)',
  },
  text: {
    primary: 'rgba(255, 255, 255, 0.85)',
    secondary: 'rgba(255, 255, 255, 0.45)',
    disabled: 'rgba(255, 255, 255, 0.25)',
  },
  background: {
    default: '#1f1f1f',
    paper: '#141414',
  },
  divider: '#424242',
  error: {
    main: '#ff4d4f',
  },
};
