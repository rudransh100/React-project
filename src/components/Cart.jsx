import {useCart} from "../utils/CartContext";
import Footer from "./Footer.jsx";

const Cart = () => {
    const {cart, increaseQty, decreaseQty, removeItem} = useCart();

    const subtotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
    const delivery = subtotal > 500 ? 0 : 50;
    const tax = subtotal * 0.05;
    const total = subtotal + tax + delivery;

    if (cart.length === 0) {
        return (
            <div className="empty-cart">
                <h2>Your cart is empty</h2>
                <p>Add some delicious food first 🍔</p>
            </div>
        );
    }

    return (
        <div className="cart-page">
            <div className="cart-hero">
                <h1>Your Cart</h1>
                <p>Review your items before checkout</p>
            </div>

            <div className="cart-container">
                <div className="cart-items">
                    {cart.map((item) => (
                        <div className="cart-card" key={item.id}>
                            <img
                                src={item.image || "https://cdn-icons-png.flaticon.com/512/1046/1046784.png"}
                                className="cart-img"
                            />

                            <div className="cart-info">
                                <h3>{item.name}</h3>

                                <div className="qty-box">
                                    <button onClick={() => decreaseQty(item.id)}>-</button>
                                    <span>{item.qty}</span>
                                    <button onClick={() => increaseQty(item.id)}>+</button>
                                </div>
                            </div>

                            <div className="cart-right">
                                <p className="cart-price">₹{item.price * item.qty}</p>

                                <button className="delete-btn" onClick={() => removeItem(item.id)}>
                                    🗑
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="order-summary">
                    <h2>Order Summary</h2>

                    <div className="summary-row">
                        <span>Subtotal</span>
                        <span>₹{subtotal}</span>
                    </div>

                    <div className="summary-row">
                        <span>Delivery Fee</span>
                        <span>₹{delivery}</span>
                    </div>

                    <div className="summary-row">
                        <span>Tax (5%)</span>
                        <span>₹{tax.toFixed(2)}</span>
                    </div>

                    <hr />

                    <div className="summary-total">
                        <span>Total</span>
                        <span>₹{total.toFixed(2)}</span>
                    </div>

                    <button className="checkout-btn">Proceed to Checkout</button>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Cart;
