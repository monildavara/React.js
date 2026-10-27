import React from 'react'
import ReactDom from 'react-dom/client'
import App from './App.jsx'

function MyApp() {

  return (
        <h1>hello world | Monil</h1>
  )
}

// const reactElement = { 
//     type : 'a',
//     props: {
//         href : 'https://www.google.com/',
//         traget : '_blank'
//     },
//     childern : 'Click me to visit googal'
// }

const antherElement = ( 
  <a href = "https://www.google.com/" traget = "_blank"> visit googal </a>
)

const ReactElement = React.createElement (
  'a',
  {href : 'https://google.com/', target : '_blank'},
  'Click me to visit googal'
)

ReactDom.createRoot(document.getElementById('root')).render(

    <App />    

)
