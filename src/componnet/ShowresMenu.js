import ShowlistMenu from "./ShowlistMenu";

const ShowresMenu = (props) =>{

    const {menu} = props;
    const titles = menu?.card?.card;
    const items = menu?.card?.card?.categories?.itemCards;

    return(
        <>
               <h1 className="text-2xl flex justify-center">{titles?.title}</h1>

                {
                    items?.map((itemslist,index)=>(
                        <div  key={index}>
                        <ShowlistMenu menus = {itemslist}/>
                        </div>
                    ))
                }                
        </>
    )
}

export default ShowresMenu;