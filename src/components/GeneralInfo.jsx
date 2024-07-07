import '../styles/GeneralInfo.css';
import { useState } from 'react';

export default function GeneralInfo() {

  const [inputs, setInputs] = useState({
    name: "", 
    email: "", 
    phone: ""});

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value}));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const[isEditable, setIsEditable] = useState(true);

  return (
    <>
      <h2>General Information</h2>
      {isEditable ? (
         <form onSubmit={handleSubmit}>
         <label>Name:
           <input type="text" name="name" value={inputs.name} onChange={handleChange}/>
         </label>
         <label>Email:
           <input type="email" name="email" value={inputs.email} onChange={handleChange}/>
         </label>
         <label>Phone:
           <input type="tel" name="phone" value={inputs.phone} onChange={handleChange}/>
           </label>
         <button type="submit" onClick={() => setIsEditable(false)}>Submit</button>
       </form>
      ) : (
        <div>
          <p>Name: {inputs.name}</p>
          <p>Email: {inputs.email}</p>
          <p>Phone: {inputs.phone}</p>
          <button onClick={() => setIsEditable(true)}>Edit</button>
        </div>
      )}
    </>
  );
}

