import { useState } from "react";
import "../styles/form.css";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    feedback: "",
  });

  const [arr, setArr] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
     ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() ||!formData.feedback.trim()) return;
    setArr(prev => [
     ...prev,
      {
       ...formData,
        name: formData.name.trim(),
        feedback: formData.feedback.trim(),
        id: Date.now() 
      }
    ]);

    setFormData({
      name: "",
      feedback: "",
    });
  };

  return (
    <div className="container">
      <h1>Feedback Collector Form</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="feedback">Feedback:</label>
        <textarea
          id="feedback"
          name="feedback"
          placeholder="Enter feedback"
          value={formData.feedback}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">Submit</button>
      </form>

      <h4>Feedback Entries</h4>
      <div className="feedback-list">
        {arr.length === 0? (
          <p>No feedback yet.</p>
        ) : (
          arr.map((item) => (
            <div className="card" key={item.id}> 
              <h3>{item.name}</h3>
              <p>{item.feedback}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Form;   
            
            
      
    
      

  
