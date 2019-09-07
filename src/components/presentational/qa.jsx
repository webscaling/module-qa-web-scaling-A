import React from 'react';


//helper Date formatter
const monthBank = {
  '01': 'January',
  '02': 'February',
  '03': 'March',
  '04': 'April',
  '05': 'May',
  '06': 'June',
  '07': 'July',
  '08': 'August',
  '09': 'September',
  '10': 'October',
  '11': 'November',
  '12': 'December'
};
const dateFormr = date => {
  let dateStr = '';
  const dateSplit = date.split('-');
  const month = dateSplit[1];
  if (monthBank[month]) {
    dateStr += monthBank[month];
    dateStr += ' ';
    dateStr += dateSplit[2].slice(0, 2);
    dateStr += ', ';
    dateStr += dateSplit[0];
    return dateStr;
  } else {
    console.log('Date month format error');
    return dateStr += 'April 20, 2004';
  }
};

const QA = (props) => {
  //format date data here
  let formattedDate = dateFormr(props.date);
  return (
    <div className="cont qa-cont">
      <div className="cont qa-header">
        <span className="qheader">Question:</span>
        <span className="ansheader">Answer:</span>
      </div>
      <div className="cont qa-data">
        <a href="#" className="q-data">{props.q}</a>
        <span className="a-data">{props.a}</span>
        <span className="author-date">{`By ${props.auth} on ${formattedDate}`}</span>
      </div>
    </div>
  );
};

export default QA;
