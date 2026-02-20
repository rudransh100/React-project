import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Heading from "./components/Heading";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Cart from "./components/Cart";
import RestaurantMenu from "./components/RestaurantMenu.jsx";


const AppLayout = () => {
    return (
        <div className="app">
            <Heading />
            <Outlet />
        </div>
    );
};

const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/restaurant/:id",
                element: <RestaurantMenu/>,
            },
            {
                path: "/cart",
                element: <Cart />,
            },
        ],
        errorElement: <Error />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout />);
root.render(<RouterProvider router={AppRouter} />);
