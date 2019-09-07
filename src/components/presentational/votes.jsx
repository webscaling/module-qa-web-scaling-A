import React, { Component } from 'react';

export default class Vote extends Component {
  constructor(props) {
    super(props);

    this.state = {
      voteCount: this.props.votes,
      voted: false,
      upVoteSrc: 'https://shazamazon.s3.us-east-2.amazonaws.com/QA-vote-icons/triangle-vote.jpg',
      downVoteSrc: 'https://shazamazon.s3.us-east-2.amazonaws.com/QA-vote-icons/triangle-vote-down.jpg'
    };
  }

  // toggleHover() {
  //   this.setState({hover: !this.state.hover});
  // }
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
            onMouseEnter={() => this.setState({ upVoteSrc: 'https://hr43jbz.s3.us-east-2.amazonaws.com/triangle-vote-burnt.jpg' })}
            onMouseLeave={() => this.setState({ upVoteSrc: 'https://shazamazon.s3.us-east-2.amazonaws.com/QA-vote-icons/triangle-vote.jpg' })}
            src={this.state.upVoteSrc}
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
            className="vote-btn"
            onMouseEnter={() => this.setState({ downVoteSrc: 'https://hr43jbz.s3.us-east-2.amazonaws.com/triangle-vote-down-burnt.jpg' })}
            onMouseLeave={() => this.setState({ downVoteSrc: 'https://shazamazon.s3.us-east-2.amazonaws.com/QA-vote-icons/triangle-vote-down.jpg' })}
            src={this.state.downVoteSrc}
          ></img>
        </li>
      </ul>
    );
  }
}


