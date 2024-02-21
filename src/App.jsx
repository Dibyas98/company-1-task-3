import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/header/Header'
import Warehouse from './component/warehouse/Warehouse'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Header></Header>
      <Warehouse></Warehouse>
    </>
  )
}

export default App
