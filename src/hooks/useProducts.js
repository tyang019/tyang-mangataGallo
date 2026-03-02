import { useCallback, useEffect, useMemo, useState } from 'react';
import { fetchCategories, fetchProducts } from '../data/productsApi';

export function useProducts(selectedCategory) {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [refreshKey, setRefreshKey] = useState(0);

  const retry = useCallback(() => {
    setRefreshKey((prev) => prev + 1);
  }, []);

  useEffect(() => {
    const controller = new AbortController();

    async function loadCatalog() {
      setLoading(true);
      setError('');

      try {
        const [fetchedCategories, fetchedProducts] = await Promise.all([
          fetchCategories(controller.signal),
          fetchProducts({ category: selectedCategory, signal: controller.signal }),
        ]);

        setCategories(fetchedCategories);
        setProducts(fetchedProducts);
      } catch (requestError) {
        if (requestError.name !== 'AbortError') {
          setError('Could not load products. Please try again.');
        }
      } finally {
        setLoading(false);
      }
    }

    loadCatalog();

    return () => controller.abort();
  }, [selectedCategory, refreshKey]);

  const totalProducts = useMemo(() => products.length, [products]);

  return {
    categories,
    products,
    totalProducts,
    loading,
    error,
    retry,
  };
}
