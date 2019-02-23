import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import { ResponsiveContext, Box, RoutedButton, Layer, Button } from "grommet";
import { Menu, FormClose } from "grommet-icons";
import { withRouter } from "react-router";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import AppHeader from "../components/AppHeader";
import Login from "../components/Auth/Login";
import RecoverPassword from "../components/Auth/RecoverPassword";
import appLogo from "../assets/logo.svg";

import { loginSuccess } from "../redux/actions/authActions";

export class Auth extends PureComponent {
  state = { showLayer: false };

  static propTypes = {
    authenticated: PropTypes.bool.isRequired
  };

  componentWillMount() {
    if (localStorage.getItem("token")) {
      this.props.dispatch(loginSuccess());
    }
  }

  toggleLayer = () =>
    this.setState(prevState => ({ showLayer: !prevState.showLayer }));

  render() {
    const {
      match,
      location: { pathname }
    } = this.props;
    const { showLayer } = this.state;

    return (
      <ResponsiveContext.Consumer>
        {size => (
          <Box fill>
            <AppHeader>
              <Box width="small" direction="row" justify="center" gap="medium">
                <img src={appLogo} alt="Monitorizare Vot logo" />
              </Box>

              {size !== "small" ? (
                <Box
                  width="medium"
                  direction="row"
                  justify="end"
                  space="between"
                  color="brand"
                  flex
                  gap="medium"
                >
                  <RoutedButton
                    label="Log in"
                    path={`${match.path}/login`}
                    active={pathname.includes("login")}
                  />
                  <RoutedButton
                    label="Recover Password"
                    path={`${match.path}/recover`}
                    active={pathname.includes("recover")}
                  />
                </Box>
              ) : (
                <Button icon={<Menu />} onClick={this.toggleLayer} />
              )}
            </AppHeader>
            <Box direction="row" flex overflow={{ horizontal: "hidden" }}>
              <Box flex align="center" justify="center">
                <Switch>
                  {this.props.authenticated && <Redirect to="/" />}
                  <Route path={`${match.path}/login`} component={Login} />
                  <Route
                    path={`${match.path}/recover`}
                    component={RecoverPassword}
                  />
                  <Redirect
                    exact
                    from={match.path}
                    to={`${match.path}/login`}
                  />
                </Switch>
              </Box>

              {showLayer && (
                <Layer>
                  <Box
                    tag="header"
                    justify="center"
                    align="center"
                    direction="row"
                    background="appYellow"
                    pad="large"
                    elevation="medium"
                  >
                    <Button
                      primary
                      color="brand"
                      icon={<FormClose />}
                      label="Close"
                      onClick={this.toggleLayer}
                    />
                  </Box>
                  <Box
                    fill
                    align="center"
                    justify="center"
                    gap="medium"
                    color="brand"
                  >
                    <RoutedButton
                      onClick={this.toggleLayer}
                      label="Log in"
                      path={`${match.path}/login`}
                    />
                    <RoutedButton
                      onClick={this.toggleLayer}
                      label="Recover Password"
                      path={`${match.path}/recover`}
                    />
                  </Box>
                </Layer>
              )}
            </Box>
          </Box>
        )}
      </ResponsiveContext.Consumer>
    );
  }
}

const mapStateToProps = state => ({
  authenticated: state.auth.authenticated
});

export default withRouter(connect(mapStateToProps)(Auth));
