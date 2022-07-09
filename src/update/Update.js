import React,{ useState,useEffect} from 'react'
import axios from "axios"



const Update = () => {
  
    const[data,setData]=useState({
      FirstName: " " ,
      LastName: " " ,
      Age: "" ,
      Email: " " ,
      phoneNumber : "" ,
      address:""


      
     } )
    

    const changeHandler= e =>{
      setData({
        ...data,[e.target.name]:e.target.value
      })
    }
    const submitHandler= (e) =>{
      e.preventDefault();
      axios.put(`https://62ac07129fa81d00a7a8612e.mockapi.io/crud`)
    }
    useEffect(()=>{

      setData(localStorage.getItem("data."))
    },[])
   
    
  return(
  <section className='coutainer my-5 ' >  

  <h1 className='text-success'>Refill Update  Your Form</h1> 

   
  <form className=' container my-5  bg-info border border-primary fw-bold  ' autoComplete='off' id="charan">
  <div className="form-group row m-2">
    <label className="col-sm-5 col-form-label control-label">FirstName :</label>
    <div className="col-sm-5">
      <input type="text" className="form-control" name='FirstName' placeholder="firstname" 
       onChange={ changeHandler} />
    </div>
  </div>


  <div className="form-group row m-2">
    <label className="col-sm-5 col-form-label control-label">LastName :</label>
    <div className="col-sm-5">
      <input type="text" className="form-control" name='LastName' placeholder="LastName" 
     onChange={ changeHandler}  />
    </div>
  </div>


  <div className="form-group row m-2">
    <label  className="col-sm-5 col-form-label control-label">Age :</label>
    <div className="col-sm-5">
      <input type="number" className="form-control" name='Age' placeholder="Age" 
     onChange={ changeHandler}   />
    </div>
  </div>

  <div className="form-group row m-2">
    <label className="col-sm-5 col-form-label control-label">Email  :</label>
    <div className="col-sm-5">
      <input type="email" className="form-control" name='Email' placeholder="Email" 
       onChange={ changeHandler}  />
    </div>
  </div>

  <div className="form-group row m-2">
    <label className="col-sm-5 col-form-label">phoneNo :</label>
    <div className="col-sm-5">
      <input type="mobile" className="form-control" name='phoneNumber' placeholder="number" 
       onChange={ changeHandler} />
    </div>
  </div>

  <div className="form-group row m-2">
    <label className="col-sm-5 col-form-label control-label">Address : </label>
    <div className="col-sm-5">
      <textarea type="text" className="form-control" name='address' placeholder="address"
 onChange={ changeHandler} />
    </div>
  </div>
  <div className="form-group row">
    <div className="col-sm-5 offset-sm-3 my-2">
      <button type="submit" className="btn btn-primary" formMethod='post' onClick={submitHandler}>Update</button>
    </div>
  </div>
</form>



</section>


  )

}
export default Update