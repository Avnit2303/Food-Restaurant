import React from 'react'
import { CDN_URL } from '../utils/contant'

function ShowlistMenu({ item }) {
  console.log(item)

  return (

    <>
      <div>
        {
          item.map((i) => (
            <div key={i.card?.info?.id} className='border-b-2 border-gray-200 p-2 m-2 flex justify-between'>
              <div className='w-9/12'>
                <div className='py-2'>
                  <span>{i.card?.info?.name}-</span>
                  <span>₹{i.card?.info?.price/100}</span>
                  <p>{i.card?.info?.description}</p>
                </div>
              </div>
            <div className='w-3/12 p-4'>
              <img src={CDN_URL + i.card?.info?.imageId} className='w-full'/>
            </div>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default ShowlistMenu