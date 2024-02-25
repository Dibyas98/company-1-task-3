import React, { createContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getWareData } from './component/redux/wareslice';
import ware from './ware';

export const contet = createContext()
export default function Data({children}) {
    const dispatch = useDispatch();
    const [resi,setresi] = useState({});

  useEffect(() => {
    function call(){
    //   console.log('j');
    }
    dispatch(getWareData(ware));
    call()
  },[]);
  
  const data = useSelector((store) => store.ware.waredata)
//   console.log(data);
  return (
    
    <contet.Provider value={{data,resi,setresi}}>
        {children}
    </contet.Provider>
    
  )
}
