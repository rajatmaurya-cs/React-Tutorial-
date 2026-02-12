import React from 'react'

const Usercard = ({ data }) => {
    return (

        <div>
        {console.log(data)}
          <h1>{data.name}</h1>
          <h2>{data.country}</h2>
          <h3>{data.role}</h3>

        </div>
    )
}

export default Usercard
