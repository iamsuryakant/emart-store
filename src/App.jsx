import { useEffect, useState } from 'react';
import Header from './components/Header';
import Product from './components/Product';
import Search from './components/Search';
import Sidebar from './components/Sidebar';
import { StateProvider } from './context/StateProvider';
import data from './utils/data';

const url = data['URL'];

function App() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState('');
  const [searchedProducts, setsearchedProducts] = useState([]);

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

        // FilterSearched Products

        const filteredProducts = data.filter(item =>
          item.name.toLowerCase().includes(query.toLowerCase())
        );

        setsearchedProducts(filteredProducts);
      } catch (error) {
        console.error(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, [query]);

  console.log(searchedProducts);

  return (
    <StateProvider>
      <Header />
      {/* <CartItems/> */}
      <Search query={query} setQuery={setQuery} />
      <Sidebar />
      {searchedProducts.length ? (
        <Product products={searchedProducts} isLoading={isLoading} />
      ) : (
        <Product products={products} isLoading={isLoading} />
      )}
    </StateProvider>
  );
}

export default App;
