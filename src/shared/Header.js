import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function Header(){
    return (
    <header>
        <ul className="flex justify-left text-purple-600 gap-x-3">
          <li className="flex justify-center content-center">
            <h1>ApexCommerce</h1>
            <img src="./img/apex_commerce_logo2_crop.png" width="50" height="50"></img>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/cart" className="flex gap-x-1 items-center"><AiOutlineShoppingCart /> Cart</Link>
          </li>
        </ul>
      </header>
    )
}