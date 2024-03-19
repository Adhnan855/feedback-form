import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './Components/Page4.css'; // Import CSS for styling

const Page4 = () => {
  const [answers, setAnswers] = useState({
    question6: '',
    question7: '',
    question8: '',
    question9: '',
    question10: ''
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
    <div className="page4-container">
      <h2 className='g'>Feedback Form - Page 4</h2>
      <div className="question">
        <label>How satisfied are you with the cleanliness of the facilities?</label>
        <select name="question6" value={answers.question6} onChange={handleInputChange}>
          <option value="">Select option</option>
          <option value="Very Satisfied">Very Satisfied</option>
          <option value="Satisfied">Satisfied</option>
          <option value="Neutral">Neutral</option>
          <option value="Dissatisfied">Dissatisfied</option>
          <option value="Very Dissatisfied">Very Dissatisfied</option>
        </select>
      </div>
      <div className="question">
        <label>Was the waiting time for your appointment reasonable?</label>
        <select name="question7" value={answers.question7} onChange={handleInputChange}>
          <option value="">Select option</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>
      <div className="question">
        <label>How well did the staff address your concerns?</label>
        <select name="question8" value={answers.question8} onChange={handleInputChange}>
          <option value="">Select option</option>
          <option value="Very Well">Very Well</option>
          <option value="Well">Well</option>
          <option value="Average">Average</option>
          <option value="Poor">Poor</option>
          <option value="Very Poor">Very Poor</option>
        </select>
      </div>
      <div className="question">
        <label>How likely are you to recommend our services to others?</label>
        <select name="question9" value={answers.question9} onChange={handleInputChange}>
          <option value="">Select option</option>
          <option value="Very Likely">Very Likely</option>
          <option value="Likely">Likely</option>
          <option value="Neutral">Neutral</option>
          <option value="Unlikely">Unlikely</option>
          <option value="Very Unlikely">Very Unlikely</option>
        </select>
      </div>
      <div className="question">
        <label>Did you experience any difficulties in scheduling your appointment?</label>
        <select name="question10" value={answers.question10} onChange={handleInputChange}>
          <option value="">Select option</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>
      {/* Use Link component to navigate to Page5 */}
      <Link to="/page5" className="next-button"><button onClick={handleSubmit}>Next</button></Link>
    </div>
  );
};

export default Page4;