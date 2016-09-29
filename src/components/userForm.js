import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { inBreathAction } from '../actions/index';
import { outBreathAction } from '../actions/index';
import { colorInputs } from '../actions/index';
import {isChecked} from '../actions/index';
import { bindActionCreators } from 'redux';
import { Link } from "react-router";
// import { storeUserForm } from '../actions/index';

class userForm extends Component {
  constructor(){
    super()
    this.state = {
        term: '',
        term2: '',
        isChecked: 'true',
        colorChecked: 'false'}

    this.sendData = this.sendData.bind(this);
    this.checkAppState = this.checkAppState.bind(this);
    this.customColors = this.customColors.bind(this);
  }

  onFormSubmit(event){
    event.preventDefault();
  }
  sendData() {

    var colorInputArray = [
      document.getElementsByClassName("colorInput")[0].value,
      document.getElementsByClassName("colorInput")[1].value
    ]

    var checkBox = {bgON: this.state.isChecked,
                    customON: this.state.colorChecked}

    this.props.inBreathAction(this.state.term);
    this.props.outBreathAction(this.state.term2);
    this.props.isChecked(checkBox);
    this.props.colorInputs(colorInputArray);


  }
  checkAppState(){
    console.log(this.props.breath);
    console.log(this.props.outBreath)
  }



  colorPicker(){
    var colorInputArray = [
      document.getElementsByClassName("colorInput")[0].value,
      document.getElementsByClassName("colorInput")[1].value
    ]
    console.log(colorInputArray)
  }

  customColors(){


    var customColors = document.getElementsByClassName("customColors");
    var isChecked = document.getElementById("colorCheck").checked;

    if (isChecked === true){
      this.setState({colorChecked: isChecked})
      $(customColors).css('display', 'inline');
      TweenMax.to(customColors, 0.5, {css:{opacity: 1}, ease: Power2.easeInOut});
    }
    else {
      this.setState({colorChecked: isChecked});
      $(customColors).animate({
      opacity: 0,
      }, 300, function() {
        $(customColors).css('display', 'none');
        });
    };

    }



  // this.props.breathAction(this.state.term)
  render(){
    // const { fields: { inBreath, outBreath}, handleSubmit } = this.props; // redux-form call to inject the props. Call it on submit
    // const InBreath = this.props.fields.InBreath;
    // const outBreath = this.props.fields.outBreath;

    return (
<div className="form-content">
      <form id="contact_form" className="userForm" onSubmit={this.onFormSubmit}>
<div className="formSection">
      <div className="form-group">
      <label>In Breath</label>
      <input
          type="input"
          name="breath"
          className="form-control"
          onChange={(event) => this.setState({term: event.target.value})}
          id="secondsInput"
          placeholder="Enter seconds"
          // {...inBreath}
          />
          <div className="help-block with-errors"></div>
        </div>

        <div className="form-group">
        <label onClick={this.checkAppState}>Out Breath</label>
        <input
            type="input"
            name="breath"
            className="form-control"
            onChange={(event) => this.setState({term2: event.target.value})}
            id="secondsInput"
            placeholder="Enter seconds"
            // {...outBreath}
            />
          </div>
  </div>

    <div className="form-group">
          <div className="form-group">
          <h4>Changing background color?</h4>
          <label className="switch">
            <input
                id="bgCheck"
                type="checkbox"
                defaultChecked onChange={() => this.setState({isChecked: document.getElementById("bgCheck").checked})}>
            </input>
            <div className="slider round"></div>
          </label>
          </div>



          <div className="form-group">
          <h4>Custom Color Scheme?</h4>
          <label className="switch">
            <input
                id="colorCheck"
                type="checkbox"
                onChange={this.customColors}>
            </input>
            <div className="slider round"></div>
          </label>
          </div>


</div>
  </form>
  <div className="customColors">
  <h4 onClick={this.colorPicker}>Choose your color scheme by clicking on the inputs below</h4>
      <div className="colorInputs">
      <span>
        <input className="jscolor colorInput" />
        <input className="jscolor colorInput" />
        <input className="jscolor colorInput" />
        </span>
        <span>
        <input className="jscolor colorInput" />
        <input className="jscolor colorInput" />
        <input className="jscolor colorInput" />
        </span>
      </div>
    </div>
          <Link to="/app" onClick={this.sendData} className="btn btn-secondary">Breathe</Link>
          </div>

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
    outBreath: state.outBreath,
  };
}

function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called, the result should be passed
  // to all of our reducers
  return bindActionCreators({ inBreathAction: inBreathAction, outBreathAction: outBreathAction, isChecked: isChecked, colorInputs: colorInputs }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(userForm);
