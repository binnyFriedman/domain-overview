import React, { Component } from "react";
import { connect } from "react-redux";
import getOverview from "../actions/domainActions";

class DomainOverview extends Component {
  render() {
    return <div></div>;
  }
}
function mapStateToProps(state) {
  domain: state.domain;
}

export default connect(
  mapStateToProps,
  { domain }
)(DomainOverview);
