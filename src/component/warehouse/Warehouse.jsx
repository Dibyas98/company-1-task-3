import React from 'react'
import ware from '../../ware'
import WarehouseCard from './WarehouseCard'
import { nanoid } from 'nanoid'

export default function Warehouse() {
  return (
    <div style={{display:'flex',flexWrap:'wrap',gap:'1rem',justifyContent:'center',marginTop:'1rem'}}>
      {
        ware.map((ele) =>{
            return <WarehouseCard key={nanoid()} ware={ele}></WarehouseCard>
        })
      }
    </div>
  )
}
