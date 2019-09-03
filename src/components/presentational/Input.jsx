import React from 'react';
import PropTypes from 'prop-types';

const Input = (props) => (
  <div className="a-search a-span12">
    <img
      src="https://shazamazon.s3.us-east-2.amazonaws.com/QA-vote-icons/search-icon.jpg" className="a-icon a-icon-search"
      onClick={() => document.getElementById('qa-search-input').value = ''}></img>
    <input type="search" maxlength="150"
      autocomplete="off"
      placeholder="Have a question? Search for answers"
      name="askQuestionText"
      id="qa-search-input"
      className="a-input-text a-span12"></input>
  </div>
);

Input.propTypes = {
  label: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default Input;



// const Input = ({ label, text, type, id, value, handleChange }) => (
//   <div className="form-group">
//     <label htmlFor={label}>{text}</label>
//     <input
//       type={type}
//       className="form-control"
//       id={id}
//       value={value}
//       onChange={handleChange}
//       required
//     />
//   </div>
// );