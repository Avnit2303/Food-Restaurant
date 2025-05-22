import React, { Children } from "react";
import ReactDOM from "react-dom/client"
import Body from "./componnet/Body";
import Header from "./componnet/Header";
import About from "./componnet/About";
import Contact from "./componnet/Contact";
import RestaurntMenu from "./componnet/RestaurantMenu"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";



const App = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

const approuter = createBrowserRouter([
    {
        path: "/",
        element: <App />,

    children:[
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
        element: <Contact />
    },
    {
        path: "/restaurant/:resid",
        element: <RestaurntMenu />
    },
]
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={approuter} />)