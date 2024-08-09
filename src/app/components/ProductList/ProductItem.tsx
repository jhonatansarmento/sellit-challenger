import styles from './styles.module.css';
import { Product } from './types';

interface ProductItemProps {
  product: Product;
}

export default function ProductItem({ product }: ProductItemProps) {
  return (
    <li className={styles.listItem}>
      <img
        src={product.thumbnail}
        alt={product.name}
        className={styles.thumbnail}
      />
      <h2 className={styles.title}>{product.name}</h2>
      <p className={styles.description}>{product.description}</p>
      <p className={styles.producer}>Produced by: {product.producer_name}</p>
      <p className={styles.price}>${product.price.toFixed(2)}</p>
    </li>
  );
}
