import React from "react";
import "../App.css";
import { db } from "../firebase";



const Contacts= () =>{
    
    return(
         <form className="form">
      <h1>Contact Manager</h1>
        
          <label> Name</label>
      <input placeholder=" Full Name"/>

      <label> Email</label>
      <input placeholder="Email"/>

<label>Mobile</label>
      <input placeholder="Mobile"/>

          <label>Address</label>
      <textarea placeholder="address"></textarea>
        
        <button type="Add Contacts" >
      Add Contacts
      </button>
         </form>
         );
};

export default Contacts;
         
         
  

    
        
        
    
