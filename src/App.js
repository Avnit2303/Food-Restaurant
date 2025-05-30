import React, { Children, useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom/client"
import Body from "./componnet/Body";
import Header from "./componnet/Header";
import About from "./componnet/About";
import Contact from "./componnet/Contact";
import RestaurntMenu from "./componnet/RestaurantMenu"
import { createBrowserRouter, RouterProvider, Outlet, useParams } from "react-router";
import UserContexts from "./utils/UserContext";



const App = () => {
    const [username, setusername]= useState("Avnit")
    
    const { loggedinUser } = useContext(UserContexts)
    // useEffect(() => {
    //     const data = {
    //         names: "patel",
    //     };
    //     setusername(data.names)

    // }, []);

    return (
        <>
            <UserContexts.Provider value={{ loggedinUser: username,setusername}}>
                <Header />
                <Outlet />
            </UserContexts.Provider>
        </>
    )
}

const approuter = createBrowserRouter([
    {
        path: "/",
        element: <App />,

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