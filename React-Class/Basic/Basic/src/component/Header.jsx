import React from 'react'


const Header = ({ children }) => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='border border-purple-600 p-5 flex flex-col  justify-center items-center'>
        {children}
        <h1 className='text-7xl'>This Is Header Component</h1>
      </div>

      <Footer>
        <h1>This is first content send by Header to Footer</h1>
        <h2>This is an second content send by Header to Footer</h2>
      </Footer>
    </div>
  )
}

export default Header
