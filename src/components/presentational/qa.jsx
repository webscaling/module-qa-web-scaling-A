import React from 'react';

const QA = (props) => {
  return (
    <div className="cont qa-cont">
      <div className="cont qa-header">
        <span className="qheader">Question:</span>
        <span className="ansheader">Answer:</span>
      </div>
      <div className="cont qa-data">
        <a href="#" className="q-data">{props.q}</a>
        <span className="a-data">{props.a}</span>
        <span className="author-date">{`By ${props.auth} on ${props.date}`}</span>
      </div>
    </div>
  );
};

export default QA;
