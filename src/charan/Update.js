import React,{ useState,useEffect} from 'react'
import axios from "axios"



const Update = () => {
  const[FirstName,setFirstName]=useState("");
  const[LastName,setLastName]=useState("");
  const[Age,setAge]=useState("")
  const[Email,setEmail]=useState("");
  const[phoneNumber,setphoneNumber]=useState("");
  const[address,setaddress]=useState("");
   const[ID,setid]=useState(null);

  const gettingData= e =>{
    e.preventDefault();
    axios.put(`https://62ac07129fa81d00a7a8612e.mockapi.io/crud/${ID}`,{
    FirstName,
    LastName,
    Age,
    Email,
    phoneNumber,
    address,}).then(res()

  )
  }
   useEffect(()=>{
    setFirstName(localStorage.getItem("FirstName"));
    setLastName(localStorage.getItem("LastName"));
    setAge(localStorage.getItem("Age"));
    setEmail(localStorage.getItem("Email"));
    setphoneNumber(localStorage.getItem("phoneNumber"));
    setaddress(localStorage.getItem("address"));
     setid(localStorage.getItem("id"))
})
 

  return(
  <section className='coutainer my-5 ' >  

  <h1 className='text-success'>Refill Update  Your Form</h1> 

   
  <form className=' container my-5  bg-info border border-primary fw-bold  ' autoComplete='off' id="charan" >
      <div className="form-group row m-2">
        <label className="col-sm-5 col-form-label control-label">FirstName :</label>
        <div className="col-sm-5">
          <input className="form-control" name='firstName' placeholder="firstname"  value={FirstName}
       onChange={(e)=>setFirstName(e.target.value)} 
       />
        </div>
      </div>
    
    
      <div className="form-group row m-2">
        <label className="col-sm-5 col-form-label control-label">LastName :</label>
        <div className="col-sm-5">
          <input type="text" className="form-control" name='LastName' placeholder="LastName" 
        onChange={(e)=>setLastName(e.target.value) }
        value={LastName}/>
        </div>
      </div>
    
    
      <div className="form-group row m-2">
        <label  className="col-sm-5 col-form-label control-label">Age :</label>
        <div className="col-sm-5">
          <input type="number" className="form-control" name='Age' placeholder="Age" 
          onChange={(e)=>setAge(e.target.value) }
          value={Age}  />
        </div>
      </div>
    
      <div className="form-group row m-2">
        <label className="col-sm-5 col-form-label control-label">Email  :</label>
        <div className="col-sm-5">
          <input type="email" className="form-control" name='Email' placeholder="Email" 
          onChange={(e)=>setEmail(e.target.value) } 
          value={Email} />
        </div>
      </div>
    
      <div className="form-group row m-2">
        <label className="col-sm-5 col-form-label">phoneNo :</label>
        <div className="col-sm-5">
          <input type="mobile" className="form-control" name='phoneNumber' placeholder="number" 
          onChange={(e)=>setphoneNumber(e.target.value) }
        value={phoneNumber} />
        </div>
      </div>
    
      <div className="form-group row m-2">
        <label className="col-sm-5 col-form-label control-label">Address : </label>
        <div className="col-sm-5">
          <input type="text" className="form-control" name='Address' placeholder="address"
           onChange={(e)=>setaddress(e.target.value) }
           value={address} />
        </div>
  </div>
  <div className="form-group row">
    <div className="col-sm-5 offset-sm-3 my-2">
      <button type="submit" className="btn btn-primary" formMethod='post' onClick={gettingData}>Update</button>
    </div>
  </div>
</form>



</section>


  )

}
export default Update