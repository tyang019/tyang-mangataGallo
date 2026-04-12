const API_BASE_URL = 'https://fakestoreapi.com';

const CATEGORY_GROUPS = {
  jewelery: 'jewelery',
  men: "men's clothing",
  women: "women's clothing",
};

const SUBCATEGORY_KEYWORDS = {
  lockets: ['locket', 'pendant'],
  necklaces: ['necklace', 'chain'],
  earrings: ['earring'],
  bracelets: ['bracelet', 'bangle'],
  watches: ['watch'],
  rings: ['ring'],
  suits: ['suit', 'blazer'],
  ties: ['tie'],
  'dress shoes': ['shoe', 'loafer', 'oxford'],
  tuxedos: ['tuxedo'],
  'dress pants': ['pant', 'trouser'],
  gowns: ['gown'],
  dresses: ['dress'],
  heels: ['heel'],
  shirts: ['shirt', 'top', 'blouse'],
};

const UI_CATEGORIES = [
  'lockets',
  'necklaces',
  'earrings',
  'bracelets',
  'watches',
  'rings',
  'suits',
  'ties',
  'dress shoes',
  'tuxedos',
  'dress pants',
  'gowns',
  'dresses',
  'heels',
  'shirts',
];

async function parseResponse(response) {
  if (!response.ok) {
    throw new Error(`Request failed (${response.status})`);
  }

  return response.json();
}

function normalizeProducts(products) {
  return products.map((product) => ({
    id: product.id,
    title: product.title,
    price: product.price,
    category: product.category,
    image: product.image,
  }));
}

async function fetchProductsByGroup(groupCategory, signal) {
  const encodedCategory = encodeURIComponent(groupCategory);
  const response = await fetch(`${API_BASE_URL}/products/category/${encodedCategory}`, { signal });
  const data = await parseResponse(response);
  return normalizeProducts(data);
}

function filterByKeywords(products, keywords) {
  if (!keywords?.length) {
    return products;
  }

  const loweredKeywords = keywords.map((keyword) => keyword.toLowerCase());

  return products.filter((product) => {
    const title = product.title.toLowerCase();
    return loweredKeywords.some((keyword) => title.includes(keyword));
  });
}

export async function fetchCategories() {
  return UI_CATEGORIES;
}

export async function fetchProducts({ category, signal }) {
  if (!category) {
    const [jewelry, men, women] = await Promise.all([
      fetchProductsByGroup(CATEGORY_GROUPS.jewelry, signal),
      fetchProductsByGroup(CATEGORY_GROUPS.men, signal),
      fetchProductsByGroup(CATEGORY_GROUPS.women, signal),
    ]);

    return [...jewelry, ...men, ...women];
  }

 const normalized = category.toLowerCase();

if (CATEGORY_GROUPS[normalized]) {
  return fetchProductsByGroup(CATEGORY_GROUPS[normalized], signal);
}

  const subcategoryGroup =
    ['lockets', 'necklaces', 'earrings', 'bracelets', 'watches', 'rings'].includes(normalized)
      ? CATEGORY_GROUPS.jewelry
      : ['suits', 'ties', 'dress shoes', 'tuxedos', 'dress pants'].includes(normalized)
        ? CATEGORY_GROUPS.men
        : CATEGORY_GROUPS.women;

  const groupProducts = await fetchProductsByGroup(subcategoryGroup, signal);
  const narrowedProducts = filterByKeywords(groupProducts, SUBCATEGORY_KEYWORDS[normalized]);

  return narrowedProducts.length > 0 ? narrowedProducts : groupProducts;
}