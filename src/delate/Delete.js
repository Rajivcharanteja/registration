import React from 'react'
import axios from 'axios'

const Delete = () => {
  const getData=()=>{
    axios.delete(`https://62ac07129fa81d00a7a8612e.mockapi.io/crud`)
    .then(()=>{
      getData();
    })
  }
  return (
    <div>
      <h1>DELE</h1>
    </div>  
  )
}

export default Delete