import React from 'react'

function ShowlistMenu(pops) {
    const {menus} = pops;
    console.log(menus)

  return (
    <div>{menus.card.info.name}</div>
  )
}

export default ShowlistMenu