import React from 'react'
import { useNavigate } from 'react-router-dom'

const Form = () => {

  const navigate = useNavigate()

  
  const handlesubmit = (e)=>{
    e.preventDefault()
    console.log("Entered in hadnlesumbmit")
    
      navigate('/see')

  }
  return (
    <div className=' flex justify-center items-center min-h-[300px] '>

      <form 
      className='rounded-4xl border border-pink-400 p-8 w-1/2 flex flex-col justify-center space-y-4 gap-3 h-full'>
   <div className='flex'>
    <input type="email"
    className='border border-blue-700 rounded-2xl p-3 w-full'
    placeholder='Enter Your mail'
    />
    <button className='border bg-sky-400 rounded-4xl p-4 ml-4'
    >Submit</button>
    </div>

    <div className='flex'>
     <input type="password"
    className='border border-blue-700 rounded-2xl p-3 space-y-4 w-full'
    placeholder='Enter Your password'
    />
     <button className='border bg-sky-400 rounded-4xl p-4 ml-4'
     onClick={(e)=>handlesubmit(e)}
    >Submit</button>
    </div>



      </form>
      
    </div>
  )
}

export default Form



