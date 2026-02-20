import {useState, useEffect} from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
    const [resInfo, setresInfo] = useState(null);

    useEffect(() => {
        fetchMenu();
    }, []);
    const fetchMenu = async () => {
        const data = await fetch("https://private-anon-f7b43873f8-pizzaapp.apiary-mock.com/restaurants/restaurantId/menu");
        const json = await data.json();
        console.log(json);
    };

    return ( 

        <div className="menu">
            <h2>res name</h2>
            <ul>
                <li>cuiseine</li>
            </ul>
        </div>
    );
};
export default RestaurantMenu;
