import { useState } from "react";

export default function Experience() {
  const [jobs, setJobs] = useState([]);

  const [inputs, setInputs] = useState({id: -1, isEditable: true, companyName: "", positionTitle: "", responsibilities: "", dateStarted: "", dateUntil: ""});

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if(inputs.id === -1) {
      // add new job
      setJobs([...jobs, { ...inputs, id: jobs.length, isEditable: false }]);
    } else {
      // edit existing job
      setJobs(jobs.map((job) => (
        job.id === inputs.id ? { ...inputs, isEditable: false} : job)));
    }

    // reset inputs
    setInputs({
      id: -1,
      isEditable: true,
      companyName: "",
      positionTitle: "",
      responsibilities: "",
      dateStarted: "",
      dateUntil: "",
    });
  };

  const handleEdit = (job) => {
    setInputs({ ...job, isEditable: true});
  };

  return (
    <div>
      <h2 className="experience">Experience</h2>
      
      {jobs.map((job) => (
        <div key={job.id}>
          {job.isEditable ? (
             <form onSubmit={handleSubmit}>
              <label>Company Name:
                <input type="text" name="companyName" value={inputs.companyName} onChange={handleChange}/>
              </label>
              <label>Position Title:
                <input type="text" name="positionTitle" value={inputs.positionTitle} onChange={handleChange}/>
              </label>
              <label>Responsibilities:
                <input type="text" name="responsibilities" value={inputs.responsibilities} onChange={handleChange}/>
              </label>
              <label>Date Started:
                <input type="date" name="dateStarted" value={inputs.dateStarted} onChange={handleChange}/>
              </label>
              <label>Date Finished:
                <input type="date" name="dateUntil" value={inputs.dateUntil} onChange={handleChange}/>
              </label>
              <button type="submit">Finish Editing</button>
            </form>
          ) : (
            <div>
              <p>Company Name: {job.companyName}</p>
              <p>Position Title: {job.positionTitle}</p>
              <p>Responsibilities: {job.responsibilities}</p>
              <p>Date Started: {job.dateStarted}</p>
              <p>Date Finished: {job.dateUntil}</p>
              <button type="submit" onClick={() => handleEdit(job)}>Edit Job</button>
            </div>
          )}
        </div>
      ))}

      <form onSubmit={handleSubmit}>
        <label>Company Name:
          <input type="text" name="companyName" value={inputs.companyName} onChange={handleChange}/>
        </label>
        <label>Position Title:
          <input type="text" name="positionTitle" value={inputs.positionTitle} onChange={handleChange}/>
        </label>
        <label>Responsibilities:
          <input type="text" name="responsibilities" value={inputs.responsibilities} onChange={handleChange}/>
        </label>
        <label>Date Started:
          <input type="date" name="dateStarted" value={inputs.dateStarted} onChange={handleChange}/>
        </label>
        <label>Date Finished:
          <input type="date" name="dateUntil" value={inputs.dateUntil} onChange={handleChange}/>
        </label>
        <button type="submit">Add Job</button>
      </form>

    </div>
  );
}

