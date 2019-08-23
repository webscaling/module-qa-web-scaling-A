import React, { Component } from "react";
import ReactDOM from "react-dom";
import Input from "./presentational/Input.jsx";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      itemID: "",
      seo_title: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  render() {
    return (
      <div id="search">
        <h2>Yarpins and Answers</h2>
        <form id="article-form">
          {/* <Input
            text="SEO title"
            label="seo_title"
            type="text"
            id="seo_title"
            value={seo_title}
            handleChange={this.handleChange}
          /> */}
        </form>
      </div>
    );
  }


}

const wrapper = document.getElementById("create-article-form");
wrapper ? ReactDOM.render(<App />, wrapper) : false;