import { CDN_URL } from "../utils/contant"

const Restaurantcard = (props) => {
    const { resdata } = props
    const { cloudinaryImageId, name, avgRatingString, cuisines, areaName, sla, aggregatedDiscountInfoV3 } = resdata?.info
    return (
        <>
            <div className=" h-80 w-72 hover:cursor-pointer mx-auto transition duration-150 ease-in-out hover:scale-90 ">
                <div className="relative">
                    <img src={CDN_URL + cloudinaryImageId}
                        className=" w-72 h-48 rounded-xl"/>
                        <p className="absolute bottom-2 left-2 text-xl text-white  px-2 py-1">{aggregatedDiscountInfoV3?.header}{aggregatedDiscountInfoV3?.subHeader }</p>
                </div>
                <div className="mx-2">
                    <h1 className="text-2xl">{name}</h1>
                    <h4 className="text-xl">{avgRatingString} . {sla.slaString}</h4>
                    <h2 className="text-gray-500">{cuisines.join(",")}</h2>
                    <h2 className="text-gray-500 ">{areaName}</h2>
                </div>
            </div>
        </>
    )
}

export default Restaurantcard;