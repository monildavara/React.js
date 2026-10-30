import { useState } from 'react'
import Home from './Componets/Home/Home.jsx'
import Header from './Componets/Heder/Header.jsx'
import Footer from './Componets/Footer/Footer.jsx'
import Contact from './Componets/Contact/Contact.jsx'
import About from './Componets/About/About.jsx'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Footer />
      <Home />
      <Contact />
      <Github />
    </>
  )
}

export default App
