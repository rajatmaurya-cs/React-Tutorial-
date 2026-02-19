import { useState } from 'react'

import './App.css'

function App() {

  const names = ["Rajat", "Tewatiya", "Pushpendra"]

  const [ans, setans] = useState([])

  const [find, setfind] = useState('');




const handleSearch = ()=>{
  const result = names.filter((item)=>{
   return item.toLowerCase().includes(find.toLocaleLowerCase())
  })
  setans(result)
}



  return (
    <div className='flex   justify-center items-center min-h-screen'>

      <div className='w-full  flex  justify-center space-x-4'>
        <input type="text"
          placeholder='Enter To Search'
          className='p-4 border border-pink-500 rounded-4xl w-1/4'
          value={find}
          onChange={(e) => setfind(e.target.value)}

        />
        <button className='w-[100px] rounded-2xl bg-pink-500'
          onClick={() => handleSearch()}

        >

          Search
        </button>


        <div>

          {
            ans.length === 0 ? <div>No Result found</div> :

              ans.map((item, index) => {
                return (
                  <div key={index}
                  >The Result is {item}</div>
                )
              })
          }
        </div>

      </div>







    </div>
  )
}

export default App
