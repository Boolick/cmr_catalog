import { z } from 'zod';
import { itemSchema, type Item } from '../model/schema';

export async function fetchItems(): Promise<Item[]> {
  const response = await fetch('https://dummyjson.com/products?limit=20');
  if (!response.ok) {
    throw new Error('Failed to fetch items from dummyjson API');
  }
  const data = await response.json();
  
  const mappedItems = (data.products || []).map((product: any) => ({
    id: String(product.id),
    avatar: product.thumbnail,
    title: product.title,
    description: product.description,
    createdAt: product.meta?.createdAt || new Date().toISOString(),
    score: product.rating,
  }));

  return z.array(itemSchema).parse(mappedItems);
}

