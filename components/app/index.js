import React, { Component } from "react";
import { connect } from "react-redux";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import Papa from "papaparse";
import classNames from "classnames";
import { FocusStyleManager } from "@blueprintjs/core";
import keydown from "react-keydown";
import Router from "next/router";

FocusStyleManager.onlyShowFocusOnTabs();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    // track ga here
    Router.events.on("routeChangeComplete", (url) => {
      console.log("ROUTE CHANGE: ", url);
    });
  }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <div
        className={classNames({
          "app-container": true,
        })}
      >
        {this.props.children}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    app: state.app,
    budgets: state.budgets,
  };
}

export default connect(mapStateToProps, {})(App);
