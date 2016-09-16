import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { inBreathAction } from '../actions/index';
import { outBreathAction } from '../actions/index';
import { bindActionCreators } from 'redux';
import { Link } from "react-router";
// import { storeUserForm } from '../actions/index';

class userForm extends Component {
  constructor(){
    super()
    this.state = {term: '', term2: ''}

    this.sendData = this.sendData.bind(this);
    this.checkAppState = this.checkAppState.bind(this);
  }

  onFormSubmit(event){
    event.preventDefault();
  }
  sendData() {
    console.log("yes");
    this.props.inBreathAction(this.state.term);
    this.props.outBreathAction(this.state.term2);

    // this.props.
  }
  checkAppState(){
    console.log(this.props.breath);
    console.log(this.props.outBreath)
  }

  // this.props.breathAction(this.state.term)
  render(){
    // const { fields: { inBreath, outBreath}, handleSubmit } = this.props; // redux-form call to inject the props. Call it on submit
    // const InBreath = this.props.fields.InBreath;
    // const outBreath = this.props.fields.outBreath;

    return (
      // <form onSubmit={handleSubmit(this.props.storeUserForm)}>
      <form onSubmit={this.onFormSubmit}>
      <h4
      // onClick={() => this.props.breathAction(this.state.term)}
      >Your breaths in seconds...</h4>

      <div className="form-group">
      <label>In Breath</label>
      <input
          type="input"
          className="form-control"
          onChange={(event) => this.setState({term: event.target.value})}
          id="secondsInput"
          placeholder="Enter seconds"
          // {...inBreath}
          />
        </div>

        <div className="form-group">
        <label onClick={this.checkAppState}>Out Breath</label>
        <input
            type="input"
            className="form-control"
            onChange={(event) => this.setState({term2: event.target.value})}
            id="secondsInput"
            placeholder="Enter seconds"
            // {...outBreath}
            />
          </div>

          <Link to="/app" type="submit" onClick={this.sendData} className="btn btn-primary">Meditate</Link>
      </form>
      );
  }
}

// with connect 1st argument is mapStateToProps and 2nd is mapDispatchToProps
// with redux form 1st argument is config 2nd argument is mapStateToProps and 3rd is mapDispatchToProps
// here we are not mapStateToProps so that is null. Then we pass in storeUserForm as the Dispatch
// export default reduxForm({
//   form: 'PostsNewForm',
//   fields: ['inBreath','outBreath']
// }, null, { storeUserForm })(userForm);

function mapStateToProps(state) {
  return {
    breath: state.breath,
    outBreath: state.outBreath
  };
}

function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called, the result should be passed
  // to all of our reducers
  return bindActionCreators({ inBreathAction: inBreathAction, outBreathAction: outBreathAction }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(userForm);
