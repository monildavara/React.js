import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Card from './Components/Card.jsx'


function App() {
  const [count, setCount] = useState(0)

  let MyObj = {
    UserName: "Monil",
    Age: 22,
    Address: "India"
  }

  let MyArr = ["Monil", "Kumar", "Singh", "India"]

  return (
    <>
    <h1 className = 'bg-blue-700 text-black text-center p-2 rounded-3xl'>Tellwind Test in Vite</h1>
    <Card UserName = "Monil" btnText = "click me " />
    <Card UserName = "davra"  />

    
    </>
  )
}

export default App