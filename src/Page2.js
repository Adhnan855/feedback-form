import React, { useState } from "react";
import "./Components/Page2.css";
import { Link } from "react-router-dom";
const Page2 = () => {
  const [answers, setAnswers] = useState({
    question1: "",
    question2: "",
    question3: "",
    question4: "",
    question5: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAnswers((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    // Handle form submission logic here, e.g., send answers to server
    console.log("Form submitted:", answers);
  };

  return (
    <div className="page2-container">
      <h2>Feedback Form - Page 2</h2>
      <div className="question">
        <label>How would you rate the cleanliness of the facility?</label>
        <select
          name="question1"
          value={answers.question1}
          onChange={handleInputChange}
        >
          <option value="">Select option</option>
          <option value="Excellent">Excellent</option>
          <option value="Good">Good</option>
          <option value="Average">Average</option>
          <option value="Poor">Poor</option>
        </select>
      </div>
      <div className="question">
        <label>Did you feel welcomed upon arrival?</label>
        <select
          name="question2"
          value={answers.question2}
          onChange={handleInputChange}
        >
          <option value="">Select option</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>
      <div className="question">
        <label>How comfortable were the waiting room facilities?</label>
        <select
          name="question3"
          value={answers.question3}
          onChange={handleInputChange}
        >
          <option value="">Select option</option>
          <option value="Highly Satisfied">Highly Satisfied</option>
          <option value="Satisfied">Satisfied</option>
          <option value="Neutral">Neutral</option>
          <option value="Dissatisfied">Dissatisfied</option>
          <option value="Highly Dissatisfied">Highly Dissatisfied</option>
        </select>
      </div>
      <div className="question">
        <label>Were you provided with sufficient information about your treatment plan?</label>
        <select
          name="question4"
          value={answers.question4}
          onChange={handleInputChange}
        >
          <option value="">Select option</option>
          <option value="Strongly Agree">Strongly Agree</option>
          <option value="Agree">Agree</option>
          <option value="Neutral">Neutral</option>
          <option value="Disagree">Disagree</option>
          <option value="Strongly Disagree">Strongly Disagree</option>
        </select>
      </div>
      <div className="question">
        <label>How likely are you to recommend our services to others?</label>
        <select
          name="question5"
          value={answers.question5}
          onChange={handleInputChange}
        >
          <option value="">Select option</option>
          <option value="Very Likely">Very Likely</option>
          <option value="Likely">Likely</option>
          <option value="Unsure">Unsure</option>
          <option value="Unlikely">Unlikely</option>
          <option value="Very Unlikely">Very Unlikely</option>
        </select>
      </div>
      {/* Use Link component to navigate to Page3 */}
      <button onClick={handleSubmit}>
        <Link to="/page3">Next</Link>
      </button>
    </div>
  );
};

export default Page2;
