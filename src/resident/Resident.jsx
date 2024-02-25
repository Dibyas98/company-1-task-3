import React, { useContext, useEffect, useState } from 'react'
import { contet } from '../Data'
import { useParams } from 'react-router-dom';

export default function Resident() {
    const{resi,setresi,data}= useContext(contet);
    const [house,sethouse] = useState({});

    const param = useParams();
    console.log(param);
    useEffect(() => {
        // Find the house data corresponding to the id
        const selectedHouse = data.find((ele) => ele.id == param.id);
        if (selectedHouse) {
            sethouse(selectedHouse); // Set the found house data
        }
    }, [param]);
    console.log(house);
    
  return (
    <div className='resi'>
      <h1>City:{house.city}</h1>
      <p>is Live:{house.is_Live?'availabe':'not available'}</p>
      <p>Name:{house.name}</p>

      <p>space available:{house.space_available}</p>

    <p>Type:{house.type}</p>


    </div>
  )
}
