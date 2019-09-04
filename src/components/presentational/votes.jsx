import React, { Component } from 'react';

export default class Vote extends Component {
  constructor(props) {
    super(props);

    this.state = {
      voteCount: 2
    };
  }

  // postGroups() {
  //   axios.post()
  // }

  upCount(count) {
    this.setState({
      voteCount: count + 1
    });
  }

  downCount (count) {
    this.setState({
      voteCount: count - 1
    });
  }

  render() {
    return (
      <ul className="cont vote-cont">
        <li>
          <img
            onClick={() => this.upCount(this.state.voteCount)}
            className="vote-btn"
            src="https://shazamazon.s3.us-east-2.amazonaws.com/QA-vote-icons/triangle-vote.jpg"
          ></img>
        </li>
        <li className="vote-label">
          <span className="vote-count-span">{this.state.voteCount}</span>
          <span><br/></span>
          <span className="vote-vote-span">{this.state.voteCount > 1 || this.state ? 'votes' : 'vote'}</span>
        </li>
        <li>
          <img
            onClick={() => this.downCount(this.state.voteCount)}
            className="vote-btn btn btn-default btn-sm"
            src="https://shazamazon.s3.us-east-2.amazonaws.com/QA-vote-icons/triangle-vote-down.jpg"
          ></img>
        </li>
      </ul>
    );
  }
}


