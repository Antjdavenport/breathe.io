import React, { Component } from "react";
import { Link } from "react-router";
import { connect } from 'react-redux';
import Container from '../containers/container';
import BookDetail from '../containers/book-detail';
import UserForm from '../components/userForm';
import Logo from '../components/logo';

export default class Initial extends Component  {
  constructor(){
    super()
    this.state = {
      term : "",
    }

  }


  render() {
    return (
      <div className="container">
      <Logo />
      <UserForm />
      </div>
    );
  }

}

function mapStateToProps(state) {
  // whatever gets returned from here will show up as props inside initial.js
  return {
    inBreath: state.inBreath
  };
}

// export default connect(mapStateToProps)(Initial);
