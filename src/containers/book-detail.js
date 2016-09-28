import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render() {
// when the app first runs we are returning as null inside reducer_active_book.
// so this.props.book is null. Cant get title. So if that is the case we will run
// this below that returns a different message
    if (!this.props.book) {
      return <div>Select a book to get started.</div>
    }
    return (
      <div>
        <h3>Details for:</h3>
        <div>{this.props.book.title}</div>
        <div>pages: {this.props.book.pages}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    book: state.activeBook
  };
}

export default connect(mapStateToProps)(BookDetail);
