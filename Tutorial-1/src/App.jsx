import './App.css'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Form from './components/Form'
import Footer from './components/Footer'
import { BrowserRouter } from 'react-router-dom'
import See from './components/See'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
function App() {


  return (
    <>

    
      <Routes>
        <Route path='/' element={<Layout/>} />
         <Route path='/see' element={<See/>} />
      
      </Routes>
     

    </>
  )
}

export default App
