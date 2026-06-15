import type {} from '@mui/x-data-grid/themeAugmentation';
import { Components, Theme } from '@mui/material/styles';

export const components: Components<Theme> = {
  MuiButton: {
    defaultProps: {
      disableElevation: true,
    },
    styleOverrides: {
      root: {
        textTransform: 'none',
        borderRadius: '6px',
        fontWeight: 500,
        boxShadow: 'none',
        transition: 'all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1)',
        '&:focus-visible': {
          outline: 'none',
          boxShadow: '0 0 0 2px rgba(22, 119, 255, 0.2)',
        },
        '&:active': {
          boxShadow: 'none',
        },
      },
      contained: {
        boxShadow: 'none',
        '&:hover': {
          boxShadow: 'none',
          filter: 'brightness(1.05)',
        },
        '&:active': {
          boxShadow: 'none',
          filter: 'brightness(0.95)',
        },
      },
      outlined: ({ theme }) => ({
        borderColor: theme.palette.mode === 'light' ? '#d9d9d9' : '#434343',
        color: theme.palette.text.primary,
        '&:hover': {
          borderColor: theme.palette.primary.main,
          backgroundColor: theme.palette.mode === 'light' ? 'rgba(22, 119, 255, 0.04)' : 'rgba(23, 125, 220, 0.08)',
          color: theme.palette.primary.main,
        },
      }),
      text: ({ theme }) => ({
        '&:hover': {
          backgroundColor: theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.04)' : 'rgba(255, 255, 255, 0.04)',
        },
      }),
      sizeSmall: {
        padding: '4px 10px',
        fontSize: '14px',
      },
      sizeMedium: {
        padding: '6px 16px',
        fontSize: '14px',
      },
      sizeLarge: {
        padding: '8px 20px',
        fontSize: '16px',
      },
    },
  },
  MuiDataGrid: {
    styleOverrides: {
      root: ({ theme }) => ({
        border: 'none',
        '& .MuiDataGrid-cell': {
          borderRight: 'none',
          borderColor: theme.palette.divider,
        },
        '& .MuiDataGrid-columnHeader': {
          borderRight: 'none',
        },
        '& .MuiDataGrid-columnHeaders': {
          backgroundColor: theme.palette.mode === 'light' ? '#fafafa' : '#1d1d1d',
          borderColor: theme.palette.divider,
        },
        '& .MuiDataGrid-row:hover': {
          backgroundColor: theme.palette.mode === 'light' ? '#f5f5f5' : '#1a1a1a',
        },
        '& .MuiDataGrid-cell:focus, & .MuiDataGrid-cell:focus-within, & .MuiDataGrid-columnHeader:focus, & .MuiDataGrid-columnHeader:focus-within': {
          outline: 'none',
          boxShadow: 'none',
        },
      }),
    },
  },
  MuiCssBaseline: {
    styleOverrides: (theme) => ({
      html: {
        fontSize: '16px',
        boxSizing: 'border-box',
      },
      '*, *::before, *::after': {
        boxSizing: 'inherit',
      },
      body: {
        fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
        fontSize: '14px',
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        margin: 0,
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
      },
      'h1, h2, h3, h4, h5, h6': {
        fontFamily: 'Outfit, sans-serif',
        fontWeight: 600,
        marginTop: 0,
        color: theme.palette.text.primary,
      },
      h1: { marginBottom: '12px' },
      h2: { marginBottom: '12px' },
      h3: { marginBottom: '8px' },
      h4: { marginBottom: '8px' },
      h5: { marginBottom: '8px' },
      h6: { marginBottom: '8px' },
      'p, ul, ol': {
        fontFamily: 'Inter, sans-serif',
        marginTop: 0,
        marginBottom: '8px',
      },
    }),
  },
};
