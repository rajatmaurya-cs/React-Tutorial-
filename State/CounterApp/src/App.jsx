import { useState } from 'react'

import './App.css'

function App() {


  const [count, setCount] = useState(0)

  const handleAdd = ()=>{
    setCount(coutn =>coutn+1)
  }

  const handlesubtract= ()=>{
    if(count==0) return;
    setCount(coutn =>coutn-1)
  }

  return (
    <>


    
    <div className='flex justify-center items-center h-screen'>

    <div className='border border-black space-x-5 flex flex-col space-y-3 justify-center items-center'>

       <h1 className='text-6xl'>count={count}</h1>

       <div className='space-x-6'>

    <button
    className='boder border-amber-400 p-5 bg-gray-600 rounded-2xl'
    onClick={()=>handleAdd()}
    >+</button>
    

    <button
    className='boder border-amber-400 p-5 bg-gray-600 rounded-2xl'
    onClick={()=>handlesubtract()}
    >-</button>

    </div>


    </div>

    </div>

    </>
  )
}

export default App
