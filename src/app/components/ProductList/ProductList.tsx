'use client';

import { fetchProducts } from '@/services/fetchProducts';
import { useEffect, useState } from 'react';
import ProductItem from './ProductItem';
import styles from './styles.module.css';
import { Product } from './types';

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadProducts = async () => {
      setIsLoading(true);
      const fetchedProducts = await fetchProducts();
      setProducts(fetchedProducts);
      setIsLoading(false);
    };

    loadProducts();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Product List</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul className={styles.list}>
          {products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </ul>
      )}
    </div>
  );
}
