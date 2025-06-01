import { useDispatch, useSelector } from "react-redux";
import ShowlistMenu from "./ShowlistMenu";
import { clearcart, removeitem } from "../utils/cartSlice";

const Cart = () => {

    const cartlist = useSelector((store) => store.cart.items)
    const dispatch = useDispatch()

    const handleclear = ()=>{
          dispatch(clearcart())
        } 

    return (
        <>
            <div className="flex justify-center">
              <h1>cart</h1>
              </div>
              <div className="flex justify-center p-1">
              <button className="bg-black p-1 rounded-md text-white" onClick={handleclear}>clear cart</button>
              {cartlist.length === 0 && <h1>cart is empty</h1>}
              </div>
            <div className="w-6/12 bg-gray-100 my-3 shadow-lg mx-auto">
           <ShowlistMenu item = {cartlist} />
            </div>
        </>
    )
}


export default Cart;

