import { useEffect, useState } from 'react'
import './App.css'
import CartItems from './components/CartItems'
import Header from './components/Header'
import Product from './components/Product'
import Search from './components/Search'
import Sidebar from './components/Sidebar'
import data from './utils/data';

function App() {
  const [cartValue, setCartValue] = useState(null); 
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const url = data['URL'];

  useEffect(() => {
    setIsLoading(true);
    const fetchProducts = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setProducts(data);
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }
    fetchProducts();
  }, []);

  function handleAddToCart(cart) { 
    setCartValue(cart + 1);
    console.log(cart);
  }

  return (
    <>
      <Header cartValue={cartValue} />
        {/* <CartItems/> */}
        <Search />
        <Sidebar />
      <Product isLoading={isLoading} products={products} handleAddToCart={handleAddToCart} />
    </>
        
  )
}

export default App
