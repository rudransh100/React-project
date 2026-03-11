import {LOGO_URL} from "../utils/content";
import {useState} from "react";
import {Link} from "react-router-dom";
import {useCart} from "../utils/CartContext";
import {FaShoppingCart, FaUser} from "react-icons/fa";
import {useNavigate} from "react-router-dom";
import {useAuth} from "../utils/AuthContext";

const Heading = () => {
    const [btnNameReact, setbtnNameReact] = useState("Login");
    const navigate = useNavigate();
    const {cart} = useCart();
    const {user, logout} = useAuth();
    const totalItems = cart.reduce((acc, item) => acc + item.qty, 0);

    return (
        <div className="header">
            <div className="logo-container">
                <Link to="/">
                    <img className="logo" src={LOGO_URL} />
                </Link>
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
                        {user ? (
                            <button className="login-btn" onClick={logout}>
                                Logout
                            </button>
                        ) : (
                            <button className="login-btn" onClick={() => navigate("/login")}>
                                Login
                            </button>
                        )}
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Heading;
