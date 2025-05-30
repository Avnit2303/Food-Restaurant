import { Link, useParams } from "react-router";
import Restaurantcard from "./Restaurantcard";
import { useContext, useEffect, useState } from "react";
import ShimerUi from "./ShimerUi";
import UserContexts from "../utils/UserContext";

const Body = () => {
    const [resobj, setresobj] = useState([])
    const {loggedinUser,setusername} = useContext(UserContexts)
    useEffect(() => {
        fetchdata()
    }, [])

    const fetchdata = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.3038945&lng=70.80215989999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const final = await data.json()
        setresobj(final?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    };
    if(resobj.length === 0){
        return  <ShimerUi />
    }


 return  (
        <>
            <div className="flex justify-center p-3">
                <label className="flex items-center">Name:</label>
                <input className="border-2 border-black p-1  items-center " value={loggedinUser} onChange={(e) => setusername(e.target.value)}></input>
            </div>
            <div className="p-5 gap-6 flex flex-wrap overflow-hidden justify-center">
                {

                    resobj.map((list) => (
                        <Link to={"/restaurant/" + list.info.id} key={list.info.id}>
                            < Restaurantcard resdata={list} />
                        </Link>
                    ))
                }
            </div>
        </>
    )
}


export default Body;