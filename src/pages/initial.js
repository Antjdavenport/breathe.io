import React, { Component } from "react";
import { Link } from "react-router";
import { connect } from 'react-redux';
import Container from '../containers/container';
import BookDetail from '../containers/book-detail';


export default class Initial extends Component  {
  constructor(){
    super()
    this.state = {
      term : "",
      title: "As"
    }
  }

  renderList() {
    return (
    <Container / >
    );

  }


  render() {
    return (
      <div>
      <p>Your in-breaths in seconds...</p>
      <BookDetail / >
      {this.renderList()}
      <input
      value={this.state.term}
      onChange={event => this.onInputEnter(event.target.value)}></input>
      <br/>
          <Link to="/app">Start</Link>
      </div>
    );
  }
  onInputEnter(term){
    this.setState({term});

  }
}

function mapStateToProps(state) {
  // whatever gets returned from here will show up as props inside initial.js
  return {
    inBreath: state.inBreath
  };
}

// export default connect(mapStateToProps)(Initial);
