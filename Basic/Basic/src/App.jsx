
import './App.css'
import Header from './component/Header'
import Footer from './component/Footer'
import Table from './component/Table'
import Wrapper from './component/Wrapper'
import Usercard from './component/Usercard'

const users = [
{
  id: 1,
  name: "Virat Kohli",
  country: "India",
  role: "Batsman",
},
{
  id: 2,
  name: "MS Dhoni",
  country: "India",
  role: "Batsman"
}
]

function App() {

  return (

    <div>
      <h1 className='text-5xl'>User DashBoard</h1>

      <Wrapper title="User List">

        {users.map((data) => (
          <Usercard key={data.id} data={data} />
        ))}
      </Wrapper>
    </div>
  )
}

export default App
