import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Input from './presentational/Input.jsx';
import QA from './presentational/qa.jsx';
import QavCont from './container/qa-vote-cont.jsx';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // itemID: "",
      qaSearchBar: '',
      qaData: [
        {'q': 'Does they feel comfy?', 'a': 'Yessum', 'v': 4, 'auth': 'Jim', 'd': 'October 5, 2016' },
        {'q': 'Does they feel just right?', 'a': 'Yarp', 'v': 5, 'auth': 'Darnell', 'd': 'October 8, 2016' },
        {'q': 'Does they taste like real eggs?', 'a': 'Yes, they most certainly do!', 'v': 6, 'auth': 'Bob', 'd': 'October 23, 2016' }
      ]
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  render() {
    return (
      <div id="QA-comp-cont" className="cont">
        <h2 className="a-color-base">Customer questions & answers</h2>
        <Input
          text=""
          label="qa_search"
          type="text"
          id="qaSearchBar"
          value=""
          handleChange={this.handleChange}
        />
        {/* <Votes /> */}
        <div className="cont" id="QA-vote-table">
          <QavCont qaItem={this.state.qaData[0]}/>
        </div>
      </div>
    );
  }


}

