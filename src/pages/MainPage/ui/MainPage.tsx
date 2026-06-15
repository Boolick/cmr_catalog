import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { ThemeSwitcher } from '../../../features/theme';
import { ItemsTable } from '../../../widgets/ItemsTable';

export const MainPage: React.FC = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: 'background.default', color: 'text.primary' }}>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{
          borderBottom: '1px solid',
          borderColor: 'divider',
          backgroundColor: 'background.paper',
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between', px: 3 }}>
          <Typography variant="h6" component="div" sx={{ fontWeight: 600, display: 'flex', alignItems: 'center', gap: 1 }}>
            CRM Dashboard
          </Typography>
          <ThemeSwitcher />
        </Toolbar>
      </AppBar>
      <Container maxWidth="xl" sx={{ flexGrow: 1, py: 4, display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ mb: 3 }}>
          <Typography variant="h4" gutterBottom>
            Product Catalog
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Manage and view the catalog items fetched from the live dummyjson API. Sorting and filtering models are persisted globally using MobX.
          </Typography>
        </Box>
        <Box sx={{ flexGrow: 1, bgcolor: 'background.paper', borderRadius: '6px', overflow: 'hidden', border: '1px solid', borderColor: 'divider' }}>
          <ItemsTable />
        </Box>
      </Container>
    </Box>
  );
};
