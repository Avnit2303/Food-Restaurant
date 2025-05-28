import { useState } from "react";
import ShowlistMenu from "./ShowlistMenu";

const ShowresMenu = ({ data,showitems,setshowitem }) => {
    const handleclick = () =>{
        setshowitem()
    }

    console.log(data)
    return (
        <>

            <div>
                <div className="w-6/12 bg-gray-100 my-3 shadow-lg mx-auto">
                    <div className="flex justify-between cursor-pointer" onClick={handleclick}>
                        <span className="text-2xl">{data.title} ({data?.itemCards?.length})</span>
                        <span>🔽</span>
                    </div>
                   { showitems && <ShowlistMenu item ={data.itemCards}/> }
                </div>

            </div>
        </>
    )
}

export default ShowresMenu;