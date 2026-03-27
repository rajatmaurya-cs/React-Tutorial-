import React from 'react'
import Product from "./Product"
const ProductList = ({product}) => {
  return (
    <div>

        {
            product.map((item)=> <Product key = {item.id} item = {item}/>)
            
        }
      
    
    </div>
  )
}

export default ProductList
