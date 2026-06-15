import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import type { Item } from '../../../entities/item';

interface RowInfoModalProps {
  open: boolean;
  onClose: () => void;
  item: Item | null;
}

export const RowInfoModal: React.FC<RowInfoModalProps> = ({ open, onClose, item }) => {
  if (!item) return null;

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Item Details</DialogTitle>
      <DialogContent dividers sx={{ p: 3 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 3 }}>
          <Avatar
            src={item.avatar}
            alt={item.title}
            sx={{ width: 90, height: 90, mb: 2, boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
          />
          <Typography variant="h5" align="center" gutterBottom>
            {item.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" gutterBottom>
            ID: {item.id}
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Box>
            <Typography variant="subtitle2" color="textSecondary">
              Description
            </Typography>
            <Typography variant="body1" sx={{ whiteSpace: 'pre-wrap', fontStyle: 'italic' }}>
              {item.description}
            </Typography>
          </Box>
          
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
            <Box>
              <Typography variant="subtitle2" color="textSecondary">
                Created At
              </Typography>
              <Typography variant="body1">
                {new Date(item.createdAt).toLocaleString()}
              </Typography>
            </Box>
            <Box sx={{ textAlign: 'right' }}>
              <Typography variant="subtitle2" color="textSecondary">
                Score
              </Typography>
              <Typography variant="body1" fontWeight="bold">
                {item.score}
              </Typography>
            </Box>
          </Box>
        </Box>
      </DialogContent>
      <DialogActions sx={{ px: 3, py: 2 }}>
        <Button onClick={onClose} variant="contained" color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};
