import React, { Component } from "react";
import { connect } from "react-redux";
import Link from "next/link";
import * as _ from "lodash";
import classNames from "classnames";
import { withRouter } from "next/router";
import commaNumber from "comma-number";
import moment from "moment";
import { v4 as uuidv4 } from "uuid";

class CounterPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static getInitialProps({ query }) {
    return { query };
  }

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidUpdate() {}

  render() {
    return (
      <div
        className={classNames({
          "app-content-page": true,
          "budget-page": true,
        })}
      >
        Counter
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter,
  };
}

export default connect(mapStateToProps, {})(withRouter(CounterPage));
