import React from 'react';

const Vote = (props) => {
  return (
    <div className="cont" id="vote-cont">
      <i src=""></i>
      <span className="vote-count-span">{props.votes}</span>
      <i src=""></i>
    </div>
  );
};

export default Vote;
