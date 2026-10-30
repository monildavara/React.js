import { useState } from 'react'                  

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      <div className='w-full h-screen duration-200'
      style={{ backgroundColor: color }}
      >
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-3 rounded-3xl'>
            <button 
            onClick={() => setColor("red")}
              className='outline-none px-4 py-1 rounded-full text-white' 
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>
            <button 
            onClick={() => setColor("Blue")}
              className='outline-none px-4 py-1 rounded-full text-white' 
              style={{ backgroundColor: "Blue" }}
            >
              Blue
            </button>
            <button 
            onClick={() => setColor("Green")}
              className='outline-none px-4 py-1 rounded-full text-white' 
              style={{ backgroundColor: "Green" }}
            >
              Green
            </button>
            <button 
            onClick={() => setColor("Gray")}
              className='outline-none px-4 py-1 rounded-full text-white' 
              style={{ backgroundColor: "Gray" }}
            >
              Gray
            </button>
            <button 
            onClick={() => setColor("Yellow")}
              className='outline-none px-4 py-1 rounded-full text-white' 
              style={{ backgroundColor: "Yellow" }}
            >
              Yellow
            </button>
            <button 
            onClick={() => setColor("Pink")}
              className='outline-none px-4 py-1 rounded-full text-white' 
              style={{ backgroundColor: "Pink" }}
            >
              Pink
            </button>
            <button 
            onClick={() => setColor("Purple")}
              className='outline-none px-4 py-1 rounded-full text-white' 
              style={{ backgroundColor: "Purple" }}
            >
              Purple
            </button>
            <button 
            onClick={() => setColor("Lavender")}
              className='outline-none px-4 py-1 rounded-full text-white' 
              style={{ backgroundColor: "Lavender" }}
            >
              Lavender
            </button>
            <button 
            onClick={() => setColor("Orange")}
              className='outline-none px-4 py-1 rounded-full text-white' 
              style={{ backgroundColor: "Orange" }}
            >
              Orange
            </button>
            <button 
            onClick={() => setColor("Cyan")}
              className='outline-none px-4 py-1 rounded-full text-white' 
              style={{ backgroundColor: "Cyan" }}
            >
              Cyan
            </button>
            <button 
              onClick={() => setColor("Teal")}
              className='outline-none px-4 py-1 rounded-full text-white' 
              style={{ backgroundColor: "Teal" }}
            >
              Teal
            </button>
            {/* <button 
              onClick={() => setColor("Maroon")}
              className='outline-none px-4 py-1 rounded-full text-white' 
              style={{ backgroundColor: "Maroon" }}
            >
              Maroon
            </button>
            <button 
              onClick={() => setColor("Violet")}
              className='outline-none px-4 py-1 rounded-full text-white' 
              style={{ backgroundColor: "Violet" }}
            >
              Violet
            </button>
            <button
              onClick={() => setColor("Brown")}
              className='outline-none px-4 py-1 rounded-full text-white' 
              style={{ backgroundColor: "Brown" }}
            >
              Brown
            </button>
            <button 
              onClick={() => setColor("Skyblue")}
              className='outline-none px-4 py-1 rounded-full text-white' 
              style={{ backgroundColor: "skyblue" }}
            >
              Sky Blue
            </button> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default App