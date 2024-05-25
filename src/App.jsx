import Header from './components/Header'
import Product from './components/Product'
import Search from './components/Search'
import Sidebar from './components/Sidebar'
import { StateProvider } from './context/StateProvider'

function App() {

  return (
    <StateProvider>
      <Header />
      {/* <CartItems/> */}
      <Search />
      <Sidebar />
      <Product />
    </StateProvider>
        
  )
}

export default App
