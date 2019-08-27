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
      <div className="cont vote-cont">
        <button
          type="button"
          onClick={() => this.upCount(this.state.voteCount)}
          className="qa-btn">
          {/* <i className="glyphicon glyphicon-triangle-top">
          </i> */}
          Triangle-top
        </button>
        <span className="vote-count-span">{this.state.voteCount}
        </span>
        <button
          type="button"
          onClick={() => this.downCount(this.state.voteCount)}
          className="btn btn-default btn-sm"
        >
          {/* <i className="glyphicon glyphicon-triangle-top">
          </i> */}
          Triangle-top
        </button>
      </div>
    );
  }
}


