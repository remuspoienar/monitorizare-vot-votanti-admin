import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import Auth from "./containers/Auth";
import Home from "./containers/Home";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/auth" component={Auth} />
        <Route path="/" component={Home} />
      </Switch>
    );
  }
}

export default App;
