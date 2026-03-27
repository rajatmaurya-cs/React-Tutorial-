import { useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  
  const [user, setuser] = useState([])
  const [search , setSearch] = useState(null);
  const [loading , setLoading] = useState(false);


  const handleapi = async (e) => {

    setLoading(true);

    e.preventDefault();

    try{

    const res = await axios.get(`https://fakestoreapi.com/products/${search}`)

    setuser([...user , res.data]);
  
  }catch(error){
    console.log(error);
  }
   finally{
    setLoading(false);
  }

  return;

  }

  return (
    <div className='flex justify-center items-center flex-col min-w-full min-h-screen space-y-20 border-l-black '>

    <div className='flex space-x-5'>

      <button
      className='bg-pink-400 p-4 rounded-4xl'
        onClick={(e) => handleapi(e)}
      >
        Fetch Product
      </button>

      <div className='flex items-center'> 
      <input type="range"
       min="1"
       max="20"
       step = "1"

      className='p-3  border-green-500 border-4 rounded-3xl '

      onChange={(e)=>setSearch(e.target.value)}

      placeholder='Enter Product to search'
      
      />

      <p className=' text-4xl text-blue-600'>{search}</p>

      </div>

       </div>

      <div>
        {


          user.map((item)=>{
            return (
              <div className='space-y-2 flex items-center justify-center' key = {item.id}>

              <div
              className=' space-y-5 border border-4 rounded-2xl border-pink-600 w-fit px-4 py-2 flex items-center justify-center mb-5'            
              key={item.id}>
               <p>{item.title}</p>

              </div>

              </div>

            )
          })
        }
      </div>


   

    </div>
  )
}

export default App
