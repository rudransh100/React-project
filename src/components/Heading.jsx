import {LOGO_URL} from "../utils/content";
import {useState} from "react";
import {Link} from "react-router-dom";
import {useCart} from "../utils/CartContext";
import {FaShoppingCart, FaUser} from "react-icons/fa";

const Heading = () => {
    const [btnNameReact, setbtnNameReact] = useState("Login");

    const {cart} = useCart();
    const totalItems = cart.reduce((acc, item) => acc + item.qty, 0);

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} />
            </div>

            <div className="nav-items">
                <ul>
                    <li>
                        <Link to="/" className="nav-btn">
                            Home
                        </Link>
                    </li>

                    <li>
                        <Link to="/about" className="nav-btn">
                            About us
                        </Link>
                    </li>

                    <li>
                        <Link to="/contact" className="nav-btn">
                            Contact us
                        </Link>
                    </li>

                    <li className="cart-icon">
                        <Link to="/cart">
                            <FaShoppingCart size={22} />
                            {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
                        </Link>
                    </li>

                    <li>
                        <button
                            className="login-btn"
                            onClick={() =>
                                btnNameReact === "Login" ? setbtnNameReact("Logout") : setbtnNameReact("Login")
                            }
                        >
                            <FaUser className="user-icon" />
                            {btnNameReact}
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Heading;
