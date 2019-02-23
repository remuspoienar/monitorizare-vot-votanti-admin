import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import {
  ResponsiveContext,
  Box,
  Menu,
  Grommet,
  RoutedButton,
  Layer,
  Button,
  Text
} from "grommet";
import { Menu as MenuIcon, FormClose, Down, UserSettings } from "grommet-icons";
import { withRouter } from "react-router";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import AppHeader from "../components/AppHeader";
import Incidents from "./Incidents";
import Microcopy from "./Microcopy";
import Reports from "./Reports";
import Settings from "./Settings";
import appLogo from "../assets/logo.svg";

import { logout } from "../redux/actions/authActions";

const customTheme = {
  global: {
    font: {
      family: "Arial"
    }
  },
  button: {
    border: {
      radius: undefined,
      color: "black"
    },
    padding: {
      vertical: "12px",
      horizontal: "24px"
    },
    primary: {
      color: "#2196f3"
    },
    extend: props => {
      let extraStyles = "";
      if (props.primary) {
        extraStyles = `
          text-transform: uppercase;
        `;
      }
      return `
        color: white;
        font-size: 12px;
        font-weight: bold;

        ${extraStyles}
      `;
    }
  }
};

export class Home extends PureComponent {
  state = { showLayer: false };

  static propTypes = {
    authenticated: PropTypes.bool.isRequired
  };

  dispatchLogout = () => this.props.dispatch(logout());

  toggleLayer = () =>
    this.setState(prevState => ({ showLayer: !prevState.showLayer }));

  render() {
    const { showLayer } = this.state;
    const { pathname } = this.props.location;

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
                  justify="start"
                  align="center"
                  color="brand"
                  flex
                  gap="medium"
                >
                  <RoutedButton
                    active={pathname.includes("incidents")}
                    label="Sesizari"
                    path="/incidents"
                  />

                  <RoutedButton
                    active={pathname.includes("reports")}
                    label="Statistici"
                    path="/reports"
                  />

                  <RoutedButton
                    active={pathname.includes("microcopy")}
                    label="Microcopy"
                    path="/microcopy"
                  />

                  <Box direction="row" flex justify="end">
                    <Menu
                      icon={<Down />}
                      label={
                        <Text color="brand">
                          <UserSettings />
                          Adrian Popescu
                        </Text>
                      }
                      items={[
                        {
                          label: "Setari cont",
                          onClick: () => this.props.history.push("/settings")
                        },
                        { label: "Log out", onClick: this.dispatchLogout }
                      ]}
                    />
                  </Box>
                </Box>
              ) : (
                <Button icon={<MenuIcon />} onClick={this.toggleLayer} />
              )}
            </AppHeader>

            <Box direction="row" flex overflow={{ horizontal: "hidden" }}>
              <Box flex align="center" justify="center">
                <Grommet full theme={customTheme}>
                  <Switch>
                    {!this.props.authenticated && <Redirect to="/auth" />}
                    <Route path="/incidents" component={Incidents} />
                    <Route path="/reports" component={Reports} />
                    <Route path="/settings" component={Settings} />
                    <Route path="/microcopy" component={Microcopy} />

                    <Redirect to="/incidents" />
                  </Switch>
                </Grommet>
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
                    onClick={this.toggleLayer}
                  >
                    <RoutedButton label="Sesizari" path="/incidents" />
                    <RoutedButton label="Statistici" path="/reports" />
                    <RoutedButton label="Microcopy" path="/microcopy" />
                    <br />
                    <Text color="brand">Adrian Popescu</Text>
                    <RoutedButton label="Setari Cont" path="/settings" />
                    <Button label="Log out" onClick={this.dispatchLogout} />
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
export default withRouter(connect(mapStateToProps)(Home));
