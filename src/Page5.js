import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './Components/Page5.css'; // Import CSS for styling

const Page5 = () => {
  const [answers, setAnswers] = useState({
    question11: '',
    question12: '',
    question13: '',
    question14: '',
    question15: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAnswers(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    // Handle form submission logic here, e.g., send answers to server
    console.log('Form submitted:', answers);
  };

  return (
    <div className="page5-container">
      <h2>Feedback Form - Page 5</h2>
      <div className="question">
        <label>How would you rate the friendliness of the staff?</label>
        <select name="question11" value={answers.question11} onChange={handleInputChange}>
          <option value="">Select option</option>
          <option value="Excellent">Excellent</option>
          <option value="Good">Good</option>
          <option value="Average">Average</option>
          <option value="Poor">Poor</option>
        </select>
      </div>
      <div className="question">
        <label>Were you provided with enough information about your treatment options?</label>
        <select name="question12" value={answers.question12} onChange={handleInputChange}>
          <option value="">Select option</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>
      <div className="question">
        <label>How satisfied are you with the overall quality of care you received?</label>
        <select name="question13" value={answers.question13} onChange={handleInputChange}>
          <option value="">Select option</option>
          <option value="Very Satisfied">Very Satisfied</option>
          <option value="Satisfied">Satisfied</option>
          <option value="Neutral">Neutral</option>
          <option value="Dissatisfied">Dissatisfied</option>
          <option value="Very Dissatisfied">Very Dissatisfied</option>
        </select>
      </div>
      <div className="question">
        <label>Did you experience any issues with billing or insurance?</label>
        <select name="question14" value={answers.question14} onChange={handleInputChange}>
          <option value="">Select option</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>
      <div className="question">
        <label>How likely are you to return for future treatments?</label>
        <select name="question15" value={answers.question15} onChange={handleInputChange}>
          <option value="">Select option</option>
          <option value="Very Likely">Very Likely</option>
          <option value="Likely">Likely</option>
          <option value="Neutral">Neutral</option>
          <option value="Unlikely">Unlikely</option>
          <option value="Very Unlikely">Very Unlikely</option>
        </select>
      </div>
      {/* Use Link component to navigate to the final page */}
      <Link to="/final"><button onClick={handleSubmit} className='btn'>Next</button></Link>
    </div>
  );
};

export default Page5;

