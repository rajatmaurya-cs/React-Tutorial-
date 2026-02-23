
import './App.css'
import { useEffect, useState } from 'react'

function App() {

  const [count, setcounter] = useState(0);

  useEffect(() => {
    alert("You Pressed counter button 🤔")

  }, [count])


  return (
    <div className='flex justify-center items-center min-h-screen'>



<div className='flex flex-col space-y-7 text-center'>


      <button
      className='bg-purple-500  w-[100px] h-[60px] rounded-3xl'

        onClick={() => setcounter((prev) => prev + 1)}


      > Press Me ✊🏻</button>

      <h1 className='text-9xl'>The count is : {count}</h1>

      </div>




    </div>
  )
}

export default App
