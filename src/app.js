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
import {CartProvider} from "./utils/CartContext.js";
import Login from "./components/Login";
import {AuthProvider} from "./utils/AuthContext";
import Signup from "./components/Signup.jsx";
import ProtectedRoute from "./utils/ProtectedRoute.jsx";

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
                element: (
                    <ProtectedRoute>
                        {" "}
                        <RestaurantMenu />
                    </ProtectedRoute>
                ),
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/signup",
                element: <Signup />,
            },
            {
                path: "/cart",
                element: (
                    <ProtectedRoute>
                        <Cart />
                    </ProtectedRoute>
                ),
            },
            {
                path: "/login",
                element: <Login />,
            },
        ],
        errorElement: <Error />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout />);
root.render(
    <AuthProvider>
        <CartProvider>
            <RouterProvider router={AppRouter} />
        </CartProvider>
    </AuthProvider>
);
