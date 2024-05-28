import { useEffect, useState } from 'react';
import Header from './components/Header';
import Product from './components/Product';
import Search from './components/Search';
import data from './utils/data';
import FilterContainer from './components/FilterContainer';
import Loader from './components/Loader';
import { StateProvider } from './context/StateProvider';

const url = data['URL'];

function App() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState('');
  const [searchedProducts, setSearchedProducts] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error('Something went wrong');
        }

        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const filterSearchedProducts = () => {
      const filtered = products.filter(item =>
        item.name.toLowerCase().includes(query.toLowerCase())
      );
      setSearchedProducts(filtered);
    };

    filterSearchedProducts();
  }, [query, products]);

  useEffect(() => {
    const storageProducts = JSON.parse(localStorage.getItem('cartItems'));

    if (storageProducts && storageProducts.length > 0) {
      setProducts(storageProducts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(products));
  }, [products]);

  return (
    <StateProvider>
      <Header />
      <Search query={query} setQuery={setQuery} />
      <FilterContainer
        products={products}
        setFilteredProducts={setFilteredProducts}
        filteredProducts={filteredProducts}
        setIsFiltered={setIsFiltered}
      />
      {isLoading ? (
        <Loader />
      ) : isFiltered ? (
        <Product products={filteredProducts} />
      ) : query.length ? (
        <Product products={searchedProducts} />
      ) : (
        <Product products={products} />
      )}
    </StateProvider>
  );
}

export default App;
