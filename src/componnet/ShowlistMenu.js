import React from 'react'
import { CDN_URL } from '../utils/contant'
import { useDispatch } from 'react-redux'
import { additems } from '../utils/cartSlice'
import Cart from './Cart'

function ShowlistMenu({ item }) {
  const dispatch = useDispatch()
  const handleitme = (i) =>{
    dispatch(additems(i))
  }

  
  return (  
    <>
      <div>
        {
          item.map((i,index) => (
            <div key={i.card?.info?.id || index} className='border-b-2 border-gray-200 p-2 m-2 flex justify-between'>
              <div className='w-9/12'>
                <div className='py-2'>
                  <span>{i.card?.info?.name}-</span>
                  <span>₹{i.card?.info?.price/100}</span>
                  <p>{i.card?.info?.description}</p>
                </div>
              </div>
            <div className='w-3/12 p-4 relative'>
              <img src={CDN_URL + i.card?.info?.imageId} className='w-full rounded-xl'/>
              <div className='absolute bottom-0 flex items-center px-7'>
              <button className='text-green-400 text-lg border-2 bg-gray-200  border-gray-400 rounded-lg shadow-2xl py-1 px-7' onClick={() => handleitme(i)}>ADD</button>
              </div>
            </div>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default ShowlistMenu