
import React,{useState} from 'react'
import axios from "axios"

const Home = () => {

   
const[com,setCom]=useState({
    FirstName:"",
    LastName:"",
     Age:"",
     Email:"",
     phoneNumber:"",
     address:""
})
const changeHandler=e=>{
  setCom({
    ...com,[e.target.name]:e.target.value
  })
}
const submitHandler=e=>{
  e.preventDefault();
   axios.post("https://form-validation-ff41f-default-rtdb.firebaseio.com/register.json",com).then(()=>alert("data added"))
}


  return (
    <section className='coutainer my-5 ' >
  <form className=' container my-5  bg-info border border-primary fw-bold  ' autoComplete='off' id="charan" onSubmit={submitHandler}>
  <div className="form-group row m-2">
    <label className="col-sm-5 col-form-label control-label">FirstName :</label>
    <div className="col-sm-5">
      <input type="text" className="form-control" name='FirstName' placeholder="firstname" value={com.FirstName} onChange={ changeHandler} />
    </div>
  </div>


  <div className="form-group row m-2">
    <label className="col-sm-5 col-form-label control-label">LastName :</label>
    <div className="col-sm-5">
      <input type="text" className="form-control" name='LastName' placeholder="Lastname"  value={com.LastName} onChange={ changeHandler}  />
    </div>
  </div>


  <div className="form-group row m-2">
    <label  className="col-sm-5 col-form-label control-label">Age :</label>
    <div className="col-sm-5">
      <input type="number" className="form-control" name='Age' placeholder="Age" value={com.Age} onChange={ changeHandler}   />
    </div>
  </div>

  <div className="form-group row m-2">
    <label className="col-sm-5 col-form-label control-label">Email  :</label>
    <div className="col-sm-5">
      <input type="email" className="form-control" name='Email' placeholder="Email"  value={com.Email} onChange={ changeHandler}  />
    </div>
  </div>

  <div className="form-group row m-2">
    <label className="col-sm-5 col-form-label">phoneNo :</label>
    <div className="col-sm-5">
      <input type="mobile" className="form-control" name='phoneNumber' placeholder="number"  value={com.phoneNumber} onChange={ changeHandler} />
    </div>
  </div>

  <div className="form-group row m-2">
    <label className="col-sm-5 col-form-label control-label">Address : </label>
    <div className="col-sm-5">
      <textarea type="text" className="form-control" name='address' placeholder="address" value={com.address}  onChange={ changeHandler} />
    </div>
  </div>




  <div className="form-group row">
    <div className="col-sm-5 offset-sm-3 my-2">
      <button type="submit" className="btn btn-primary" formMethod='post'>Sign in</button>
    </div>
  </div>
</form>



</section>


  )

}
export default Home
