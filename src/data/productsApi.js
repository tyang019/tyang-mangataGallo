const API_BASE_URL = 'https://fakestoreapi.com';

async function handleResponse(response) {
  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  return response.json();
}

export async function fetchCategories(signal) {
  const response = await fetch(`${API_BASE_URL}/products/categories`, { signal });
  return handleResponse(response);
}

export async function fetchProducts({ category, signal }) {
  const endpoint = category
    ? `${API_BASE_URL}/products/category/${encodeURIComponent(category)}`
    : `${API_BASE_URL}/products`;

  const response = await fetch(endpoint, { signal });
  return handleResponse(response);
}
