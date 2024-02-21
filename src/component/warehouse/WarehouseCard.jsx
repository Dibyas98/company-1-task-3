import React from 'react'

export default function WarehouseCard({ware}) {
  return (
    <div style={{border:'2px solid black',width:'300px'}}>
      <h1 style={{textOverflow:'ellipsis',whiteSpace:'nowrap',overflow:'hidden'}}>Name:{ware.name}</h1>
      <h2>ciyt:{ware.city}</h2>
      <h3>Live status:{ware.is_live}</h3>
    </div>
  )
}
