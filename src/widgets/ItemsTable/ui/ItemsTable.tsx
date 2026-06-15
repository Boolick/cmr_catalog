import React, { useMemo, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import type { GridColDef } from '@mui/x-data-grid';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import { observer } from 'mobx-react-lite';
import { useUIStore } from '../../../app/store';
import { useGetItems } from '../../../entities/item/hooks/useGetItems';
import type { Item } from '../../../entities/item/model/schema';
import { ImageModal } from './ImageModal';
import { RowInfoModal } from './RowInfoModal';

export const ItemsTable: React.FC = observer(() => {
  const { data, isLoading } = useGetItems();
  const uiStore = useUIStore();
  const [selectedImageUrl, setSelectedImageUrl] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);

  const columns = useMemo<GridColDef[]>(() => [
    {
      field: 'avatar',
      headerName: 'Avatar',
      width: 80,
      sortable: false,
      filterable: false,
      renderCell: (params) => {
        const src = params.value;
        return (
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
            <Avatar
              src={src}
              alt={params.row.title || 'Avatar'}
              onClick={(e) => {
                // Prevent row selection when clicking the avatar image
                e.stopPropagation();
                if (src) {
                  setSelectedImageUrl(src);
                }
              }}
              sx={{ cursor: 'pointer' }}
            />
          </Box>
        );
      },
    },
    {
      field: 'title',
      headerName: 'Title',
      flex: 1,
      minWidth: 150,
      renderCell: (params) => (
        <Box sx={{ fontWeight: 'bold', display: 'flex', alignItems: 'center', height: '100%' }}>
          {params.value}
        </Box>
      ),
    },
    {
      field: 'description',
      headerName: 'Description',
      flex: 2,
      minWidth: 250,
      renderCell: (params) => (
        <Box
          sx={{
            fontStyle: 'italic',
            display: 'flex',
            alignItems: 'center',
            height: '100%',
            whiteSpace: 'normal',
            wordBreak: 'break-word',
            py: 1,
          }}
        >
          {params.value}
        </Box>
      ),
    },
    {
      field: 'createdAt',
      headerName: 'Created At',
      width: 180,
      valueFormatter: (value) => {
        if (!value) return '';
        try {
          return new Date(value).toLocaleString();
        } catch {
          return String(value);
        }
      },
    },
    {
      field: 'score',
      headerName: 'Score',
      width: 100,
      type: 'number',
    },
  ], []);

  return (
    <Box sx={{ width: '100%', height: 600 }}>
      <DataGrid
        rows={data || []}
        columns={columns}
        loading={isLoading}
        getRowHeight={() => 'auto'}
        filterModel={uiStore.filterModel}
        onFilterModelChange={(model) => uiStore.setFilterModel(model)}
        sortModel={uiStore.sortModel}
        onSortModelChange={(model) => uiStore.setSortModel(model)}
        onRowClick={(params) => setSelectedItem(params.row as Item)}
        sx={{
          '& .MuiDataGrid-row': {
            minHeight: '100px !important',
            maxHeight: '300px !important',
            cursor: 'pointer',
          },
        }}
      />
      <ImageModal
        open={!!selectedImageUrl}
        onClose={() => setSelectedImageUrl(null)}
        imageUrl={selectedImageUrl || ''}
        title="Avatar Preview"
      />
      <RowInfoModal
        open={!!selectedItem}
        onClose={() => setSelectedItem(null)}
        item={selectedItem}
      />
    </Box>
  );
});


