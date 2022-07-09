import './App.css';
import React from 'react'
import charanimg from"./charan/img/charan.gif"
import Read from './charan/Read';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Update from './charan/Update';
import Create from './charan/Create';

const App = () => {
  return (
    <div className='orange'>
     
      
      <center>
    <div><h1 className='fw-bolder text-danger '>CRUD OPARATIONS FORM</h1></div>
    </center>
      <BrowserRouter>
      <Routes>
    
    <Route path="/" element={<Create />} />
          <Route path="Read" element={<Read />} />
          <Route path="update" element={<Update />} />
  
    </Routes>
    </BrowserRouter>
          </div>
        
  )
}

export default App