import React from 'react';
import QA from '../presentational/qa.jsx';
import Vote from '../presentational/votes.jsx';

const QavCont = (props) => {
  return (
    <div className="cont qa-vote-cont">
      <Vote votes={props.qaItem.Votes} pID={props.pID} qID={props.qaItem._id}/>
      <QA
        q={props.qaItem.Qstn}
        a={props.qaItem.Ans}
        auth={props.qaItem.Author}
        date={props.qaItem.Date}
      />
    </div>
  );
};

export default QavCont;