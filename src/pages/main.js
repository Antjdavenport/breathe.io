import React from "react";
import { Link } from "react-router";
export default class Main extends React.Component {
  render() {
    return (
      <div>
        hello
        {this.props.children}
        <Link to="initial">maiasdasdn</Link>
      </div>
    );
  }
}
