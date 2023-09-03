import logo from './logo.svg';
import './App.css';
import Products from './pages/Products';
import ShoppingCart from './pages/ShoppingCart';
import Cart from './pages/Cart';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './shared/Header';
import Layout from './components/Layout';
import Home from './pages/Home';
import ProductDescription from './pages/ProductDescription';
import { ShopContextProvider } from './context/shop-context';

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDescription />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Layout>
      </ShopContextProvider>
    </div>
  );
}

export default App;
