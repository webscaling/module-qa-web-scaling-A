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
        <img
          onClick={() => this.upCount(this.state.voteCount)}
          className="qa-btn"
          src="https://cdns.iconmonstr.com/wp-content/assets/preview/2012/240/iconmonstr-triangle-1.png"
        ></img>
        <span className="vote-count-span">{this.state.voteCount}
        </span>
        <img
          onClick={() => this.downCount(this.state.voteCount)}
          className="btn btn-default btn-sm"
          src="https://image.freepik.com/free-icon/triangle-down_318-10786.jpg"
        ></img>
      </div>
    );
  }
}


