import React, { Component } from 'react';
import { connect } from 'react-redux' ;
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class test extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <div
        onClick={() => this.props.selectBook(book)}
        key={book.title}>
        {book.title}
        </div>
      );
    });





}

render() {
  return (
    <div>{this.renderList()}</div>
  )
}
}

function mapStateToProps(state){

    return {
      books: state.books
    };
}

// anything returned from this function will end up as props
// on the container
function mapDispatchToProps(dispatch) {
  // whenever selectBook is called, the result should be passed
  // to all of our reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// promote container.js from a component to a container. It needs to know
// about this new dispatch method, selectBook. Make it available
// as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(test);
