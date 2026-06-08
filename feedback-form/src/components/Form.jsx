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

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setArr([...arr, formData]);

    setFormData({
      name: "",
      feedback: "",
    });
  };

  return (
    <div className="container">
      <h1>Feedback  Collector-Form</h1>
<h2>Name:</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          required
        />
<h3>Feedback:</h3>
        <textarea
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
        {arr.map((item, index) => (
          <div className="card" key={index}>
            <h3>{item.name}</h3>
            <p>{item.feedback}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Form;