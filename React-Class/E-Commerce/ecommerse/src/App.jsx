
import { useState } from 'react'
import './App.css'

function App() {
  const feature = [
    {
      img: `https://rukminim2.flixcart.com/image/312/312/xif0q/computer/f/u/b/-original-imahf69gy4qegrya.jpeg?q=70`,
      id: 1,
      name: "Laptop",
      Prices: 200000,
      company: "HP"
    }
    , 
    
      {
      img: `https://rukminim2.flixcart.com/image/312/312/xif0q/television/i/m/0/-original-imah9ttkkjmahfs7.jpeg?q=70`,
      id: 1,
      name: "Laptop",
      Prices: 200000,
      company: "HP"
    },


    {
      id: 3,
      img: "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/n/h/0/6-5-hq2415-001-6-5-nike-black-white-anthracite-wolf-grey-original-imahg5zhq94zqsmq.jpeg?q=70",
      name: "shoes",
      Prices: 3000,
      company: "Nike"
    }
    , {
      id: 4,
      img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/o/2/g/-original-imahbr2cz5apcwze.jpeg?q=70",
      name: "Phone",
      Prices: 30000,
      company: "Oppo"
    }
  ]

  const [cart, setCart] = useState([]);
 




  const handlecart = (item)=>{
  
    setCart([...cart, item]);

  }

  const handelremove = (itemId)=>{

    const result = cart.filter((item)=>itemId !== item.id)

    setCart(result)
  }

  return (
    <div className='flex flex-col  grid-cols-4 space-y-5 w-full h-[200px] justify-center items-center min-h-screen space-x-5 border border-gray-900'>
    
    
       <div className='flex space-x-3'>
      {
        feature.map((item) => {

          return (
            
            <div className='flex flex-col border border-gray-900 space-y-4'
              key={item.id}
            >

              <div className='w-[300px] h-[200px]'>
              <img src={item.img}
                className='w-full h-[100px]'
                alt="" />

              <h2>The Name of Produt : {item.name}</h2>
              <h2>The Price : <span className='text-red-600'>{item.Prices}</span></h2>
              <h2>The company : {item.company}</h2>

              </div>

              <button
              className='p-2 bg-amber-500 rounded-2xl hover:bg-green-600 hover:scale-120 hover:duration-500'
              onClick={()=>handlecart(item)}
              >AddToCart</button>


            </div>)



        })
      }
      </div>






      <div className='border border-gray-950 w-1/2 h-[500px] rounded-2xl justify-center items-center'>
      <h1 className='text-5xl'>No of Products : {cart.length}</h1>

      {
        cart.map((item)=>{

          return (
            <div className='space-y-5'>
            <div key = {item.id} className='text-center flex justify-center'>

              
              <div className='flex w-1/2 space-y-5 space-x-5'>

              <div className='border border-pink-600 w-full rounded-2xl'>
                <h1>The Product is : {item.name}</h1>
                <h2>The Price : <span className='text-red-600'>{item.Prices}</span></h2>
              </div>

              <button
              onClick={()=>handelremove(item.id)}
              
              className='bg-gray-500 rounded-2xl w-[100px] h-[50px]'>Remove</button>

              </div>



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
