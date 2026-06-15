import { z } from "zod";
import { itemSchema, type Item } from "../model/schema";

interface DummyJsonProduct {
  id: number | string;
  thumbnail: string;
  title: string;
  description: string;
  meta?: {
    createdAt?: string;
  };
  rating: number;
}

interface DummyJsonResponse {
  products?: DummyJsonProduct[];
}

export async function fetchItems(): Promise<Item[]> {
  const baseUrl = import.meta.env.VITE_API_URL || "https://dummyjson.com";
  const response = await fetch(`${baseUrl}/products?limit=100`);
  if (!response.ok) {
    throw new Error("Failed to fetch items from dummyjson API");
  }
  const data = (await response.json()) as DummyJsonResponse;

  const mappedItems = (data.products || []).map((product) => ({
    id: String(product.id),
    avatar: product.thumbnail,
    title: product.title,
    description: product.description,
    createdAt: product.meta?.createdAt || new Date().toISOString(),
    score: product.rating,
  }));

  return z.array(itemSchema).parse(mappedItems);
}

