import React,{useEffect,useState}from 'react'
import axios from 'axios'
import {Link} from "react-router-dom";

const Read = () => {

    const[api,setApi]=useState([]);
    
   
   
    useEffect(()=>{
      axios.get(`https://62ac07129fa81d00a7a8612e.mockapi.io/crud`).then((res)=>{
          setApi(res.data)}
      )},[])
     
     
     const setID=(id,FirstName,LastName,Age,Email,phoneNumber,address)=>{
      
      localStorage.setItem('ID',id);
      localStorage.setItem('FirstName',FirstName);
      localStorage.setItem('LastName',LastName);
      localStorage.setItem('Age',Age);
      localStorage.setItem('Email',Email);
      localStorage.setItem('phoneNumber',phoneNumber);
      localStorage.setItem('Address',address);

      
     }
     
    
    const getData=()=>{
      axios.get(`https://62ac07129fa81d00a7a8612e.mockapi.io/crud`).then((getData)=>{
        setApi(getData.data);
      })
    }
   const onDelete =(id)=>{
    axios.get(`https://62ac07129fa81d00a7a8612e.mockapi.io/crud/${id}`).then(()=>{
     
      getData();
    })

    
   }
 
    
  return (
    <table className="table container">
    <thead>
      <tr><th>ID</th>
        <th>FirstName</th>
        <th>LastName</th>
        <th>Age</th>
        <th>Email</th>
        <th>phoneNumber</th>
        <th>Address</th>
         <th>Update</th> 
         <th>Delete</th>
      </tr>
    </thead>
    <tbody>
     {api.map((item,index)=>{
      return(
      <tr key={index}><td>{item.id}</td>
        <td>{item.FirstName}</td>
        <td>{item.LastName}</td>
        <td>{item.Age}</td>
        <td>{item.Email}</td>
        <td>{item.phoneNumber}</td>
        <td>{item.address}</td>
        <td>
        <Link to="/Update">
            <button className='btn btn-success'onClick={()=> setID(item.id,item.FirstName,item.LastName,item.Age,item.Email,item.phoneNumber,item.address)}>Update</button>
            </Link>
        </td>
    
        <td>
          
            <button className='btn btn-danger' onClick={() => onDelete(item.FirstName)}>Delete</button>
          
        </td>
         </tr>


      )})}
     
    </tbody>
  </table>
  
      
  )
}

export default Read