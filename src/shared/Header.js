import { Link } from "react-router-dom";

export default function Header(){
    return (
    <header>
        <ul className="flex justify-left text-amber-500 gap-x-3">
          <li>
            <h1>ApexCommerce</h1>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </header>
    )
}