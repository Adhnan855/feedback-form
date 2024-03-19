import React from 'react';
import './Components/Page3.css'
import { Link } from 'react-router-dom';
const Page3 = () => {
  return (
    <div className="page3-container">
      <h2>Feedback Form Page-3</h2>
      <div className="question">
        <p>How satisfied are you with the treatment you received?</p>
        <select>
          <option value="1">Very Dissatisfied</option>
          <option value="2">Dissatisfied</option>
          <option value="3">Neutral</option>
          <option value="4">Satisfied</option>
          <option value="5">Very Satisfied</option>
        </select>
      </div>
      <div className="question">
        <p>Were your concerns addressed by the healthcare provider?</p>
        <select>
          <option value="1">Not at all</option>
          <option value="2">Slightly</option>
          <option value="3">Moderately</option>
          <option value="4">Mostly</option>
          <option value="5">Completely</option>
        </select>
      </div>
      <div className="question">
        <p>How satisfied were you with the overall communication with the healthcare provider?</p>
        <select>
          <option value="1">Not at all</option>
          <option value="2">Slightly</option>
          <option value="3">Moderately</option>
          <option value="4">Mostly</option>
          <option value="5">Completely</option>
        </select>
      </div>
      <div className="question">
        <p>How would you rate the explanation of your treatment plan by the healthcare provider?</p>
        <select>
          <option value="1">Not at all</option>
          <option value="2">Slightly</option>
          <option value="3">Moderately</option>
          <option value="4">Mostly</option>
          <option value="5">Completely</option>
        </select>
      </div>
      <div className="question">
        <p>Were you comfortable discussing your medical history with the healthcare provider?</p>
        <select>
          <option value="1">Not at all</option>
          <option value="2">Slightly</option>
          <option value="3">Moderately</option>
          <option value="4">Mostly</option>
          <option value="5">Completely</option>
        </select>
      </div>
      <button className='tb'>
        <Link to='/page4'>Next</Link></button>
    </div>
  );
};

export default Page3;
