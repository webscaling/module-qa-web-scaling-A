import React from 'react';
import QA from '../presentational/qa.jsx';
import Vote from '../presentational/votes.jsx';

const QavCont = (props) => {
  return (
    <div className="cont qa-vote-cont">
      <Vote votes={props.qaItem.v}/>
      <QA
        q={props.qaItem.q}
        a={props.qaItem.a}
        auth={props.qaItem.auth}
        date={props.qaItem.d}
      />
    </div>
  );
};

export default QavCont;