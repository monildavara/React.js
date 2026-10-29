import { useState, useCallback, useEffect, useRef } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [number, setNumbers] = useState(false)
  const [character, setCharacters] = useState(false)
  const [password, setPassword] = useState('')

const PasswordRef = useRef(null)


  const generatePassword = useCallback(() => {
    let pass='';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

    if (number) str += '0123456789'
    if (character) str += '!@#$%^&*()_+~`|}{[]:;?><,./-='

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)

    }
    setPassword(pass)
  
    }, [length, number, character, setPassword])

    const copyPassword = useCallback(() => {
      
    }, [password])

    useEffect(() => {
      generatePassword()
    }, [length, number, character, generatePassword])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700">
          <h1 className=" text-center text-white mx-0 my-3 ">
        PASSWORD GENERATOR </h1>
        <div className= 'flex shadow rounded-lg overflow-hidden mb-4 '>
        <input 
        type="text"
        value={password}
        className='outline-none w-full py-1 px-3'
        placeholder='Password'
        readOnly
        ref={PasswordRef}
        />
          <button
          onClick={copyPassword}
          className= 'outline-none bg-blue-700 text-white px-3 py-1 shrink-0'>Copy</button>
        </div>
          <div className= "flex text-sm gap-x-2">
            <div className= "flex items-center gap-x-1">
              <input
              type="range"
              min = "8"
              max = "50"
              value={length}
              className= "cursor-pointer"
              onChange={(e) => setLength(e.target.value)}
              /> <label>Length : {length}</label>
          </div>
          <div className= "flex items-center gap-x-1" />
            <input
            type="checkbox"
            defaultchecked={number}
            id="number"
            onChange={() => {setNumbers((prev) => !prev)}}
            />
            <label htmlFor="number"> Numbers</label>
          </div>
          <div className= "flex items-center gap-x-1" />
            <input
            type="checkbox"
            defaultchecked={character}
            id="character"
            onChange={() => {setCharacters((prev) => !prev)}}
            />
            <label htmlFor="character">Characters</label>
          </div>
          <div>
      </div>
    </>
  )
}

export default App
