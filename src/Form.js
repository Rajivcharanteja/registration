
import React,{useState} from 'react'
import axios from "axios"

const Form = () => {
    const[data,setData]=useState({
         FirstName: " " ,
         LastName: " " ,
         Age: "" ,
         Email: " " ,
         phoneNumber : "" ,
         address:""
    })
    const changeHandler= e =>{
      setData({
        ...data,[e.target.name]:e.target.value
      })
    }
    const submitHandler= e =>{
      e.preventDefault();
      axios.post("https://new-form-20502-default-rtdb.firebaseio.com/register.json",data).then(()=> alert("submitted succesfully"))
    }
    
    
    
    
      return (
        <section className='coutainer my-5 ' >

         
      <form className=' container my-5  bg-info border border-primary fw-bold  ' autoComplete='off' id="charan" onSubmit={submitHandler}>
      <div className="form-group row m-2">
        <label className="col-sm-5 col-form-label control-label">FirstName :</label>
        <div className="col-sm-5">
          <input type="text" className="form-control" name='FirstName' placeholder="firstname" 
          value={data.FirstName} onChange={ changeHandler} />
        </div>
      </div>
    
    
      <div className="form-group row m-2">
        <label className="col-sm-5 col-form-label control-label">LastName :</label>
        <div className="col-sm-5">
          <input type="text" className="form-control" name='LastName' placeholder="LastName" 
           value={data.LastName} onChange={ changeHandler}  />
        </div>
      </div>
    
    
      <div className="form-group row m-2">
        <label  className="col-sm-5 col-form-label control-label">Age :</label>
        <div className="col-sm-5">
          <input type="number" className="form-control" name='Age' placeholder="Age" 
          value={data.Age} onChange={ changeHandler}   />
        </div>
      </div>
    
      <div className="form-group row m-2">
        <label className="col-sm-5 col-form-label control-label">Email  :</label>
        <div className="col-sm-5">
          <input type="email" className="form-control" name='Email' placeholder="Email" 
          value={data.Email} onChange={ changeHandler}  />
        </div>
      </div>
    
      <div className="form-group row m-2">
        <label className="col-sm-5 col-form-label">phoneNo :</label>
        <div className="col-sm-5">
          <input type="mobile" className="form-control" name='phoneNumber' placeholder="number" 
           value={data.phoneNumber} onChange={ changeHandler} />
        </div>
      </div>
    
      <div className="form-group row m-2">
        <label className="col-sm-5 col-form-label control-label">Address : </label>
        <div className="col-sm-5">
          <textarea type="text" className="form-control" name='address' placeholder="address"
           value={data.address}  onChange={ changeHandler} />
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
    export default Form;
    