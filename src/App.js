import logo from './logo.svg';
import './App.css';
import Products from './Products';
import ShoppingCart from './ShoppingCart';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './shared/Header';
import Layout from './components/Layout';
import Home from './Home';

function App() {
  return (
    <div className="App">

      <Layout>
        <h1>ApexCommerce</h1>
      </Layout>

      <main>
        <div style={{display: 'flex', background: 'green'}}>
          
        </div>
      </main>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<ShoppingCart />} />
      </Routes>

      <footer>

      </footer>
    </div>
  );
}

export default App;
