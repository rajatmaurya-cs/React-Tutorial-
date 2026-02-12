// how accept multiple things from one component to another component => by prop


//✅
// import React from 'react'

// const Usercard = ({ data }) => {
//     return (

//         <div>
//         {console.log(data)}
//           <h1>{data.name}</h1>
//           <h2>{data.country}</h2>
//           <h3>{data.role}</h3>

//         </div>
//     )
// }

// export default Usercard




// import React from 'react'

// const Wrapper = ({title , children}) => {
//   return (
//     <div>

//         <h2 className='text-6xl'>{title}</h2>

//         <div>{children}</div>
      
//     </div>
//   )
// }

// export default Wrapper




// function App() {

//   return (

//     <div>
//       <h1 className='text-5xl'>User DashBoard</h1>

//       <Wrapper title="User List">

//         {users.map((data) => (
//           <Usercard key={data.id} data={data} />
//         ))}
//       </Wrapper>
//     </div>
//   )
// }

// export default App

