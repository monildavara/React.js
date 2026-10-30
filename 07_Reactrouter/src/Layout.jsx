import { useState } from 'react'
import Home from './Componets/Home/Home.jsx'
import Header from './Componets/Heder/Header.jsx'
import Footer from './Componets/Footer/Footer.jsx'
import { Outlet } from 'react-router-dom'


function Layout() {

    return (
    <>
        <h1 className='bg-green-600 p-4'>MONIL DAVRA</h1>
        <Header />
        <Outlet />
        <Footer />
        
    </>
  )
}

export default Layout