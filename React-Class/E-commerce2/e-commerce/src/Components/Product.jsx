import React, { useState } from 'react'
import App from '../App'
const Product = ({ item }) => {

    const [cart, setCart] = useState([])

    const handlecart = (Id) => {

        const check = cart.some((it) => it.id === Id);
        if (check) return;
        setCart([...cart, item]);


    }
    return (
        <div className='flex'>

            <div className='flex justify-center  items-center'>

                <div className='  w-[200px] h-[200px] border'>

                    <img src={item.img}
                        className='w-[100px] h-[100px]'

                        alt="" />

                    <h1>The Product is : {item.name}</h1>
                    <h2>Price:{item.Prices}</h2>
                    <h2>Brand : {item.company}</h2>
                </div>

                <div className='space-x-7'>
                    <button
                        onClick={() => handlecart(item.id)}

                        className='bg-gray-500 h-[40px] rounded-2xl hover:bg-purple-500 hover:duration-150 hover:scale-120'>AddToCart</button>


                    <button
                        onClick={() => handlecart(item.id)}

                        className='bg-gray-500 h-[40px] rounded-2xl hover:bg-purple-500 hover:duration-150 hover:scale-120'>Remove</button>

                </div>

            </div>


            {

                <div className=''>
                    {
                        cart.map((item) => {
                            return (
                                <div key={item.id} className='border border-purple-500 rounded-xl'>
                                    <h1>The Product is : {item.name}</h1>
                                    <h2>Price : {item.Prices}</h2>
                                    <h2>Brand : {item.company}</h2>

                                </div>


                            )
                        })
                    }

                </div>
            }












        </div>
    )
}

export default Product
