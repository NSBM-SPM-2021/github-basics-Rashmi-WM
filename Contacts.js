import React from "react";
import "../App.css";
import { db } from "../firebase";

const Contacts = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [mobile,setMobile]= useState("");
    
    const [loader, setLoader] = useState(false);
    
    const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("contacts")
      .add({
        name: name,
        email: email,
        address: address,
        mobile:mobile,
      })
      .then(() => {
        setLoader(false);
        alert(""Your message has been submitted👍"");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });
      

    setName("");
    setEmail("");
    setAddress("");
    setMobile("");
  };


const Contacts= () =>{
    
    return(
         <form className="form" onSubmit={handleSubmit}>
      <h1>Contact Manager</h1>
        
          <label> Name</label>
      <input placeholder=" Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}/>

      <label> Email</label>
      <input placeholder="Email"
value={email}
        onChange={(e) => setEmail(e.target.value)}/>

<label>Mobile</label>
      <input placeholder="Mobile"
value={mobile}
        onChange={(e) => setMobile(e.target.value)}/>

          <label>Address</label>
      <textarea placeholder="address"
value={address}
        onChange={(e) => setAddress(e.target.value)}>
            </textarea>
        
        <button type="Add Contacts" 
style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}>
      Add Contacts
      </button>
         </form>
         );
};

export default Contacts;
         
         
  

    
        
        
    
