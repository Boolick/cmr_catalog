import { z } from 'zod';
import { itemSchema, type Item } from '../model/schema';
import { mockItems } from '../model/mocks';

export async function fetchItems(): Promise<Item[]> {
  await new Promise((resolve) => setTimeout(resolve, 800));
  return z.array(itemSchema).parse(mockItems);
}
