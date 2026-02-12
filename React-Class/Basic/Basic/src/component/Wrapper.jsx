import React from 'react'

const Wrapper = ({title , children}) => {
  return (
    <div>

        <h2 className='text-6xl'>{title}</h2>

        <div>{children}</div>
      
    </div>
  )
}

export default Wrapper
