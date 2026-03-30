
import {Routes,Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'

function App() {


  return (
    <>


    <Navbar/>

    <Routes>

    <Route path= '/Home' element = {<Home/>}/> 
    
     <Route path= '/About' element = {<About/>}/> 



    </Routes>
    
 
    </>
  )
}

export default App
