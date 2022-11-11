import React, { Component } from "react";
import { connect } from "react-redux";
import Link from "next/link";
import * as _ from "lodash";
import classNames from "classnames";
import { withRouter } from "next/router";
import commaNumber from "comma-number";
import moment from "moment";
import { v4 as uuidv4 } from "uuid";

import {
  increment,
  decrement,
  reset,
} from "../../store/actions/counterActions";

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
        Counter value: {this.props.counter.count}
        <button onClick={() => this.props.increment()}>+</button>
        <button onClick={() => this.props.decrement()}>-</button>
        <button onClick={() => this.props.reset()}>Reset</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter,
  };
}

export default connect(mapStateToProps, {
  increment,
  decrement,
  reset,
})(withRouter(CounterPage));
