import { Link } from "react-router";
import  UserContexts  from "../utils/UserContext"
import { useContext } from "react";
import { useSelector } from "react-redux";

const Header = () => {

    const {loggedinUser} = useContext(UserContexts)
    const cartitems = useSelector((store)=>store.cart.items)
    console.log(cartitems)

    return (
        <>
            <div className="flex justify-between m-auto px-7 py-4">
                <div className="flex">
                    {/* <img src="./ss.png" alt="logo" /> */}
                    <p className="text-orange-500 text-4xl">Swiggy</p>
                </div>
                <div className="flex">
                    <ul className="flex gap-8 text-xl text-orange-300 items-center cursor-pointer">
                        <Link to={"/"}>
                            <li>Home</li>
                        </Link>
                        <Link to={"/about"}>
                            <li>About</li>
                        </Link>
                        <Link to={"/contact"}>
                            <li>Contact</li>
                        </Link>
                        <Link to={"/cart"}>
                        <li className="font-bold ">Cart- ({cartitems.length})</li>
                        </Link>
                        <li>{loggedinUser}</li>
                    </ul>
                </div>
            </div>
            <hr className="border-t-3 border-orange-500"></hr>
        </>
    )
}

export default Header;