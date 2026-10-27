import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0);

  const addValue = () => {
    console.log("clicked", counter);
    setCounter(counter + 1);
  }

  const removeValue = () => {
    console.log("clicked", counter);
    setCounter(counter - 1);
  }

if (counter < 0) {
  setCounter(0);
}else if (counter > 20) {
  setCounter(20);
}


  return (
  <>
    <h1>Monil M Davra</h1>
    <h2>Counter value: {counter}</h2>

    <button
    onClick={addValue}
    >Add Value : {counter}</button>
    <br />
    <button onClick={removeValue}>Remove Value : {counter}</button>

    <p>footer : {counter}</p>
  </>
  )        
  
}

export default App
