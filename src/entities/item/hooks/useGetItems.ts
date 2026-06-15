import { useQuery } from '@tanstack/react-query';
import { fetchItems } from '../api/fetchItems';

export function useGetItems() {
  return useQuery({
    queryKey: ['items'],
    queryFn: fetchItems,
  });
}
