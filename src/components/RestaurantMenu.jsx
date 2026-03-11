
import { useParams, Link } from "react-router-dom";
import restaurantsMenu from "../utils/menu.js";
import resList from "../utils/mockdata.js"; // import restaurant list
import { useCart } from "../utils/CartContext.js";

const RestaurantMenu = () => {

  const { id } = useParams();
  const { addItem } = useCart();

  const restaurant = restaurantsMenu.find(
    (res) => res.restaurantID === Number(id)
  );

  const restaurantInfo = resList.find(
    (res) => res.restaurantID === Number(id)
  );

  if (!restaurant) return <Shimmer />;

  return (
    <div>

      {/* HERO SECTION */}

      <div
        className="restaurant-hero"
        style={{
          backgroundImage: `url(${restaurantInfo.image})`
        }}
      >
        <div className="hero-overlay">

          <Link to="/" className="back-link">
            ← Back to Restaurants
          </Link>

          <h1 className="hero-name">
            {restaurantInfo.restaurantName}
          </h1>

          <p className="hero-type">
            {restaurantInfo.type}
          </p>

          <div className="hero-details">

            <span className="rating">
              ⭐ {restaurantInfo.rating}
            </span>

            <span>
              ⏱ {restaurantInfo.deliveryTime}
            </span>

            <span>
              📍 {restaurantInfo.address}
            </span>

          </div>

        </div>
      </div>


      {/* MENU SECTION */}

      <div className="menu-page">

        {restaurant?.menu?.map((category) => (

          <div className="menu-category" key={category.category}>

            <h2 className="category-title">
              {category.category}
            </h2>

            <div className="menu-items">

              {category.items.map((item) => (

                <div className="menu-card" key={item.id}>

                  <div className="menu-info">
                    <h3>{item.name}</h3>
                    <p className="price">₹{item.price}</p>
                  </div>

                  <div className="menu-right">

                    <img
                      src={
                        item.image ||
                        "https://cdn-icons-png.flaticon.com/512/1046/1046784.png"
                      }
                      className="food-img"
                    />

                    <button
                      className="add-btn"
                      onClick={() => addItem(item)}
                    >
                      + Add
                    </button>

                  </div>

                </div>

              ))}

            </div>

          </div>

        ))}

      </div>

    </div>
  );
};

export default RestaurantMenu;