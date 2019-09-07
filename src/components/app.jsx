import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Input from './presentational/Input.jsx';
import QA from './presentational/qa.jsx';
import QavCont from './container/qa-vote-cont.jsx';
import axios from 'axios';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 66,
      qaSearchBar: '',
      qArr: [
        {'Qstn': 'Does they feel comfy?', 'Ans': 'Yessum', 'Votes': 4, 'Author': 'Jim', 'Date': 'October 5, 2016' },
        {'Qstn': 'Does they feel just right?', 'Ans': 'Yarp', 'Votes': 5, 'Author': 'Darnell', 'Date': 'October 8, 2016' },
        {'Qstn': 'Does they taste like real eggs?', 'Ans': 'Yes, they most certainly do!', 'Votes': 6, 'Author': 'Bob', 'Date': 'October 23, 2016' },
        {'Qstn': 'Does they feel just right?', 'Ans': 'Yarp', 'Votes': 5, 'Author': 'Darnell', 'Date': 'October 8, 2016' }
      ],
      cappedQArr: [
        {'Qstn': 'Does they feel comfy?', 'Ans': 'Yessum', 'Votes': 4, 'Author': 'Jim', 'Date': 'October 5, 2016' },
        {'Qstn': 'Does they feel just right?', 'Ans': 'Yarp', 'Votes': 5, 'Author': 'Darnell', 'Date': 'October 8, 2016' },
        {'Qstn': 'Does they taste like real eggs?', 'Ans': 'Yes, they most certainly do!', 'Votes': 6, 'Author': 'Bob', 'Date': 'October 23, 2016' },
        {'Qstn': 'Does they feel just right?', 'Ans': 'Yarp', 'Votes': 5, 'Author': 'Darnell', 'Date': 'October 8, 2016' }
      ],
      dns: 'http://18.223.28.104'
      // 'http://localhost:3000' swap for local testing
    };
    this.handleChange = this.handleChange.bind(this);
  }

  getItem(id) {
    axios.get(`${this.state.dns}/item`, {
      params: {
        id: id
      }
    })
      .then(({ data }) => {
        console.log('successful axios GET req getItem');
        this.setState({
          qArr: data.QA,
          cappedQArr: data.QA.slice(0, 4)
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  componentDidMount() {
    this.getItem(this.state.id);
    window.addEventListener('clickedProduct', event => {
      const product = event.detail;
      if (product) {
        this.setState({id: product}, () => {
          this.getItem(this.state.id);
        });
      }
    });
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }


  render() {
    return (
      <div id="QA-comp-cont" className="cont">
        <h2 id="qa-title" className="a-color-base">Customer questions & answers</h2>
        <Input
          text=""
          label="qa_search"
          type="text"
          id="qaSearchBar"
          value=""
          handleChange={this.handleChange}
        />
        {/* <Votes /> */}
        <div className="cont" id="qa-vote-table">
          {
            this.state.cappedQArr.map(qa => (
              <QavCont
                qaItem={qa} />
            ))
          }
        </div>
      </div>
    );
  }


}

