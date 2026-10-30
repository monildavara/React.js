import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Componets/Home/Home.jsx'
import About from './Componets/About/About.jsx'
import Contact from './Componets/Contact/Contact.jsx'
import Github, { githubInfoLoader } from './Componets/Github/Github.jsx'
import User from './Componets/User/User.jsx'

// const router = createBrowserRouter([
//   {
//     path : "/",
//     element : <Layout />,
//     children : [ 
//       {
//         path : "",
//         element : <Home />
//       },
//       {
//         path : "About",
//         element : <About />
//       },
//       {
//         path : "Contact",
//         element : <Contact />
//       },
//       {
//         // loader:true,
//         path : "Github",
//         element : <Github />
//       }, 
//       {
//         path : "User/:id",
//         element : <User />
//       }
//     ]
//   }
// ])



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />} >
      <Route path='' element={<Home />} />
      <Route path='About' element={<About />} />
      <Route path='Contact' element={<Contact />} />
      <Route path = 'User/:id' element={<User />} />
      <Route path='Github' loader={githubInfoLoader} element={<Github />} />
      </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
