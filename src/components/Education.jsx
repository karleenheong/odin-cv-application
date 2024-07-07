import { useState } from "react";

export default function Education() {
  const [inputs, setInputs] = useState({schoolName: "", titleOfStudy: "", dateOfStudy: ""});

  const [isEditable, setIsEditable] = useState(true);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({...values, [name]: value}));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <>
      <h2 className="education">Education</h2>
      {isEditable ? (
        <form onSubmit={handleSubmit}>
          <label>School Name:
            <input type="text" name="schoolName" value={inputs.schoolName} onChange={handleChange}/>
          </label>
          <label>Title of Study:
            <input type="text" name="titleOfStudy" value={inputs.titleOfStudy} onChange={handleChange}/>
          </label>
          <label>Date of Study:
            <input type="date" name="dateOfStudy" value={inputs.dateOfStudy} onChange={handleChange}/>
          </label>
          <button type="submit" onClick={() => setIsEditable(false)}>Submit Education</button>
        </form>
      ) : (
        <div>
          <p>School Name: {inputs.schoolName}</p>
          <p>Title of Study: {inputs.titleOfStudy}</p>
          <p>Date of Study: {inputs.dateOfStudy}</p>
          <button type="submit" onClick={() => setIsEditable(true)}>Edit</button>
        </div>
      )}
    </>
  );
}