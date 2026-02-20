import { CDN_URL } from "../utils/content";

const RestaurantCard = (props) => {
    const {resData} = props;
    const {
      restaurantName,
      image,
      address,
      rating,
      deliveryTime,
      type,

    }= resData;
    return (
        <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
            <img
                className="food-logo"
                alt="food-logo"
                src={
                    image
                }
            />
            <h3>{restaurantName}</h3>
            <h4>{type}</h4>
            <h4>{address}</h4> 
            <h4>{deliveryTime}</h4>
            <h4>
            <i className="ri-star-fill" style={{ color: "gold", marginRight: "5px" }}></i>
             {rating}stars
            </h4>
        </div>
    );
};

export default RestaurantCard;