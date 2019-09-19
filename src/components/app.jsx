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
      id: 1000000,
      qaSearchBar: '',
      qArr: [],
      cappedQArr: [],
      // remQ: (this.state.qArr - this.state.cappedQArr),
      dns: 'http://localhost:3000'
      // 'http://localhost:3000'  'http://18.223.28.104' swap for local testing
    };
    this.handleChange = this.handleChange.bind(this);
  }

  getItem(id) {
    //!MONGO
    // axios.get(`${this.state.dns}/item`, {
    //   params: {
    //     id: id
    //   }
    // })
    //   .then(({ data }) => {
    //      console.log('successful axios GET req getItem' + data);
    //     this.setState({
    //       qArr: data.QA,
    //       cappedQArr: data.QA.slice(0, 4)
    //     });
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });

    //!PostgreSQL
    axios.get(`${this.state.dns}/itemPSQL`, {
      params: {
        id: id
      }
    })
      .then(({ data }) => {
        console.log('successful axios GET req getItem' + data);
        this.setState({
          qArr: data,
          cappedQArr: data.slice(0, 4)
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
                qaItem={qa}
                pID={this.state.id}
              />
            ))
          }
        </div>
      </div>
    );
  }
}