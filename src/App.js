import logo from './logo.svg';
import './App.css';
import Products from './Products';
import ShoppingCart from './ShoppingCart';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './shared/Header';
import Layout from './components/Layout';
import Home from './Home';
import ProductDescription from './components/ProductDescription';

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDescription />} />
          <Route path="/cart" element={<ShoppingCart />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
