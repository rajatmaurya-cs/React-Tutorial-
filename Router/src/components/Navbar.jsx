import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='min-w-full flex justify-center mt-5'>
        <nav className='flex space-x-5 justify-center '>

        <Link to = '/Home' className='text-4xl'>Home</Link>

        <Link to = '/About' className='text-4xl'>About Us</Link>


        </nav>
      
    </div>
  )
}

export default Navbar
