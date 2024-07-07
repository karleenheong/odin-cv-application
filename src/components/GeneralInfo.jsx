import { useState } from 'react';

export default function GeneralInfo() {
  const [inputs, setInputs] = useState({
    name: "", 
    email: "", 
    phone: ""});

  const[isEditable, setIsEditable] = useState(true);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value}));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <>
      <h2 className="general">General Information</h2>
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
         <button type="submit" onClick={() => setIsEditable(false)}>Submit General</button>
       </form>
      ) : (
        <div>
          <p>Name: {inputs.name}</p>
          <p>Email: {inputs.email}</p>
          <p>Phone: {inputs.phone}</p>
          <button type="submit" onClick={() => setIsEditable(true)}>Edit</button>
        </div>
      )}
    </>
  );
}

