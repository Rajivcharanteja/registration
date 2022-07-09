import React,{useState} from 'react'
import axios from "axios"

const Create = () => {
  
    const[FirstName,setFirstName]=useState("");
    const[LastName,setLastName]=useState("");
    const[Age,setAge]=useState("");
    const[Email,setEmail]=useState("");
    const[phoneNumber,setphoneNumber]=useState("");
    const[address,setaddress]=useState("");
    

   const charan = {
    Age,
    FirstName,
    LastName,
    Email,
    phoneNumber,
    address
  }
    const submitHandler= e=>{
      e.preventDefault();
      axios.post("https://62ac07129fa81d00a7a8612e.mockapi.io/crud",
          charan).then(()=>alert("data submitted successfully")) }
          
      return (
        <section className='coutainer my-5 ' >
      <form className=' container my-5  bg-info border border-primary fw-bold  ' autoComplete='off' id="charan" >
      <div className="form-group row m-2">
        <label className="col-sm-5 col-form-label control-label">FirstName :</label>
        <div className="col-sm-5">
          <input type="text" className="form-control" name='FirstName' placeholder="firstname" 
       onChange={(e)=>setFirstName(e.target.value)} />
        </div>
      </div>
    
    
      <div className="form-group row m-2">
        <label className="col-sm-5 col-form-label control-label">LastName :</label>
        <div className="col-sm-5">
          <input type="text" className="form-control" name='LastName' placeholder="LastName" 
        onChange={(e)=>setLastName(e.target.value) }/>
        </div>
      </div>
    
    
      <div className="form-group row m-2">
        <label  className="col-sm-5 col-form-label control-label">Age :</label>
        <div className="col-sm-5">
          <input type="number" className="form-control" name='Age' placeholder="Age" 
          onChange={(e)=>setAge(e.target.value) }/>
        </div>
      </div>
    
      <div className="form-group row m-2">
        <label className="col-sm-5 col-form-label control-label">Email  :</label>
        <div className="col-sm-5">
          <input type="email" className="form-control" name='Email' placeholder="Email" 
          onChange={(e)=>setEmail(e.target.value) }  />
        </div>
      </div>
    
      <div className="form-group row m-2">
        <label className="col-sm-5 col-form-label">phoneNo :</label>
        <div className="col-sm-5">
          <input type="mobile" className="form-control" name='phoneNumber' placeholder="number" 
          onChange={(e)=>setphoneNumber(e.target.value) } />
        </div>
      </div>
    
      <div className="form-group row m-2">
        <label className="col-sm-5 col-form-label control-label">Address : </label>
        <div className="col-sm-5">
          <textarea type="text" className="form-control" name='address' placeholder="address"
           onChange={(e)=>setaddress(e.target.value) } />
        </div>
      </div>
      <div className="form-group row">
        <div className="col-sm-5 offset-sm-3 my-2">
          <button type="submit" className="btn btn-primary" formMethod='post' onClick={submitHandler}>Sign in</button>
        </div>
      </div>
    </form>
    
  
    
    </section>
    
    
      )
    
    }
    export default Create;
    