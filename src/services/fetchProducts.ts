import { Product } from '../app/components/ProductList/types';

export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const response = await fetch('/api/products');
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    const data: Product[] = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};
