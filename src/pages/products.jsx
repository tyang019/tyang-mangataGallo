import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useProducts } from '../hooks/useProducts';
import LoadingState from '../components/states/LoadingState';
import ErrorState from '../components/states/ErrorState';

function ProductCard({ product }) {
  return (
    <article className="product-card">
       <img src={product.image} alt={product.title} />
      <div className="product-content">
        <h3>{product.title}</h3>
        <p className="product-category">{product.category}</p>
        <div className='form'>
          <p className="product-price">${product.price}</p>
          <button type="button">Add to cart</button>
        </div>
        
      </div>
    </article>
  );
}
export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const defaultCategory = searchParams.get('category') || '';
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(defaultCategory);
  const { products, categories, totalProducts, loading, error, retry } = useProducts(selectedCategory);

  const filteredProducts = useMemo(() => {
    if (!searchTerm.trim()) {
      return products;
    }

    const query = searchTerm.toLowerCase();
    return products.filter((product) => product.title.toLowerCase().includes(query));
  }, [products, searchTerm]);

  function handleCategoryChange(event) {
    const nextCategory = event.target.value;
    setSelectedCategory(nextCategory);

    if (nextCategory) {
      setSearchParams({ category: nextCategory });
      return;
    }

    setSearchParams({});
  }
  return (
      <main className="products-page">
      <section className="catalog-controls">
        <h1>Shop Products</h1>
        <p>{loading ? 'Updating catalog...' : `${totalProducts} products loaded`}</p>

        <div className="filter-row">
          <label htmlFor="category">Category</label>
          <select id="category" value={selectedCategory} onChange={handleCategoryChange}>
            <option value="">All categories</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>

          <label htmlFor="search">Search</label>
          <input
            id="search"
            type="text"
            placeholder="Search product name"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
        </div>
      </section>

      {loading && <LoadingState />}
      {error && <ErrorState message={error} onRetry={retry} />}

      {!loading && !error && (
        <section className="product-grid">
          {filteredProducts.length === 0 ? (
            <p className="status-card">No products matched your search.</p>
          ) : (
            filteredProducts.map((product) => <ProductCard key={product.id} product={product} />)
          )}
        </section>
      )}
    </main>
  );
}