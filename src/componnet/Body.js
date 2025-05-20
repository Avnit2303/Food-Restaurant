import Restaurantcard from "./Restaurantcard";
import { useEffect, useState } from "react";

const Body = () => {
    const [resobj, setresobj] = useState([])
    useEffect(() => {
        fetchdata()
    }, [])


    const fetchdata = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.3038945&lng=70.80215989999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const final = await data.json()
        setresobj(final?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    };
    console.log(resobj)
      console.log(typeof(resobj))

      

    return (
        <>
            <div className="p-5 gap-6 flex flex-wrap overflow-hidden ">
                {
                    resobj.map((list) => < Restaurantcard key={list.info.id} resdata={list}/>)
                }
            </div>
        </>
    )
}


export default Body;