import React, { useState } from 'react'

const Charan = () => {
  
    const [data,setData]=useState({
         size: ''

    })
    const handleChange= event=>{
        const name = event.target.name
        const value=event.target.value

    
    setData({
        ...data,
        [name]:value
    })

}


  return (
    <form>
    <div>
        <lable className="container fw-bolder">size:</lable>


        <input type="radio" name="size" value="small" onChange={handleChange}/>

        <span className='text-danger'>S  </span>
        <input type="radio" name="size" value="medium"  onChange={handleChange}/>

        <span className='text-danger'>M  </span> 
        <input type="radio" name="size" value="large" className='border-dark'  onChange={handleChange}/>
        <span className='text-danger'>L  </span>
    </div>
    <p className='text-danger'>sizes:{data.size}</p>

    </form>
  )
}

export default Charan