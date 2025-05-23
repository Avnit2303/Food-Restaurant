import { useEffect, useState } from "react";
import ShowresMenu from "./ShowresMenu";
import { useParams } from "react-router";


const RestaurantMenu = () =>{
      const[cardinfo,setcardinfo]=useState([])
      
    const {resid} = useParams()

    useEffect(()=>{
        fetchdata();

    },[])

    const fetchdata = async () =>{
        const fetxhapi = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.3038945&lng=70.80215989999999&restaurantId="+resid);
        const datas = await fetxhapi.json()
        setcardinfo(datas?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
    }
    
    // const list = cardinfo?.[1].card.card.itemCards[0].card.info.name;
    // console.log(list)
    return(
        <>
        {
            cardinfo.map((list,index)=>(
                <ShowresMenu key = {index} menu = {list}/>
            ))
        }
        
        </>
    )
}

export default RestaurantMenu