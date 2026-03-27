import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'
import Form from './Form'
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <div>
      <Header/>
      <Navbar/>
      <Form/>
      <Outlet/>
      <Footer/>

    </div>
  )
}

export default Layout
